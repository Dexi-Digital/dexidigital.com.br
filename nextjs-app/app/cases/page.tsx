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
      <section className="section-hero-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-6">
              Cases de Sucesso
            </h1>
            <p className="text-lead">
              Projetos reais que transformaram operações e geraram resultados
              mensuráveis para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              {cases.map((caseStudy) => (
                <article key={caseStudy.title} className="card-service">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge badge-primary">{caseStudy.sector}</span>
                  </div>
                  <h2 className="text-h3 mb-4">
                    {caseStudy.title}
                  </h2>

                  <div className="space-y-6 mb-6">
                    <div>
                      <h3 className="text-h5 mb-2">Desafio</h3>
                      <p className="text-body">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-h5 mb-2">Solução</h3>
                      <p className="text-body">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-h5 mb-2">Impacto</h3>
                      <ul className="feature-list">
                        {caseStudy.impact.map((item) => (
                          <li key={item} className="feature-list-item">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span key={tag} className="badge badge-secondary">{tag}</span>
                    ))}
                  </div>
                </article>
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
              Pronto para criar seu próprio case de sucesso?
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

