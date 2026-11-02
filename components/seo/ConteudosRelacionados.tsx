import Link from 'next/link';
import { hubDe, relacionadosDe, type LinkConteudo } from '@/lib/seo/navegacao';

/**
 * Card de conteúdo com link real (<a href>), renderizado no servidor. A âncora
 * é o título da página mais o resumo, sem "saiba mais": é o que o buscador lê
 * como assunto do destino.
 */
export function CardConteudo({ item }: { item: LinkConteudo }) {
  return (
    <Link
      href={item.href}
      className="card card-interactive p-6 flex flex-col h-full transition-base hover:border-[var(--color-primary-400)] group"
    >
      <h3 className="text-h5 text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary-600)] transition-base">
        {item.titulo}
      </h3>
      <p className="text-body-sm text-[var(--text-secondary)]">{item.resumo}</p>
    </Link>
  );
}

/**
 * Bloco "Conteúdos relacionados" no fim de cada página filha: 2 ou 3 irmãs
 * (lib/seo/navegacao.ts) e o link para a página índice.
 */
export function ConteudosRelacionados({ caminho }: { caminho: string }) {
  const itens = relacionadosDe(caminho);
  const hub = hubDe(caminho);
  if (itens.length === 0 && !hub) return null;

  return (
    <section className="section border-t border-[var(--border-subtle)]" aria-labelledby="conteudos-relacionados">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 id="conteudos-relacionados" className="text-h3 text-[var(--text-primary)] mb-8">
            Conteúdos relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {itens.map((item) => (
              <CardConteudo key={item.href} item={item} />
            ))}
          </div>
          {hub && (
            <p className="mt-8">
              <Link
                href={hub.href}
                className="text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] hover:underline"
              >
                {hub.ancoraTodos} →
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
