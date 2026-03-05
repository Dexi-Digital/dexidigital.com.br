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
    description: 'Nascida da necessidade de transformar dados estáticos em lucro real, a Dexi Digital combina uma década de engenharia de software crítico com o pioneirismo no desenvolvimento de Sistemas Multi-Agentes (MAS).',
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
      <section className="section-hero-premium py-20 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">ENGENHARIA DE SOFTWARE & IA AGÊNTICA</p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Da gestão de dados à <span className="text-display-gradient">execução autônoma de resultados</span>
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              Aumente o EBITDA com execução agêntica. Já geramos +45% de conversão e R$ 7M recuperados para líderes de mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-200">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary shadow-lg shadow-[var(--color-primary-500)]/20">
                Iniciar Validação em 24h
              </a>
              <Link href="/metodologia" className="btn btn-secondary">
                Conheça o Synapse
              </Link>
            </div>

            <p className="text-sm text-[var(--text-tertiary)] mb-4 animate-fade-in delay-300">
              Segurança Enterprise corporativa para os setores automotivo, varejo e financeiro.
            </p>
          </div>
        </div>
      </section>

      {/* Resultados em números */}
      <section className="section py-12 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
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
      <section className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Validação Agêntica em 24h</h2>
              <p className="text-lead">3 passos para projetar o impacto financeiro na sua operação.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 text-center md:text-left">
                <span className="text-number text-[var(--color-primary-500)]">01</span>
                <h3 className="text-h5 mt-3 mb-2">Mapeamento</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Análise executiva dos seus gargalos de conversão e retenção.</p>
              </div>

              <div className="card p-6 text-center md:text-left">
                <span className="text-number text-[var(--color-primary-500)]">02</span>
                <h3 className="text-h5 mt-3 mb-2">Oportunidade</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Identificação de fluxos para gerar liquidez imediata.</p>
              </div>

              <div className="card p-6 text-center md:text-left">
                <span className="text-number text-[var(--color-primary-500)]">03</span>
                <h3 className="text-h5 mt-3 mb-2">Roadmap & ROI</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Projeção do impacto financeiro do Synapse em seu caixa.</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Iniciar Validação em 24h
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que resolvemos - Cards com dor, solucao, numero */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Problemas que resolvemos</h2>
              <p className="text-lead">Desafios críticos que convertemos em resultado</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Automotivo & Varejo</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span><strong>Dor:</strong> Leads perdidos no vácuo entre CRM e WhatsApp.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span><strong>Solução:</strong> Agentes que assumem o follow-up da última milha em segundos.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">+45% na conversão de leads</span>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Grandes Corporações</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span><strong>Dor:</strong> IAs travadas em pilotos (PoC) por falta de governança.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span><strong>Solução:</strong> Arquitetura Shadow CRM de execução rápida sobre sistemas legados.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">Rollout seguro em 7 dias</span>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Recuperação de Crédito</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span><strong>Dor:</strong> Inadimplência alta e réguas de cobrança ineficientes.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span><strong>Solução:</strong> Negociação persistente, humanizada e 100% autônoma.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">Recuperação de até 35% da carteira</span>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Líderes de TI</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span><strong>Dor:</strong> Pressão para usar IA sem roadmap ou compliance.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span><strong>Solução:</strong> Consultoria em sistemas multi-agentes orientada a ROI.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">Aprovação técnica em 1 semana</span>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Iniciar Validação em 24h
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Riscos - Lean */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h3 mb-6 text-center md:text-left">Riscos de sistemas passivos</h2>
            <ul className="space-y-4 mb-12">
              <li className="card p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-body-sm text-[var(--text-secondary)] text-left w-full"><strong>Desperdício de 60% do pipeline:</strong> manter CRMs que apenas "guardam dados".</p>
              </li>
              <li className="card p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-body-sm text-[var(--text-secondary)] text-left w-full"><strong>Erosão de Margem:</strong> concorrência já usa agentes para fechar negócios rápidos.</p>
              </li>
              <li className="card p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-body-sm text-[var(--text-secondary)] text-left w-full"><strong>Vulnerabilidade:</strong> processos manuais sem auditoria e rastreabilidade.</p>
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
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--color-primary-600)] hover:underline">
                Iniciar Validação em 24h →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Engenharia e Curadoria */}
      <section className="section bg-[var(--bg-primary)] border-y border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Engenharia de Elite</h2>
              <p className="text-lead">Tecnologia de ponta com governança humana</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 text-center md:text-left">
                <h3 className="text-h5 mb-2">Engenharia Agêntica</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Entregamos aplicações completas em dias usando o Synapse OS.
                </p>
              </div>
              <div className="card p-6 text-center md:text-left">
                <h3 className="text-h5 mb-2">Governança Humana</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Nenhuma IA entra em produção sem curadoria de especialistas seniores.
                </p>
              </div>
              <div className="card p-6 text-center md:text-left">
                <h3 className="text-h5 mb-2">Infraestrutura</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Projetamos redes preparadas para processar milhões de interações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setor Automotivo CTA */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <p className="text-white font-semibold tracking-wider mb-4">Vertical Especializada</p>
            <h2 className="text-display-lg text-white mb-4">Execução Agêntica no Automotivo</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto md:mx-0">
              Showroom, oficina e pós-venda integrados por agentes que reduzem o atrito e geram caixa.
            </p>

            <div className="flex flex-wrap gap-8 justify-center md:justify-start mb-10">
              <div>
                <div className="text-number-lg text-white">+50%</div>
                <div className="text-sm font-medium text-white/80 mt-1 uppercase tracking-wide">Conversão</div>
              </div>
              <div>
                <div className="text-number-lg text-white">-30%</div>
                <div className="text-sm font-medium text-white/80 mt-1 uppercase tracking-wide">Tempo de Box</div>
              </div>
              <div>
                <div className="text-number-lg text-white">+40%</div>
                <div className="text-sm font-medium text-white/80 mt-1 uppercase tracking-wide">Retenção</div>
              </div>
            </div>

            <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90 shadow-lg font-bold">
              Iniciar Validação em 24h
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--bg-secondary)] pb-32 md:pb-24 pt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Perguntas frequentes</h2>
              <p className="text-lead">Entenda a visão agêntica</p>
            </div>

            <div className="card divide-y divide-[var(--border-subtle)] mb-12 text-left">
              <FAQItem
                question="Os agentes substituem a equipe atual?"
                answer="Eles potencializam a equipe, removendo gargalos repetitivos e deixando o trabalho estratégico e de aprovação para os humanos."
              />
              <FAQItem
                question="A implementação requer mudança de CRM?"
                answer="Não. Utilizamos uma arquitetura read-only que se conecta sobre seu sistema atual em poucos dias."
              />
              <FAQItem
                question="Qual a garantia de segurança?"
                answer="Operamos com conformidade enterprise, logging total das decisões agênticas e governança LGPD estrita."
              />
              <FAQItem
                question="Qual é o tempo estimado para o retorno (ROI)?"
                answer="O Synapse OS é desenhado para geração de valor imediato. Implementações agênticas em setores críticos costumam apresentar resultados e receita recuperada nos primeiros 15 a 30 dias."
              />
            </div>

            <div className="card p-8 text-center bg-[var(--bg-primary)] border border-[var(--color-primary-500)]/30">
              <h3 className="text-h4 mb-3">Lidere a transição para a Empresa Agêntica</h3>
              <p className="text-body-sm text-[var(--text-secondary)] mb-6">
                Descubra qual é o potencial financeiro da execução autônoma para a sua empresa. Diagnóstico 100% focado em viabilidade.
              </p>
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
                Iniciar Validação em 24h
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Sticky CTA for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-t border-[var(--border-subtle)] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full shadow-lg text-center flex justify-center items-center py-3 text-sm">
          Validar impacto no EBITDA
        </a>
      </div>
    </main>
  );
}
