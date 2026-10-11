import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';
import { sendNewsletterNotification } from '@/lib/email';
import {
  validarInscricaoNewsletter,
  montarRegistroNewsletter,
  SOURCE_NEWSLETTER,
} from '@/lib/newsletter';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: NextRequest) {
  try {
    const rateLimitResult = checkRateLimit(getClientIP(request), RATE_LIMITS.newsletter);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Muitas requisições. Por favor, aguarde alguns minutos.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimitResult.resetIn),
            'X-RateLimit-Remaining': '0',
          },
        },
      );
    }

    let corpo: unknown;
    try {
      corpo = await request.json();
    } catch {
      return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 });
    }

    const resultado = validarInscricaoNewsletter(corpo);
    if (!resultado.ok) {
      return NextResponse.json({ error: resultado.erro }, { status: 400 });
    }
    const { inscricao } = resultado;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Reinscrição do mesmo e-mail: responde sucesso sem duplicar a linha nem o aviso.
    const { data: existente, error: erroBusca } = await supabase
      .from('leads')
      .select('id')
      .eq('email', inscricao.email)
      .eq('source', SOURCE_NEWSLETTER)
      .limit(1);
    if (erroBusca) {
      console.error('Supabase error (newsletter lookup):', erroBusca);
      return NextResponse.json({ error: 'Não foi possível concluir a inscrição.' }, { status: 500 });
    }
    if (existente && existente.length > 0) {
      return NextResponse.json({ success: true });
    }

    const { error } = await supabase.from('leads').insert([montarRegistroNewsletter(inscricao)]);
    if (error) {
      console.error('Supabase error (newsletter insert):', error);
      return NextResponse.json({ error: 'Não foi possível concluir a inscrição.' }, { status: 500 });
    }

    sendNewsletterNotification(inscricao.email, inscricao.pagina).catch(console.error);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
