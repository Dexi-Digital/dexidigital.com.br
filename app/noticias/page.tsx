import type { Metadata } from 'next';
import Image from 'next/image';
import { getRecentNews } from '@/lib/news-db';
import TrackedCTA from '@/components/ui/TrackedCTA';

export const metadata: Metadata = {
  title: 'Notícias de Tecnologia e IA | Dexi Digital',
  description:
    'Acompanhe as principais notícias de tecnologia e inteligência artificial, selecionadas diariamente pela Dexi Digital.',
};

export const dynamic = 'force-dynamic';

function formatRelativeDate(isoDate: string): string {
  const date = new Date(isoDate);
  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return 'Hoje';
  if (diffDays === 1) return 'Há 1 dia';
  return `Há ${diffDays} dias`;
}

export default function NoticiasPage() {
  const news = getRecentNews();

  return (
    <main className="min-h-screen">
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4">Radar Dexi</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6">
              <span className="text-display-gradient">Notícias de Tecnologia e IA</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto">
              Uma curadoria diária das principais notícias sobre tecnologia e inteligência artificial, direto das fontes originais.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <TrackedCTA type="validation" location="noticias" variant="money" text="Agendar diagnóstico gratuito" />
            </div>

            {news.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-body text-[var(--text-secondary)]">
                  Estamos preparando as próximas notícias. Volte em breve.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => (
                  <article key={item.id} className="card card-interactive overflow-hidden flex flex-col">
                    <div className="relative h-44 w-full bg-[var(--bg-primary)]">
                      {item.imageUrl ? (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="section-gradient absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/images/brand/Dexi White Icon Transparent bg.svg"
                            alt=""
                            width={48}
                            height={48}
                            className="opacity-80"
                          />
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full">
                          {item.sourceName}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">{formatRelativeDate(item.publishedAt)}</span>
                      </div>
                      <h2 className="text-h5 mb-3">{item.title}</h2>
                      {item.summary && (
                        <p className="text-body-sm text-[var(--text-secondary)] mb-4 flex-1">{item.summary}</p>
                      )}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base inline-flex items-center gap-1 mt-auto"
                      >
                        Leia em {item.sourceName}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
