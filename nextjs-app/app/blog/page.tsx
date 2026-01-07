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
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights sobre IA empresarial, inteligência de dados e
              desenvolvimento de software.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString('pt-BR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                      >
                        Ler mais
                        <svg
                          className="w-5 h-5 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Mais artigos em breve. Acompanhe nossas publicações sobre IA,
                dados e software enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Receba insights direto no seu email
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Assine nossa newsletter para receber artigos sobre IA, dados e
              desenvolvimento de software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button className="px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
                Assinar
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

