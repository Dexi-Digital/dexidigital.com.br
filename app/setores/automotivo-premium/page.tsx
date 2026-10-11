import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import TrackedCTA from '@/components/ui/TrackedCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IA para Grupos Automotivos Premium',
  description: 'Inteligência e execução comercial para concessionárias e grupos automotivos premium: cada lead custou caro para chegar e precisa virar venda. O Fykos transforma dados do showroom ao pós-venda em prioridades e ações comerciais.',
  keywords: ['IA para concessionárias', 'inteligência de dados automotivo', 'grupos automotivos premium', 'conversão de leads automotivo', 'tecnologia brasileira'],
};

const challenges = [
  {
    problem: 'Erosão de Leads: o interesse premium esfria antes do consultor humano assumir a conversa.',
    solution: 'Operação de IA 24/7: o Fykos qualifica na primeira mensagem, mantém follow-up ativo e entrega o lead ao vendedor apenas no ponto ideal de transbordo.',
    result: 'Leads qualificados em escala e oportunidades quentes entregues ao time no momento certo.',
  },
  {
    problem: 'Atendimento Genérico: o discurso comercial não se adapta ao perfil psicológico do comprador.',
    solution: 'Persuasão Adaptativa com IA: equilibra diretividade e empatia, lê intenção de compra e ajusta tom, repertório e argumentos em tempo real.',
    result: 'Follow-up consistente e leads frios reengajados.',
  },
  {
    problem: 'Silos de Dados: showroom, CRM, WhatsApp e pós-venda não compartilham inteligência acionável.',
    solution: 'Arquitetura Shadow CRM: unificação da jornada em uma camada proprietária com leitura de intenção, portfólio e oportunidades de recompra.',
    result: 'Visibilidade completa do funil e inteligência de mercado em tempo real.',
  },
  {
    problem: 'Escala sem perda de qualidade: mais volume costuma significar mais fila, mais ruído e menos conversão.',
    solution: 'Sales Enablement Data-Driven: o sistema absorve picos de demanda, reduz atrito operacional e entrega briefings objetivos para o time comercial.',
    result: 'Qualificação objetiva, com briefing pronto para o time comercial.',
  },
];

const cases = [
  {
    sector: 'Operação Premium Especializada',
    problem: 'Leads de alto ticket recebiam abordagem fria, fila de resposta e follow-up inconsistente.',
    approach: 'Implementação Fykos com persuasão adaptativa, histórico conversacional e handoff inteligente para o consultor no momento de fechamento.',
    results: ['Leads frios reengajados', 'Follow-up consistente', 'Handoff no fechamento'],
  },
  {
    sector: 'Rede Regional em Expansão',
    problem: 'Picos de demanda, múltiplas unidades e falta de padrão global na jornada comercial geravam vazamento de funil.',
    approach: 'Integração nativa com CRM e ERP, operação single-tenant, qualificação imediata e dashboards executivos com visão consolidada da rede.',
    results: ['Qualificação imediata', 'Padrão único na jornada', 'Visão consolidada da rede'],
  },
];

