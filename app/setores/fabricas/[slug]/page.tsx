import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FABRICAS, findFabrica } from '@/lib/seo';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FABRICAS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = findFabrica(slug);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/setores/fabricas/${slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://dexidigital.com.br/setores/fabricas/${slug}`,
      type: 'article',
    },
  };
}

export default async function FabricaPage({ params }: PageProps) {
  const { slug } = await params;
  const data = findFabrica(slug);
  if (!data) notFound();

  const whatsappUrl = getWhatsAppUrl(
    `Olá! Gostaria de saber mais sobre a solução de IA para concessionárias ${data.brand}. [ref: /setores/fabricas/${slug}]`
  );

  return (
    <main className="min-h-screen">
      <FAQSchema faqs={data.faq} pageName={`IA para ${data.brand}`} />

      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-[var(--text-tertiary)] mb-6">
              <Link href="/" className="hover:text-[var(--color-primary-500)]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/setores/automotivo-premium" className="hover:text-[var(--color-primary-500)]">Automotivo</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--text-secondary)]">{data.brand}</span>
            </nav>
            <p className="text-overline mb-4 animate-fade-in-up-subtle">IA PARA CONCESSIONÁRIAS {data.brand.toUpperCase()}</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Execução Agêntica para{' '}
              <span className="text-display-gradient">{data.brand}</span>
            </h1>
            <p className="text-lead text-[var(--text-secondary)] max-w-3xl mb-10 animate-fade-in-up delay-100">
              {data.answerSnippet}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-150">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {data.ctaText} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Desafios */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-h2 mb-10">Desafios da rede {data.brand}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.desafios.map((d) => (
                <div key={d.titulo} className="card p-6">
                  <h3 className="text-h5 text-[var(--text-primary)] mb-3">{d.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{d.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-h2 mb-10">Como a Dexi resolve</h2>
            <div className="space-y-8">
              {data.solucoes.map((s, i) => (
                <div key={s.titulo} className="card card-interactive p-8">
                  <div className="flex items-start gap-6">
                    <span className="text-number-lg text-display-gradient flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-h4 text-[var(--text-primary)] mb-3">{s.titulo}</h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{s.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section-lg bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-10">Resultados esperados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.resultadosEsperados.map((r) => (
                <div key={r} className="card p-6">
                  <p className="text-body-sm font-medium text-[var(--text-primary)]">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial vs Syonet */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 mb-6">Por que não Syonet?</h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {data.diferencialDexi}
            </p>
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
            <h2 className="text-h2 mb-4">Pronto para transformar sua concessionária {data.brand}?</h2>
            <p className="text-lead text-[var(--text-secondary)] mb-8">
              Diagnóstico gratuito em 24h. Sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {data.ctaText} →
              </a>
              <Link href="/comparativo/dexi-vs-syonet" className="btn btn-secondary">
                Comparar com Syonet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
