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
      title: 'Inteligência de Dados',
      slug: 'inteligencia-de-dados',
      description:
        'Analytics avançado, machine learning e data warehousing. Transforme dados em decisões estratégicas com governança e escalabilidade.',
      benefits: [
        'Dashboards executivos em tempo real',
        'Modelos preditivos para demanda e churn',
        'Data warehouse moderno (Snowflake, BigQuery)',
        'Governança e compliance (LGPD, SOC2)',
      ],
    },
    {
      title: 'Software Sob Medida',
      slug: 'software-sob-medida',
      description:
        'Aplicações web e mobile enterprise. Arquitetura escalável, código limpo e documentação completa. Construído para durar.',
      benefits: [
        'Arquitetura moderna (microserviços, serverless)',
        'Testes automatizados e CI/CD',
        'Documentação técnica completa',
        'Suporte e evolução contínua',
      ],
    },
    {
      title: 'IA para Empresas',
      slug: 'ia-para-empresas',
      description:
        'IA acelerada com supervisão técnica humana. Governança, explicabilidade e controle total. IA como ferramenta, não como fim.',
      benefits: [
        'IA governada e auditável',
        'Integração com sistemas existentes',
        'Treinamento de equipes internas',
        'Roadmap de adoção gradual',
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-6">
              Nossos Serviços
            </h1>
            <p className="text-lead mb-8">
              Soluções de software e dados para empresas que não podem falhar.
              IA como acelerador, expertise humana como garantia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-12">
              {services.map((service, index) => (
                <div key={service.slug} className="card-service">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-h1 text-primary-600">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-h3">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-body-lg mb-6">
                        {service.description}
                      </p>
                      <ul className="feature-list mb-8">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="feature-list-item">
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link href={`/servicos/${service.slug}`} className="link-arrow">
                        Saiba mais sobre {service.title}
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
      <section className="section-alt py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lead mb-8">
              Agende um diagnóstico gratuito para discutir seus desafios.
            </p>
            <Link href="/contato" className="btn btn-primary btn-xl">
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

