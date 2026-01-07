import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Inteligência de dados, software sob medida e IA para empresas. Soluções enterprise com governança, escalabilidade e suporte contínuo.',
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
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Soluções de software e dados para empresas que não podem falhar.
              IA como acelerador, expertise humana como garantia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-12">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl font-bold text-primary-600">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <svg
                              className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/servicos/${service.slug}`}
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                      >
                        Saiba mais sobre {service.title}
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
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
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Agende um diagnóstico gratuito para discutir seus desafios.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

