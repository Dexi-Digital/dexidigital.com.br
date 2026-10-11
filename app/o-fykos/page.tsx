import TrackedCTA from '@/components/ui/TrackedCTA';
import type { Metadata } from 'next';

const DESCRICAO =
  'O Fykos é o produto da Dexi para inteligência e execução comercial: atua sobre os sistemas existentes, identifica oportunidades, orienta a próxima ação e executa processos dentro de regras definidas, com rastreabilidade.';

export const metadata: Metadata = {
  title: 'O Fykos: inteligência e execução comercial',
  description: DESCRICAO,
  keywords: [
    'Fykos',
    'inteligência comercial',
    'execução comercial',
    'Sistema Operacional de Receita',
    'camada de inteligência sobre CRM',
    'priorização de oportunidades',
    'reativação de carteira',
  ],
  openGraph: {
    title: 'O Fykos: inteligência e execução comercial',
    description: DESCRICAO,
    type: 'website',
    locale: 'pt_BR',
  },
};

// Textos de funcionalidade: proposta editorial do reposicionamento. Conferir se
// cada fluxo está em produção antes de publicar (ver plano de 2026-10-11).
const ETAPAS = [
  { verbo: 'Detectar', texto: 'Conectar sinais de estoque, CRM e histórico de atendimento.' },
  { verbo: 'Priorizar', texto: 'Distinguir oportunidades relevantes usando contexto e critérios comerciais.' },
  {
    verbo: 'Executar',
    texto:
      'Iniciar abordagens, qualificar, notificar responsáveis e encaminhar exceções ao humano quando necessário.',
  },
  { verbo: 'Verificar', texto: 'Acompanhar resultados, falhas e motivos de escalonamento com rastreabilidade.' },
];

const APLICACOES = [
  { titulo: 'Carteira e oportunidades', texto: 'Reativação contextual quando uma condição relevante muda.' },
  {
    titulo: 'Entrada de demanda',
    texto: 'Atendimento receptivo com qualificação, contexto e transição ao vendedor.',
  },
  { titulo: 'Copiloto comercial', texto: 'Apoio à decisão e à priorização pelo time comercial.' },
  {
    titulo: 'Relacionamento contínuo',
    texto: 'Ações após a primeira interação, conforme regras e consentimentos aplicáveis.',
  },
];

const GOVERNANCA = [
  { titulo: 'Conectores', texto: 'Ligam o Fykos aos sistemas existentes, sem exigir a troca do CRM.' },
  { titulo: 'Regras e validações', texto: 'Definem o que pode ser executado, por quem e em que condições.' },
  { titulo: 'Observabilidade', texto: 'Eventos, ações e falhas ficam registrados para análise e auditoria.' },
  { titulo: 'Limites e exceções', texto: 'Situações fora da regra são encaminhadas ao humano responsável.' },
];

// Área técnica, para times de TI: fica abaixo da dobra.
const CAMADAS = [
  {
    n: '01',
    titulo: 'Conectores: integra, não substitui',
    corpo:
      'O Fykos se conecta aos sistemas que a operação já usa (CRM, estoque e demais fontes autorizadas) por API e webhook, cada um com sua camada de autenticação. Não exige troca de ferramenta nem migração de base.',
  },
  {
    n: '02',
    titulo: 'Motor de dados: a operação vira contexto',
    corpo:
      'Leads, histórico, estoque e carteira são unificados e normalizados. É essa base consolidada que dá contexto para identificar oportunidades e priorizar a próxima ação.',
  },
  {
    n: '03',
    titulo: 'Camada de inteligência: interpreta o contexto',
    corpo:
      'Modelos de linguagem leem o contexto, entendem a intenção e orientam a próxima ação. O valor não está no modelo: está na engenharia ao redor dele.',
  },
  {
    n: '04',
    titulo: 'Execução com regras: rastreável e auditável',
    corpo:
      'A jornada é modelada sobre teoria dos grafos: cada decisão segue um caminho rastreável, com registro de cada contato e sob a LGPD. Quando o caso exige, o Fykos encaminha ao humano.',
  },
];

