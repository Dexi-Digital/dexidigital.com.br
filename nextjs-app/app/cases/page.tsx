import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cases de Sucesso | Resultados Comprovados com IA e Dados | Dexi Digital',
  description:
    'Cases reais de consultoria de IA e inteligência de dados: +25% conversão de leads, -30% estoque ocioso, +40% retenção. Grupos automotivos e grandes corporações.',
  keywords: ['cases consultoria IA', 'resultados inteligência de dados', 'cases grupos automotivos', 'ROI IA empresarial'],
};

export default function CasesPage() {
  const cases = [
    {
      title: 'Sistema de Scoring de Leads com IA',
      sector: 'Automotivo Premium',
      client: 'Grupo automotivo com 12 concessionárias de marcas premium',
      challenge:
        'Leads de test drive convertendo apenas 8% em vendas. Vendedores sem visibilidade de quais leads priorizar, resultando em follow-up ineficiente e perda de oportunidades de alto valor.',
      approach:
        'Implementamos sistema de scoring de leads com IA que analisa comportamento digital, histórico de interações e dados demográficos. Integração com CRM existente e automação de nurturing personalizado por perfil.',
      results: [
        { metric: '+50%', description: 'Conversão de leads (de 8% para 12%)' },
        { metric: '-40%', description: 'Redução no ciclo de vendas' },
        { metric: '380%', description: 'ROI em 6 meses' },
      ],
      timeline: '8 semanas até produção',
      tags: ['IA para Vendas', 'Machine Learning', 'Automação'],
    },
    {
      title: 'Data Warehouse Unificado Multi-Concessionária',
      sector: 'Automotivo Premium',
      client: 'Grupo automotivo brasileiro com operações em 5 estados',
      challenge:
        'Dados isolados em 12 concessionárias, cada uma com sistemas diferentes. Impossível ter visão consolidada de clientes, estoque e performance. Relatórios manuais consumiam 3 dias por mês.',
      approach:
        'Arquitetura de data warehouse moderna com ingestão automatizada de múltiplas fontes (DMS, CRM, ERP). Dashboards executivos em tempo real com drill-down por unidade, vendedor e período.',
      results: [
        { metric: '180k', description: 'Clientes com visão 360° unificada' },
        { metric: '-30%', description: 'Estoque ocioso otimizado' },
        { metric: '3x', description: 'Campanhas mais efetivas' },
      ],
      timeline: '12 semanas até produção',
      tags: ['Data Warehouse', 'Business Intelligence', 'Dashboards'],
    },
    {
      title: 'Plataforma de IA com Governança para Compliance',
      sector: 'Serviços Financeiros',
      client: 'Instituição financeira regulada pelo Banco Central',
      challenge:
        'Necessidade de adotar IA para análise de crédito mantendo compliance com regulações financeiras. Exigência de explicabilidade total das decisões e auditoria completa.',
      approach:
        'Plataforma de IA com governança desde o design: modelos explicáveis, rastreabilidade de decisões, controle de acesso granular e logs de auditoria. Integração com sistemas legados via APIs seguras.',
      results: [
        { metric: '100%', description: 'Compliance mantido em auditorias' },
        { metric: '-40%', description: 'Tempo de análise de crédito' },
        { metric: 'Zero', description: 'Incidentes de segurança' },
      ],
      timeline: '16 semanas até produção',
      tags: ['IA Governada', 'Compliance', 'Segurança'],
    },
    {
      title: 'Modernização de Sistema Legado com Zero Downtime',
      sector: 'Varejo',
      client: 'Rede de varejo com 50+ lojas físicas e e-commerce',
      challenge:
        'Sistema legado monolítico de 15 anos não escalava com crescimento. Deploys arriscados, downtime frequente e impossibilidade de inovar rapidamente.',
      approach:
        'Migração gradual para arquitetura de microserviços usando padrão Strangler Fig. Cada módulo migrado individualmente com rollback automático. Zero downtime durante toda a migração.',
      results: [
        { metric: '-80%', description: 'Tempo de deploy (de 4h para 45min)' },
        { metric: '99.9%', description: 'Uptime garantido' },
        { metric: '10x', description: 'Velocidade de novas features' },
      ],
      timeline: '6 meses de migração gradual',
      tags: ['Modernização', 'Microserviços', 'Cloud'],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Resultados Comprovados</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Cases de <span className="text-display-gradient">Sucesso</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Projetos reais com resultados mensuráveis. Todos os cases são de clientes
              reais sob NDA - detalhes específicos omitidos por confidencialidade.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-10">
            {cases.map((caseStudy) => (
              <article key={caseStudy.title} className="card card-interactive p-8">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full">{caseStudy.sector}</span>
                  <span className="px-3 py-1 text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full">{caseStudy.timeline}</span>
                </div>

                <h2 className="text-h3 mb-2">{caseStudy.title}</h2>
                <p className="text-body-sm text-[var(--text-muted)] mb-6">{caseStudy.client}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left: Challenge & Approach */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Desafio</h3>
                      <p className="text-body-sm text-[var(--text-secondary)]">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Abordagem Dexi</h3>
                      <p className="text-body-sm text-[var(--text-secondary)]">{caseStudy.approach}</p>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div>
                    <h3 className="text-xs font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wide">Resultados</h3>
                    <div className="space-y-3">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-subtle)]">
                          <span className="text-number-lg text-display-gradient">{result.metric}</span>
                          <span className="text-body-sm text-[var(--text-secondary)] pt-1">{result.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--border-subtle)]">
                  {caseStudy.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-5">
              Pronto para criar seu próprio case de sucesso?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito e descubra o potencial de IA e dados para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Agendar Diagnóstico em 24h
              </Link>
              <Link href="/metodologia" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Conhecer metodologia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

