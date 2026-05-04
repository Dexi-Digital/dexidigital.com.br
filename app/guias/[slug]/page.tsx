import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GUIAS, findGuia } from '@/lib/seo';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIAS.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = findGuia(slug);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/guias/${slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://dexidigital.com.br/guias/${slug}`,
      type: 'article',
    },
  };
}

export default async function GuiaPage({ params }: PageProps) {
  const { slug } = await params;
  const data = findGuia(slug);
  if (!data) notFound();

  const whatsappUrl = getWhatsAppUrl(
    `Olá! Li o guia sobre ${data.title.toLowerCase()} e gostaria de falar com um especialista. [ref: /guias/${slug}]`
  );

  return (
    <main className="min-h-screen">
      <FAQSchema faqs={data.faq} pageName={data.title} />

      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-[var(--text-tertiary)] mb-6">
              <Link href="/" className="hover:text-[var(--color-primary-500)]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--text-secondary)]">Guias</span>
            </nav>
            <p className="text-overline mb-4 animate-fade-in-up-subtle">GUIA</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              {data.title}
            </h1>
            <p className="text-lead text-[var(--text-secondary)] max-w-3xl mb-8 animate-fade-in-up delay-100">
              {data.answerSnippet}
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">Neste guia</h2>
            <ol className="space-y-1">
              {data.sections.map((s, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className="text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary-500)] transition-colors">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            {data.sections.map((s, i) => (
              <div key={i} id={`section-${i}`}>
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
            <h2 className="text-h2 mb-4">Quer implementar na prática?</h2>
            <p className="text-lead text-[var(--text-secondary)] mb-8">
              Fale com um especialista em IA automotiva da Dexi Digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {data.ctaText} →
              </a>
              <Link href="/comparativo/dexi-vs-syonet" className="btn btn-secondary">
                Ver comparativo Dexi vs Syonet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
