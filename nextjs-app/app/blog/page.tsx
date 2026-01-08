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
      <section className="section-hero-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-6">
              Blog
            </h1>
            <p className="text-lead">
              Insights sobre IA empresarial, inteligência de dados e
              desenvolvimento de software.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.slug} className="card-article">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge badge-primary">{article.category}</span>
                      <span className="text-caption">{article.readTime}</span>
                    </div>
                    <h2 className="text-h5 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-body-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-caption">
                        {new Date(article.date).toLocaleDateString('pt-BR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <Link href={`/blog/${article.slug}`} className="link-arrow">
                        Ler mais
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="mt-12 text-center">
              <p className="text-body">
                Mais artigos em breve. Acompanhe nossas publicações sobre IA,
                dados e software enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-alt py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-4">
              Receba insights direto no seu email
            </h2>
            <p className="text-lead mb-8">
              Assine nossa newsletter para receber artigos sobre IA, dados e
              desenvolvimento de software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="input flex-1"
              />
              <button className="btn btn-primary">
                Assinar
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

