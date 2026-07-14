import TrackedCTA from '@/components/ui/TrackedCTA';
import HeroWave from '@/components/HeroWave';
import CountUp from '@/components/ui/CountUp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fykos para Grupos Automotivos e Concessionárias | Dexi Digital',
  description:
    'Sistema de receita sobre o seu DMS e Syonet: qualifica, reaquece e ressuscita cada lead. +45% de conversão e R$ 7M+ recuperados em grupos automotivos, sem migrar de sistema.',
  keywords: [
    'IA para concessionárias',
    'atendimento com inteligência artificial',
    'inteligência artificial para concessionárias',
    'qualificação de leads automotivos',
    'lead scoring automotivo',
    'automação de atendimento para concessionárias',
    'CRM automotivo',
    'integração DMS',
    'Syonet',
    'recuperação de leads automotivo',
    'nutrição de leads',
    'grupos automotivos',
    'Fykos',
  ],
  openGraph: {
    title: 'Fykos para Grupos Automotivos | A Dexi não deixa um lead morrer',
    description:
      'Qualifica, reaquece e ressuscita cada oportunidade sobre o DMS e o Syonet que sua concessionária já usa. Zero migração.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const DIFERENCIAIS = [
  {
    titulo: 'Integra, não substitui',
    corpo:
      'O Fykos roda sobre o DMS da montadora e o Syonet que sua loja já usa. Sem trocar de ferramenta, sem migrar dados, sem reescrever processo. Ganha uma camada de inteligência sobre o que já está no ar.',
  },
  {
    titulo: 'Nenhum lead morre',
    corpo:
      'Qualifica o lead no primeiro minuto, reaquece quem esfriou e ressuscita a oportunidade parada na carteira. E quem ainda não está na hora de comprar fica no pipeline, nutrido até o momento certo. O vendedor foca em quem fecha agora; o Fykos não deixa ninguém no limbo do CRM.',
  },
  {
    titulo: 'Comandos com inteligência, execução em trilhos',
    corpo:
      'Determinístico e auditável: cada contato tem log, o ROI é aprovado antes de escalar e a operação respeita a LGPD. Inteligência para decidir, trilhos para executar sem alucinação.',
  },
];

const CLIENTES = [
  'Audi Center Uberlândia',
  'Euroville GWM',
  'Euroville Royal Enfield',
  'Attra Veículos',
  'Vamaq Motors',
];

