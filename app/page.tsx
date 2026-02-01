import Link from 'next/link';
import { SpeedInsights } from "@vercel/speed-insights/next"
import FAQItem from '@/components/ui/FAQItem';
import { getHomePageSchemas, localBusinessSchema } from '@/lib/structured-data';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dexi Digital | Consultoria de IA e Inteligência de Dados para Empresas',
  description: 'Nascida da necessidade de transformar dados estáticos em lucro real, a Dexi Digital combina uma década de engenharia de software crítico com o pioneirismo no desenvolvimento de Sistemas Multi-Agentes (MAS). Criadores do Synapse OS, somos a ponte entre a inteligência artificial generativa e a execução financeira autônoma para corporações que buscam escala sem precedentes e governança inegociável.',
  keywords: ['consultoria de IA', 'inteligência de dados', 'IA para empresas', 'consultoria de IA para vendas', 'eficiência operacional com IA', 'grupos automotivos', 'software sob medida'],
    openGraph: {
    title: 'Dexi Digital | Liderança em Engenharia de Software e Infraestrutura Agêntica',
    description: 'Nascida da necessidade de transformar dados estáticos em lucro real, a Dexi Digital combina uma década de engenharia de software crítico com o pioneirismo no desenvolvimento de Sistemas Multi-Agentes (MAS). Criadores do Synapse OS, somos a ponte entre a inteligência artificial generativa e a execução financeira autônoma para corporações que buscam escala sem precedentes e governança inegociável.',
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
            <p className="text-overline mb-4 animate-fade-in-up-subtle">ENGENHARIA DE SOFTWARE & IA AGÊNTICA</p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Da gestão de dados{' '}
              <span className="text-display-gradient"> à execução autônoma de resultados</span>
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              Nascida da necessidade de transformar dados estáticos em lucro real, a Dexi Digital combina uma década de engenharia de software crítico com o pioneirismo no desenvolvimento de Sistemas Multi-Agentes (MAS). Criadores do Synapse OS, somos a ponte entre a inteligência artificial generativa e a execução financeira autônoma para corporações que buscam escala sem precedentes e governança inegociável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-200">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Falar com um Especialista
              </a>
              <Link href="/metodologia" className="btn btn-secondary">
                Conheça o Synapse
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="animate-fade-in delay-300">
              <p className="text-sm text-[var(--text-tertiary)] mb-4">
                Segurança Enterprise: 10+ anos desenvolvendo software sob medida e sistemas agênticos para líderes nos setores automotivo, varejo e financeiro.
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
              <h2 className="text-h2">Engenharia de Elite para o Futuro Agêntico</h2>
              <p className="text-lead">Orquestração de tecnologia de ponta com governança humana inegociável</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">01</span>
                <h3 className="text-h5 mt-3 mb-2">Engenharia Agêntica Nativa</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Utilizamos o motor do Synapse para acelerar a construção de software customizado. O que antes exigia meses de desenvolvimento, agora entregamos com precisão agêntica em dias.
                </p>
              </div>

              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">02</span>
                <h3 className="text-h5 mt-3 mb-2">Governança & Compliance</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Nenhuma decisão de IA ou linha de código é implantada sem a auditoria de nossa camada de curadoria humana. Garantia de segurança enterprise para operações críticas.
                </p>
              </div>

              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">03</span>
                <h3 className="text-h5 mt-3 mb-2">Infraestrutura de Escala</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Projetamos ecossistemas robustos, multicanal e prontos para suportar milhões de requisições paralelas. Construímos sistemas duradouros que evoluem com o seu negócio.
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
                  <h3 className="text-h4 mb-3">Grupos Automotivos & Varejo</h3>
                  <p className="text-overline mb-3">O Problema</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Leads perdidos no "vácuo" entre o CRM e o WhatsApp. O showroom não conversa com o pós-venda, gerando perda de receita e dados fragmentados.
                  </p>
                </div>
                <div>
                  <p className="text-overline mb-3">Nossa Solução</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                    Implementação da Colmeia Synapse. Agentes especializados que assumem a última milha da venda e qualificação, garantindo resposta em segundos e 100% de cobertura de leads.
                  </p>
                  <p className="text-highlight">
                    +45% na conversão de leads e automação total do follow-up comercial.
                  </p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="card p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-h4 mb-3">Grandes Corporações (Enterprise)</h3>
                  <p className="text-overline mb-3">O Problema</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Projetos de IA que não saem do piloto (PoC) por falta de governança ou dificuldade de integração com sistemas legados complexos.
                  </p>
                </div>
                <div>
                  <p className="text-overline mb-3">Nossa Solução</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                    Arquitetura Shadow CRM & Read-Only. Instalamos uma camada de execução agêntica sobre o seu legado, capturando inteligência sem necessidade de alterações estruturais no seu banco de dados.
                  </p>
                  <p className="text-highlight">
                    Rollout de soluções agênticas em 7 dias com segurança de nível bancário.
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="card p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-h4 mb-3">Recuperação de Crédito & Receita</h3>
                  <p className="text-overline mb-3">O Problema</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Inadimplência alta e réguas de cobrança manuais/ineficientes que sobrecarregam o time humano e geram atrito com o cliente.
                  </p>
                </div>
                <div>
                  <p className="text-overline mb-3">Nossa Solução</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                    Agente especializado. Negociação de dívidas humanizada, persistente e integrada a gateways de pagamento para liquidez imediata e recuperação de ativos.
                  </p>
                  <p className="text-highlight">
                    Recuperação de até 35% da carteira inadimplente de forma 100% autônoma.
                  </p>
                </div>
              </div>

              {/* Block 4 */}
              <div className="card p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-h4 mb-3">Líderes de TI</h3>
                  <p className="text-overline mb-3">O Problema</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Pressão da diretoria para "escalar com IA" sem um roadmap claro de segurança, orçamento definido ou garantias de compliance de dados.
                  </p>
                </div>
                <div>
                  <p className="text-overline mb-3">Nossa Solução</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                    Consultoria de Engenharia Agêntica. Desenhamos e construímos sistemas multi-agentes (MAS) sob medida, focados em ROI direto e governança técnica sênior.
                  </p>
                  <p className="text-highlight">
                    Aprovação de budget e arquitetura em 1 semana com foco em geração de EBITDA.
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
              <h2 className="text-h2 mb-8">O risco de permanecer em sistemas passivos</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Sistemas de Registro Obsoletos</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Manter CRMs que apenas "guardam dados" sem agir sobre eles gera um desperdício de pipeline de 60% ao ano.
                  </p>
                </div>
                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Erosão de Margem</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Enquanto a sua operação depende de humanos para tarefas repetitivas, a concorrência utiliza agentes para capturar leads em segundos.
                  </p>
                </div>
                <div className="md:col-span-2 card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Vulnerabilidade Operacional</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Processos manuais sem logs de IA são caixas-pretas. A falta de governança agêntica impede a auditoria e escala segura.
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
                  <h3 className="text-h5 mb-3">Execução baseada em Metas</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Saia da análise e vá para a ação. Nossos agentes operam com foco em KPIs de conversão e liquidez financeira.
                  </p>
                </div>

                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Escala sem Contratação</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    A arquitetura da Dexi permite que a sua operação suporte 100x mais volume de vendas sem aumentar a folha de pagamento.
                  </p>
                </div>

                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Soberania Enterprise</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Camada de curadoria humana sênior e logs de auditoria total. IA segura, transparente e em conformidade com o compliance.
                  </p>
                </div>

                <div className="card card-interactive p-6">
                  <h3 className="text-h5 mb-3">Libertação do Capital Humano</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Delegue a execução operacional exaustiva para a nossa inteligência agêntica. Liberte o seu capital humano para funções criativas, estratégicas e de tomada de decisão de alto impacto.
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
              <h2 className="text-h2">Engenharia de elite que sustenta a inovação</h2>
              <p className="text-lead">Mais de uma década construindo a infraestrutura onde o futuro agêntico opera.</p>
            </div>

            {/* Metrics Row */}
            <div className="flex flex-wrap gap-10 md:gap-16 mb-16">
              <div>
                <div className="text-number-lg text-display-gradient">10+</div>
                <div className="text-body-sm text-[var(--text-secondary)] mt-1">Anos em software crítico e arquiteturas complexas.</div>
              </div>
              <div>
                <div className="text-number-lg text-display-gradient">50+</div>
                <div className="text-body-sm text-[var(--text-secondary)] mt-1">Ecossistemas entregues para líderes de mercado.</div>
              </div>
              <div>
                <div className="text-number-lg text-display-gradient">R$ 7M+</div>
                <div className="text-body-sm text-[var(--text-secondary)] mt-1">Recuperados através de execução agêntica autônoma.</div>
              </div>
            </div>

            {/* Sectors */}
            <div className="mb-12">
              <h3 className="text-h5 mb-5">Setores atendidos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card p-4">
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-semibold">Automotivo</span> — Unificação de dados e execução agêntica do showroom ao pós-venda (Caso de sucesso Attra Veículos).
                  </p>
                </div>
                <div className="card p-4">
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-semibold">Varejo</span> — Orquestração da "última milha" de vendas e prospecção proativa em larga escala.
                  </p>
                </div>
                <div className="card p-4">
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-semibold">Logística</span> — Otimização de fluxos operacionais e inteligência de dados para operações de alta criticidade.
                  </p>
                </div>
                <div className="card p-4">
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-semibold">Financeiro</span> — Recuperação de ativos, compliance de dados e infraestrutura de Embedded Finance.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="pt-10 border-t border-[var(--border-subtle)]">
              <blockquote className="text-lg text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl italic">
                &ldquo;A transição para a inteligência agêntica permitiu uma visibilidade total do showroom ao pós-venda, com resultados financeiros que superaram nossas projeções de ROI.&rdquo;
              </blockquote>
              <p className="text-sm text-[var(--text-primary)] font-semibold">Diretor de Operações — Grupo Automotivo Premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Premium Cards */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Soluções Agênticas & Engenharia</h2>
              <p className="text-lead">Infraestrutura de software e execução autônoma para operações de alta criticidade.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card card-feature p-6 group">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-2">Synapse Agentic</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Orquestração de múltiplos agentes para vendas, cobrança e retenção com foco em ROI direto e imediato.
                </p>
                <p className="text-xs text-[var(--text-muted)] mb-4">Execução · Autonomia · Resultados Financeiros</p>
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
                <h3 className="text-h5 mb-2">Engenharia de Elite</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Desenvolvimento de plataformas complexas e sistemas críticos nativamente preparados para a era agêntica.
                </p>
                <p className="text-xs text-[var(--text-muted)] mb-4">Arquitetura · Escalabilidade · Governança</p>
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
                <h3 className="text-h5 mb-2">Curadoria & Compliance</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Camada de supervisão humana sênior para garantir precisão, segurança e soberania de dados em IA.
                </p>
                <p className="text-xs text-[var(--text-muted)] mb-4">Soberania · Governança · Conformidade</p>
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
            <p className="text-overline text-[var(--color-primary-200)] mb-4">Verticais de Alta Performance</p>
            <h2 className="text-display-lg text-white mb-4">Liderança em Execução Agêntica para o Setor Automotivo</h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl">
              A Synapse integra todo o ciclo de vida do cliente, transformando dados do showroom e oficina em vendas e liquidez.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div className="space-y-5">
                <p className="text-sm text-white/80">
                  <span className="text-white font-semibold">Showroom: +50% conversão</span> — Qualificação e follow-up agêntico autônomo
                </p>
                <p className="text-sm text-white/80">
                  <span className="text-white font-semibold">Oficina: -30% tempo de box</span> — Agendamento e fluxo de caixa preditivo
                </p>
                <p className="text-sm text-white/80">
                  <span className="text-white font-semibold">Pós-venda: +40% retenção</span> — Atendimento e fidelização agêntica proativa
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-number-lg text-white">+50%</div>
                  <div className="text-xs text-white/50">Conversão Agêntica</div>
                </div>
                <div>
                  <div className="text-number-lg text-white">-30%</div>
                  <div className="text-xs text-white/50">Giro de Ativos</div>
                </div>
                <div>
                  <div className="text-number-lg text-white">+40%</div>
                  <div className="text-xs text-white/50">LTV Maximizado</div>
                </div>
                <div>
                  <div className="text-number-lg text-white">380%</div>
                  <div className="text-xs text-white/50">ROI Agêntico</div>
                </div>
              </div>
            </div>

            <Link href="/setores/automotivo-premium" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
              Explorar execução agêntica no setor automotivo
            </Link>
          </div>
        </div>
      </section>

      {/* Content Preview Section - Premium */}
      <section className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Inteligência & Visão Agêntica</h2>
              <p className="text-lead">Liderança de pensamento sobre a Empresa Agêntica e infraestrutura de dados.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <article className="card card-interactive p-6 group">
                <p className="text-xs text-[var(--text-muted)] mb-3">IA Empresarial · 12 min</p>
                <h3 className="text-h5 mb-3 group-hover:text-[var(--color-primary-600)] transition-base">
                  A Nova Era da Governança Agêntica: Como escalar operações com sistemas multi-agentes sem perder o controle do compliance.
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
                  O Futuro Agêntico do Setor Automotivo: Como a Synapse está redefinindo a conversão do showroom ao pós-venda.
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
                  Chatbots vs. Agentes: O fim do hype e o início da era da execução autônoma em sistemas críticos.
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
              <h2 className="text-h2">Recursos para o C-Level</h2>
              <p className="text-lead">Ferramentas estratégicas para implementar a Empresa Agêntica com segurança e ROI.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 h-full flex flex-col">
                <p className="text-xs text-[var(--text-muted)] mb-3">PDF · 15 min</p>
                <h3 className="text-h5 mb-3">Framework: A Empresa Agêntica</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-4 flex-1">
                  O guia definitivo para integrar sistemas multi-agentes (MAS) ao seu core business.
                </p>
                <ul className="text-xs text-[var(--text-tertiary)] space-y-1.5 mb-5">
                  <li>• Roadmap de implementação</li>
                  <li>• Checklist de governança</li>
                  <li>• 5 casos reais de ROI</li>
                </ul>
                <Link href="/materiais/guia-ia-empresarial" className="btn btn-primary text-sm text-center">
                  Baixar →
                </Link>
              </div>

              <div className="card p-6 h-full flex flex-col">
                <p className="text-xs text-[var(--text-muted)] mb-3">Checklist · 50+ itens</p>
                <h3 className="text-h5 mb-3">Tech Due Diligence para IA</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-4 flex-1">
                  Avalie a maturidade, segurança e escalabilidade dos seus sistemas de inteligência artificial.
                </p>
                <ul className="text-xs text-[var(--text-tertiary)] space-y-1.5 mb-5">
                  <li>• Padrões de arquitetura</li>
                  <li>• Segurança e performance</li>
                  <li>• LGPD e Conformidade</li>
                </ul>
                <Link href="/materiais/checklist-qualidade" className="btn btn-secondary text-sm text-center">
                  Baixar →
                </Link>
              </div>

              <div className="card p-6 h-full flex flex-col">
                <p className="text-xs text-[var(--text-muted)] mb-3">Ferramenta · Interativo</p>
                <h3 className="text-h5 mb-3">Simulador de Impacto Agêntico</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-4 flex-1">
                  Calcule o potencial de ganho em EBITDA e recuperação de receita com o Synapse OS.
                </p>
                <ul className="text-xs text-[var(--text-tertiary)] space-y-1.5 mb-5">
                  <li>• Estimativa por vertical</li>
                  <li>• Benchmarks de mercado</li>
                  <li>• Relatório executivo em PDF</li>
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
              <h2 className="text-h2">Viabilidade Agêntica em 24h</h2>
              <p className="text-lead">3 passos para validar o impacto do Synapse na sua operação.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">01</span>
                <h3 className="text-h5 mt-3 mb-3">Mapeamento Estratégico</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Breve análise executiva sobre seus gargalos de vendas, cobrança e retenção.
                </p>
                <p className="text-xs text-[var(--text-muted)]">Breve formulário de alto nível</p>
              </div>

              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">02</span>
                <h3 className="text-h5 mt-3 mb-3">Estudo de Oportunidade</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Identificação de fluxos críticos onde a inteligência agêntica gera liquidez imediata.
                </p>
                <p className="text-xs text-[var(--text-muted)]">Avaliação por engenharia sênior</p>
              </div>

              <div className="card card-interactive p-6">
                <span className="text-number text-[var(--color-primary-500)]">03</span>
                <h3 className="text-h5 mt-3 mb-3">Roadmap de ROI & EBITDA</h3>
                <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                  Projeção de impacto financeiro e plano de implementação escalável do Synapse.
                </p>
                <p className="text-highlight text-sm">Entregue em 24h</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contato" className="btn btn-primary">
                Iniciar Validação Agêntica →
              </Link>
              <p className="text-xs text-[var(--text-muted)] mt-4">Foco em viabilidade técnica e financeira. Sem compromisso comercial.</p>
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
                question="Como a inteligência agêntica interage com as equipes humanas?"
                answer="Nossos sistemas não substituem o capital humano; eles o potencializam. A inteligência agêntica assume a execução operacional exaustiva e repetitiva, permitindo que seus especialistas foquem exclusivamente na curadoria técnica e na estratégia de alto nível."
              />
              <FAQItem
                question="Quais são os padrões de segurança e governança da Synapse?"
                answer="Operamos sob arquitetura de isolamento e governança de dados enterprise. Garantimos rastreabilidade total, explicabilidade de decisões e conformidade rigorosa com a LGPD, garantindo que a tecnologia seja um ativo seguro e auditável."
              />
              <FAQItem
                question="Qual é o tempo estimado para o retorno sobre o investimento (ROI)?"
                answer="O Synapse OS é desenhado para geração de valor imediata. Implementações agênticas em setores críticos costumam apresentar resultados mensuráveis em receita recuperada e eficiência operacional nos primeiros 15 a 30 dias."
              />
              <FAQItem
                question="Para quais tipos de operação o Synapse OS é indicado?"
                answer="Para grandes ecossistemas corporativos com alta complexidade transacional — como grupos automotivos, operações financeiras e redes de varejo — que buscam escala exponencial sem aumento proporcional de custo operacional (OPEX)."
              />
              <FAQItem
                question="Como a Dexi garante a evolução contínua dos agentes?"
                answer="Mantemos um ciclo de otimização agêntica baseado em performance real. Além do suporte técnico com SLA sênior, oferecemos curadoria contínua para ajustar o raciocínio dos agentes aos novos objetivos de negócio da sua empresa."
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
              Lidere a transição para a Empresa Agêntica
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Valide o impacto financeiro da inteligência autônoma na sua operação hoje. Diagnóstico de viabilidade técnica e financeira em 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Iniciar Validação Agêntica
              </a>
              <Link href="/cases" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Conheça o Synapse
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
              <span>Insights em 24h</span>
              <span>Mapeamento de Valor</span>
              <span>Business Case de ROI</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

