// Posts migrados do WordPress em 20/01/2026 (600 na migração).
// Na limpeza de SEO de out/2026 todos saíram do ar: os slugs respondem 410
// (lib/blog-removidos.ts) e os textos ficam no histórico do git. Os posts do
// blog vêm hoje do banco da automação (lib/blog-db.ts), que passa pelo revisor.
// A lista continua aqui para o caso de entrar algum post fixo.

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  metaDescription: string;
  focusKeyword?: string;
  seoScore?: number;
  content: string;
}

export const blogArticles: BlogArticle[] = [];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getAllArticles(): BlogArticle[] {
  return blogArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
