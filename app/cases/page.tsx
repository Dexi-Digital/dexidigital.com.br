import type { Metadata } from 'next';
import TrackedCTA from '@/components/ui/TrackedCTA';
import CountUp from '@/components/ui/CountUp';

export const metadata: Metadata = {
  title: 'Resultados Reais | Prova em Operação | Dexi Digital',
  description:
    'Prova do Fykos em operação real: venda de alto ticket de R$ 1 milhão conduzida por IA em 15 dias, 1.230 leads processados e R$ 1,79 milhão em pipeline mapeado. Números auditáveis, nomes de clientes preservados.',
  keywords: [
    'resultados Fykos',
    'case IA automotivo',
    'venda de alto ticket com IA',
    'pipeline mapeado com IA',
    'recuperação de leads',
    'ROI IA concessionária',
  ],
};

const HERO_STATS = [
  { to: 1, prefix: 'R$ ', suffix: 'M', label: 'Venda de alto ticket conduzida por IA' },
  { to: 1230, label: 'Leads processados em uma operação' },
  { to: 5, prefix: '1 : ', label: 'Vendas por leads qualificados' },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero: fundo por imagem (dark/light por tema) */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[var(--bg-primary)] py-24 md:py-32 border-b border-[var(--border-subtle)]"
      >
        <div className="hero-img-bg hero-img-bg--light" aria-hidden="true" />
        <div className="hero-img-bg hero-img-bg--dark" aria-hidden="true" />
        <div className="hero-img-scrim" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">RESULTADOS REAIS · PROVA EM OPERAÇÃO</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Números que a operação <span className="text-result">gerou de verdade</span>.
            </h1>
            <p className="text-lead text-[var(--text-secondary)] max-w-2xl mx-auto animate-fade-in-up delay-150">
              Prova do Fykos rodando em operação real. Preservamos o nome dos clientes por
              confidencialidade, mas os números são auditáveis e foram gerados sobre o sistema que a
              operação já usava.
            </p>
          </div>
        </div>
      </section>

      {/* Faixa de números-resumo */}
      <section
        id="numeros"
        className="dark section py-12 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="card card-result p-6 text-center transition-colors">
                <div className="text-number-hero text-result mb-2">
                  <CountUp to={s.to} prefix={s.prefix ?? ''} suffix={s.suffix ?? ''} />
                </div>
                <div className="text-body-sm font-medium text-[var(--text-primary)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case 1: Alto ticket */}
      <section id="alto-ticket" className="section-lg bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full">
                Automotivo · Alto ticket
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full">
                Jornada de compra complexa
              </span>
            </div>

            <h2 className="text-h2 mb-4">
              Um <span className="text-result">Audi RS Q8 de R$ 1 milhão</span> vendido em 15 dias,
              conduzido por IA do primeiro contato ao fechamento.
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">
                    O desafio
                  </h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Vender um veículo de altíssimo ticket não é responder rápido: é conduzir uma
                    jornada longa, com muitas idas e vindas, sem deixar o lead esfriar entre uma etapa
                    e outra. É exatamente onde a IA de prateleira para: responde e devolve para o
                    humano.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">
                    O que o Fykos fez
                  </h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Conduziu a jornada inteira: qualificou, manteve o relacionamento aquecido ao longo
                    de toda a negociação e levou o cliente do primeiro contato ao fechamento, com a
                    consistência que uma venda de sete dígitos exige e escalando para o time humano no
                    momento certo.
                  </p>
                </div>
              </div>

              <div className="card card-result p-8 flex flex-col justify-center text-center">
                <div className="text-number-hero text-result mb-2">
                  <CountUp to={1} prefix="R$ " suffix=" milhão" />
                </div>
                <p className="text-body-sm text-[var(--text-secondary)] mb-6">
                  em ticket, uma única venda
                </p>
                <div className="text-number-lg text-[var(--text-primary)] mb-2">
                  <CountUp to={15} suffix=" dias" />
                </div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  do primeiro contato ao fechamento, via IA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case 2: Volume dentro do grupo */}
      <section id="grupo" className="section-lg section-gradient border-y border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full">
                Automotivo · Duas rodas premium
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full">
                Performance em volume
              </span>
            </div>

            <h2 className="text-h2 mb-4">
              Dentro do próprio grupo: <span className="text-result">1.230 leads</span> processados
              pela inteligência ativa, e uma venda a cada cinco leads qualificados.
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">
                    O desafio
                  </h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Volume alto de leads e a mesma velha história: sem estrutura para priorizar e dar
                    continuidade em escala, boa parte da base vira oportunidade perdida. Timing,
                    inconsistência no atendimento e conversão abaixo do potencial.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">
                    O que o Fykos fez
                  </h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    Processou e qualificou a base inteira com inteligência ativa, priorizou quem tinha
                    real intenção e manteve o funil organizado e vivo, transformando volume disperso
                    em pipeline mensurável e previsível.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="card card-result p-6 text-center">
                  <div className="text-number-hero text-result mb-1">
                    <CountUp to={1230} />
                  </div>
                  <p className="text-body-sm text-[var(--text-secondary)]">leads processados</p>
                </div>
                <div className="card card-result p-6 text-center">
                  <div className="text-number-lg text-result mb-1">R$ 1.792.818,22</div>
                  <p className="text-body-sm text-[var(--text-secondary)]">em pipeline mapeado</p>
                </div>
                <div className="card card-result p-6 text-center">
                  <div className="text-number-lg text-[var(--text-primary)] mb-1">1 : 5</div>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    uma venda para cada cinco leads qualificados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nota de credibilidade */}
      <section className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-body-sm text-[var(--text-tertiary)]">
              Todos os resultados são de operações reais de clientes da Dexi Digital. Os nomes são
              preservados por confidencialidade; os números podem ser demonstrados em uma conversa de
              diagnóstico.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="cta" className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-4">
              DIAGNÓSTICO DE 24H · SEM CUSTO
            </p>
            <h2 className="text-display-lg text-white mb-4">
              Pronto para gerar o seu próximo número?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Mapeamos seu funil e projetamos o ROI em 24 horas. Se não fechar a conta, o diagnóstico
              é seu.
            </p>
            <TrackedCTA
              type="validation"
              location="cta-final"
              variant="money"
              text="Agendar diagnóstico de 24h"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
