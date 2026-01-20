#!/usr/bin/env node
/**
 * WordPress to Next.js Blog Migration Script
 * Converts parsed WordPress posts to Next.js blog-data.ts format
 */

const fs = require('fs');
const path = require('path');

// Read parsed posts
const postsPath = path.join(__dirname, '../_archive_vue_legacy/parsed-posts.json');
const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

// Migrate ALL posts (sorted by SEO score, then by views)
console.log(`Migrating ALL ${posts.length} posts...`);

// Helper to convert HTML to Markdown-like content
function htmlToMarkdown(html) {
  if (!html) return '';
  
  let md = html
    // Remove scripts
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    // Convert headings
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n')
    // Convert emphasis
    .replace(/<strong>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replace(/<b>([\s\S]*?)<\/b>/gi, '**$1**')
    .replace(/<em>([\s\S]*?)<\/em>/gi, '*$1*')
    .replace(/<i>([\s\S]*?)<\/i>/gi, '*$1*')
    // Convert links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    // Convert lists
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
    .replace(/<ul[^>]*>/gi, '\n')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '\n')
    .replace(/<\/ol>/gi, '\n')
    // Convert paragraphs
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n')
    // Convert line breaks
    .replace(/<br\s*\/?>/gi, '\n')
    // Remove remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // Clean up entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#x[\da-f]+;/gi, '')
    .replace(/&#\d+;/g, '')
    // Clean up whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  
  return md;
}

// Map category from focus keyword
function inferCategory(focusKeyword, title) {
  const kw = (focusKeyword || title).toLowerCase();
  if (kw.includes('ia') || kw.includes('inteligência artificial') || kw.includes('machine learning') || kw.includes('llm')) {
    return 'IA Empresarial';
  }
  if (kw.includes('outsourcing') || kw.includes('consultoria')) {
    return 'Consultoria';
  }
  if (kw.includes('software') || kw.includes('desenvolvimento') || kw.includes('app')) {
    return 'Desenvolvimento';
  }
  if (kw.includes('cloud') || kw.includes('infraestrutura') || kw.includes('segurança')) {
    return 'Infraestrutura';
  }
  if (kw.includes('digital') || kw.includes('transformação')) {
    return 'Transformação Digital';
  }
  return 'Tecnologia';
}

// Format date
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toISOString().split('T')[0];
}

// Generate blog articles array from ALL posts
const blogArticles = posts.map(post => {
  const content = htmlToMarkdown(post.content);
  const excerpt = post.excerpt || content.substring(0, 200).replace(/\n/g, ' ').trim() + '...';
  
  return {
    slug: post.slug,
    title: post.title,
    excerpt: excerpt.substring(0, 300),
    category: inferCategory(post.focusKeyword, post.title),
    readTime: `${post.readTime || 5} min`,
    date: formatDate(post.date),
    author: 'Equipe Dexi Digital',
    metaDescription: excerpt.substring(0, 160),
    focusKeyword: post.focusKeyword || '',
    seoScore: parseInt(post.seoScore) || 0,
    content: content, // Full content
  };
});

// Generate TypeScript code
const tsCode = `// Auto-generated from WordPress migration
// Total posts migrated: ${blogArticles.length}
// Migration date: ${new Date().toISOString()}

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

export const blogArticles: BlogArticle[] = ${JSON.stringify(blogArticles, null, 2)};

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getAllArticles(): BlogArticle[] {
  return blogArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
`;

// Save the TypeScript file
const outputPath = path.join(__dirname, '../nextjs-app/lib/blog-data.ts');
fs.writeFileSync(outputPath, tsCode);

console.log(`\n✅ Migration complete!`);
console.log(`   - ${blogArticles.length} articles migrated`);
console.log(`   - Output: ${outputPath}`);
console.log(`\nTop 10 migrated posts:`);
blogArticles.slice(0, 10).forEach((a, i) => {
  console.log(`${i+1}. [${a.category}] ${a.title}`);
});