export default function OFykosPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      {/* Hero: fundo por imagem (dark/light por tema) */}
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
              FYKOS | INTELIGÊNCIA E EXECUÇÃO COMERCIAL
            </p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Da oportunidade identificada à ação executada.{' '}
              <span className="text-result">Com controle.</span>
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              O Fykos atua sobre sistemas comerciais existentes. Observa dados e eventos, identifica
              situações que exigem atenção, orienta a próxima ação e executa processos dentro de
              regras definidas. Cada etapa relevante pode ser acompanhada e auditada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in-up delay-200">
              <TrackedCTA
                type="aderencia"
                location="o-fykos-hero"
                variant="money"
                text="Entender a aplicação na minha operação"
              />
              <TrackedCTA
                type="custom"
                location="o-fykos-hero"
                variant="secondary"
                text="Como funciona"
                href="#como-funciona"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fluxo de trabalho */}
      <section id="como-funciona" className="section bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">FLUXO DE TRABALHO</p>
              <h2 className="text-h2">Quatro etapas, do sinal ao resultado</h2>
            </div>

            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ETAPAS.map((etapa, i) => (
                <li key={etapa.verbo} className="card p-6 text-left">
                  <span className="text-number text-[var(--color-primary-500)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-h5 mt-3 mb-2">{etapa.verbo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{etapa.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section id="aplicacoes" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">APLICAÇÕES</p>
              <h2 className="text-h2">Onde o Fykos se aplica</h2>
              <p className="text-lead">
                As aplicações dependem dos módulos contratados, do volume e dos dados disponíveis em
                cada operação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {APLICACOES.map((app) => (
                <div key={app.titulo} className="card p-6 md:p-8 text-left">
                  <h3 className="text-h5 mb-2">{app.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{app.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engenharia e governança */}
      <section id="governanca" className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">ENGENHARIA E GOVERNANÇA</p>
              <h2 className="text-h2">Inteligência para interpretar. Regras para executar.</h2>
              <p className="text-lead">
                A inteligência interpreta contexto, enquanto conectores, regras e validações controlam a
                execução. Integrações, observabilidade, limites e tratamento de exceções ajudam a
                reduzir falhas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {GOVERNANCA.map((item) => (
                <div key={item.titulo} className="card p-6 text-left border-l-4 border-l-[var(--color-primary-500)]">
                  <h3 className="text-h6 mb-2">{item.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Área técnica: arquitetura em camadas, para times de TI */}
      <section id="arquitetura" className="section bg-[var(--bg-primary)] border-y border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">PARA TIMES DE TI</p>
              <h2 className="text-h2">Arquitetura em quatro camadas</h2>
              <p className="text-lead">
                Para quem avalia a implementação: como o Fykos se apoia no que a operação já tem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {CAMADAS.map((c) => (
                <div key={c.n} className="card p-6 md:p-8 text-left">
                  <span className="text-number text-[var(--color-primary-500)]">{c.n}</span>
                  <h3 className="text-h5 mt-3 mb-2">{c.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{c.corpo}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 card p-6 md:p-8 text-left">
              <h3 className="text-h5 mb-4">Integrações e infraestrutura</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                {['Syonet', 'AutoConf'].map((sis) => (
                  <span
                    key={sis}
                    className="card px-5 py-2 text-body-sm font-semibold text-[var(--text-primary)]"
                  >
                    {sis}
                  </span>
                ))}
                <span className="card px-5 py-2 text-body-sm font-medium text-[var(--text-tertiary)]">
                  novas integrações sob demanda
                </span>
              </div>
              <p className="text-body-sm text-[var(--text-secondary)] mb-4">
                Integrações em produção hoje, conectadas por API e webhook, cada uma com sua camada de
                autenticação. Infraestrutura isolada por cliente (single-tenant), com criptografia; como
                é cloud-agnostic, o Fykos roda na nuvem homologada pela operação.
              </p>
              <a
                href="https://fykos.com.br/#nos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--color-primary-600)] hover:underline"
              >
                Ver os componentes do Fykos (os sete nós) →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Engenharia por trás */}
      <section id="engenharia" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-2">A ENGENHARIA POR TRÁS</p>
            <h2 className="text-h2 mb-4">Feito por quem constrói software crítico</h2>
            <p className="text-body text-[var(--text-secondary)] mb-6">
              O Fykos é construído pela engenharia da Dexi Digital, com mais de uma década em sistemas
              críticos e alta complexidade. À frente da tecnologia está Lorrayne Paraíso, arquiteta
              principal do Fykos.
            </p>
            <a
              href="https://www.linkedin.com/in/lorrayne-paraiso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--color-primary-600)] hover:underline"
            >
              Lorrayne Paraíso no LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="cta" className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-4">
              Avaliar aderência técnica e econômica ao Fykos.
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Uma conversa para entender sua operação, os sistemas em uso e os dados disponíveis, e
              verificar se existe uma aplicação concreta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TrackedCTA
                type="aderencia"
                location="o-fykos-cta-final"
                variant="money"
                text="Entender a aplicação na minha operação"
              />
              <TrackedCTA type="synapse" location="o-fykos-cta-final" variant="white" text="Visitar fykos.com.br →" />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-t border-[var(--border-subtle)] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <TrackedCTA
          type="aderencia"
          location="o-fykos-mobile-sticky"
          variant="money"
          text="Avaliar aderência"
          className="w-full shadow-lg text-center flex justify-center items-center py-3 text-sm"
        />
      </div>
    </main>
  );
}
