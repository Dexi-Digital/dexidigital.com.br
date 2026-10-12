import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INTEGRACOES, findIntegracao } from '@/lib/seo';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import TrackedCTA from '@/components/ui/TrackedCTA';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INTEGRACOES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = findIntegracao(slug);
  if (!data) return {};

  // O layout já acrescenta "| Dexi Digital": tira o sufixo do dado para não duplicar.
  const titulo = data.metaTitle.replace(/\s*\|\s*Dexi Digital\s*$/i, '');

  return {
    title: titulo,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/integracoes/${slug}` },
    openGraph: {
      title: `${titulo} | Dexi Digital`,
      description: data.metaDescription,
      url: `https://dexidigital.com.br/integracoes/${slug}`,
      type: 'article',
    },
  };
}

export default async function IntegracaoPage({ params }: PageProps) {
  const { slug } = await params;
  const data = findIntegracao(slug);
  if (!data) notFound();

  return (
    <main className="min-h-screen">
      <FAQSchema faqs={data.faq} pageName={data.title} />
      <BreadcrumbSchema trilha={[{ nome: data.title, url: `/integracoes/${data.slug}` }]} />

      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-[var(--text-tertiary)] mb-6">
              <Link href="/" className="hover:text-[var(--color-primary-500)]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--text-secondary)]">Integrações</span>
            </nav>
            <p className="text-overline mb-4 animate-fade-in-up-subtle">INTEGRAÇÃO</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              {data.title}
            </h1>
            <p className="text-lead text-[var(--text-secondary)] max-w-3xl mb-10 animate-fade-in-up delay-100">
              {data.answerSnippet}
            </p>
            <TrackedCTA
              type="aderencia"
              location={`integracoes-${slug}-hero`}
              variant="primary"
              text="Avaliar aderência da minha operação"
              className="animate-fade-in-up delay-150"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            {data.sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-h3 text-[var(--text-primary)] mb-4">{s.heading}</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-lg bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 mb-8">Perguntas frequentes</h2>
            <div className="space-y-4">
              {data.faq.map((f) => (
                <details key={f.question} className="card p-6 group">
                  <summary className="cursor-pointer text-h5 text-[var(--text-primary)] list-none flex items-center justify-between">
                    {f.question}
                    <svg className="w-5 h-5 text-[var(--color-primary-500)] transition-transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-body-sm text-[var(--text-secondary)]">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-lg border-t border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-2">CONVERSA DE ADERÊNCIA</p>
            <h2 className="text-h2 mb-4">Faz sentido para a sua operação?</h2>
            <p className="text-lead text-[var(--text-secondary)] mb-8">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma
              oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira nesta
              etapa.
            </p>
            <TrackedCTA
              type="aderencia"
              location={`integracoes-${slug}-cta-final`}
              variant="primary"
              text="Solicitar conversa de aderência"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
