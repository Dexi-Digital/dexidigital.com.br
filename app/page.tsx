import Link from 'next/link';
import FAQItem from '@/components/ui/FAQItem';
import TrackedCTA from '@/components/ui/TrackedCTA';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { getHomePageSchemas, localBusinessSchema } from '@/lib/structured-data';
import { CAMPOS_CASO, casosPublicaveis, nomeExibido } from '@/lib/provas';
import type { Metadata } from 'next';

const TITULO = 'Dexi Digital | Tecnologia para decisões comerciais de alto valor';
const DESCRICAO =
  'A Dexi desenvolve sistemas que transformam dados da operação em prioridades e ações comerciais, com regras, supervisão e rastreabilidade — sem exigir a troca do CRM. Criadora do Fykos.';

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  keywords: [
    'inteligência comercial',
    'execução comercial',
    'priorização de oportunidades',
    'decisões comerciais de alto valor',
    'Fykos',
    'sistema operacional de receita',
    'grupos automotivos',
    'integração com CRM',
  ],
  // ATENCAO: declarar `openGraph` aqui SUBSTITUI o do layout inteiro — o Next
  // nao faz merge profundo. Sem repetir url/siteName/images, a home ficava sem
  // og:image e sem og:url, e todo compartilhamento saia sem imagem.
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    type: 'website',
    locale: 'pt_BR',
    url: 'https://dexidigital.com.br',
    siteName: 'Dexi Digital',
    images: [
      {
        url: '/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Dexi Digital: tecnologia para decisões comerciais de alto valor',
      },
    ],
  },
};

// Sinais que passam despercebidos entre sistemas e equipes (bloco "A dor").
const SINAIS = [
  'Uma mudança de estoque',
  'Uma condição comercial',
  'Um contato que voltou a demonstrar intenção',
];

const O_QUE_FAZEMOS = [
  {
    verbo: 'Identificamos',
    texto:
      'Conectamos CRM, estoque, histórico e fontes operacionais autorizadas para reconhecer oportunidades com contexto.',
  },
  {
    verbo: 'Orquestramos',
    texto:
      'Aplicamos regras de negócio para priorizar a próxima ação e encaminhar trabalho ao agente adequado.',
  },
  {
    verbo: 'Executamos e acompanhamos',
    texto:
      'Acionamos fluxos e pessoas, registrando eventos, falhas e resultados para permitir análise e melhoria.',
  },
];

const SETORES = [
  {
    nome: 'Automotivo',
    href: '/automotivo',
    texto: 'Grupos automotivos e concessionárias, sobre o CRM, o estoque e o histórico de atendimento.',
  },
  {
    nome: 'Construtoras e incorporadoras',
    href: '/construtoras',
    texto: 'Carteiras longas, em que acompanhar cada cliente ao longo do contrato faz diferença.',
  },
  {
    nome: 'Clínicas',
    href: '/clinicas',
    texto: 'Retorno, recorrência e relacionamento contínuo com pacientes, sobre o sistema de gestão.',
  },
];

// Fonte única do FAQ visível e do FAQPage em JSON-LD: os dois precisam bater.
const FAQ_HOME = [
  {
    question: 'Preciso trocar o meu CRM?',
    answer:
      'Não. A Dexi integra as fontes que a operação já usa — CRM, estoque, histórico de atendimento e outras fontes autorizadas — e trabalha sobre elas.',
  },
  {
    question: 'Para que tipo de operação isso faz sentido?',
    answer:
      'Para operações em que cada oportunidade tem valor alto e a decisão comercial depende de integração, continuidade e controle, como grupos automotivos. A aplicação depende de volume, dados disponíveis e viabilidade de implementação, e é isso que avaliamos na conversa de aderência.',
  },
  {
    question: 'O que acontece na conversa de aderência?',
    answer:
      'Entendemos a operação, os sistemas em uso e o desafio mais relevante. Se houver aderência, propomos o próximo passo para uma análise mais detalhada; se não houver, dizemos isso com clareza. Nesta etapa não pedimos dados confidenciais de carteira.',
  },
  {
    question: 'Como acompanho o que foi executado?',
    answer:
      'Cada etapa relevante fica registrada: eventos, ações iniciadas, falhas e encaminhamentos ao time. Isso permite auditar o que aconteceu e ajustar as regras ao longo do tempo.',
  },
  {
    question: 'Qual a relação entre a Dexi e o Fykos?',
    answer:
      'A Dexi é a empresa. O Fykos é o produto de inteligência e execução comercial desenvolvido por ela.',
  },
];

