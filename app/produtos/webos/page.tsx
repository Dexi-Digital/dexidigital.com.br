import Link from 'next/link';
import FAQItem from '@/components/ui/FAQItem';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebOS | Sites, Blogs e Landing Pages com a Dexi Digital',
  description: 'Conheça o WebOS, o sistema da Dexi para criar sites institucionais, blogs e landing pages com design premium, CMS editável, SEO técnico e estrutura pronta para crescer.',
  keywords: ['sites institucionais', 'blogs corporativos', 'landing pages', 'CMS', 'SEO técnico', 'presença digital', 'Dexi Digital'],
  openGraph: {
    title: 'WebOS | Sites, Blogs e Landing Pages com a Dexi Digital',
    description: 'Conheça o WebOS, o sistema da Dexi para criar sites institucionais, blogs e landing pages com design premium, CMS editável, SEO técnico e estrutura pronta para crescer.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const entregaveis = [
  {
    title: 'Site Institucional',
    description: 'Estrutura clara, visual forte e páginas pensadas para apresentar melhor sua empresa.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Blog Corporativo',
    description: 'Pronto para conteúdo, autoridade e SEO. Uma base sólida para sua estratégia de marketing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: 'CMS Editável',
    description: 'Atualize textos, imagens e páginas sem depender de retrabalho técnico para cada alteração.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'SEO Técnico',
    description: 'Estrutura otimizada desde o início para que seu site não nasça bonito e invisível.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Landing Pages',
    description: 'Estrutura pronta para criar novas páginas de campanha e serviços sem reconstruir a base.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: 'Performance & Base Técnica',
    description: 'Tecnologia moderna, leve e organizada. Melhor do que soluções improvisadas.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const beneficios = [
  'Reduzir retrabalho em cada atualização',
  'Acelerar o lançamento com método',
  'Simplificar a manutenção do site',
  'Melhorar a apresentação da marca',
  'Apoiar marketing e conteúdo com consistência',
  'Expandir para novas páginas sem recomeçar',
];

const publicoAlvo = [
  'Empresas de serviços',
  'Marcas B2B',
  'Consultorias',
  'Clínicas e escritórios',
  'Startups em fase de posicionamento',
  'Negócios que precisam de site mais forte e preparado para crescer',
];

const processo = [
  {
    number: '01',
    title: 'Entendimento do negócio',
    description: 'Alinhamos posicionamento, objetivos, público e necessidades da operação digital.',
  },
  {
    number: '02',
    title: 'Estrutura e direção',
    description: 'Definimos a arquitetura do site, páginas principais, prioridades e base de conteúdo.',
  },
  {
    number: '03',
    title: 'Design e experiência',
    description: 'Construímos uma interface com mais presença de marca, clareza e consistência visual.',
  },
  {
    number: '04',
    title: 'Desenvolvimento e publicação',
    description: 'Transformamos a estrutura em um ambiente rápido, editável e pronto para lançamento.',
  },
  {
    number: '05',
    title: 'Evolução contínua',
    description: 'O WebOS já nasce preparado para novas páginas, conteúdos, campanhas e melhorias futuras.',
  },
];

const faqs = [
  {
    question: 'Quanto tempo leva para lançar com o WebOS?',
    answer: 'O prazo depende do escopo, volume de conteúdo e integrações, mas a proposta do WebOS é reduzir o tempo de entrega com um método mais organizado e uma base pronta para evoluir.',
  },
  {
    question: 'O cliente consegue editar o site depois?',
    answer: 'Sim. O WebOS é pensado para que a equipe consiga atualizar conteúdos, imagens, páginas e publicações com mais autonomia.',
  },
  {
    question: 'O WebOS inclui blog?',
    answer: 'Sim. O produto já considera a importância do blog como ativo de conteúdo, autoridade e SEO.',
  },
  {
    question: 'O WebOS já nasce preparado para SEO?',
    answer: 'Sim. O projeto considera estrutura técnica, organização de conteúdo e base adequada para crescimento orgânico.',
  },
  {
    question: 'É possível criar landing pages depois?',
    answer: 'Sim. Um dos diferenciais do WebOS é justamente permitir expansão sem precisar reconstruir a base.',
  },
  {
    question: 'O WebOS serve só para site institucional?',
    answer: 'Não. Ele é ideal para institucional, blog, páginas de serviço, páginas de campanha e outras extensões da presença digital.',
  },
  {
    question: 'A Dexi também faz a manutenção e evolução?',
    answer: 'Sim. O WebOS pode ser o ponto de partida para uma evolução contínua da sua operação digital com a Dexi.',
  },
  {
    question: 'Como o WebOS se relaciona com o SynapseOS?',
    answer: 'O WebOS ocupa a camada de presença digital web (site, blog, páginas), enquanto o SynapseOS ocupa a camada de inteligência, automação e operação. Os dois se complementam sem competir entre si.',
  },
];

export default function WebOSPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Produto Dexi</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              WebOS: a base web para lançar, crescer e{' '}
              <span className="text-display-gradient">evoluir sua presença digital</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
              Sites institucionais, blogs e landing pages com design de alto padrão, estrutura editável e tecnologia pronta para acompanhar o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-150">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Solicitar diagnóstico
              </a>
              <Link href="/contato" className="btn btn-outline btn-lg">
                Falar com a Dexi
              </Link>
            </div>
            <p className="text-body-sm text-[var(--text-tertiary)] mt-6 animate-fade-in-up delay-200">
              Lançamento mais rápido, CMS simples e base pronta para novas páginas, conteúdo e campanhas.
            </p>
          </div>
        </div>
      </section>

      {/* O que é o WebOS */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-center mb-12">
              <h2 className="text-h2 mb-6">O que é o WebOS</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lead text-[var(--text-secondary)] mb-6">
                O WebOS é o sistema da Dexi para construir e evoluir a presença digital da sua empresa com mais velocidade, consistência e capacidade de expansão.
              </p>
              <p className="text-body-lg text-[var(--text-secondary)] mb-6">
                Em vez de tratar o site como uma peça isolada, o WebOS organiza sua operação web como uma base viva: institucional, blog, páginas de campanha, conteúdo e experiência digital trabalhando juntos.
              </p>
              <p className="text-body-lg text-[var(--text-secondary)]">
                É a combinação entre design, arquitetura, performance e gestão de conteúdo para empresas que precisam de um site profissional hoje, sem travar o crescimento de amanhã.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header text-center mb-12">
              <h2 className="text-h2 mb-4">O que você recebe</h2>
              <p className="text-lead text-[var(--text-secondary)]">Entregáveis claros para uma presença digital mais forte</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entregaveis.map((item) => (
                <div key={item.title} className="card card-feature p-6 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mb-4 text-[var(--color-primary-600)] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-h5 mb-2">{item.title}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por que empresas escolhem */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-center mb-12">
              <h2 className="text-h2 mb-4">Por que empresas escolhem o WebOS</h2>
            </div>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-body-lg text-[var(--text-secondary)] mb-4">
                Empresas escolhem o WebOS quando precisam de mais do que um site &ldquo;bonito no lançamento&rdquo;.
              </p>
              <p className="text-body-lg text-[var(--text-secondary)] mb-4">
                Escolhem quando querem uma presença digital com cara de marca, não de template. Escolhem quando precisam publicar mais rápido, atualizar com autonomia e abrir espaço para conteúdo, campanhas e crescimento sem recomeçar do zero.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {beneficios.map((beneficio) => (
                <div key={beneficio} className="card p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-success-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-sm text-[var(--text-secondary)]">{beneficio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para quem faz sentido */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-center mb-12">
              <h2 className="text-h2 mb-4">Para quem o WebOS faz sentido</h2>
              <p className="text-lead text-[var(--text-secondary)]">
                Pensado para empresas que precisam de presença digital mais forte, mais organizada e mais escalável.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {publicoAlvo.map((publico) => (
                <div key={publico} className="card p-5 text-center">
                  <span className="text-body text-[var(--text-primary)] font-medium">{publico}</span>
                </div>
              ))}
            </div>
            <p className="text-body-lg text-[var(--text-secondary)] text-center mt-8">
              Se sua empresa precisa de um site que apresente melhor a marca hoje e suporte novas ações amanhã, o WebOS faz sentido.
            </p>
          </div>
        </div>
      </section>

      {/* Comparação implícita */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-center mb-12">
              <h2 className="text-h2 mb-4">WebOS não é um site comum</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="card p-6 border-l-4 border-[var(--color-gray-300)]">
                <h3 className="text-h5 mb-4 text-[var(--text-tertiary)]">Site comum</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-body-sm text-[var(--text-tertiary)]">
                    <svg className="w-5 h-5 text-[var(--color-gray-400)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Resolve o lançamento, mas não a próxima etapa
                  </li>
                  <li className="flex items-start gap-3 text-body-sm text-[var(--text-tertiary)]">
                    <svg className="w-5 h-5 text-[var(--color-gray-400)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Limitado, difícil de evoluir
                  </li>
                  <li className="flex items-start gap-3 text-body-sm text-[var(--text-tertiary)]">
                    <svg className="w-5 h-5 text-[var(--color-gray-400)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Depende de remendos constantes
                  </li>
                </ul>
              </div>
              <div className="card p-6 border-l-4 border-[var(--color-primary-500)]">
                <h3 className="text-h5 mb-4 text-[var(--color-primary-600)]">WebOS</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-body-sm text-[var(--text-secondary)]">
                    <svg className="w-5 h-5 text-[var(--color-success-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Resolve o lançamento e prepara a próxima etapa
                  </li>
                  <li className="flex items-start gap-3 text-body-sm text-[var(--text-secondary)]">
                    <svg className="w-5 h-5 text-[var(--color-success-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Estrutura pensada para continuidade
                  </li>
                  <li className="flex items-start gap-3 text-body-sm text-[var(--text-secondary)]">
                    <svg className="w-5 h-5 text-[var(--color-success-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mais organização desde o início
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <p className="text-body-lg text-[var(--text-secondary)]">
                Na prática, isso significa mais clareza na edição de conteúdo, mais facilidade para criar novas páginas, mais consistência visual e mais base para SEO, blog e campanhas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como a Dexi entrega */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-center mb-12">
              <h2 className="text-h2 mb-4">Como a Dexi entrega</h2>
              <p className="text-lead text-[var(--text-secondary)]">Processo enxuto, com entregas claras em cada etapa</p>
            </div>
            <div className="space-y-6">
              {processo.map((step) => (
                <div key={step.number} className="card card-interactive p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[var(--gradient-primary)] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-[var(--shadow-primary)]">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h5 mb-2">{step.title}</h3>
                      <p className="text-body-sm text-[var(--text-secondary)]">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-5">
              Sua empresa não precisa de só mais um site. Precisa de uma base web pronta para crescer.
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Com o WebOS, a Dexi entrega um projeto mais rápido, mais bem resolvido e mais preparado para acompanhar marketing, conteúdo e expansão digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Quero apresentar meu projeto
              </a>
              <Link href="/contato" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Falar com um especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-header text-center mb-12">
              <h2 className="text-h2 mb-4">Perguntas frequentes</h2>
            </div>
            <div className="card divide-y divide-[var(--border-subtle)]">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

