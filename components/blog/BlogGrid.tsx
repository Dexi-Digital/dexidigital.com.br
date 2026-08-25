'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

// Só os campos que o card usa. O `content` dos posts NAO entra aqui de
// proposito: serializar o corpo de 600 artigos no payload da pagina seria
// dezenas de MB para renderizar um resumo de 160 caracteres.
export interface BlogCard {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

const PAGE_SIZE = 12;

export function BlogGrid({ articles }: { articles: BlogCard[] }) {
  const [category, setCategory] = useState<string>('Todos');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const a of articles) counts.set(a.category, (counts.get(a.category) ?? 0) + 1);
    return [
      { name: 'Todos', count: articles.length },
      ...[...counts.entries()]
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count),
    ];
  }, [articles]);

  const filtered = useMemo(
    () => (category === 'Todos' ? articles : articles.filter((a) => a.category === category)),
    [articles, category]
  );

  const shown = filtered.slice(0, visible);
  const restante = filtered.length - shown.length;

  function trocarCategoria(nome: string) {
    setCategory(nome);
    setVisible(PAGE_SIZE); // volta ao topo da nova lista, senao a contagem vaza entre filtros
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar por categoria">
        {categories.map((c) => {
          const ativa = c.name === category;
          return (
            <button
              key={c.name}
              type="button"
              onClick={() => trocarCategoria(c.name)}
              aria-pressed={ativa}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-base border ${
                ativa
                  ? 'bg-[var(--color-primary-600)] text-white border-transparent'
                  : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--color-primary-400)]'
              }`}
            >
              {c.name}
              <span className={`ml-2 text-xs ${ativa ? 'opacity-80' : 'text-[var(--text-muted)]'}`}>
                {c.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((article) => (
          <article key={article.slug} className="card card-interactive overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full">
                  {article.category}
                </span>
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
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base inline-flex items-center gap-1"
                >
                  Ler mais
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3" aria-live="polite">
        <p className="text-body-sm text-[var(--text-muted)]">
          {shown.length} de {filtered.length} {filtered.length === 1 ? 'artigo' : 'artigos'}
        </p>
        {restante > 0 && (
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn btn-secondary"
          >
            Carregar mais {restante < PAGE_SIZE ? `(${restante})` : ''}
          </button>
        )}
      </div>
    </>
  );
}
