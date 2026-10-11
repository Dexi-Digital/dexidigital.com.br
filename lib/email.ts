import { Resend } from 'resend';
import { escaparHtml } from '@/lib/lead-aderencia';

// Lazy initialization of Resend client (avoid build-time errors)
let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

const FROM_EMAIL = process.env.EMAIL_FROM || 'Dexi Digital <contato@dexidigital.com.br>';
const INTERNAL_EMAIL = process.env.INTERNAL_NOTIFICATION_EMAIL || 'contato@dexidigital.com.br';

export interface LeadData {
  nome: string;
  email: string;
  type: 'checklist' | 'calculator';
  title: string;
  // Calculator specific data
  roiData?: {
    economiaAnual: number;
    roi: number;
    paybackMeses: number;
    economiaHorasMensal: number;
    beneficioTotal: number;
    formData: Record<string, string>;
  };
}

// Email templates for each lead magnet type
const emailTemplates = {
  checklist: {
    subject: '✅ Seu Checklist: Qualidade de Software',
    getHtml: (nome: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 24px;">Dexi Digital</h1>
  </div>
  
  <div style="background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <h2 style="color: #1a1a2e; margin-top: 0;">Olá, ${nome}! 👋</h2>
    
    <p>Obrigado por baixar nosso <strong>Checklist de Qualidade de Software</strong>.</p>
    
    <p>Com mais de 50 itens de verificação, este checklist vai ajudar você a avaliar e melhorar a qualidade técnica do seu software.</p>
    
    <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #1a1a2e;">📥 Baixe seu material:</h3>
      <a href="https://dexidigital.com.br/downloads/checklist-qualidade.pdf" style="display: inline-block; background: #2563eb; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Acessar Checklist em PDF</a>
    </div>
    
    <p><strong>Categorias cobertas:</strong></p>
    <ul style="padding-left: 20px;">
      <li>🏗️ Arquitetura e Design</li>
      <li>📝 Qualidade de Código</li>
      <li>🔒 Segurança</li>
      <li>⚡ Performance</li>
      <li>🚀 DevOps e CI/CD</li>
    </ul>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <h3 style="color: #1a1a2e;">Próximo passo: conversa de aderência</h3>
    <p>Uma conversa para entender sua operação, os dados disponíveis e se existe uma oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira nesta etapa.</p>
    
    <a href="https://dexidigital.com.br/contato?cta=email-checklist" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Solicitar conversa de aderência →</a>
  </div>
  
  <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; font-size: 14px; color: #6b7280;">
    <p style="margin: 0;">Dexi Digital | Tecnologia para decisões comerciais de alto valor</p>
    <p style="margin: 10px 0 0;">São Paulo, SP | contato@dexidigital.com.br</p>
  </div>
</body>
</html>
    `,
  },

  calculator: {
    subject: '📊 Sua simulação de ROI',
    getHtml: (nome: string, roiData?: LeadData['roiData']) => {
      const formatCurrency = (value: number) =>
        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
      
      return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 24px;">Dexi Digital</h1>
  </div>
  
  <div style="background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <h2 style="color: #1a1a2e; margin-top: 0;">Olá, ${nome}! 👋</h2>
    
    <p>Aqui está a simulação de ROI com os dados que você informou. Os valores são estimativas calculadas a partir desses dados, não garantia de resultado.</p>
    
    ${roiData ? `
    <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #86efac;">
      <h3 style="margin-top: 0; color: #166534;">📈 Resumo do ROI</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0;"><strong>ROI Estimado:</strong></td><td style="text-align: right; color: #166534; font-size: 20px; font-weight: bold;">${roiData.roi}%</td></tr>
        <tr><td style="padding: 8px 0;"><strong>Economia Anual:</strong></td><td style="text-align: right;">${formatCurrency(roiData.economiaAnual)}</td></tr>
        <tr><td style="padding: 8px 0;"><strong>Payback:</strong></td><td style="text-align: right;">${roiData.paybackMeses} meses</td></tr>
        <tr><td style="padding: 8px 0;"><strong>Horas economizadas/mês:</strong></td><td style="text-align: right;">${roiData.economiaHorasMensal}h</td></tr>
        <tr style="border-top: 1px solid #86efac;"><td style="padding: 12px 0;"><strong>Benefício Total:</strong></td><td style="text-align: right; font-weight: bold;">${formatCurrency(roiData.beneficioTotal)}/ano</td></tr>
      </table>
    </div>
    ` : ''}
    
    <p>A simulação usa só os dados que você informou e as premissas fixas da calculadora. Para saber se esse potencial existe de fato na sua operação, o próximo passo é a conversa de aderência abaixo.</p>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <h3 style="color: #1a1a2e;">Quer entender se esses números se aplicam à sua operação?</h3>
    <p>Uma conversa para entender sua operação, os dados disponíveis e se existe uma oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira nesta etapa.</p>
    
    <a href="https://dexidigital.com.br/contato?cta=email-calculator" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Solicitar conversa de aderência →</a>
  </div>

  <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; font-size: 14px; color: #6b7280;">
    <p style="margin: 0;">Dexi Digital | Tecnologia para decisões comerciais de alto valor</p>
    <p style="margin: 10px 0 0;">São Paulo, SP | contato@dexidigital.com.br</p>
  </div>
</body>
</html>
      `;
    },
  },
};

