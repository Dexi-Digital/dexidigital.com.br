import type { Metadata } from 'next';
import LeadMagnet from '@/components/ui/LeadMagnet';

export const metadata: Metadata = {
  title: 'Guia: IA Empresarial sem Riscos | Material Gratuito',
  description:
    'Baixe o guia gratuito com 10 passos para implementar IA empresarial com governança, segurança e ROI mensurável. Inclui checklist e casos de uso.',
};

export default function GuiaIAPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-primary mb-4">Material Gratuito</span>
            <h1 className="text-display mb-6">
              Guia: IA Empresarial sem Riscos
            </h1>
            <p className="text-lead">
              10 passos práticos para implementar IA com governança, segurança e ROI mensurável. 
              Baseado em projetos reais com grandes empresas.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Benefits */}
              <div>
                <h2 className="text-h3 mb-6">O que você vai aprender</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="text-h5 mb-1">Governança de IA desde o início</h3>
                      <p className="text-body-sm">Como estabelecer políticas, processos e controles antes de implementar qualquer solução de IA.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="text-h5 mb-1">Segurança e compliance</h3>
                      <p className="text-body-sm">Requisitos de LGPD, rastreabilidade de decisões e controle de acesso para IA empresarial.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="text-h5 mb-1">ROI mensurável</h3>
                      <p className="text-body-sm">Framework para definir métricas de sucesso e calcular retorno financeiro de projetos de IA.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div>
                      <h3 className="text-h5 mb-1">Casos de uso validados</h3>
                      <p className="text-body-sm">Exemplos reais de implementação em grupos automotivos e grandes corporações.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h4 className="text-h6 mb-3">O guia inclui:</h4>
                  <ul className="feature-list">
                    <li className="feature-list-item">PDF de 25 páginas</li>
                    <li className="feature-list-item">Checklist de governança</li>
                    <li className="feature-list-item">Template de business case</li>
                    <li className="feature-list-item">Planilha de ROI</li>
                  </ul>
                </div>
              </div>

              {/* Right: Lead Capture Form */}
              <div className="sticky top-24">
                <LeadMagnet
                  type="pdf"
                  title="Baixar Guia Gratuito"
                  description="Receba o guia completo no seu email em segundos."
                  benefits={[
                    '10 passos práticos para IA empresarial',
                    'Checklist de governança incluso',
                    'Template de business case',
                    'Planilha de cálculo de ROI',
                  ]}
                  ctaText="Baixar guia agora"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

