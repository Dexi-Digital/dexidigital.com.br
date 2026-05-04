import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GLOSSARIO_TERMS, findGlossarioTerm, GLOSSARIO_CATEGORIES } from '@/lib/seo/glossario';
import { FAQSchema } from '@/components/seo/FAQSchema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GLOSSARIO_TERMS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = findGlossarioTerm(slug);
  if (!term) return {};

  return {
    title: term.metaTitle,
    description: term.metaDescription,
    alternates: { canonical: `/glossario-ia-automotiva/${slug}` },
    openGraph: {
      title: term.metaTitle,
      description: term.metaDescription,
      url: `https://dexidigital.com.br/glossario-ia-automotiva/${slug}`,
      type: 'article',
    },
  };
}

function markdownToHtml(md: string): string {
  return md
    .split('\n')
    .map((line) => {
      if (line.startsWith('### '))
        return `<h3 class="text-h5 text-[var(--text-primary)] mt-8 mb-3">${line.slice(4)}</h3>`;
      if (line.startsWith('## '))
        return `<h2 class="text-h4 text-[var(--text-primary)] mt-10 mb-4">${line.slice(3)}</h2>`;
      if (line.startsWith('- **'))
        return `<li class="ml-4 mb-2 text-[var(--text-secondary)] leading-relaxed list-disc">${line
          .slice(2)
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>')}</li>`;
      if (line.startsWith('- '))
        return `<li class="ml-4 mb-2 text-[var(--text-secondary)] leading-relaxed list-disc">${line.slice(2)}</li>`;
      if (line.trim() === '') return '';
      return `<p class="text-[var(--text-secondary)] leading-relaxed mb-4">${line.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="text-[var(--text-primary)]">$1</strong>'
      )}</p>`;
    })
    .join('\n');
}

export default async function GlossarioTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = findGlossarioTerm(slug);
  if (!term) notFound();

  const category = GLOSSARIO_CATEGORIES[term.category];
  const bodyHtml = markdownToHtml(term.longDescription);

  const relatedTerms = GLOSSARIO_TERMS
    .filter((t) => t.category === term.category && t.slug !== term.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      <FAQSchema faqs={term.faq} pageName={term.title} />

      {/* Hero */}
      <section className="section-hero-premium py-20 md:py-28 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <nav className="text-sm text-[var(--text-tertiary)] mb-6">
              <Link href="/" className="hover:text-[var(--color-primary-500)]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/glossario-ia-automotiva" className="hover:text-[var(--color-primary-500)]">Glossário</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--text-secondary)]">{term.title}</span>
            </nav>
            <span className="inline-block px-3 py-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-full text-xs font-semibold text-[var(--color-primary-500)] uppercase tracking-wider mb-4">
              {category.label}
            </span>
            <h1 className="text-display-lg md:text-display-xl text-[var(--text-primary)] mb-5">
              {term.title}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed border-l-4 border-[var(--color-primary-500)]/30 pl-4">
              {term.answerSnippet}
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <article dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      {term.faq.length > 0 && (
        <section className="section-lg bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h3 text-[var(--text-primary)] mb-6">
                Perguntas frequentes sobre {term.title}
              </h2>
              <div className="space-y-4">
                {term.faq.map((f) => (
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
      )}

      {/* Related Terms */}
      {relatedTerms.length > 0 && (
        <section className="section-lg border-t border-[var(--border-subtle)]">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h3 text-[var(--text-primary)] mb-6">Termos relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedTerms.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/glossario-ia-automotiva/${t.slug}`}
                    className="card card-interactive p-4"
                  >
                    <h3 className="text-h5 text-[var(--text-primary)] mb-2">{t.title}</h3>
                    <p className="text-xs text-[var(--text-tertiary)] line-clamp-2">{t.answerSnippet}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