export default function HomePage() {
  const pageSchemas = [...getHomePageSchemas(), localBusinessSchema];
  // Só entram cases completos e autorizados (ver lib/provas.ts).
  const casos = casosPublicaveis();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      {pageSchemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <FAQSchema faqs={FAQ_HOME} pageName="Dexi Digital" />

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
              TECNOLOGIA PARA DECISÕES COMERCIAIS DE ALTO VALOR
            </p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Se cada oportunidade vale muito, improviso comercial <span className="text-result">custa caro</span>.
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              A Dexi desenvolve sistemas que transformam dados da operação em prioridades e ações
              comerciais. Integramos fontes existentes, identificamos oportunidades relevantes e
              executamos processos com regras, supervisão e rastreabilidade — sem exigir que sua
              empresa substitua o CRM.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <TrackedCTA type="aderencia" location="hero" variant="money" />
              <TrackedCTA type="synapse" location="hero" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* A dor: o CRM registra, mas ninguém prioriza */}
      <section id="a-dor" className="section bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="text-left">
              <p className="text-overline mb-2">O PONTO CEGO</p>
              <h2 className="text-h2">
                Seu CRM registra o que aconteceu. Mas quem identifica o que merece atenção agora?
              </h2>
            </div>

            <div className="text-left">
              <p className="text-lead text-[var(--text-secondary)] mb-6">
                Uma mudança de estoque, uma condição comercial, um contato que voltou a demonstrar
                intenção: sinais importantes podem passar despercebidos entre sistemas e equipes.
              </p>
              <ul className="space-y-3 mb-8">
                {SINAIS.map((sinal) => (
                  <li key={sinal} className="card px-5 py-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary-500)] shrink-0" aria-hidden="true" />
                    <span className="text-body-sm font-medium text-[var(--text-primary)]">{sinal}</span>
                  </li>
                ))}
              </ul>
              <p className="border-l-4 border-l-[var(--color-primary-500)] pl-5 text-lg leading-relaxed font-semibold text-[var(--text-primary)]">
                Quando a oportunidade é valiosa, o custo não é uma mensagem sem resposta: é uma
                decisão comercial que não aconteceu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section id="o-que-fazemos" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">O QUE FAZEMOS</p>
              <h2 className="text-h2">Dos dados à ação, com controle</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {O_QUE_FAZEMOS.map((item, i) => (
                <div key={item.verbo} className="card p-6 md:p-8 text-left">
                  <span className="text-number text-[var(--color-primary-500)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-h5 mt-3 mb-2">{item.verbo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section id="para-quem" className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">PARA QUEM</p>
              <h2 className="text-h2">Operações em que cada decisão comercial pesa</h2>
              <p className="text-lead">
                Grupos automotivos, operações de alto valor e empresas nas quais a decisão comercial
                requer integração, continuidade e controle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {SETORES.map((setor) => (
                <Link
                  key={setor.href}
                  href={setor.href}
                  className="card p-6 md:p-8 text-left flex flex-col transition-base hover:border-[var(--color-result-500)] group"
                >
                  <h3 className="text-h5 mb-2">{setor.nome}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{setor.texto}</p>
                  <span className="mt-auto pt-4 text-sm font-medium text-[var(--text-result)] group-hover:underline">
                    Ver a aplicação →
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-8 text-body-sm text-[var(--text-tertiary)] text-center">
              A aplicação depende de volume, dados disponíveis e viabilidade de implementação.
            </p>
          </div>
        </div>
      </section>

      {/* Fykos: a empresa apresenta o produto */}
      <section id="fykos" className="section bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 text-left">
              <p className="text-overline mb-2">O PRODUTO</p>
              <h2 className="text-h2 mb-4">Fykos: inteligência e execução comercial</h2>
              <p className="text-body text-[var(--text-secondary)]">
                A Dexi é a empresa. O Fykos é o produto que desenvolvemos para levar a oportunidade
                identificada até a ação executada, com regras definidas e cada etapa relevante
                registrada.
              </p>
            </div>
            <div className="md:col-span-2 flex md:justify-end">
              <TrackedCTA type="synapse" location="fykos" variant="secondary" text="Conhecer o Fykos →" />
            </div>
          </div>
        </div>
      </section>

      {/* Provas: só cases completos e autorizados; sem eles, o método */}
      <section id="provas" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">PROVAS</p>
              <h2 className="text-h2">Resultado com método, não número solto</h2>
              <p className="text-lead">
                Cada número vem com período, volume analisado e critério de atribuição. Pipeline
                influenciado não é apresentado como receita.
              </p>
            </div>

            {casos.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {casos.map((caso) => (
                  <article key={caso.id} className="card p-6 md:p-8 text-left">
                    <p className="text-overline mb-2">{nomeExibido(caso)}</p>
                    <h3 className="text-h5 mb-5">{caso.titulo}</h3>
                    <dl className="space-y-3">
                      {CAMPOS_CASO.map(({ campo, rotulo }) => (
                        <div key={campo}>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--text-tertiary)]">
                            {rotulo}
                          </dt>
                          <dd className="text-body-sm text-[var(--text-primary)]">{caso[campo]}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>
            ) : (
              <div className="card p-6 md:p-10 text-left max-w-3xl mx-auto">
                <p className="text-body text-[var(--text-secondary)] mb-6">
                  Cada case que apresentamos traz os mesmos seis elementos. Números e marcas só são
                  publicados com autorização do cliente — os cases documentados são apresentados na
                  conversa de aderência.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {CAMPOS_CASO.map(({ campo, rotulo }) => (
                    <li key={campo} className="flex gap-2 text-body-sm text-[var(--text-primary)]">
                      <span className="text-[var(--color-primary-500)] font-bold" aria-hidden="true">✓</span>
                      <span>{rotulo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Perguntas frequentes</h2>
            </div>

            <div className="card divide-y divide-[var(--border-subtle)] text-left px-6 md:px-8">
              {FAQ_HOME.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA de encerramento */}
      <section id="cta" className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-4">Sua operação já tem dados.</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Vamos identificar onde existe uma oportunidade concreta para agir?
            </p>
            <TrackedCTA
              type="aderencia"
              location="cta-final"
              variant="money"
              text="Solicitar conversa de aderência"
            />
          </div>
        </div>
      </section>

      {/* Fixed Sticky CTA for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-t border-[var(--border-subtle)] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <TrackedCTA type="aderencia" location="mobile-sticky" variant="primary" text="Avaliar aderência" className="w-full shadow-lg text-center flex justify-center items-center py-3 text-sm" />
      </div>
    </main>
  );
}
