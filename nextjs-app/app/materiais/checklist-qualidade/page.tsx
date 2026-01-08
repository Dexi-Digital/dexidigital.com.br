import type { Metadata } from 'next';
import LeadMagnet from '@/components/ui/LeadMagnet';

export const metadata: Metadata = {
  title: 'Checklist: Qualidade de Software | Material Gratuito',
  description:
    'Baixe o checklist gratuito com 50+ itens para avaliar e melhorar a qualidade técnica do seu software. Arquitetura, segurança, performance e DevOps.',
};

export default function ChecklistQualidadePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-primary mb-4">Material Gratuito</span>
            <h1 className="text-display mb-6">
              Checklist: Qualidade de Software
            </h1>
            <p className="text-lead">
              50+ itens para avaliar e melhorar a qualidade técnica do seu software. 
              Usado internamente em nossos projetos enterprise.
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
                <h2 className="text-h3 mb-6">Categorias do checklist</h2>
                
                <div className="space-y-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-h5 mb-2">🏗️ Arquitetura e Design</h3>
                    <p className="text-body-sm">Separação de responsabilidades, padrões de design, escalabilidade e manutenibilidade.</p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-h5 mb-2">📝 Qualidade de Código</h3>
                    <p className="text-body-sm">Legibilidade, convenções, complexidade ciclomática, cobertura de testes.</p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-h5 mb-2">🔒 Segurança</h3>
                    <p className="text-body-sm">OWASP Top 10, gestão de secrets, autenticação, autorização, auditoria.</p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-h5 mb-2">⚡ Performance</h3>
                    <p className="text-body-sm">Tempo de resposta, uso de memória, queries N+1, caching, otimizações.</p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-h5 mb-2">🚀 DevOps e CI/CD</h3>
                    <p className="text-body-sm">Pipelines, testes automatizados, deploy contínuo, monitoramento, alertas.</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h4 className="text-h6 mb-3">O checklist inclui:</h4>
                  <ul className="feature-list">
                    <li className="feature-list-item">PDF interativo com checkboxes</li>
                    <li className="feature-list-item">Planilha para scoring</li>
                    <li className="feature-list-item">Guia de priorização</li>
                    <li className="feature-list-item">Exemplos de correção</li>
                  </ul>
                </div>
              </div>

              {/* Right: Lead Capture Form */}
              <div className="sticky top-24">
                <LeadMagnet
                  type="checklist"
                  title="Baixar Checklist Gratuito"
                  description="Receba o checklist completo no seu email em segundos."
                  benefits={[
                    '50+ itens de verificação',
                    'Categorizado por área técnica',
                    'Sistema de scoring incluso',
                    'Guia de priorização de correções',
                  ]}
                  ctaText="Baixar checklist agora"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