export default function AutomotivoPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      {/* Hero — faixa dark autocontida com fundo de luz fluindo */}
      <section
        id="hero"
        className="dark relative overflow-hidden bg-[var(--bg-primary)] py-24 md:py-36 border-b border-[var(--border-subtle)]"
      >
        <HeroWave />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">
              FYKOS PARA GRUPOS AUTOMOTIVOS E CONCESSIONÁRIAS
            </p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              O mercado responde o WhatsApp. A Dexi{' '}
              <span className="text-result">não deixa um lead morrer</span>.
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              Sistema de receita sobre o seu DMS e Syonet: qualifica, reaquece e ressuscita cada
              oportunidade — e mantém quem ainda não está pronto nutrido até o momento de compra.
              A receita não vai embora: fica na base e vira previsibilidade de venda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in-up delay-200">
              <TrackedCTA
                type="validation"
                location="hero"
                variant="money"
                text="Agendar diagnóstico de 24h"
                sector="automotivo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prova rápida — números com count-up */}
      <section
        id="prova-rapida"
        className="dark section py-12 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h3 mb-8">A prova está nos números</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card card-result p-6 transition-colors">
                <div className="text-number-hero text-result mb-2">
                  <CountUp to={45} prefix="+" suffix="%" />
                </div>
                <div className="text-body-sm font-medium text-[var(--text-primary)]">
                  Conversão de leads
                </div>
              </div>
              <div className="card card-result p-6 transition-colors">
                <div className="text-number-hero text-result mb-2">
                  <CountUp to={7} prefix="R$ " suffix="M+" />
                </div>
                <div className="text-body-sm font-medium text-[var(--text-primary)]">
                  Receita recuperada
                </div>
              </div>
              <div className="card card-result p-6 transition-colors">
                <div className="text-number-hero text-result mb-2">
                  <CountUp to={35} prefix="Até " suffix="%" />
                </div>
                <div className="text-body-sm font-medium text-[var(--text-primary)]">
                  Recuperação de carteira
                </div>
              </div>
            </div>

            <div className="card card-result mt-6 p-6 md:p-8 transition-colors">
              <p className="text-overline mb-2">DESTAQUE</p>
              <p className="text-body md:text-lg text-[var(--text-primary)]">
                Um Audi RS Q8 de <span className="text-result font-bold">R$ 1 milhão</span> vendido
                com apenas 15 dias de operação do Fykos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contraste — IA de prateleira × Dexi */}
      <section id="contraste" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">POR QUE NÃO É MAIS UM BOT</p>
              <h2 className="text-h2">Prateleira responde. Dexi executa o ciclo de receita.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6 md:p-8 border-l-4 border-l-red-500 text-left">
                <h3 className="text-h5 mb-4">IA de prateleira</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Responde e para no agendamento — deixa a venda pela metade.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Exige que você migre para o CRM dela e abandone o DMS/Syonet.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Lead frio esfria de vez. Nada ressuscita a carteira parada.</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6 md:p-8 border-l-4 border-l-[var(--color-primary-500)] text-left">
                <h3 className="text-h5 mb-4">Dexi · Fykos</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Executa o ciclo de receita inteiro: qualifica, nutre, reaquece e fecha.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Roda sobre o DMS da montadora e o Syonet. Zero migração.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Ressuscita o lead esquecido com log auditável de cada contato.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 diferenciais */}
      <section id="diferenciais" className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Três diferenciais que colocam dinheiro no bolso do dono</h2>
              <p className="text-lead">
                Os três pilares que sustentam o Fykos em qualquer setor — aqui, na linguagem da
                concessionária.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {DIFERENCIAIS.map((d, i) => (
                <div key={d.titulo} className="card p-6 md:p-8 text-left">
                  <span className="text-number text-[var(--color-primary-500)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-h5 mt-3 mb-2">{d.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{d.corpo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrações */}
      <section
        id="integracoes"
        className="section bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-2">RODA SOBRE O QUE SUA OPERAÇÃO JÁ USA</p>
            <h2 className="text-h2 mb-8">Integrações</h2>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <span className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]">
                DMS das montadoras
              </span>
              <span className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]">
                Syonet
              </span>
              <span className="card px-6 py-3 text-body-sm font-medium text-[var(--text-tertiary)]">
                NBS · em breve
              </span>
            </div>
            <p className="text-body-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              O mesmo motor conecta ao sistema-núcleo da sua loja — não troca de sistema, ganha uma
              camada de inteligência sobre ele.
            </p>
          </div>
        </div>
      </section>

      {/* Prova — barra de clientes (texto, sem logo) */}
      <section id="clientes" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-2">ONDE JÁ PROVAMOS</p>
            <h2 className="text-h3 mb-8">
              Grupos automotivos já rodam o Fykos na operação — do super esportivo ao premium e duas
              rodas.
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
              {CLIENTES.map((nome) => (
                <span
                  key={nome}
                  className="text-body-sm md:text-base font-semibold text-[var(--text-secondary)]"
                >
                  {nome}
                </span>
              ))}
            </div>
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
              Mapeamos seu funil e projetamos o ROI em 24 horas.
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Se não fechar a conta, o diagnóstico é seu. Sem compromisso, sem migração.
            </p>
            <TrackedCTA
              type="validation"
              location="cta-final"
              variant="money"
              text="Agendar diagnóstico de 24h"
              sector="automotivo"
            />
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-t border-[var(--border-subtle)] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <TrackedCTA
          type="validation"
          location="mobile-sticky"
          variant="money"
          text="Agendar diagnóstico de 24h"
          sector="automotivo"
          className="w-full shadow-lg text-center flex justify-center items-center py-3 text-sm"
        />
      </div>
    </main>
  );
}
