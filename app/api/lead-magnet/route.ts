import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendLeadMagnetEmail, sendInternalNotification, LeadData } from '@/lib/email';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Input sanitization helper
function sanitizeString(input: unknown, maxLength: number = 500): string {
  if (typeof input !== 'string') return '';
  return input.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimitResult = checkRateLimit(clientIP, RATE_LIMITS.leadMagnet);

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

    // Sanitize inputs
    const nome = sanitizeString(body.nome, 100);
    const email = sanitizeString(body.email, 254);
    const type = sanitizeString(body.type, 20);
    const title = sanitizeString(body.title, 200);
    const roiData = body.roiData; // Validated later if needed

    // Validate required fields
    if (!nome || !email || !type) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validate type
    const validTypes = ['pdf', 'checklist', 'calculator'] as const;
    type ValidType = typeof validTypes[number];

    if (!validTypes.includes(type as ValidType)) {
      return NextResponse.json(
        { error: 'Tipo de material inválido' },
        { status: 400 }
      );
    }

    const leadData: LeadData = {
      nome,
      email,
      type: type as ValidType,
      title: title || getDefaultTitle(type),
      roiData,
    };

    // 1. Save lead to Supabase (if configured)
    if (supabaseUrl && supabaseServiceKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        
        await supabase
          .from('leads')
          .insert([
            {
              name: nome,
              email,
              company: extractCompanyFromEmail(email),
              service: `lead_magnet_${type}`,
              message: title || getDefaultTitle(type),
              status: 'new',
              source: `lead_magnet_${type}`,
              metadata: roiData ? JSON.stringify(roiData) : null,
            },
          ]);
      } catch (dbError) {
        console.error('Database error (non-blocking):', dbError);
        // Continue even if DB fails - email is priority
      }
    }

    // 2. Send email to user
    const emailResult = await sendLeadMagnetEmail(leadData);
    
    if (!emailResult.success) {
      console.error('Email send failed:', emailResult.error);
      return NextResponse.json(
        { error: 'Erro ao enviar email. Por favor, tente novamente.' },
        { status: 500 }
      );
    }

    // 3. Send internal notification (non-blocking)
    sendInternalNotification(leadData).catch(console.error);

    return NextResponse.json({
      success: true,
      message: 'Material enviado com sucesso!',
    });

  } catch (error) {
    console.error('Lead magnet API error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

function getDefaultTitle(type: string): string {
  const titles: Record<string, string> = {
    pdf: 'Guia: IA Empresarial sem Riscos',
    checklist: 'Checklist: Qualidade de Software',
    calculator: 'Calculadora de ROI em Dados',
  };
  return titles[type] || 'Material Dexi Digital';
}

function extractCompanyFromEmail(email: string): string | null {
  const domain = email.split('@')[1];
  if (!domain) return null;
  
  // Skip common personal email domains
  const personalDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'uol.com.br', 'terra.com.br'];
  if (personalDomains.includes(domain.toLowerCase())) {
    return null;
  }
  
  // Return domain as company name (without extension)
  return domain.split('.')[0];
}