export default function AutomotivoPremiumPage() {
  return (
    <main className="min-h-screen">
      <BreadcrumbSchema
        trilha={[
          { nome: 'Automotivo', url: '/automotivo' },
          { nome: 'Automotivo Premium', url: '/setores/automotivo-premium' },
        ]}
      />
      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Setor Automotivo Premium</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Cada lead custou caro para chegar. Ele precisa virar{' '}
              <span className="text-display-gradient">venda</span>
            </h1>
            <p className="text-h3 mb-4 text-[var(--text-primary)] animate-fade-in-up delay-75">
              Maximização de Conversão e Liquidez com Fykos
            </p>
            <p className="text-lead max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
              O Fykos transforma dados da operação em prioridades e ações comerciais, do primeiro contato ao fechamento, para que as oportunidades que já estão na base do grupo virem receita e previsibilidade de venda. Feito para operações premium, multiunidade e de alto ticket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-150">
              <TrackedCTA
                type="aderencia"
                location="automotivo-premium-hero"
                variant="primary"
                text="Avaliar aderência da minha operação"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Desafios que resolvemos</h2>
              <p className="text-lead">Problemas reais de grupos automotivos e como o Fykos atua</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((item, index) => (
                <div key={index} className="card card-interactive p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full mb-3 inline-block">Desafio</span>
                    <p className="text-body-sm font-medium text-[var(--text-primary)]">{item.problem}</p>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full mb-3 inline-block">Solução Dexi</span>
                    <p className="text-body-sm text-[var(--text-secondary)]">{item.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <span className="text-h5 text-[var(--color-success-600)]">{item.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Digital Feature */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Motor de Persuasão Adaptativa: Execução de Vendas de Alto Ticket</h2>
              <p className="text-lead">Arquitetura Fykos treinada em Neurolinguística Aplicada e Engenharia de Vendas de Luxo.</p>
            </div>

            <div className="card p-8 mb-10 border-l-4 border-[var(--color-primary-500)]">
              <h3 className="text-h4 mb-4">Exemplo Real: SUV Esportivo vs SUV Familiar Premium</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-[var(--bg-secondary)] rounded-xl">
                  <p className="text-overline text-[var(--color-primary-600)] mb-2">Perfil Performance (Poder & Dinâmica)</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                    A IA identifica gatilhos de potência e torque. → Destaque: 393cv, 540Nm e 0-100km/h em 7,5s.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-body-sm">
                      <span className="text-[var(--color-primary-500)]">→</span>
                      <strong className="text-[var(--text-primary)]">393 cavalos de potência</strong>
                    </li>
                    <li className="flex items-center gap-2 text-body-sm text-[var(--text-secondary)]">
                      <span className="text-[var(--color-primary-500)]">→</span>
                      Torque de 540Nm para arrancadas
                    </li>
                    <li className="flex items-center gap-2 text-body-sm text-[var(--text-secondary)]">
                      <span className="text-[var(--color-primary-500)]">→</span>
                      0-100km/h em 7,5 segundos
                    </li>
                  </ul>
                </div>
                <div className="p-5 bg-[var(--bg-secondary)] rounded-xl">
                  <p className="text-overline text-[var(--color-success-600)] mb-2">Perfil Segurança (Proteção & Tecnologia)</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                    A IA prioriza salvaguardas e assistência. → Destaque: 5 estrelas NCAP, Sistema ADAS e 7 Airbags.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-body-sm">
                      <span className="text-[var(--color-success-500)]">→</span>
                      <strong className="text-[var(--text-primary)]">5 estrelas Latin NCAP</strong>
                    </li>
                    <li className="flex items-center gap-2 text-body-sm text-[var(--text-secondary)]">
                      <span className="text-[var(--color-success-500)]">→</span>
                      Sistema ADAS completo
                    </li>
                    <li className="flex items-center gap-2 text-body-sm text-[var(--text-secondary)]">
                      <span className="text-[var(--color-success-500)]">→</span>
                      7 airbags + frenagem autônoma
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-body-sm text-[var(--text-muted)] mt-5 text-center">
                Soberania do Discurso: O Fykos altera a rota argumentativa em milissegundos, garantindo que o valor percebido seja moldado pela necessidade psicológica do comprador.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Cases de sucesso</h2>
              <p className="text-lead">Resultados reais com clientes do setor</p>
            </div>

            <div className="space-y-6">
              {cases.map((caseItem, index) => (
                <div key={index} className="card card-interactive p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-overline mb-2">Setor</p>
                      <p className="text-h5">{caseItem.sector}</p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wide">Problema:</p>
                        <p className="text-body-sm text-[var(--text-secondary)]">{caseItem.problem}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wide">Abordagem Dexi:</p>
                        <p className="text-body-sm text-[var(--text-secondary)]">{caseItem.approach}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Resultados:</p>
                        <ul className="flex flex-wrap gap-2">
                          {caseItem.results.map((result, idx) => (
                            <li key={idx} className="px-3 py-1 text-xs font-semibold bg-[var(--color-success-100)] dark:bg-[var(--color-success-900)]/30 text-[var(--color-success-700)] dark:text-[var(--color-success-300)] rounded-full">{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Dexi for Automotive */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Por que a Dexi na operação comercial automotiva?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">IA que Executa a Venda Consultiva</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Utilizamos o motor do Fykos treinado em Neurolinguística Aplicada. Nossa IA não apenas responde; ela executa a venda consultiva, identificando motivações latentes e gatilhos de fechamento.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Domínio do Ecossistema Automotivo</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Uma década de engenharia dedicada ao setor. Integramos nativamente com DMS e CRMs de mercado para orquestrar jornadas de compra complexas, redes regionais e ciclos de decisão premium com padrão consistente.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Inteligência Adaptativa com IA</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">A cada interação, a arquitetura Fykos mapeia o perfil psicológico do comprador. O discurso é moldado em milissegundos para alinhar o produto aos valores de Performance, Segurança ou Status detectados.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Sales Enablement de Alta Precisão</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">O consultor humano recebe o lead com um briefing estratégico autônomo: perfil comportamental, objeções antecipadas e a &quot;Next Best Action&quot;. Reduzimos o atrito e maximizamos a taxa de fechamento no showroom.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-4">
              CONVERSA DE ADERÊNCIA
            </p>
            <h2 className="text-display-lg text-white mb-5">
              Pronto para liderar a Operação de IA Automotiva?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira nesta etapa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TrackedCTA
                type="aderencia"
                location="automotivo-premium-cta-final"
                variant="white"
                text="Solicitar conversa de aderência"
              />
              <Link href="/metodologia" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Conhecer o Fykos →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