// Send lead magnet email to user
export async function sendLeadMagnetEmail(data: LeadData): Promise<{ success: boolean; error?: string }> {
  try {
    const template = emailTemplates[data.type];

    const html = data.type === 'calculator'
      ? template.getHtml(data.nome, data.roiData)
      : template.getHtml(data.nome);

    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: template.subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: 'Erro ao enviar email' };
  }
}

// Send internal notification about new lead
export async function sendInternalNotification(data: LeadData): Promise<void> {
  try {
    const resend = getResend();
    const typeLabels = {
      checklist: 'Checklist Qualidade',
      calculator: 'Calculadora ROI',
    };

    await resend.emails.send({
      from: FROM_EMAIL,
      to: INTERNAL_EMAIL,
      subject: `🎯 Novo Lead: ${typeLabels[data.type]}`,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Novo lead capturado!</h2>

  <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 10px; font-weight: bold;">Nome:</td>
      <td style="padding: 10px;">${data.nome}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 10px; font-weight: bold;">Email:</td>
      <td style="padding: 10px;"><a href="mailto:${data.email}">${data.email}</a></td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 10px; font-weight: bold;">Material:</td>
      <td style="padding: 10px;">${typeLabels[data.type]}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 10px; font-weight: bold;">Data:</td>
      <td style="padding: 10px;">${new Date().toLocaleString('pt-BR')}</td>
    </tr>
  </table>

  ${data.roiData ? `
  <h3>Dados da Calculadora ROI:</h3>
  <ul>
    <li>ROI Estimado: ${data.roiData.roi}%</li>
    <li>Economia Anual: R$ ${data.roiData.economiaAnual.toLocaleString('pt-BR')}</li>
    <li>Payback: ${data.roiData.paybackMeses} meses</li>
    <li>Setor: ${data.roiData.formData.setor || 'Não informado'}</li>
    <li>Faturamento: R$ ${parseInt(data.roiData.formData.faturamentoAnual || '0').toLocaleString('pt-BR')}</li>
  </ul>
  ` : ''}

  <p style="margin-top: 20px;">
    <a href="https://supabase.com/dashboard" style="background: #1a1a2e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
      Ver no Dashboard
    </a>
  </p>
</body>
</html>
      `,
    });
  } catch (error) {
    console.error('Internal notification error:', error);
    // Don't throw - internal notification failure shouldn't affect user experience
  }
}


// Aviso interno de nova inscrição na newsletter do blog. O e-mail já chega
// validado (sem sinais de HTML) por lib/newsletter.ts; a página vem do cliente e é escapada.
export async function sendNewsletterNotification(email: string, pagina: string): Promise<void> {
  try {
    const resend = getResend();
    await resend.emails.send({
      from: FROM_EMAIL,
      to: INTERNAL_EMAIL,
      subject: `Nova inscrição na newsletter: ${email}`,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family: 'Segoe UI', sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1a1a2e;">Nova inscrição na newsletter do blog</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 10px; font-weight: bold; width: 30%;">E-mail:</td>
      <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 10px; font-weight: bold;">Página:</td>
      <td style="padding: 10px;">${escaparHtml(pagina || '/blog')}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 10px; font-weight: bold;">Data:</td>
      <td style="padding: 10px;">${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</td>
    </tr>
  </table>
  <p style="margin-top: 20px; font-size: 13px; color: #6b7280;">
    A inscrição também fica na tabela leads do Supabase, com source blog_newsletter.
  </p>
</body>
</html>
      `,
    });
  } catch (error) {
    console.error('Newsletter notification error:', error);
  }
}
