/**
 * Metadados de página num lugar só: título, descrição, canonical, Open Graph e
 * Twitter seguem a mesma regra em todo o site.
 *
 * Por que existe: no Next, o `openGraph` de uma página substitui o do layout
 * inteiro (não há merge). Cada página montava o seu à mão e esquecia og:image
 * ou og:url, e as que não declaravam nada herdavam og:url da home, diferente
 * do canonical. O Ahrefs apontava as três coisas em out/2026.
 *
 * Regras:
 * - título com no máximo 60 caracteres. " | Dexi Digital" só entra quando cabe;
 *   texto que nem sozinho cabe é cortado na última palavra inteira.
 * - descrição com no máximo 155 caracteres, cortada do mesmo jeito.
 * - og:url sai do mesmo valor do canonical, sempre absoluto.
 * - og:image padrão 1200x630 quando a página não tem imagem própria.
 * - sem travessão em título e descrição (regra da Dexi).
 *
 * Sem imports com alias: roda no Next e no `node --test`.
 */
import type { Metadata } from 'next';
import { semTravessao } from '../sem-travessao.ts';

export const SITE_URL = 'https://dexidigital.com.br';
export const SITE_NAME = 'Dexi Digital';
export const SUFIXO_TITULO = ` | ${SITE_NAME}`;
export const TITULO_MAX = 60;
export const DESCRICAO_MAX = 155;

export const IMAGEM_PADRAO = {
  url: '/og-image-home.jpg',
  width: 1200,
  height: 630,
  alt: 'Dexi Digital: tecnologia para decisões comerciais de alto valor',
};

export interface ImagemOg {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface PageMeta {
  /** Título sem o sufixo da marca: o helper decide se " | Dexi Digital" cabe. */
  title: string;
  description: string;
  /** Caminho da página ("/guias"). Vira canonical e og:url. */
  path: string;
  type?: 'website' | 'article';
  image?: ImagemOg;
  keywords?: string[];
  /** Página fora do índice (o link continua sendo seguido). */
  noindex?: boolean;
  /** Fora do índice e sem seguir links (páginas legais). */
  nofollow?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

/** Corta na última palavra inteira que cabe em `max`, com reticências. */
export function cortarNaPalavra(texto: string, max: number): string {
  const limpo = texto.replace(/\s+/g, ' ').trim();
  if (limpo.length <= max) return limpo;
  const corte = limpo.slice(0, max - 1);
  const ultimoEspaco = corte.lastIndexOf(' ');
  const base = ultimoEspaco > max * 0.5 ? corte.slice(0, ultimoEspaco) : corte;
  // Não termina em pontuação solta nem em preposição/artigo pendurado.
  const semResto = base
    .replace(/[\s,;:.(-]+$/, '')
    .replace(/\s+(a|o|as|os|e|ou|de|da|do|das|dos|em|na|no|nas|nos|para|com|sem|por|que|um|uma)$/i, '');
  return `${semResto}…`;
}

/** Título final do <title>: com a marca quando cabe, sem ela quando não cabe. */
export function montarTitulo(titulo: string): string {
  const limpo = semTravessao(titulo.replace(/\s*\|\s*Dexi Digital\s*$/i, '').trim(), { titulo: true });
  const jaTemMarca = limpo.toLowerCase().includes(SITE_NAME.toLowerCase());
  if (!jaTemMarca && limpo.length + SUFIXO_TITULO.length <= TITULO_MAX) return `${limpo}${SUFIXO_TITULO}`;
  return cortarNaPalavra(limpo, TITULO_MAX);
}

export function montarDescricao(descricao: string): string {
  return cortarNaPalavra(semTravessao(descricao), DESCRICAO_MAX);
}

/** URL absoluta e normalizada do caminho: a mesma string vai no canonical e no og:url. */
export function urlCanonica(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const limpo = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${SITE_URL}${limpo}`;
}

export function buildMeta(page: PageMeta): Metadata {
  const titulo = montarTitulo(page.title);
  const descricao = montarDescricao(page.description);
  const url = urlCanonica(page.path);
  const imagem = page.image ?? IMAGEM_PADRAO;
  const tipo = page.type ?? 'website';
  // og:title é o título sem corte: rede social não tem o limite do buscador.
  const tituloOg = semTravessao(page.title.replace(/\s*\|\s*Dexi Digital\s*$/i, '').trim(), { titulo: true });

  const meta: Metadata = {
    title: { absolute: titulo },
    description: descricao,
    alternates: { canonical: url },
    openGraph: {
      type: tipo,
      locale: 'pt_BR',
      siteName: SITE_NAME,
      url,
      title: tituloOg,
      description: descricao,
      images: [imagem],
      ...(tipo === 'article' && page.publishedTime ? { publishedTime: page.publishedTime } : {}),
      ...(tipo === 'article' && page.modifiedTime ? { modifiedTime: page.modifiedTime } : {}),
      ...(tipo === 'article' && page.authors?.length ? { authors: page.authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: tituloOg,
      description: descricao,
      images: [imagem.url],
    },
  };
  if (page.keywords?.length) meta.keywords = page.keywords;
  if (page.nofollow) {
    meta.robots = { index: false, follow: false, googleBot: { index: false, follow: false } };
  } else if (page.noindex) {
    meta.robots = { index: false, follow: true, googleBot: { index: false, follow: true } };
  }
  return meta;
}
