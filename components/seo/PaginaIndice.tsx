import type { ReactNode } from 'react';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { CardConteudo } from '@/components/seo/ConteudosRelacionados';
import TrackedCTA from '@/components/ui/TrackedCTA';
import { HUBS, SECOES_HUB, type ChaveHub } from '@/lib/seo/navegacao';

interface PaginaIndiceProps {
  hub: ChaveHub;
  overline: string;
  titulo: string;
  intro: ReactNode;
  /** Parágrafo depois dos cards (ex.: outras áreas atendidas). */
  rodape?: ReactNode;
}

/**
 * Página índice (/guias, /setores, /solucoes): H1, introdução e cards com
 * link real para cada página filha. Tudo renderizado no servidor, para o
 * crawler achar as páginas sem executar JS.
 */
export function PaginaIndice({ hub, overline, titulo, intro, rodape }: PaginaIndiceProps) {
  const { href, nome } = HUBS[hub];
  const secoes = SECOES_HUB[hub];

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema trilha={[{ nome, url: href }]} />

      <section className="section-hero-premium py-20 md:py-28 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-[var(--text-tertiary)] mb-6" aria-label="Trilha">
              <Link href="/" className="hover:text-[var(--color-primary-500)]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--text-secondary)]">{nome}</span>
            </nav>
            <p className="text-overline mb-4 animate-fade-in-up-subtle">{overline}</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              {titulo}
            </h1>
            <div className="text-lead text-[var(--text-secondary)] max-w-3xl animate-fade-in-up delay-100">{intro}</div>
          </div>
        </div>
      </section>

      {secoes.map((secao, i) => (
        <section
          key={secao.titulo}
          className={`section ${i % 2 === 0 ? 'bg-[var(--bg-surface)]' : ''} border-b border-[var(--border-subtle)]`}
          aria-labelledby={`secao-${i}`}
        >
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 id={`secao-${i}`} className="text-h2 mb-3">
                {secao.titulo}
              </h2>
              {secao.intro && <p className="text-body text-[var(--text-secondary)] mb-8">{secao.intro}</p>}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${secao.intro ? '' : 'mt-8'}`}>
                {secao.itens.map((item) => (
                  <CardConteudo key={item.href} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {rodape && (
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-body text-[var(--text-secondary)]">{rodape}</div>
          </div>
        </section>
      )}

      <section className="section-lg bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-2">CONVERSA DE ADERÊNCIA</p>
            <h2 className="text-h2 mb-4">Faz sentido para a sua operação?</h2>
            <p className="text-lead text-[var(--text-secondary)] mb-8">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma oportunidade
              concreta. Sem compromisso e sem pedir dados confidenciais de carteira nesta etapa.
            </p>
            <TrackedCTA
              type="aderencia"
              location={`${hub}-indice-cta-final`}
              variant="primary"
              text="Solicitar conversa de aderência"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
