import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights sobre IA empresarial, inteligência de dados e desenvolvimento de software. Conteúdo técnico e prático para líderes de tecnologia.',
};

export default function BlogPage() {
  const articles = [
    {
      title: 'Guia: Como usar IA sem comprometer a qualidade do software',
      slug: 'guia-ia-qualidade-software',
      excerpt:
        'IA pode acelerar desenvolvimento, mas sem governança adequada, cria débito técnico. Aprenda a usar IA como acelerador mantendo qualidade, segurança e manutenibilidade.',
      category: 'IA Empresarial',
      readTime: '12 min',
      date: '2026-01-05',
    },
    {
      title:
        'Inteligência de dados para grupos automotivos: do showroom ao pós-venda',
      slug: 'inteligencia-dados-automotivo',
      excerpt:
        'Como unificar dados de vendas, oficina e pós-venda para criar visão 360° do cliente e otimizar operações em grupos automotivos.',
      category: 'Data Intelligence',
      readTime: '8 min',
      date: '2026-01-03',
    },
    {
      title:
        'Por que projetos baseados em hype precisam ser reescritos (e como evitar)',
      slug: 'evitar-reescrita-projetos-hype',
      excerpt:
        'Tecnologias da moda vêm e vão. Aprenda a construir software que dura além dos ciclos de hype, com arquitetura sólida e decisões técnicas fundamentadas.',
      category: 'Arquitetura de Software',
      readTime: '10 min',
      date: '2026-01-01',
    },
  ];

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

