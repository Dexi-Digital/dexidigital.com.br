import Link from 'next/link';
import FAQItem from '@/components/ui/FAQItem';
import { getHomePageSchemas, localBusinessSchema } from '@/lib/structured-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dexi Digital | Consultoria de IA e Inteligência de Dados para Empresas',
  description: 'Consultoria estratégica de IA e inteligência de dados para empresas enterprise. Transformamos processos de vendas complexos em alta conversão com revisão técnica humana. Diagnóstico gratuito em 24h.',
  keywords: ['consultoria de IA', 'inteligência de dados', 'IA para empresas', 'consultoria de IA para vendas', 'eficiência operacional com IA', 'grupos automotivos', 'software sob medida'],
  openGraph: {
    title: 'Dexi Digital | Consultoria Estratégica de IA e Dados',
    description: 'Transformamos processos de vendas complexos em alta conversão através de inteligência de dados e IA estratégica. Diagnóstico gratuito em 24h.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function HomePage() {
  // Page-specific schemas (Organization, Services, FAQ, LocalBusiness)
  const pageSchemas = [...getHomePageSchemas(), localBusinessSchema];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Page-specific JSON-LD schemas */}
      {pageSchemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section - Premium */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Consultoria de IA & Dados</p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Transformamos dados complexos em{' '}
              <span className="text-display-gradient">vantagem competitiva real</span>
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              Inteligência de dados e IA estratégica com revisão técnica humana. Para empresas enterprise que não podem falhar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-200">
              <Link href="/contato" className="btn btn-primary">
                Agendar Diagnóstico
              </Link>
              <Link href="/metodologia" className="btn btn-secondary">
                Nossa metodologia
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="animate-fade-in delay-300">
              <p className="text-sm text-[var(--text-tertiary)] mb-4">
                10+ anos em software crítico · Foco em grandes operações · Segurança & compliance
              </p>

              {/* Client Segments */}
              <p className="text-xs text-[var(--text-muted)]">
                Grupos automotivos, redes de varejo, operações logísticas e financeiras
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Dexi Works - Premium Process */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Como a Dexi trabalha</h2>
              <p className="text-lead">IA como acelerador, expertise humana como garantia</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">01</span>
                <h3 className="text-h5 mt-3 mb-2">IA Acelera Desenvolvimento</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Utilizamos agentes de IA para prototipagem rápida, análise de dados massiva e geração de boilerplate. O que levava semanas, fazemos em dias.
                </p>
              </div>

              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">02</span>
                <h3 className="text-h5 mt-3 mb-2">Revisão Técnica Humana</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Nenhuma linha de código ou insight de dados vai para produção sem validação de arquitetos sêniores. Garantia de segurança e escalabilidade.
                </p>
              </div>

              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">03</span>
                <h3 className="text-h5 mt-3 mb-2">Entrega Enterprise</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Entregamos software robusto, documentado e testado. Não criamos "demos" que quebram, construímos sistemas que duram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve - Premium Grid */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Problemas que resolvemos</h2>
              <p className="text-lead">Foco em desafios críticos de grandes operações</p>
            </div>

            <div className="space-y-8">
              {/* Block 1 */}
              <div className="card p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-h4 mb-3">Grupos Automotivos</h3>
                  <p className="text-overline mb-3">O Problema</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Dados fragmentados entre showroom, oficina e pós-venda impedem visão única do cliente.
                  </p>
                </div>
                <div>
                  <p className="text-overline mb-3">Nossa Solução</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                    Data Lake unificado com modelos preditivos de propensão de compra e churn.
                  </p>
                  <p className="text-highlight">
                    Resultado típico: +30% na conversão de leads
                  </p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="card p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-h4 mb-3">Grandes Corporações</h3>
                  <p className="text-overline mb-3">O Problema</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Projetos de IA que não saem do piloto (PoC) ou precisam ser reescritos para escalar.
                  </p>
                </div>
                <div>
                  <p className="text-overline mb-3">Nossa Solução</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                    Arquitetura enterprise desde o dia 1. Governança, CI/CD e monitoramento.
                  </p>
                  <p className="text-highlight">
                    Resultado típico: Redução de 60% no time-to-market
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="card p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-h4 mb-3">Empresas em Crescimento</h3>
                  <p className="text-overline mb-3">O Problema</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Sistemas legados e planilhas que travam a operação e impedem a escala.
                  </p>
                </div>
                <div>
                  <p className="text-overline mb-3">Nossa Solução</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                    Modernização gradual (Strangler Fig) sem interrupção do negócio.
                  </p>
                  <p className="text-highlight">
                    Resultado típico: Eliminação de 90% das planilhas críticas
                  </p>
                </div>
              </div>

              {/* Block 4 */}
              <div className="card p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-h4 mb-3">Líderes de TI</h3>
                  <p className="text-overline mb-3">O Problema</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Pressão da diretoria para "usar IA" sem orçamento claro ou diretrizes de segurança.
                  </p>
                </div>
                <div>
                  <p className="text-overline mb-3">Nossa Solução</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                    Roadmap estratégico de IA com governança, compliance e ROI desenhado.
                  </p>
                  <p className="text-highlight">
                    Resultado típico: Aprovação de budget em 2 semanas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks & Benefits - Premium Grid */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Risks */}
            <div className="mb-16">
              <h2 className="text-h2 mb-8">O custo invisível de não modernizar</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Débito Técnico Acumulado</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Sistemas feitos "às pressas" ou baseados em hype geram custos de manutenção exponenciais. Cada mês sem refatoração aumenta o risco de falha crítica.
                  </p>
                </div>
                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Perda de Competitividade</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Enquanto sua equipe luta com planilhas e dados manuais, concorrentes digitais automatizam decisões e capturam seu market share.
                  </p>
                </div>
                <div className="md:col-span-2 card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Riscos de Segurança e Compliance</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Dados sensíveis em Excel ou sistemas sem governança são vulneráveis a vazamentos e multas da LGPD. O custo de um vazamento supera qualquer investimento em modernização.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="pt-14 border-t border-[var(--border-subtle)]">
              <div className="section-header text-left">
                <h2 className="text-h2">Benefícios que fazem a diferença</h2>
                <p className="text-lead">O impacto real de uma arquitetura de dados e software madura</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Decisões baseadas em fatos</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Elimine o "eu acho" das reuniões de diretoria. Com uma fonte única de verdade, seus dados contam a história real do negócio.
                  </p>
                </div>

                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Escalabilidade sem reescrita</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Sistemas projetados para suportar 10x ou 100x o volume atual. Arquitetura modular sem refatorações traumáticas.
                  </p>
                </div>

                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Governança e Segurança Total</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    IA e automação sem expor dados sensíveis. Logs de auditoria, controle de acesso e conformidade com LGPD.
                  </p>
                </div>

                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Eficiência que libera capital intelectual</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Automatize trabalho repetitivo. Sua equipe sênior deve focar em estratégia, não em copiar dados entre planilhas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Proof - Premium Metrics */}
      <section className="section-lg section-glow">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Experiência comprovada</h2>
              <p className="text-lead">Mais de uma década construindo soluções que duram</p>
            </div>

            {/* Metrics Row */}
            <div className="flex flex-wrap gap-10 md:gap-16 mb-16">
              <div>
                <div className="text-number-lg text-display-gradient">10+</div>
                <div className="text-body-sm text-[var(--text-secondary)] mt-1">Anos em software crítico</div>
              </div>
              <div>
                <div className="text-number-lg text-display-gradient">50+</div>
                <div className="text-body-sm text-[var(--text-secondary)] mt-1">Projetos entregues</div>
              </div>
              <div>
                <div className="text-number-lg text-display-gradient">100%</div>
                <div className="text-body-sm text-[var(--text-secondary)] mt-1">Foco em resultados</div>
              </div>
            </div>

            {/* Sectors */}
            <div className="mb-12">
              <h3 className="text-h5 mb-5">Setores atendidos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card p-4">
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-semibold">Automotivo</span> — Unificação de dados showroom, oficina e pós-venda
                  </p>
                </div>
                <div className="card p-4">
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-semibold">Varejo</span> — Analytics de vendas e previsão de demanda
                  </p>
                </div>
                <div className="card p-4">
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-semibold">Logística</span> — Otimização de rotas e gestão de frota
                  </p>
                </div>
                <div className="card p-4">
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-semibold">Financeiro</span> — Compliance, fraud detection, data governance
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="pt-10 border-t border-[var(--border-subtle)]">
              <blockquote className="text-lg text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl italic">
                &ldquo;A Dexi entregou uma solução que transformou nossa operação. Visibilidade completa do showroom ao pós-venda, com previsões que reduziram estoque em 30%.&rdquo;
              </blockquote>
              <p className="text-sm text-[var(--text-primary)] font-semibold">Diretor de TI — Grupo Automotivo Premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Premium Cards */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Nossos serviços</h2>
              <p className="text-lead">Soluções de software e dados para empresas que não podem falhar</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card card-feature p-6 group">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-2">Inteligência de Dados</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Analytics, machine learning e data warehousing com governança e escalabilidade.
                </p>
                <p className="text-xs text-[var(--text-muted)] mb-4">Dashboards · Modelos preditivos · Compliance</p>
                <Link href="/servicos/inteligencia-de-dados" className="text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base group-hover:underline">
                  Saiba mais →
                </Link>
              </div>

              <div className="card card-feature p-6 group">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-2">Software Sob Medida</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Aplicações enterprise com arquitetura escalável, código limpo e documentação completa.
                </p>
                <p className="text-xs text-[var(--text-muted)] mb-4">Arquitetura · CI/CD · Suporte contínuo</p>
                <Link href="/servicos/software-sob-medida" className="text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base group-hover:underline">
                  Saiba mais →
                </Link>
              </div>

              <div className="card card-feature p-6 group">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-2">IA para Empresas</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  IA com supervisão humana. Governança, explicabilidade e controle total.
                </p>
                <p className="text-xs text-[var(--text-muted)] mb-4">Auditável · Integração · Roadmap</p>
                <Link href="/servicos/ia-para-empresas" className="text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base group-hover:underline">
                  Saiba mais →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automotive Sector - Premium CTA */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-overline text-[var(--color-primary-200)] mb-4">Especialização Setorial</p>
            <h2 className="text-display-lg text-white mb-4">IA e dados para grupos automotivos</h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl">
              Unificação de dados de showroom, oficina e pós-venda em visão 360° do cliente.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div className="space-y-5">
                <p className="text-sm text-white/80">
                  <span className="text-white font-semibold">Showroom: +50% conversão</span> — Lead scoring e follow-up automatizado
                </p>
                <p className="text-sm text-white/80">
                  <span className="text-white font-semibold">Oficina: -30% tempo de box</span> — Agendamento preditivo
                </p>
                <p className="text-sm text-white/80">
                  <span className="text-white font-semibold">Pós-venda: +40% retenção</span> — Campanhas personalizadas
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-number-lg text-white">+50%</div>
                  <div className="text-xs text-white/50">Conversão</div>
                </div>
                <div>
                  <div className="text-number-lg text-white">-30%</div>
                  <div className="text-xs text-white/50">Estoque</div>
                </div>
                <div>
                  <div className="text-number-lg text-white">+40%</div>
                  <div className="text-xs text-white/50">Retenção</div>
                </div>
                <div>
                  <div className="text-number-lg text-white">380%</div>
                  <div className="text-xs text-white/50">ROI</div>
                </div>
              </div>
            </div>

            <Link href="/setores/automotivo-premium" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
              Ver soluções para automotivo →
            </Link>
          </div>
        </div>
      </section>

      {/* Content Preview Section - Premium */}
      <section className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Conteúdo</h2>
              <p className="text-lead">Insights sobre IA, dados e software</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <article className="card card-interactive p-6 group">
                <p className="text-xs text-[var(--text-muted)] mb-3">IA Empresarial · 12 min</p>
                <h3 className="text-h5 mb-3 group-hover:text-[var(--color-primary-600)] transition-base">
                  Como usar IA sem comprometer qualidade
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                  IA acelera desenvolvimento, mas sem governança cria débito técnico.
                </p>
                <Link href="/blog/guia-ia-qualidade-software" className="text-sm font-medium text-[var(--color-primary-600)] group-hover:underline">
                  Ler →
                </Link>
              </article>

              <article className="card card-interactive p-6 group">
                <p className="text-xs text-[var(--text-muted)] mb-3">Data Intelligence · 8 min</p>
                <h3 className="text-h5 mb-3 group-hover:text-[var(--color-primary-600)] transition-base">
                  Dados para grupos automotivos
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                  Unificar showroom, oficina e pós-venda em visão 360°.
                </p>
                <Link href="/blog/inteligencia-dados-automotivo" className="text-sm font-medium text-[var(--color-primary-600)] group-hover:underline">
                  Ler →
                </Link>
              </article>

              <article className="card card-interactive p-6 group">
                <p className="text-xs text-[var(--text-muted)] mb-3">Arquitetura · 10 min</p>
                <h3 className="text-h5 mb-3 group-hover:text-[var(--color-primary-600)] transition-base">
                  Por que projetos de hype são reescritos
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                  Construir software que dura além dos ciclos de hype.
                </p>
                <Link href="/blog/evitar-reescrita-projetos-hype" className="text-sm font-medium text-[var(--color-primary-600)] group-hover:underline">
                  Ler →
                </Link>
              </article>
            </div>

            <div className="text-center">
              <Link href="/blog" className="btn btn-ghost">
                Ver todos os artigos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Materials Library */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Materiais</h2>
              <p className="text-lead">Guias práticos para líderes de TI</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 h-full flex flex-col">
                <p className="text-xs text-[var(--text-muted)] mb-3">PDF · 15 min</p>
                <h3 className="text-h5 mb-3">Guia: IA Empresarial</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-4 flex-1">
                  10 passos para implementar IA com governança e ROI mensurável.
                </p>
                <ul className="text-xs text-[var(--text-tertiary)] space-y-1.5 mb-5">
                  <li>• Checklist de governança</li>
                  <li>• Templates de métricas</li>
                  <li>• 5 casos de uso</li>
                </ul>
                <Link href="/materiais/guia-ia-empresarial" className="btn btn-primary text-sm text-center">
                  Baixar →
                </Link>
              </div>

              <div className="card p-6 h-full flex flex-col">
                <p className="text-xs text-[var(--text-muted)] mb-3">Checklist · 50+ itens</p>
                <h3 className="text-h5 mb-3">Qualidade de Software</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-4 flex-1">
                  Avalie qualidade técnica com critérios objetivos.
                </p>
                <ul className="text-xs text-[var(--text-tertiary)] space-y-1.5 mb-5">
                  <li>• Arquitetura e código</li>
                  <li>• Segurança e performance</li>
                  <li>• DevOps e CI/CD</li>
                </ul>
                <Link href="/materiais/checklist-qualidade" className="btn btn-secondary text-sm text-center">
                  Baixar →
                </Link>
              </div>

              <div className="card p-6 h-full flex flex-col">
                <p className="text-xs text-[var(--text-muted)] mb-3">Ferramenta · Interativo</p>
                <h3 className="text-h5 mb-3">Calculadora de ROI</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-4 flex-1">
                  Estime retorno de projetos de inteligência de dados.
                </p>
                <ul className="text-xs text-[var(--text-tertiary)] space-y-1.5 mb-5">
                  <li>• Cálculo por setor</li>
                  <li>• Benchmarks de mercado</li>
                  <li>• Relatório PDF</li>
                </ul>
                <Link href="/materiais/calculadora-roi" className="btn btn-secondary text-sm text-center">
                  Calcular →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24h Diagnostic Process - Premium */}
      <section className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Diagnóstico em 24h</h2>
              <p className="text-lead">3 passos para um roadmap claro</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">01</span>
                <h3 className="text-h5 mt-3 mb-3">Coleta de Contexto</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Formulário sobre negócio, desafios e objetivos.
                </p>
                <p className="text-xs text-[var(--text-muted)]">5 minutos</p>
              </div>

              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">02</span>
                <h3 className="text-h5 mt-3 mb-3">Análise Técnica</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Identificação de oportunidades de IA e dados.
                </p>
                <p className="text-xs text-[var(--text-muted)]">Análise humana</p>
              </div>

              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">03</span>
                <h3 className="text-h5 mt-3 mb-3">Roadmap</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Diagnóstico e oportunidades priorizadas.
                </p>
                <p className="text-highlight text-sm">Entregue em 24h</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contato" className="btn btn-primary">
                Solicitar Diagnóstico →
              </Link>
              <p className="text-xs text-[var(--text-muted)] mt-4">Sem compromisso. Sem vendas agressivas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Premium */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Perguntas frequentes</h2>
              <p className="text-lead">Respostas diretas para decisores</p>
            </div>

            <div className="card divide-y divide-[var(--border-subtle)]">
              <FAQItem
                question="A Dexi substitui desenvolvedores por IA?"
                answer="Não. IA acelera tarefas repetitivas, mas toda solução passa por revisão técnica humana. IA é ferramenta, não substituta."
              />
              <FAQItem
                question="Como garantem segurança em soluções com IA?"
                answer="Governança desde o início: rastreabilidade, explicabilidade, controle de acesso e compliance LGPD/GDPR."
              />
              <FAQItem
                question="Quanto tempo leva um projeto típico?"
                answer="MVPs: 4-8 semanas. Sistemas enterprise: 3-6 meses. Entregas incrementais com validação contínua."
              />
              <FAQItem
                question="Trabalham com empresas de que porte?"
                answer="Médias e grandes empresas (50+ funcionários) com desafios complexos de dados e software."
              />
              <FAQItem
                question="Como funciona o suporte pós-entrega?"
                answer="Documentação completa, testes automatizados, garantia e contratos de suporte com SLA definido."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Premium */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-5">
              Pronto para transformar dados em vantagem competitiva?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Diagnóstico gratuito. Sem compromisso. Conversa técnica sobre seus desafios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contato" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Obter Diagnóstico em 24h
              </Link>
              <Link href="/cases" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Ver cases
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
              <span>Resposta em 24h</span>
              <span>Diagnóstico técnico</span>
              <span>Proposta transparente</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

