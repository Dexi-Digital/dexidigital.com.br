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
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Material Gratuito</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Checklist: <span className="text-display-gradient">Qualidade de Software</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              50+ itens para avaliar e melhorar a qualidade técnica do seu software.
              Usado internamente em nossos projetos enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Benefits */}
              <div>
                <h2 className="text-h3 mb-6">Categorias do checklist</h2>

                <div className="space-y-4">
                  <div className="p-5 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-primary)] hover:border-[var(--color-primary-300)] transition-base">
                    <h3 className="text-h5 mb-2">🏗️ Arquitetura e Design</h3>
                    <p className="text-body-sm text-[var(--text-secondary)]">Separação de responsabilidades, padrões de design, escalabilidade e manutenibilidade.</p>
                  </div>

                  <div className="p-5 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-primary)] hover:border-[var(--color-primary-300)] transition-base">
                    <h3 className="text-h5 mb-2">📝 Qualidade de Código</h3>
                    <p className="text-body-sm text-[var(--text-secondary)]">Legibilidade, convenções, complexidade ciclomática, cobertura de testes.</p>
                  </div>

                  <div className="p-5 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-primary)] hover:border-[var(--color-primary-300)] transition-base">
                    <h3 className="text-h5 mb-2">🔒 Segurança</h3>
                    <p className="text-body-sm text-[var(--text-secondary)]">OWASP Top 10, gestão de secrets, autenticação, autorização, auditoria.</p>
                  </div>

                  <div className="p-5 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-primary)] hover:border-[var(--color-primary-300)] transition-base">
                    <h3 className="text-h5 mb-2">⚡ Performance</h3>
                    <p className="text-body-sm text-[var(--text-secondary)]">Tempo de resposta, uso de memória, queries N+1, caching, otimizações.</p>
                  </div>

                  <div className="p-5 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-primary)] hover:border-[var(--color-primary-300)] transition-base">
                    <h3 className="text-h5 mb-2">🚀 DevOps e CI/CD</h3>
                    <p className="text-body-sm text-[var(--text-secondary)]">Pipelines, testes automatizados, deploy contínuo, monitoramento, alertas.</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-subtle)]">
                  <h4 className="text-h6 mb-3">O checklist inclui:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-body-sm text-[var(--text-secondary)]">
                      <svg className="w-4 h-4 text-[var(--color-success-500)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      PDF interativo com checkboxes
                    </li>
                    <li className="flex items-center gap-2 text-body-sm text-[var(--text-secondary)]">
                      <svg className="w-4 h-4 text-[var(--color-success-500)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Planilha para scoring
                    </li>
                    <li className="flex items-center gap-2 text-body-sm text-[var(--text-secondary)]">
                      <svg className="w-4 h-4 text-[var(--color-success-500)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Guia de priorização
                    </li>
                    <li className="flex items-center gap-2 text-body-sm text-[var(--text-secondary)]">
                      <svg className="w-4 h-4 text-[var(--color-success-500)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Exemplos de correção
                    </li>
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

