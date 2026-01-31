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
    problem: 'Leads de alta qualidade perdidos por falta de follow-up inteligente',
    solution: 'Concierge Digital de Vendas com perfilamento neurolinguístico em tempo real',
    result: '+35% conversão de leads em vendas',
  },
  {
    problem: 'Atendimento genérico que não identifica o perfil do comprador',
    solution: 'IA que distingue compradores de performance vs. segurança e adapta o discurso',
    result: '+50% engajamento no primeiro contato',
  },
  {
    problem: 'Dados fragmentados entre showroom, oficina e pós-venda',
    solution: 'Visão 360° do cliente com inteligência de dados unificada',
    result: '+40% retenção de clientes',
  },
  {
    problem: 'Vendedores recebem leads sem contexto sobre preferências',
    solution: 'Briefing automático de cliente: perfil, valores e pontos-chave da conversa',
    result: '+25% taxa de fechamento',
  },
];

const cases = [
  {
    sector: 'Grupo GWM/Haval Brasil',
    problem: 'Atendimento digital não identificava o perfil de compra dos leads',
    approach: 'Concierge Digital treinado para distinguir clientes que valorizam os 393cv do Haval H6 vs. os que priorizam segurança 5 estrelas e ADAS',
    results: ['Conversão de leads +45%', 'Tempo de qualificação -60%', 'Satisfação do cliente +32%'],
  },
  {
    sector: 'Grupo automotivo premium brasileiro',
    problem: 'Dados isolados em 12 concessionárias, vendedores recebiam leads sem contexto',
    approach: 'Concierge Digital + Data warehouse unificado com briefing automático para vendedores',
    results: ['Visão 360° de 180k clientes', 'Taxa de fechamento +28%', 'Campanhas 3x mais efetivas'],
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
              IA para conversão de leads em{' '}
              <span className="text-display-gradient">concessionárias premium</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
              Inteligência de dados e IA estratégica para grupos automotivos que
              vendem experiência, não apenas veículos. Tecnologia brasileira com
              expertise comprovada no setor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-150">
              <a href={WHATSAPP_AUTOMOTIVO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Agendar Diagnóstico Automotivo
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
              <h2 className="text-h2">Concierge Digital de Vendas Automotivo</h2>
              <p className="text-lead">IA treinada em Neurolinguística e Venda Consultiva para o setor automotivo</p>
            </div>

            <div className="card p-8 mb-10 border-l-4 border-[var(--color-primary-500)]">
              <h3 className="text-h4 mb-4">Exemplo Real: Haval H6 vs GWM Tank 300</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-[var(--bg-secondary)] rounded-xl">
                  <p className="text-overline text-[var(--color-primary-600)] mb-2">Perfil Performance</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                    Cliente menciona &quot;potência&quot;, &quot;aceleração&quot;, &quot;ultrapassagem&quot;.
                    O Concierge Digital identifica e destaca:
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
                  <p className="text-overline text-[var(--color-success-600)] mb-2">Perfil Segurança</p>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-3">
                    Cliente menciona &quot;família&quot;, &quot;proteção&quot;, &quot;tecnologia&quot;.
                    O Concierge Digital identifica e destaca:
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
                A mesma IA, adaptando argumentos em tempo real baseado no perfil detectado na conversa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card card-interactive p-6 text-center">
                <p className="text-number-lg text-display-gradient mb-2">+45%</p>
                <p className="text-body-sm text-[var(--text-secondary)]">Conversão de leads com perfilamento</p>
              </div>
              <div className="card card-interactive p-6 text-center">
                <p className="text-number-lg text-display-gradient mb-2">-60%</p>
                <p className="text-body-sm text-[var(--text-secondary)]">Tempo de qualificação de leads</p>
              </div>
              <div className="card card-interactive p-6 text-center">
                <p className="text-number-lg text-display-gradient mb-2">24/7</p>
                <p className="text-body-sm text-[var(--text-secondary)]">Atendimento consultivo ininterrupto</p>
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
              <h2 className="text-h2">Por que a Dexi para automotivo?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Concierge, não chatbot</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">IA treinada em Neurolinguística e Venda Consultiva. Entende motivações, não apenas palavras-chave.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Expertise automotivo real</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">10+ anos no setor. Conhecemos DMS, CRM, jornada de compra e ciclos de decisão do cliente automotivo.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Perfilamento em tempo real</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">A cada turno da conversa, identifica valores do cliente e adapta argumentos dinamicamente.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Handoff inteligente</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Vendedor recebe lead qualificado + briefing completo: perfil, objeções e pontos de interesse.</p>
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
              Pronto para transformar seus dados em vendas?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito e descubra como IA pode aumentar
              sua conversão de leads em até 50%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Agendar Diagnóstico em 24h
              </a>
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

