import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Diagnóstico de IA Gratuito em 24h | Dexi Digital',
  description:
    'Solicite um diagnóstico gratuito de potencial de IA para sua empresa. Análise personalizada em 24h por especialistas com 10+ anos de experiência. Sem compromisso.',
  keywords: ['diagnóstico IA gratuito', 'consultoria IA', 'análise de dados empresa', 'contato Dexi Digital'],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Diagnóstico Gratuito</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Descubra o potencial de <span className="text-display-gradient">IA</span> para sua empresa
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Preencha o formulário e receba uma análise personalizada em até 24h.
              Sem compromisso, sem vendas agressivas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="text-h3 mb-6">O que você recebe</h2>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-h5 mb-1">Análise de oportunidades</h3>
                      <p className="text-body-sm text-[var(--text-secondary)]">Mapeamento de onde IA e dados podem gerar impacto real no seu negócio</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-h5 mb-1">Estimativa de ROI</h3>
                      <p className="text-body-sm text-[var(--text-secondary)]">Projeção de retorno baseada em cases similares do seu setor</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-h5 mb-1">Roadmap sugerido</h3>
                      <p className="text-body-sm text-[var(--text-secondary)]">Próximos passos práticos com priorização de quick wins</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-h5 mb-1">Resposta em 24h</h3>
                      <p className="text-body-sm text-[var(--text-secondary)]">Conversa técnica com especialistas, não vendedores</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-subtle)]">
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Prefere email direto?</strong><br />
                    <a href="mailto:contato@dexidigital.com.br" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base">
                      contato@dexidigital.com.br
                    </a>
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="card p-8">
                  <h3 className="text-h4 mb-6">Solicitar Diagnóstico</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

