import Link from 'next/link';
import { WHATSAPP_AUTOMOTIVO_URL, WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IA para Grupos Automotivos Premium | Dexi Digital',
  description: 'Consultoria de IA e inteligência de dados para concessionárias e grupos automotivos premium. Aumente conversão de leads, otimize estoque e unifique dados do showroom ao pós-venda.',
  keywords: ['IA para concessionárias', 'inteligência de dados automotivo', 'grupos automotivos premium', 'conversão de leads automotivo', 'tecnologia brasileira'],
};

const challenges = [
  {
    problem: 'Erosão de Leads: Alta qualidade perdida por falta de follow-up imediato e inteligente.',
    solution: 'Execução Agêntica 24/7: O Synapse assume a última milha do lead instantaneamente, eliminando o tempo de espera e garantindo persistência estratégica sem fadiga humana.',
    result: '+35% de conversão final validada em operações como a Attra Veículos.',
  },
  {
    problem: 'Atendimento Genérico: Falta de identificação do perfil psicológico e motivação do comprador.',
    solution: 'Persuasão Adaptativa MAS: IA que mapeia o perfil (Performance vs. Segurança) e ajusta o tom de voz e os argumentos de venda em tempo real para maximizar o desejo.',
    result: '+50% de engajamento qualificado no primeiro contato.',
  },
  {
    problem: 'Silos de Dados: Informações fragmentadas entre showroom, oficina e o pós-venda.',
    solution: 'Arquitetura Shadow CRM: Unificação total da jornada do cliente, transformando dados mortos em gatilhos de recompra e predição de fluxo de caixa para a concessionária.',
    result: '+40% no LTV (Lifetime Value) e retenção de carteira premium.',
  },
  {
    problem: 'Assimetria de Informação: Vendedores recebem leads sem contexto ou profundidade.',
    solution: 'Venda Aumentada (Sales Enablement): Briefing estratégico entregue ao vendedor com perfil psicológico, objeções antecipadas e "next best action" para o fechamento imediato.',
    result: '+25% na taxa de fechamento em showrooms de alto ticket.',
  },
];

const cases = [
  {
    sector: 'Automotivo Premium: Attra Veículos',
    problem: 'Incapacidade de Diferenciação Psicológica: Leads de alto ticket eram tratados de forma genérica, resultando em perda de conversão na última milha.',
    approach: 'Implementação Synapse (Persuasão Adaptativa): Execução agêntica treinada em neurolinguística para distinguir gatilhos de Performance vs. Segurança em tempo real.',
    results: ['Tempo -60%'],
  },
  {
    sector: 'Gestão de Ecossistemas: Attra Veículos',
    problem: 'Fragmentação de Inteligência (Silos): Dados isolados em todas as unidades impediam uma visão única do cliente e geravam assimetria de informação no time comercial.',
    approach: 'Arquitetura Shadow CRM & Unificação de Dados: Centralização de perfis com entrega de briefing estratégico autônomo para o vendedor (Sales Enablement).',
    results: ['Fechamento +28%'],
  },
];

export default function AutomotivoPremiumPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Setor Automotivo Premium</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Liderança em Execução Agêntica{' '}
              <span className="text-display-gradient">Automotiva</span>
            </h1>
            <p className="text-h3 mb-4 text-[var(--text-primary)] animate-fade-in-up delay-75">
              Maximização de Conversão e Liquidez com Synapse
            </p>
            <p className="text-lead max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
              Orquestramos a última milha da venda com o Synapse. Com expertise validada na Attra Veículos, transformamos o showroom em uma máquina de execução autônoma, garantindo que nenhum lead esfrie e que cada interação resulte em lucro líquido e soberania digital para o grupo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-150">
              <a href={WHATSAPP_AUTOMOTIVO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Explorar Impacto no EBITDA Automotivo →
              </a>
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
              <p className="text-lead">Problemas reais de grupos automotivos, soluções comprovadas</p>
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
              <p className="text-lead">Arquitetura Synapse MAS treinada em Neurolinguística Aplicada e Engenharia de Vendas de Luxo.</p>
            </div>

            <div className="card p-8 mb-10 border-l-4 border-[var(--color-primary-500)]">
              <h3 className="text-h4 mb-4">Exemplo Real: Haval H6 vs GWM Tank 300</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-[var(--bg-secondary)] rounded-xl">
                  <p className="text-overline text-[var(--color-primary-600)] mb-2">Perfil Performance (Poder & Dinâmica)</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                    O agente identifica gatilhos de potência e torque. → Destaque: 393cv, 540Nm e 0-100km/h em 7,5s.
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
                    O agente prioriza salvaguardas e assistência. → Destaque: 5 estrelas NCAP, Sistema ADAS e 7 Airbags.
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
                Soberania do Discurso: O Synapse altera a rota argumentativa em milissegundos, garantindo que o valor percebido seja moldado pela necessidade psicológica do comprador.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card card-interactive p-6 text-center">
                <p className="text-number-lg text-display-gradient mb-2">+45%</p>
                <p className="text-body-sm text-[var(--text-secondary)]">de Liquidez no Funil de Vendas</p>
              </div>
              <div className="card card-interactive p-6 text-center">
                <p className="text-number-lg text-display-gradient mb-2">-60%</p>
                <p className="text-body-sm text-[var(--text-secondary)]">no Ciclo de Qualificação Agêntica</p>
              </div>
              <div className="card card-interactive p-6 text-center">
                <p className="text-number-lg text-display-gradient mb-2">24/7</p>
                <p className="text-body-sm text-[var(--text-secondary)]">Operação Autônoma (Zero Latência)</p>
              </div>
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
              <h2 className="text-h2">Por que a Dexi é líder em Execução Agêntica Automotiva?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Execução Agêntica, não Chatbots</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Utilizamos o motor do Synapse OS treinado em Neurolinguística Aplicada. Nossos agentes não apenas respondem; eles executam a venda consultiva, identificando motivações latentes e gatilhos de fechamento.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Domínio do Ecossistema Automotivo</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Uma década de engenharia dedicada ao setor. Integramos nativamente com DMS e CRMs de mercado, com expertise validada na Attra Veículos para orquestrar jornadas de compra complexas e ciclos de decisão premium.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Inteligência Adaptativa MAS</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">A cada interação, a arquitetura Synapse mapeia o perfil psicológico do comprador. O discurso é moldado em milissegundos para alinhar o produto aos valores de Performance, Segurança ou Status detectados.</p>
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
            <h2 className="text-display-lg text-white mb-5">
              Pronto para liderar a Execução Agêntica Automotiva?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Inicie a transição para sistemas de execução autônomos. Valide o impacto do Synapse OS no seu EBITDA e recupere a liquidez do showroom com a tecnologia validada pela Attra Veículos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Solicitar Validação de ROI
              </a>
              <Link href="/metodologia" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Conhecer o Synapse →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

