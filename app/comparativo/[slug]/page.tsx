import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COMPARATIVOS, findComparativo } from '@/lib/seo';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPARATIVOS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = findComparativo(slug);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/comparativo/${slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://dexidigital.com.br/comparativo/${slug}`,
      type: 'article',
    },
  };
}

export default async function ComparativoPage({ params }: PageProps) {
  const { slug } = await params;
  const data = findComparativo(slug);
  if (!data) notFound();

  const whatsappUrl = getWhatsAppUrl(
    `Olá! Li o comparativo ${data.title} e gostaria de uma análise personalizada. [ref: /comparativo/${slug}]`
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
              <span className="text-[var(--text-secondary)]">Comparativo</span>
            </nav>
            <p className="text-overline mb-4 animate-fade-in-up-subtle">COMPARATIVO</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              {data.title}
            </h1>
            <p className="text-lead text-[var(--text-secondary)] max-w-3xl mb-10 animate-fade-in-up delay-100">
              {data.answerSnippet}
            </p>
          </div>
        </div>
      </section>

      {/* Tabela Comparativa */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 mb-8 text-center">Comparativo lado a lado</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border-subtle)]">
                    <th className="text-left py-4 px-4 text-body-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Critério</th>
                    <th className="text-left py-4 px-4 text-body-sm font-semibold text-[var(--color-primary-500)] uppercase tracking-wider">Dexi Digital</th>
                    <th className="text-left py-4 px-4 text-body-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Concorrente</th>
                  </tr>
                </thead>
                <tbody>
                  {data.tabelaComparativa.map((row) => (
                    <tr key={row.criterio} className="border-b border-[var(--border-subtle)]">
                      <td className="py-4 px-4 text-body-sm font-medium text-[var(--text-primary)]">{row.criterio}</td>
                      <td className="py-4 px-4 text-body-sm text-[var(--text-secondary)]">{row.dexi}</td>
                      <td className="py-4 px-4 text-body-sm text-[var(--text-tertiary)]">{row.concorrente}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <h2 className="text-h2 mb-4">Veja a diferença na prática</h2>
            <p className="text-lead text-[var(--text-secondary)] mb-8">
              Diagnóstico gratuito com análise comparativa personalizada para sua operação.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {data.ctaText} →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
