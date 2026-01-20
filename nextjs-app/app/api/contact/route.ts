import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

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

// Input validation helpers
function sanitizeString(input: string, maxLength: number = 500): string {
  return String(input).trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  // Allow empty or valid phone format
  if (!phone) return true;
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  return /^[\d\+]{8,15}$/.test(cleanPhone);
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimitResult = checkRateLimit(clientIP, RATE_LIMITS.contactForm);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Muitas requisições. Por favor, aguarde alguns minutos.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimitResult.resetIn),
            'X-RateLimit-Remaining': '0',
          }
        }
      );
    }

    const body = await request.json();

    // Sanitize and validate inputs
    const name = sanitizeString(body.name || '', 100);
    const email = sanitizeString(body.email || '', 254);
    const company = sanitizeString(body.company || '', 200);
    const phone = sanitizeString(body.phone || '', 20);
    const companySize = sanitizeString(body.companySize || '', 50);
    const sector = sanitizeString(body.sector || '', 100);
    const challenge = sanitizeString(body.challenge || '', 200);
    const urgency = sanitizeString(body.urgency || '', 50);
    const message = sanitizeString(body.message || '', 2000);

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validate phone format if provided
    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Telefone inválido' },
        { status: 400 }
      );
    }

    // Create Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert lead into database
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          company,
          phone: phone || null,
          service: challenge || null,
          message: `[Porte: ${companySize || 'N/A'}] [Setor: ${sector || 'N/A'}] [Urgência: ${urgency || 'N/A'}]\n\n${message || 'Sem mensagem adicional'}`,
          status: 'new',
          source: 'website_contact_form',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Erro ao salvar contato' },
        { status: 500 }
      );
    }

    // Send email notification (non-blocking)
    sendContactNotification({
      name, email, company, phone, companySize, sector, challenge, urgency, message
    }).catch(console.error);

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

interface ContactData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  companySize?: string;
  sector?: string;
  challenge?: string;
  urgency?: string;
  message?: string;
}

async function sendContactNotification(data: ContactData): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: INTERNAL_EMAIL,
      subject: `🎯 Novo Diagnóstico: ${data.company} - ${data.name}`,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family: 'Segoe UI', sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 25px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 20px;">🎯 Novo Pedido de Diagnóstico</h1>
  </div>

  <div style="background: #fff; padding: 25px; border: 1px solid #e5e7eb; border-top: none;">
    <h2 style="color: #1a1a2e; margin-top: 0; font-size: 18px;">Informações do Lead</h2>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 35%;">Nome:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Empresa:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.company}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Telefone:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.phone || 'Não informado'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Porte:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.companySize || 'Não informado'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Setor:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.sector || 'Não informado'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Desafio:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.challenge || 'Não informado'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Urgência:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.urgency || 'Não informado'}</td>
      </tr>
    </table>

    ${data.message ? `
    <h3 style="color: #1a1a2e; margin-top: 20px;">Mensagem:</h3>
    <p style="background: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.message}</p>
    ` : ''}

    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;">

    <div style="display: flex; gap: 10px;">
      <a href="mailto:${data.email}" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">Responder por Email</a>
      ${data.phone ? `<a href="https://api.whatsapp.com/send?phone=${data.phone.replace(/\D/g, '')}" style="display: inline-block; background: #25D366; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">WhatsApp</a>` : ''}
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

