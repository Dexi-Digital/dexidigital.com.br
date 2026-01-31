import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles } from '@/lib/blog-data';
import { getArticleSchema } from '@/lib/structured-data';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: article.title,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Simple markdown-like rendering (headers, paragraphs, lists, bold, links)
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: ReactElement[] = [];
    let currentList: string[] = [];
    let currentTable: string[][] = [];
    let inTable = false;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-[var(--text-secondary)]">
            {currentList.map((item, i) => (
              <li key={i}>{parseInline(item)}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const flushTable = () => {
      if (currentTable.length > 1) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto mb-6">
            <table className="min-w-full border border-[var(--border-subtle)] rounded-xl overflow-hidden">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  {currentTable[0].map((cell, i) => (
                    <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)] border-b border-[var(--border-subtle)]">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTable.slice(2).map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-secondary)]'}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-sm text-[var(--text-secondary)] border-b border-[var(--border-subtle)]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        currentTable = [];
        inTable = false;
      }
    };

    const parseInline = (text: string) => {
      // Handle bold, links, and code
      const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g);
      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-semibold text-[var(--text-primary)]">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('[') && part.includes('](')) {
          const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (match) {
            return <Link key={i} href={match[2]} className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] underline transition-base">{match[1]}</Link>;
          }
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i} className="bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded text-sm font-mono text-[var(--text-primary)]">{part.slice(1, -1)}</code>;
        }
        return part;
      });
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (!line) {
        flushList();
        flushTable();
        continue;
      }

      // Table row
      if (line.startsWith('|') && line.endsWith('|')) {
        flushList();
        const cells = line.slice(1, -1).split('|').map(c => c.trim());
        if (cells.every(c => /^[-:]+$/.test(c))) {
          // Separator row, skip
          continue;
        }
        currentTable.push(cells);
        inTable = true;
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Headers
      if (line.startsWith('## ')) {
        flushList();
        elements.push(<h2 key={i} className="text-h3 mt-10 mb-4">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={i} className="text-h4 mt-8 mb-3">{line.slice(4)}</h3>);
      } else if (line.startsWith('#### ')) {
        flushList();
        elements.push(<h4 key={i} className="text-h5 mt-6 mb-2">{line.slice(5)}</h4>);
      }
      // Checkbox list
      else if (line.startsWith('- [ ] ') || line.startsWith('- [x] ')) {
        flushList();
        const checked = line.startsWith('- [x] ');
        const text = line.slice(6);
        elements.push(
          <div key={i} className="flex items-start gap-3 mb-2">
            <input type="checkbox" checked={checked} readOnly className="mt-1 accent-[var(--color-primary-600)]" />
            <span className="text-[var(--text-secondary)]">{parseInline(text)}</span>
          </div>
        );
      }
      // Regular list item
      else if (line.startsWith('- ')) {
        currentList.push(line.slice(2));
      }
      // Numbered list
      else if (/^\d+\. /.test(line)) {
        const text = line.replace(/^\d+\. /, '');
        currentList.push(text);
      }
      // Horizontal rule
      else if (line === '---') {
        flushList();
        elements.push(<hr key={i} className="my-8 border-[var(--border-subtle)]" />);
      }
      // Regular paragraph
      else {
        flushList();
        elements.push(<p key={i} className="text-body-sm text-[var(--text-secondary)] mb-4">{parseInline(line)}</p>);
      }
    }

    flushList();
    flushTable();

    return elements;
  };

  // Article structured data
  const articleSchema = getArticleSchema(article);

  return (
    <main className="min-h-screen">
      {/* Article JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="section-hero-premium py-20 md:py-28 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4 animate-fade-in-up-subtle">
              <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full">{article.category}</span>
              <span className="text-xs text-[var(--text-muted)]">{article.readTime} de leitura</span>
            </div>
            <h1 className="text-display-lg md:text-display-xl text-[var(--text-primary)] mb-4 animate-fade-in-up delay-75">{article.title}</h1>
            <div className="flex items-center gap-4 text-body-sm text-[var(--text-secondary)] animate-fade-in-up delay-100">
              <span>{article.author}</span>
              <span>•</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <article className="max-w-3xl mx-auto">
            {renderContent(article.content)}
          </article>

          {/* Back to Blog */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-[var(--border-subtle)]">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para o Blog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h3 mb-4">Pronto para implementar essas práticas?</h2>
            <p className="text-lead mb-8">
              Agende um diagnóstico gratuito para discutir seus desafios técnicos.
            </p>
            <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Obter Diagnóstico em 24h
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

