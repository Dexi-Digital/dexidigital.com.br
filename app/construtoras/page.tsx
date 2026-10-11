import TrackedCTA from '@/components/ui/TrackedCTA';
import ClientLogos, { CONSTRUCTION_CLIENTS } from '@/components/ui/ClientLogos';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Gestão de carteira para construtoras e incorporadoras',
  description:
    'Gestão de carteira para construtoras e incorporadoras que financiam com recursos próprios: emissão de boletos, gestão da carteira de ativos e cobrança que preserva o relacionamento. Carteira em dia, inadimplência sob controle e previsibilidade de recebimento.',
  keywords: [
    'gestão de carteira',
    'construtoras',
    'incorporadoras',
    'loteadoras',
    'financiamento com recursos próprios',
    'venda com recursos próprios',
    'emissão de boletos',
    'cobrança de parcelas',
    'carteira de recebíveis',
    'inadimplência',
    'pré-lançamento imobiliário',
    'Fykos',
  ],
  openGraph: {
    title: 'Fykos para Construtoras e Incorporadoras | Carteira em dia, receita previsível',
    description:
      'Gestão de carteira para quem financia com recursos próprios: emissão de boletos, gestão da carteira de ativos e cobrança que preserva o relacionamento com o comprador.',
    type: 'website',
    locale: 'pt_BR',
  },
};

// Gestão de carteira é o centro; a nutrição de pré-lançamento entra como aplicação complementar.
const MOMENTOS = [
  {
    overline: 'DEPOIS DA VENDA',
    titulo: 'Gestão de carteira e cobrança',
    corpo:
      'Venda com recursos próprios é carteira longa. O Fykos cuida da emissão de boletos, acompanha cada parcela da carteira de ativos e cobra preservando o relacionamento: lembra antes do vencimento e, quando alguém atrasa, escala para o seu time negociar. A receita entra sem desgastar a relação com o comprador.',
  },
  {
    overline: 'ANTES DO LANÇAMENTO',
    titulo: 'Nutrição que faz o lead chegar pronto',
    corpo:
      'O lead que aparece no dia do lançamento não pode chegar frio. O Fykos constrói e nutre a base desde o pré-lançamento: cada interessado recebe o contato certo na hora certa e chega ao plantão pronto para a proposta. Quem não fecha hoje continua na base, aquecido até o momento certo.',
  },
];

const DIFERENCIAIS = [
  {
    titulo: 'Carteira acompanhada parcela a parcela',
    corpo:
      'Cada parcela da carteira de ativos fica acompanhada: boleto emitido, lembrete antes do vencimento e cobrança quando há atraso, com encaminhamento ao seu time para negociar. Inadimplência sob controle sem desgastar o relacionamento.',
  },
  {
    titulo: 'Comandos com inteligência, execução em trilhos',
    corpo:
      'Regras definidas e cada contato registrado: a cobrança segue a régua aprovada pela operação, cada contato fica auditável e a operação respeita a LGPD. Sem improviso na relação com quem comprou.',
  },
  {
    titulo: 'Integra, não substitui',
    corpo:
      'O Fykos roda sobre o CRM de vendas e o ERP que a construtora, incorporadora ou loteadora já usa. Sem trocar de ferramenta e sem parar a operação.',
  },
];

export default function ConstrutorasPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      <BreadcrumbSchema
        trilha={[
          { nome: 'Construtoras', url: '/construtoras' },
        ]}
      />
      {/* Hero: faixa dark autocontida */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[var(--bg-primary)] py-24 md:py-36 border-b border-[var(--border-subtle)]"
      >
        <div className="hero-img-bg hero-img-bg--light" aria-hidden="true" />
        <div className="hero-img-bg hero-img-bg--dark" aria-hidden="true" />
        <div className="hero-img-scrim" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">
              GESTÃO DE CARTEIRA PARA CONSTRUTORAS E INCORPORADORAS
            </p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Na venda com recursos próprios, a receita só entra com a{' '}
              <span className="text-result">carteira em dia</span>.
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              O Fykos faz a gestão de carteira para construtoras e incorporadoras que financiam com
              recursos próprios: emissão de boletos, gestão da carteira de ativos e cobrança que
              preserva o relacionamento com o comprador. Inadimplência sob controle e previsibilidade
              de recebimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in-up delay-200">
              <TrackedCTA
                type="aderencia"
                location="construtoras-hero"
                variant="money"
                text="Avaliar aderência da minha operação"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dois momentos: gestão de carteira (centro) e nutrição pré-lançamento (complementar) */}
      <section id="momentos" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">
                Na venda com recursos próprios, a receita se realiza na carteira
              </h2>
              <p className="text-lead">
                A gestão de carteira é o centro. A nutrição de leads antes do lançamento entra como
                aplicação complementar.
              </p>
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
              <h2 className="text-h2">Carteira em dia é receita previsível</h2>
              <p className="text-lead">
                Os três pilares que sustentam o Fykos em qualquer setor, aqui na linguagem da
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
              O mesmo motor conecta ao sistema-núcleo da sua operação: não troca de sistema,
              ganha uma camada de inteligência sobre ele.
            </p>
          </div>
        </div>
      </section>

      {/* Prova: logo do cliente, sem narrativa nem descrição de quem é quem */}
      <section id="prova" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-2">QUEM JÁ USA</p>
            <div className="card p-8 md:p-10">
              <h2 className="text-h3 mb-6">A cobrança de carteira do Fykos já roda em operação</h2>
              <ClientLogos logos={CONSTRUCTION_CLIENTS} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="cta" className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-4">
              CONVERSA DE ADERÊNCIA
            </p>
            <h2 className="text-display-lg text-white mb-4">
              A receita da sua carteira já foi vendida. Falta recebê-la.
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma
              oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira
              nesta etapa.
            </p>
            <TrackedCTA
              type="aderencia"
              location="construtoras-cta-final"
              variant="money"
              text="Solicitar conversa de aderência"
            />
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-t border-[var(--border-subtle)] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <TrackedCTA
          type="aderencia"
          location="construtoras-mobile-sticky"
          variant="money"
          text="Avaliar aderência"
          className="w-full shadow-lg text-center flex justify-center items-center py-3 text-sm"
        />
      </div>
    </main>
  );
}
