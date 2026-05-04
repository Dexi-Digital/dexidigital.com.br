import Link from 'next/link';
import { SpeedInsights } from "@vercel/speed-insights/next"
import FAQItem from '@/components/ui/FAQItem';
import TrackedCTA from '@/components/ui/TrackedCTA';
import { getHomePageSchemas, localBusinessSchema } from '@/lib/structured-data';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dexi Digital | Consultoria de IA e Inteligência de Dados para Empresas',
  description: 'Conectamos seus dados aos seus sistemas de venda e cobrança para criar agentes que executam, 24/7, com governança enterprise e foco em resultado financeiro. Mais de 10 anos em software crítico e criadores do Synapse OS, plataforma agêntica validada em grupos automotivos, varejo e operações financeiras.',
  keywords: ['consultoria de IA', 'inteligência de dados', 'IA para empresas', 'consultoria de IA para vendas', 'eficiência operacional com IA', 'grupos automotivos', 'software sob medida'],
  openGraph: {
    title: 'Dexi Digital | Liderança em Engenharia de Software e Infraestrutura Agêntica',
    description: 'Conectamos seus dados aos seus sistemas de venda e cobrança para criar agentes que executam, 24/7, com governança enterprise e foco em resultado financeiro.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function HomePage() {
  const pageSchemas = [...getHomePageSchemas(), localBusinessSchema];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      {pageSchemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section id="hero" className="section-hero-premium py-20 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">ENGENHARIA DE SOFTWARE & IA AGÊNTICA</p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Engenharia de IA agêntica para gerar <span className="text-display-gradient">EBITDA</span>
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto animate-fade-in-up delay-150">
              Conectamos seus dados aos seus sistemas de venda e cobrança para criar agentes que executam, 24/7, com governança enterprise e foco em resultado financeiro.
            </p>

            <p className="text-sm text-[var(--text-tertiary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-175">
              Mais de 10 anos em software crítico e criadores do Synapse OS, plataforma agêntica validada em grupos automotivos, varejo e operações financeiras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-200">
              <TrackedCTA type="validation" location="hero" variant="primary" text="Agendar diagnóstico" />
              <TrackedCTA type="synapse" location="hero" variant="secondary" text="Conhecer o Synapse" />
            </div>
          </div>
        </div>
      </section>

      {/* Resultados em números */}
      <section id="resultados" className="section py-12 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h3 mb-8">Resultados em números</h2>
            <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6 group-hover:border-[var(--color-primary-500)] transition-colors">
                  <div className="text-display-md text-display-gradient mb-2">+45%</div>
                  <div className="text-body-sm font-medium text-[var(--text-primary)]">Conversão de Leads</div>
                </div>
                <div className="card p-6 group-hover:border-[var(--color-primary-500)] transition-colors">
                  <div className="text-display-md text-display-gradient mb-2">Até 35%</div>
                  <div className="text-body-sm font-medium text-[var(--text-primary)]">Recuperação de Crédito</div>
                </div>
                <div className="card p-6 group-hover:border-[var(--color-primary-500)] transition-colors">
                  <div className="text-display-md text-display-gradient mb-2">R$ 7M+</div>
                  <div className="text-body-sm font-medium text-[var(--text-primary)]">Receita Recuperada</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Viabilidade Agêntica em 24h (Moved UP) */}
      <section id="validacao-24h" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">DIAGNÓSTICO GRATUITO</p>
              <h2 className="text-h2">Descubra o impacto em 24 horas</h2>
              <p className="text-lead">Validamos a viabilidade técnica e projetamos o ROI do seu caso — sem custo e sem compromisso.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 text-center md:text-left">
                <span className="text-number text-[var(--color-primary-500)]">01</span>
                <h3 className="text-h5 mt-3 mb-2">Conversa de 15 minutos</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Entendemos seu cenário, sistemas atuais e metas de negócio.</p>
              </div>

              <div className="card p-6 text-center md:text-left">
                <span className="text-number text-[var(--color-primary-500)]">02</span>
                <h3 className="text-h5 mt-3 mb-2">Análise de viabilidade</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Avaliamos integrações, volume de dados e complexidade técnica.</p>
              </div>

              <div className="card p-6 text-center md:text-left">
                <span className="text-number text-[var(--color-primary-500)]">03</span>
                <h3 className="text-h5 mt-3 mb-2">Roadmap + Projeção de ROI</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Você recebe um diagnóstico completo, mesmo que não avance.</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <TrackedCTA type="validation" location="validacao-24h" variant="primary" text="Iniciar Diagnóstico Gratuito" />
              <p className="text-sm text-[var(--text-tertiary)] mt-4">Respondemos em até 4 horas úteis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que resolvemos - Cards com dor, solucao, numero */}
      <section id="problemas" className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Problemas que convertemos em resultado</h2>
              <p className="text-lead">Desafios críticos que já resolvemos para líderes de mercado</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Leads no Limbo</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span>CRM cheio de leads que nunca foram trabalhados. Vendedores priorizam quem responde, não quem converte.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span>Agentes assumem o follow-up em segundos, 24/7, com contexto completo e persistência calibrada.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">+45% na conversão de leads qualificados</span>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Inadimplência Corroendo Margem</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span>Réguas de cobrança genéricas e caras. Equipe de cobrança não escala.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span>Negociação persistente, humanizada e 100% autônoma. Proposta individualizada por perfil.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">Até 35% de recuperação de carteira vencida</span>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">IA Travada em PoC</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span>Pilotos que nunca viram produção por falta de compliance, integração complexa ou resistência interna.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span>Arquitetura Shadow CRM que executa sobre sistemas legados sem reescrever código.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">Rollout seguro em 7 dias</span>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Pressão do Board para &ldquo;Usar IA&rdquo;</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span>Cobrança por inovação sem roadmap claro. TI não sabe por onde começar.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span>Consultoria orientada a ROI com métricas que o CFO entende.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">Aprovação técnica e executiva em 1 semana</span>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <TrackedCTA type="validation" location="problemas" variant="secondary" text="Validar Meu Cenário" />
            </div>
          </div>
        </div>
      </section>

      {/* Riscos - O custo de esperar */}
      <section id="riscos" className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h3 mb-6 text-center md:text-left">O custo de esperar</h2>
            <ul className="space-y-4 mb-12">
              <li className="card p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-body-sm text-[var(--text-secondary)] text-left w-full"><strong>60% do pipeline desperdiçado:</strong> manter CRMs que apenas &ldquo;guardam dados&rdquo;.</p>
              </li>
              <li className="card p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-body-sm text-[var(--text-secondary)] text-left w-full"><strong>Erosão de margem:</strong> concorrência já usa agentes para fechar negócios mais rápido.</p>
              </li>
              <li className="card p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-body-sm text-[var(--text-secondary)] text-left w-full"><strong>Vulnerabilidade operacional:</strong> processos manuais sem auditoria e rastreabilidade.</p>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-5 border-l-4 border-l-[var(--color-primary-500)] text-left">
                <h3 className="text-h6 mb-2">Foco em Metas</h3>
                <p className="text-xs text-[var(--text-secondary)]">Nossos agentes perseguem KPIs de conversão, e não apenas respondem perguntas.</p>
              </div>
              <div className="card p-5 border-l-4 border-l-[var(--color-primary-500)] text-left">
                <h3 className="text-h6 mb-2">Escala Imediata</h3>
                <p className="text-xs text-[var(--text-secondary)]">Suporte a múltiplos canais e volume extremo sem novas contratações.</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <TrackedCTA type="validation" location="riscos" variant="link" />
            </div>
          </div>
        </div>
      </section>

      {/* Engenharia Enterprise - Synapse OS */}
      <section id="engenharia" className="section bg-[var(--bg-primary)] border-y border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Engenharia Enterprise</h2>
              <p className="text-lead">Arquitetura multi-agente com governança corporativa</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card p-6 text-left">
                <h3 className="text-h5 mb-2">✓ Integração Não Invasiva</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Conecta via API, webhook ou RPA em ERPs, CRMs e sistemas legados. Sem reescrever código ou migrar dados.
                </p>
              </div>
              <div className="card p-6 text-left">
                <h3 className="text-h5 mb-2">✓ Governança & Compliance</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Logs de auditoria completos para LGPD, SOX e políticas internas. Dashboards de monitoramento em tempo real.
                </p>
              </div>
              <div className="card p-6 text-left">
                <h3 className="text-h5 mb-2">✓ Escalabilidade Horizontal</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Arquitetura cloud-native que cresce com a demanda. Sem gargalos de infraestrutura.
                </p>
              </div>
              <div className="card p-6 text-left">
                <h3 className="text-h5 mb-2">✓ Human-in-the-Loop</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Pontos de aprovação humana quando necessário. Controle total sobre decisões críticas.
                </p>
              </div>
            </div>
            <div className="text-center">
              <TrackedCTA type="synapse" location="engenharia" variant="secondary" text="Conhecer a Arquitetura Synapse" />
            </div>
          </div>
        </div>
      </section>

      {/* Setor Automotivo CTA */}
      <section id="automotivo-cta" className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-4">VERTICAL ESPECIALIZADA</p>
            <h2 className="text-display-lg text-white mb-4">Execução Agêntica no Automotivo</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto md:mx-0">
              Showroom, oficina e pós-venda integrados por agentes que reduzem o atrito e geram caixa.
            </p>

            <div className="flex flex-wrap gap-8 justify-center md:justify-start mb-10">
              <div>
                <div className="text-number-lg text-white">+50%</div>
                <div className="text-sm font-medium text-white/80 mt-1 uppercase tracking-wide">Conversão de Leads</div>
              </div>
              <div>
                <div className="text-number-lg text-white">-30%</div>
                <div className="text-sm font-medium text-white/80 mt-1 uppercase tracking-wide">Tempo de Box</div>
              </div>
              <div>
                <div className="text-number-lg text-white">+40%</div>
                <div className="text-sm font-medium text-white/80 mt-1 uppercase tracking-wide">Retenção de Clientes</div>
              </div>
            </div>

            <TrackedCTA type="validation" location="automotivo-cta" variant="white" text="Validar para Meu Grupo" sector="automotivo" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-[var(--bg-secondary)] pb-32 md:pb-24 pt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Perguntas frequentes</h2>
              <p className="text-lead">Dúvidas comuns sobre IA agêntica</p>
            </div>

            <div className="card divide-y divide-[var(--border-subtle)] mb-12 text-left px-6 md:px-8">
              <FAQItem
                question="Quanto tempo leva para ver resultado?"
                answer="O Synapse OS gera valor imediato. Implementações típicas apresentam receita recuperada nos primeiros 15 a 30 dias após o go-live."
              />
              <FAQItem
                question="Como integra com meu sistema atual?"
                answer="Utilizamos arquitetura read-only que conecta via API, webhook ou RPA sobre seu CRM/ERP atual. Sem migração de dados ou reescrita de código."
              />
              <FAQItem
                question="Qual é o investimento mínimo?"
                answer="Depende da complexidade. No diagnóstico gratuito, projetamos o ROI e apresentamos opções de implementação adequadas ao seu contexto."
              />
              <FAQItem
                question="E se não funcionar?"
                answer="Nosso modelo é orientado a resultado. Só avançamos se a viabilidade técnica e financeira estiver clara. Você recebe o diagnóstico completo mesmo que não contrate."
              />
            </div>

            <div className="card p-8 text-center bg-[var(--bg-primary)] border border-[var(--color-primary-500)]/30">
              <h3 className="text-h4 mb-3">Lidere a transição para a Empresa Agêntica</h3>
              <p className="text-body-sm text-[var(--text-secondary)] mb-6">
                Descubra o potencial financeiro da execução autônoma para sua empresa. Diagnóstico gratuito e sem compromisso.
              </p>
              <TrackedCTA type="validation" location="faq-cta" variant="primary" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Sticky CTA for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-t border-[var(--border-subtle)] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <TrackedCTA type="validation" location="mobile-sticky" variant="primary" className="w-full shadow-lg text-center flex justify-center items-center py-3 text-sm" />
      </div>
    </main>
  );
}
