import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cases de Sucesso',
  description:
    'Conheça projetos reais de inteligência de dados e software sob medida que transformaram operações de grupos automotivos e grandes corporações.',
};

export default function CasesPage() {
  const cases = [
    {
      title: 'Inteligência de Dados para Grupo Automotivo',
      sector: 'Automotivo',
      challenge:
        'Dados fragmentados entre showroom, oficina e pós-venda impediam visão unificada do cliente.',
      solution:
        'Data warehouse unificado com dashboards em tempo real e modelos preditivos de demanda.',
      impact: ['30% redução de estoque', '25% aumento em vendas de pós-venda', 'Visão 360° do cliente'],
      tags: ['Data Intelligence', 'Machine Learning', 'Dashboards'],
    },
    {
      title: 'Modernização de Sistema Legado',
      sector: 'Varejo',
      challenge:
        'Sistema legado monolítico não escalava com crescimento da empresa.',
      solution:
        'Migração gradual para arquitetura de microserviços com zero downtime.',
      impact: ['50% redução em tempo de deploy', '99.9% uptime', 'Escalabilidade automática'],
      tags: ['Software Sob Medida', 'Microserviços', 'Cloud'],
    },
    {
      title: 'IA Governada para Compliance',
      sector: 'Serviços Financeiros',
      challenge:
        'Necessidade de adotar IA mantendo compliance com regulações financeiras.',
      solution:
        'Plataforma de IA com governança completa, auditoria e explicabilidade de decisões.',
      impact: ['100% compliance mantido', '40% redução em tempo de análise', 'Auditoria completa'],
      tags: ['IA Empresarial', 'Governança', 'Compliance'],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Cases de Sucesso
            </h1>
            <p className="text-xl text-gray-600">
              Projetos reais que transformaram operações e geraram resultados
              mensuráveis para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              {cases.map((caseStudy) => (
                <article
                  key={caseStudy.title}
                  className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                      {caseStudy.sector}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {caseStudy.title}
                  </h2>

                  <div className="space-y-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Desafio
                      </h3>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Solução
                      </h3>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Impacto
                      </h3>
                      <ul className="space-y-2">
                        {caseStudy.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg
                              className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
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
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
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
              Pronto para criar seu próprio case de sucesso?
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

