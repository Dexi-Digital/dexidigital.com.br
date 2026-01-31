import { Resend } from 'resend';

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
  type: 'pdf' | 'checklist' | 'calculator';
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
  pdf: {
    subject: '📚 Seu Guia: IA Empresarial sem Riscos',
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
    
    <p>Obrigado por baixar nosso guia <strong>"IA Empresarial sem Riscos"</strong>.</p>
    
    <p>Este guia contém 10 passos práticos para implementar IA com governança, segurança e ROI mensurável, baseado em projetos reais com grandes empresas.</p>
    
    <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #1a1a2e;">📥 Baixe seu material:</h3>
      <a href="https://dexidigital.com.br/downloads/guia-ia-empresarial.pdf" style="display: inline-block; background: #2563eb; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Acessar Guia em PDF</a>
    </div>
    
    <p><strong>O guia inclui:</strong></p>
    <ul style="padding-left: 20px;">
      <li>✅ Checklist de governança de IA</li>
      <li>✅ Framework de métricas de sucesso</li>
      <li>✅ Template de business case</li>
      <li>✅ Casos de uso validados em empresas reais</li>
    </ul>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <h3 style="color: #1a1a2e;">Próximo passo?</h3>
    <p>Agende um diagnóstico gratuito e descubra como aplicar IA na sua empresa com resultados em 90 dias.</p>
    
    <a href="https://dexidigital.com.br/contato" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Obter Diagnóstico em 24h →</a>
  </div>
  
  <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; font-size: 14px; color: #6b7280;">
    <p style="margin: 0;">Dexi Digital - Inteligência que Transforma</p>
    <p style="margin: 10px 0 0;">São Paulo, SP | contato@dexidigital.com.br</p>
  </div>
</body>
</html>
    `,
  },

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
    
    <h3 style="color: #1a1a2e;">Precisa de ajuda especializada?</h3>
    <p>Nossa equipe pode fazer uma análise completa do seu código e arquitetura.</p>
    
    <a href="https://dexidigital.com.br/contato" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Obter Diagnóstico em 24h →</a>
  </div>
  
  <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; font-size: 14px; color: #6b7280;">
    <p style="margin: 0;">Dexi Digital - Inteligência que Transforma</p>
    <p style="margin: 10px 0 0;">São Paulo, SP | contato@dexidigital.com.br</p>
  </div>
</body>
</html>
    `,
  },

  calculator: {
    subject: '📊 Seu Relatório de ROI em Dados',
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
    
    <p>Aqui está o relatório completo de ROI baseado nos dados que você informou.</p>
    
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
    
    <p><strong>Este relatório inclui:</strong></p>
    <ul style="padding-left: 20px;">
      <li>📊 Cálculo personalizado baseado nos seus dados</li>
      <li>📈 Benchmarks comparativos do setor</li>
      <li>💡 Recomendações de implementação</li>
      <li>📋 Próximos passos sugeridos</li>
    </ul>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <h3 style="color: #1a1a2e;">Quer validar esses números?</h3>
    <p>Agende uma conversa com nossos especialistas para uma análise mais aprofundada e personalizada.</p>
    
    <a href="https://dexidigital.com.br/contato" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Obter Diagnóstico em 24h →</a>
  </div>

  <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; font-size: 14px; color: #6b7280;">
    <p style="margin: 0;">Dexi Digital - Inteligência que Transforma</p>
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
      pdf: 'Guia IA Empresarial',
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

