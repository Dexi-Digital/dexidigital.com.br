import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles } from '@/lib/blog-data';
import { getPublishedDbPosts } from '@/lib/blog-db';
import { BlogGrid, type BlogCard } from '@/components/blog/BlogGrid';
import NewsletterForm from '@/components/blog/NewsletterForm';

export const metadata: Metadata = {
  title: 'Blog | Onde a receita vaza, e como fechar',
  description:
    'Artigos para quem vende alto ticket com ciclo longo (grupos automotivos, clínicas e incorporadoras): o que acontece entre o lead entrar e o negócio fechar, e onde a receita se perde nesse caminho.',
};

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const legacyArticles = getAllArticles();
  const dbPosts = getPublishedDbPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    readTime: p.readTime,
    date: p.publishedAt ?? new Date().toISOString(),
    author: p.author,
    metaDescription: p.metaDescription,
    focusKeyword: p.focusKeyword,
    content: p.content,
  }));
  // Enxuga para os campos do card antes de cruzar para o client component: o
  // `content` dos 600 posts nao pode ir no payload da pagina.
  const articles: BlogCard[] = [...legacyArticles, ...dbPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ slug, title, excerpt, category, readTime, date }) => ({
      slug,
      title,
      excerpt,
      category,
      readTime,
      date,
    }));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Blog</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              <span className="text-display-gradient">Onde a receita vaza, e como fechar</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Escrevemos para quem vende alto ticket com ciclo longo: grupos automotivos, clínicas de procedimento e incorporadoras. Sem teoria de transformação digital: o que acontece entre o lead entrar e o negócio fechar.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <BlogGrid articles={articles} />
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-4">Inteligência comercial na sua caixa de entrada</h2>
            <p className="text-lead mb-8">
              Análises sobre receita, previsibilidade de venda e execução comercial em operações em que cada oportunidade vale muito.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}

