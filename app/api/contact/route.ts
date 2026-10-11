import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';
import { sendOpenAIAdsConversion } from '@/lib/openai-ads';
import {
  validarLeadAderencia,
  montarRegistroLead,
  cabecalhosCors,
  escaparHtml,
  rotulo,
  dominioDaOrigem,
  SEGMENTOS,
  TAMANHOS_OPERACAO,
  DESAFIOS,
  type LeadAderencia,
} from '@/lib/lead-aderencia';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const isDev = process.env.NODE_ENV !== 'production';

// Lazy initialization of Resend client
let resendInstance: Resend | null = null;

function getResend(): Resend | null {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY not configured - email notifications disabled');
      return null;
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

const FROM_EMAIL = process.env.EMAIL_FROM || 'Dexi Digital <contato@dexidigital.com.br>';
const INTERNAL_EMAIL = process.env.INTERNAL_NOTIFICATION_EMAIL || 'contato@dexidigital.com.br';

// Preflight do formulário de fykos.com.br/acesso, que envia de outro domínio.
export function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: cabecalhosCors(request.headers.get('origin'), isDev),
  });
}

export async function POST(request: NextRequest) {
  const cors = cabecalhosCors(request.headers.get('origin'), isDev);
  const responder = (corpo: object, status: number, extra: Record<string, string> = {}) =>
    NextResponse.json(corpo, { status, headers: { ...cors, ...extra } });

  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimitResult = checkRateLimit(clientIP, RATE_LIMITS.contactForm);

    if (!rateLimitResult.success) {
      return responder({ error: 'Muitas requisições. Por favor, aguarde alguns minutos.' }, 429, {
        'Retry-After': String(rateLimitResult.resetIn),
        'X-RateLimit-Remaining': '0',
      });
    }

    let corpo: unknown;
    try {
      corpo = await request.json();
    } catch {
      return responder({ error: 'Requisição inválida.' }, 400);
    }

    const resultado = validarLeadAderencia(corpo);
    if (!resultado.ok) {
      return responder({ error: resultado.erro }, 400);
    }
    const { lead } = resultado;

    // Create Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { error } = await supabase.from('leads').insert([montarRegistroLead(lead)]);

    if (error) {
      console.error('Supabase error:', error);
      return responder({ error: 'Erro ao salvar contato' }, 500);
    }

    // Send email notification (non-blocking)
    sendContactNotification(lead).catch(console.error);

    // Server-side conversion tracking (non-blocking)
    if (lead.eventId) {
      sendOpenAIAdsConversion({
        eventId: lead.eventId,
        sourceUrl: request.headers.get('referer') || `${process.env.NEXT_PUBLIC_SITE_URL}/contato`,
      }).catch(console.error);
    }

    return responder({ success: true }, 200);
  } catch (error) {
    console.error('Contact form error:', error);
    return responder({ error: 'Erro interno do servidor' }, 500);
  }
}

async function sendContactNotification(lead: LeadAderencia): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const origem = dominioDaOrigem(lead.origem);
  const linhas: [string, string][] = [
    ['Nome', lead.nome],
    ['Cargo', lead.cargo],
    ['Empresa', lead.empresa],
    ['E-mail', lead.email],
    ['WhatsApp', lead.whatsapp || 'Não informado'],
    ['Segmento', rotulo(SEGMENTOS, lead.segmento)],
    ['Tamanho da operação', rotulo(TAMANHOS_OPERACAO, lead.tamanhoOperacao)],
    ['Desafio mais relevante', rotulo(DESAFIOS, lead.desafio)],
    ['CRM', lead.crm || 'Não informado'],
    ['Origem', `${origem} · CTA ${lead.cta}`],
  ];
  const tabela = linhas
    .map(
      ([campo, valor]) => `
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 35%;">${campo}:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escaparHtml(valor)}</td>
      </tr>`,
    )
    .join('');
  const telefone = lead.whatsapp.replace(/\D/g, '');

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: INTERNAL_EMAIL,
      subject: `Conversa de aderência: ${lead.empresa} (${origem})`,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family: 'Segoe UI', sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 25px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 20px;">Nova solicitação de conversa de aderência</h1>
  </div>

  <div style="background: #fff; padding: 25px; border: 1px solid #e5e7eb; border-top: none;">
    <table style="width: 100%; border-collapse: collapse;">${tabela}
    </table>

    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;">

    <div>
      <a href="mailto:${escaparHtml(lead.email)}" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">Responder por e-mail</a>
      ${telefone ? `<a href="https://api.whatsapp.com/send?phone=${telefone}" style="display: inline-block; background: #25D366; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">WhatsApp</a>` : ''}
    </div>
  </div>

  <div style="background: #f8fafc; padding: 15px; border-radius: 0 0 12px 12px; text-align: center; font-size: 12px; color: #6b7280;">
    <p style="margin: 0;">Dexi Digital - Sistema de Leads</p>
  </div>
</body>
</html>
      `,
    });
  } catch (error) {
    console.error('Failed to send contact notification:', error);
  }
}
