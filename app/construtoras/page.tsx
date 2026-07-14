import TrackedCTA from '@/components/ui/TrackedCTA';
import HeroWave from '@/components/HeroWave';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fykos para Construtoras e Incorporadoras | Dexi Digital',
  description:
    'O Fykos nutre o lead do pré-lançamento à proposta e faz a cobrança amigável das parcelas na venda com recursos próprios — sobre o CRM de vendas que você já usa.',
  keywords: [
    'IA para construtoras',
    'incorporadoras',
    'loteadoras',
    'nutrição de leads',
    'pré-lançamento imobiliário',
    'cobrança amigável de parcelas',
    'venda com recursos próprios',
    'carteira de recebíveis',
    'lançamento imobiliário',
    'Fykos',
  ],
  openGraph: {
    title: 'Fykos para Construtoras e Incorporadoras | Do pré-lançamento à última parcela',
    description:
      'Nutre o lead antes do lançamento e faz a cobrança amigável das parcelas depois da venda — sobre o CRM de vendas e o ERP que você já usa. Zero migração.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const MOMENTOS = [
  {
    overline: 'ANTES DO LANÇAMENTO',
    titulo: 'Nutrição que faz o lead chegar pronto',
    corpo:
      'O lead que aparece no dia do lançamento não pode chegar frio. O Fykos constrói e nutre a base desde o pré-lançamento: cada interessado recebe o contato certo na hora certa e chega ao plantão pronto para a proposta. Quem não fecha hoje continua na base, aquecido até o momento certo.',
  },
  {
    overline: 'DEPOIS DA VENDA',
    titulo: 'Cobrança amigável das parcelas',
    corpo:
      'Venda com recursos próprios é carteira longa. O Fykos acompanha cada parcela e cobra preservando o relacionamento: lembra antes do vencimento e, quando alguém atrasa, escala para o seu time negociar — a receita entra sem desgastar a relação.',
  },
];

const DIFERENCIAIS = [
  {
    titulo: 'Integra, não substitui',
    corpo:
      'O Fykos roda sobre o CRM de vendas e o ERP que a construtora, incorporadora ou loteadora já usa. Conecta ao seu núcleo sem trocar de ferramenta, sem migrar dado, sem parar a operação.',
  },
  {
    titulo: 'Nenhum lead morre',
    corpo:
      'Do pré-lançamento ao plantão, nutre quem demonstrou interesse e reaquece quem visitou e não fechou. O lead que não compra hoje continua na base, vivo até a hora certa de comprar — nada esfria no meio do caminho.',
  },
  {
    titulo: 'Comandos com inteligência, execução em trilhos',
    corpo:
      'Determinístico e auditável: a cobrança amigável das parcelas segue régua aprovada, cada contato tem log, a operação respeita a LGPD e só escala depois que o ROI está aprovado. Sem improviso, sem alucinação.',
  },
];

export default function ConstrutorasPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      {/* Hero — faixa dark autocontida */}
      <section
        id="hero"
        className="dark relative overflow-hidden bg-[var(--bg-primary)] py-24 md:py-36 border-b border-[var(--border-subtle)]"
      >
        <HeroWave />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">
              FYKOS PARA CONSTRUTORAS E INCORPORADORAS
            </p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Lançou, gerou lead, e depois? A Dexi não deixa a{' '}
              <span className="text-result">receita esfriar</span> — do pré-lançamento à última
              parcela.
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              O Fykos nutre o lead antes do lançamento, mantém o interessado aquecido até a proposta
              e, na venda com recursos próprios, faz a cobrança amigável das parcelas — sobre o CRM
              de vendas e o ERP que você já usa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in-up delay-200">
              <TrackedCTA
                type="validation"
                location="hero"
                variant="money"
                text="Agendar diagnóstico de 24h"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dois momentos — nutrição pré-lançamento e cobrança amigável */}
      <section id="momentos" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">
                A receita da incorporadora e da loteadora vive em dois momentos
              </h2>
              <p className="text-lead">O Fykos cuida dos dois — antes do lançamento e depois da venda.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {MOMENTOS.map((m) => (
                <div key={m.titulo} className="card p-6 md:p-8 text-left">
                  <p className="text-overline mb-2">{m.overline}</p>
                  <h3 className="text-h5 mb-2">{m.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{m.corpo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 diferenciais */}
      <section id="diferenciais" className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">
                Do pré-lançamento à última parcela, nenhuma receita fica no meio do caminho
              </h2>
              <p className="text-lead">
                Os três pilares que sustentam o Fykos em qualquer setor — aqui, na linguagem da
                incorporadora e da loteadora.
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
            <p className="text-overline mb-2">CONECTA AO SEU NÚCLEO</p>
            <h2 className="text-h2 mb-8">Integrações</h2>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <span className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]">
                CRM de vendas
              </span>
              <span className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]">
                ERP da obra
              </span>
            </div>
            <p className="text-body-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              O mesmo motor conecta ao sistema-núcleo da sua operação — não troca de sistema,
              ganha uma camada de inteligência sobre ele.
            </p>
          </div>
        </div>
      </section>

      {/* Prova — TGV Empreendimentos */}
      <section id="prova" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-2">PARCEIRO EM CONSTRUTORAS</p>
            <div className="card p-8 md:p-10">
              <h2 className="text-h3 mb-4">TGV Empreendimentos</h2>
              <p className="text-body text-[var(--text-secondary)]">
                Nosso parceiro em construtoras e incorporadoras. É com a TGV que provamos a cobrança
                amigável do Fykos: a carteira de parcelas acompanhada sobre o sistema que a operação
                já usa — com tanto êxito que hoje há cliente procurando a TGV proativamente, antes
                mesmo de ser cobrado.
              </p>
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
          className="w-full shadow-lg text-center flex justify-center items-center py-3 text-sm"
        />
      </div>
    </main>
  );
}
