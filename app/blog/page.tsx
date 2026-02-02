import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog | Insights sobre IA, Dados e Software Empresarial | Dexi Digital',
  description:
    'Artigos técnicos sobre IA empresarial, inteligência de dados e desenvolvimento de software. Guias práticos para CTOs e líderes de tecnologia.',
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Intelligence Hub</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              <span className="text-display-gradient">Liderança Agêntica &amp; Valor Enterprise</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Perspectivas estratégicas sobre a transição para sistemas autônomos, soberania de dados e o impacto da inteligência agêntica no EBITDA de grandes corporações.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <article key={article.slug} className="card card-interactive overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full">{article.category}</span>
                      <span className="text-xs text-[var(--text-muted)]">{article.readTime}</span>
                    </div>
                    <h2 className="text-h5 mb-3">{article.title}</h2>
                    <p className="text-body-sm text-[var(--text-secondary)] mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--text-muted)]">
                        {new Date(article.date).toLocaleDateString('pt-BR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <Link href={`/blog/${article.slug}`} className="text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base inline-flex items-center gap-1">
                        Ler mais
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="mt-12 text-center">
              <p className="text-body-sm text-[var(--text-secondary)]">
                Mais artigos em breve. Acompanhe nossas publicações sobre IA,
                dados e software enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-4">Inteligência Estratégica na sua caixa de entrada</h2>
            <p className="text-lead mb-8">
              Acompanhe a vanguarda da Execução Agêntica. Receba teses exclusivas sobre impacto no EBITDA, soberania de dados e lições de mercado extraídas de operações reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-base"
              />
              <button className="btn btn-primary">Acessar Intelligence Hub</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

