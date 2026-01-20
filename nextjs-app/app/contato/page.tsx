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

                <div className="mt-8 space-y-4">
                  <div className="p-5 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-subtle)]">
                    <p className="text-body-sm text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Prefere WhatsApp?</strong><br />
                      <a
                        href="https://api.whatsapp.com/send?phone=5511991847629&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Dexi%20Digital."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] font-medium transition-base"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        (11) 99184-7629
                      </a>
                    </p>
                  </div>

                  <div className="p-5 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-subtle)]">
                    <p className="text-body-sm text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Prefere email direto?</strong><br />
                      <a href="mailto:contato@dexidigital.com.br" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base">
                        contato@dexidigital.com.br
                      </a>
                    </p>
                  </div>
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

