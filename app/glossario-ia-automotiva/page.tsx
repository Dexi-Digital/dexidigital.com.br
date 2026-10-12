import type { Metadata } from 'next';
import Link from 'next/link';
import { GLOSSARIO_TERMS, GLOSSARIO_CATEGORIES } from '@/lib/seo/glossario';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Glossário IA Automotiva | Termos e Conceitos',
  description:
    'Glossário de IA aplicada à venda automotiva: execução autônoma, lead scoring, DMS, shadow CRM e o Fykos. O que cada termo significa na operação de uma concessionária.',
  keywords: [
    'glossário IA automotiva',
    'termos IA concessionária',
    'glossário automotivo digital',
    'dicionário IA vendas',
  ],
  alternates: { canonical: '/glossario-ia-automotiva' },
};

export default function GlossarioPage() {
  const categories = Object.entries(GLOSSARIO_CATEGORIES) as [
    keyof typeof GLOSSARIO_CATEGORIES,
    (typeof GLOSSARIO_CATEGORIES)[keyof typeof GLOSSARIO_CATEGORIES],
  ][];

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema trilha={[{ nome: 'Glossário de IA automotiva', url: '/glossario-ia-automotiva' }]} />
      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">GLOSSÁRIO</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Glossário de{' '}
              <span className="text-display-gradient">IA Automotiva</span>
            </h1>
            <p className="text-lead text-[var(--text-secondary)] max-w-2xl mx-auto animate-fade-in-up delay-100">
              Os termos que aparecem na conversa sobre IA, dados e venda em concessionárias e grupos automotivos.
            </p>
          </div>
        </div>
      </section>

      {/* Terms by Category */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            {categories.map(([categoryKey, category]) => {
              const terms = GLOSSARIO_TERMS.filter((t) => t.category === categoryKey);
              if (terms.length === 0) return null;

              return (
                <div key={categoryKey}>
                  <h2 className="text-h3 text-[var(--text-primary)] mb-2">{category.label}</h2>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-6">{category.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {terms.map((term) => (
                      <Link
                        key={term.slug}
                        href={`/glossario-ia-automotiva/${term.slug}`}
                        className="card card-interactive p-6"
                      >
                        <h3 className="text-h5 text-[var(--text-primary)] mb-2">{term.title}</h3>
                        <p className="text-xs text-[var(--text-tertiary)] line-clamp-3">
                          {term.answerSnippet}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
