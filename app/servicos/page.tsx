import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços | Inteligência de Dados, Software e IA Empresarial',
  description:
    'Soluções enterprise: data intelligence, software sob medida e IA governada. Dashboards, machine learning, APIs e sistemas escaláveis para grandes empresas.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Arquitetura de Execução Agêntica (Synapse OS)',
      slug: 'ia-para-empresas',
      description:
        'Implementação de agentes autônomos que não apenas respondem, mas executam. Focamos em ganho de escala e redução de latência operacional, transformando a IA em um motor de EBITDA real, com resultados validados no setor imobiliário de alto padrão da TGV Empreendimentos.',
      benefits: [
        'Perfilamento neurolinguístico em tempo real',
        'Distinção automática de valores (performance vs. segurança)',
        'Handoff inteligente com briefing para vendedores',
        'IA governada, auditável e integrada ao CRM',
      ],
      featured: true,
    },
    {
      title: 'Desenvolvimento de Sistemas de Missão Crítica',
      slug: 'software-sob-medida',
      description:
        'Nossa expertise de 10 anos em engenharia para criar soluções proprietárias que resolvem o que o mercado não resolve. Construímos a "última milha" da integração tecnológica, garantindo que a inovação se conecte perfeitamente aos sistemas legados e processos core da sua empresa.',
      benefits: [
        'Arquitetura moderna com IA conversacional nativa',
        'Testes automatizados e CI/CD',
        'Integração com CRM, ERP e sistemas legados',
        'Suporte e evolução contínua',
      ],
    },
    {
      title: 'Engenharia de Dados & Ativos de Inteligência',
      slug: 'inteligencia-de-dados',
      description:
        'Transformamos dados brutos em combustível para a tomada de decisão autônoma. Estruturamos a base necessária para que o Synapse OS opere com precisão, garantindo que a informação flua sem gargalos, como implementado na gestão de 180k leads da Attra Veículos.',
      benefits: [
        'Dashboards executivos em tempo real',
        'Modelos preditivos para demanda e churn',
        'Data warehouse moderno (Snowflake, BigQuery)',
        'Governança e compliance (LGPD, SOC2)',
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Soluções Enterprise</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              IA que <span className="text-display-gradient">entende pessoas</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Concierge Digital de Vendas, software com IA integrada e inteligência de dados.
              Soluções que convertem porque entendem o perfil do seu cliente em tempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={service.slug} className="card card-interactive p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-number-lg text-display-gradient">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-h3">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-body-sm text-[var(--text-secondary)]">
                            <svg className="w-5 h-5 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link href={`/servicos/${service.slug}`} className="text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base">
                        Saiba mais sobre {service.title} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-5">
              Pronto para começar?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito para discutir seus desafios.
            </p>
            <Link href="/contato" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
              Fale conosco →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

