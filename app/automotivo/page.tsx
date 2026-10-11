import TrackedCTA from '@/components/ui/TrackedCTA';
import ClientLogos from '@/components/ui/ClientLogos';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Fykos para Grupos Automotivos e Concessionárias',
  description:
    'Cada lead que chega ao seu grupo já custou caro. O Fykos acompanha cada oportunidade até o momento de compra, para que essa receita fique na base e vire previsibilidade de venda.',
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
    title: 'Fykos para Grupos Automotivos | A Dexi não deixa a receita esfriar',
    description:
      'Cada lead que chega ao seu grupo já custou caro. O Fykos acompanha cada oportunidade até o momento de compra, para que essa receita fique na base e vire previsibilidade de venda.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const DIFERENCIAIS = [
  {
    titulo: 'A receita que já custou caro fica na base',
    corpo:
      'Cada lead chegou ao grupo com investimento. O Fykos qualifica o contato, reaquece quem esfriou e retoma a oportunidade parada na carteira. Quem ainda não está na hora de comprar segue acompanhado até o momento de compra, e o vendedor foca em quem fecha agora.',
  },
  {
    titulo: 'Comandos com inteligência, execução em trilhos',
    corpo:
      'Regras definidas e cada etapa relevante registrada: a execução segue as regras de negócio do grupo, cada contato fica auditável e a operação respeita a LGPD. Inteligência para decidir, trilhos para executar com controle.',
  },
  {
    titulo: 'Integra, não substitui',
    corpo:
      'O Fykos roda sobre o CRM e o DMS que o grupo já usa, como o Syonet. Sem trocar de ferramenta e sem reescrever processo: uma camada de inteligência sobre o que já está no ar.',
  },
];

const PUBLICOS = [
  {
    tag: 'Grupos automotivos',
    titulo: 'O lead que custou caro não espera o horário comercial',
    corpo:
      'A pesquisa do consumidor acontece a qualquer hora. O Fykos mantém o atendimento em andamento: qualifica, agenda e reaquece, e entrega ao vendedor um lead pronto para negociar, com a jornada online preservada quando ele chega à loja.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    tag: 'Diretores de marca',
    titulo: 'Insight de desempenho em tempo real, não em relatório de fim de mês',
    corpo:
      'Cada contato gera log auditável. O diretor vê onde a conversão trava, qual concessionária executa bem o ciclo de atendimento e qual campanha está reaquecendo carteira. Decisão orientada por dado, não por achismo.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    tag: 'Fábricas / montadoras',
    titulo: 'Onde investir: qual modelo puxa a demanda, qual loja entrega resultado',
    corpo:
      'Consolidado entre concessionárias e regiões, o Fykos mostra quais modelos concentram procura e quais lojas convertem melhor essa demanda: dado de rede para decisão de fábrica, não só de balcão.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    tag: 'Cliente final',
    titulo: 'Acolhimento que não termina na entrega das chaves',
    corpo:
      'Atenção e acompanhamento contínuo: lembrete de revisão, agendamento de recall, contato no momento certo do pós-venda. É esse cuidado constante que constrói a confiança de proximidade com a marca, evitando os transtornos que pegam o cliente de surpresa depois que o carro sai da loja.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
];

export default function AutomotivoPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      <BreadcrumbSchema
        trilha={[
          { nome: 'Automotivo', url: '/automotivo' },
        ]}
      />
      {/* Hero: faixa dark autocontida com fundo de luz fluindo */}
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
              FYKOS PARA GRUPOS AUTOMOTIVOS E CONCESSIONÁRIAS
            </p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              O mercado responde o WhatsApp. A Dexi{' '}
              <span className="text-result">não deixa a receita esfriar</span>.
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              Cada lead que chega ao seu grupo já custou caro. O Fykos acompanha cada oportunidade
              até o momento de compra, para que essa receita fique na base e vire previsibilidade de
              venda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in-up delay-200">
              <TrackedCTA
                type="aderencia"
                location="automotivo-hero"
                variant="money"
                text="Avaliar aderência da minha operação"
              />
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
                Os três pilares que sustentam o Fykos em qualquer setor: aqui, na linguagem da
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

      {/* Benefícios por público: toda a cadeia no mesmo motor */}
      <section
        id="beneficios-cadeia"
        className="section bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]"
      >
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">UM MOTOR, TODA A CADEIA</p>
              <h2 className="text-h2">
                Não é loja física contra internet: é a mesma jornada, de ponta a ponta
              </h2>
              <p className="text-lead">
                Do primeiro clique na pesquisa até a revisão pós-venda, o Fykos entrega um benefício
                diferente para cada elo da cadeia automotiva, sobre os sistemas que o grupo já usa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {PUBLICOS.map((p) => (
                <div key={p.tag} className="card-feature">
                  <div className="icon-wrapper">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {p.icon}
                    </svg>
                  </div>
                  <span className="badge badge-primary mb-3">{p.tag}</span>
                  <h3 className="text-h5 mb-2">{p.titulo}</h3>
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
            <p className="text-overline mb-2">RODA SOBRE O QUE SUA OPERAÇÃO JÁ USA</p>
            <h2 className="text-h2 mb-8">Integrações</h2>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <span className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]">
                DMS das montadoras
              </span>
              <span className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]">
                Syonet
              </span>
              <span className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]">
                AutoConf
              </span>
              <span className="card px-6 py-3 text-body-sm font-medium text-[var(--text-tertiary)]">
                NBS · em breve
              </span>
            </div>
            <p className="text-body-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              O mesmo motor conecta ao sistema-núcleo da sua loja: não troca de sistema, ganha uma
              camada de inteligência sobre ele.
            </p>
          </div>
        </div>
      </section>

      {/* Prova: logos como amostra dos grupos atendidos, sem descrever quem é quem */}
      <section id="clientes" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-2">PROVAS</p>
            <h2 className="text-h3 mb-4">Grupos automotivos já rodam o Fykos na operação</h2>
            <p className="text-body-sm text-[var(--text-tertiary)] mb-8">
              Alguns dos grupos atendidos
            </p>
            <ClientLogos />
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
              Seu grupo já pagou por cada lead da base.
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma
              oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira
              nesta etapa.
            </p>
            <TrackedCTA
              type="aderencia"
              location="automotivo-cta-final"
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
          location="automotivo-mobile-sticky"
          variant="money"
          text="Avaliar aderência"
          className="w-full shadow-lg text-center flex justify-center items-center py-3 text-sm"
        />
      </div>
    </main>
  );
}
