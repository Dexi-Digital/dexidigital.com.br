import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inteligência de Dados',
  description:
    'Analytics avançado, machine learning e data warehousing. Transforme dados em decisões estratégicas com governança e escalabilidade enterprise.',
};

export default function DataIntelligencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/servicos"
              className="inline-flex items-center text-[var(--color-primary-600)] font-semibold mb-6 hover:text-[var(--color-primary-700)] transition-base"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para Serviços
            </Link>
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Serviço</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Inteligência de <span className="text-display-gradient">Dados</span>
            </h1>
            <p className="text-lead max-w-2xl animate-fade-in-up delay-100">
              Analytics avançado, machine learning e data warehousing.
              Transforme dados em decisões estratégicas com governança e escalabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">O que entregamos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Dashboards executivos em tempo real',
                'Modelos preditivos para demanda e churn',
                'Data warehouse moderno (Snowflake, BigQuery)',
                'Governança e compliance (LGPD, SOC2)',
                'Pipelines de dados automatizados',
                'Análise de dados exploratória',
                'Visualizações interativas',
                'Integração com sistemas existentes',
              ].map((item) => (
                <div key={item} className="card p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-sm text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Casos de uso</h2>
            </div>
            <div className="space-y-4">
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Grupos Automotivos</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Unificação de dados de showroom, oficina e pós-venda para
                  visão 360° do cliente, previsão de demanda e otimização de estoque.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Varejo e E-commerce</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Análise de comportamento do cliente, recomendações
                  personalizadas, previsão de churn e otimização de pricing.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Logística e Supply Chain</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Otimização de rotas, previsão de demanda, gestão de estoque e
                  análise de performance de fornecedores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-5">
              Transforme seus dados em vantagem competitiva
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito para discutir seus desafios de dados.
            </p>
            <Link href="/contato" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
              Obter Diagnóstico em 24h
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

