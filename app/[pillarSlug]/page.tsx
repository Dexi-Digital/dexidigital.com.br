import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPillarBySlug } from '@/lib/pillars';
import { getPostsByPillarLink } from '@/lib/blog-db';
import TrackedCTA from '@/components/ui/TrackedCTA';

interface PillarPageProps {
  params: Promise<{ pillarSlug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PillarPageProps): Promise<Metadata> {
  const { pillarSlug } = await params;
  const pillar = getPillarBySlug(pillarSlug);

  if (!pillar) {
    return { title: 'Página não encontrada' };
  }

  return {
    title: `${pillar.title} | Dexi Digital`,
    description: pillar.description,
  };
}

export default async function PillarPage({ params }: PillarPageProps) {
  const { pillarSlug } = await params;
  const pillar = getPillarBySlug(pillarSlug);

  if (!pillar) {
    notFound();
  }

  const posts = getPostsByPillarLink(`/${pillar.slug}`);

  return (
    <main className="min-h-screen">
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4">{pillar.vertical}</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6">
              <span className="text-display-gradient">{pillar.title}</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto">{pillar.description}</p>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <TrackedCTA
                type="validation"
                location={`pillar-${pillar.slug}`}
                variant="money"
                text="Agendar diagnóstico gratuito"
              />
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-body text-[var(--text-secondary)]">
                  Estamos preparando o conteúdo completo sobre este tema. Volte em breve.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <article key={post.id} className="card card-interactive overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">{post.readTime}</span>
                      </div>
                      <h2 className="text-h5 mb-3">{post.title}</h2>
                      <p className="text-body-sm text-[var(--text-secondary)] mb-4">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base inline-flex items-center gap-1"
                      >
                        Ler mais
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
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
