import TrackedCTA from '@/components/ui/TrackedCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Fykos | Sistema Operacional de Receita | Dexi Digital',
  description:
    'O Fykos é o ecossistema proprietário da Dexi: uma camada de dados e IA que roda sobre o sistema-núcleo que sua operação já usa, executando o ciclo de receita de forma determinística, auditável e em conformidade com a LGPD.',
  keywords: [
    'Fykos',
    'Sistema Operacional de Receita',
    'arquitetura de IA',
    'camada de inteligência sobre CRM',
    'integração DMS Syonet',
    'IA determinística auditável',
    'engenharia de receita',
  ],
  openGraph: {
    title: 'O Fykos | Sistema Operacional de Receita',
    description:
      'A engenharia por trás do Fykos: integra sem substituir, executa o ciclo de receita em trilhos e prova ROI antes de escalar. Inteligência nos comandos, trilhos na execução.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const CAMADAS = [
  {
    n: '01',
    titulo: 'Conectores — integra, não substitui',
    corpo:
      'O Fykos se conecta ao sistema-núcleo que a operação já usa — DMS das montadoras, Syonet, CRM de vendas, ERP, sistema de gestão/prontuário — via integração de dados. Não troca de ferramenta, não migra base, não interrompe a operação. Ganha-se uma camada sobre o que já está no ar.',
  },
  {
    n: '02',
    titulo: 'Motor de dados — a operação vira contexto',
    corpo:
      'Leads, histórico, funil e carteira são unificados e normalizados em tempo quase real. É essa base de dados consolidada que dá à inteligência o contexto para decidir com precisão — qualificar, priorizar e reaquecer com base no que realmente aconteceu na operação.',
  },
  {
    n: '03',
    titulo: 'Camada de inteligência — comandos com inteligência',
    corpo:
      'A IA orquestra os melhores modelos de linguagem do mercado para ler o contexto, entender a intenção e decidir a próxima melhor ação da jornada. Conduz conversas complexas, qualifica, nutre quem ainda não está pronto e ressuscita a oportunidade parada — do primeiro contato ao fechamento. O valor não está no modelo: está na engenharia ao redor dele.',
  },
  {
    n: '04',
    titulo: 'Execução em trilhos — determinística e auditável',
    corpo:
      'Nossa aposta de engenharia: a jornada é modelada sobre teoria dos grafos e conceitos de teoria da computação, então cada decisão é um caminho rastreável — determinístico, sem alucinação, com log de cada contato e sob a LGPD. Quando o caso exige, o Fykos escala para o humano; e o ROI é validado antes de escalar.',
  },
];

const PILARES = [
  {
    titulo: 'Integra, não substitui',
    corpo:
      'Roda sobre o sistema-núcleo que você já usa. Zero migração, zero troca de ferramenta.',
  },
  {
    titulo: 'Nenhum lead morre',
    corpo:
      'Qualifica, nutre, reaquece e ressuscita cada oportunidade. Quem não compra hoje fica na base, vivo até o momento certo.',
  },
  {
    titulo: 'Comandos com inteligência, execução em trilhos',
    corpo:
      'Determinístico, auditável, LGPD. ROI aprovado antes de escalar. Sem improviso, sem alucinação.',
  },
];

export default function OFykosPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      {/* Hero — fundo por imagem (dark/light por tema) */}
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
              O FYKOS · SISTEMA OPERACIONAL DE RECEITA
            </p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Não é mais um software. É a camada que faz seus dados{' '}
              <span className="text-result">virarem receita</span>.
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              O Fykos é o ecossistema proprietário da Dexi Digital. Uma camada de dados e IA que roda
              sobre o sistema-núcleo que sua operação já usa e executa o ciclo de receita inteiro —
              de forma determinística, auditável e sob a LGPD. Não é IA genérica. É engenharia de
              receita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in-up delay-200">
              <TrackedCTA
                type="validation"
                location="hero"
                variant="money"
                text="Agendar diagnóstico de 24h"
              />
              <TrackedCTA
                type="custom"
                location="hero"
                variant="secondary"
                text="Visitar o site do Fykos →"
                href="https://fykos.com.br"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lema */}
      <section className="section py-14 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="container">
          <p className="text-h3 text-center max-w-3xl mx-auto text-[var(--text-primary)]">
            Inteligência nos comandos, <span className="text-result">trilhos na execução.</span>
          </p>
        </div>
      </section>

      {/* Números técnicos */}
      <section className="dark section py-12 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card card-result p-6 text-center">
              <div className="text-number-hero text-result mb-2">7–21</div>
              <div className="text-body-sm font-medium text-[var(--text-primary)]">
                dias de onboarding — 7 nos casos simples, até 21 nos complexos
              </div>
            </div>
            <div className="card card-result p-6 text-center">
              <div className="text-number-hero text-result mb-2">99,8%</div>
              <div className="text-body-sm font-medium text-[var(--text-primary)]">
                de uptime na operação
              </div>
            </div>
            <div className="card card-result p-6 text-center">
              <div className="text-number-hero text-result mb-2">Single-tenant</div>
              <div className="text-body-sm font-medium text-[var(--text-primary)]">
                infraestrutura isolada por cliente, com criptografia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitetura — as camadas */}
      <section id="arquitetura" className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">COMO O FYKOS É CONSTRUÍDO</p>
              <h2 className="text-h2">Quatro camadas entre o seu dado e a sua receita</h2>
              <p className="text-lead">
                Uma arquitetura em camadas que se apoia no que você já tem e devolve execução, não
                mais um sistema para gerenciar.
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
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section id="pilares" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">A espinha que não muda, em qualquer setor</h2>
              <p className="text-lead">
                O mesmo motor conecta ao núcleo de qualquer operação. Muda a dor e a integração; os
                três pilares permanecem.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {PILARES.map((p, i) => (
                <div key={p.titulo} className="card p-6 md:p-8 text-left">
                  <span className="text-number text-[var(--color-primary-500)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-h5 mt-3 mb-2">{p.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{p.corpo}</p>
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
            <p className="text-overline mb-2">INTEGRAÇÕES</p>
            <h2 className="text-h2 mb-8">Conecta ao seu núcleo — via API e webhook, com autenticação</h2>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {['Syonet', 'AutoConf'].map((sis) => (
                <span
                  key={sis}
                  className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]"
                >
                  {sis}
                </span>
              ))}
              <span className="card px-6 py-3 text-body-sm font-medium text-[var(--text-tertiary)]">
                novas integrações sob demanda
              </span>
            </div>
            <p className="text-body-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              Integrações em produção hoje, conectadas por API e webhook — cada uma com sua camada de
              autenticação. Como é cloud-agnostic, o Fykos roda na nuvem homologada pela sua operação.
              O mesmo motor conecta ao sistema-núcleo de qualquer setor: não troca de sistema, ganha
              uma camada de inteligência sobre ele.
            </p>
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

      {/* Link para o produto */}
      <section id="produto" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-2">O PRODUTO</p>
            <div className="card p-8 md:p-10">
              <h2 className="text-h3 mb-4">Conheça o Fykos por dentro</h2>
              <p className="text-body text-[var(--text-secondary)] mb-8">
                O Fykos tem site próprio, com a visão de produto, recursos e novidades do ecossistema.
              </p>
              <TrackedCTA
                type="custom"
                location="produto"
                variant="money"
                text="Visitar fykos.com.br →"
                href="https://fykos.com.br"
              />
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
              Veja o Fykos rodando sobre a sua operação.
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
