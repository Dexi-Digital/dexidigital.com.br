/**
 * Posts removidos de vez: limpeza de SEO de out/2026.
 *
 * Respondem 410 com X-Robots-Tag: noindex (ver proxy.ts). O 410 tira a página
 * do índice mais rápido que o 404 e diz ao buscador que não foi um erro.
 *
 * Entra aqui só o que a Lorrayne decidiu remover: os casos confirmados na
 * auditoria (handoff de SEO, item 1.2) e, depois, as linhas do inventário
 * (scripts/inventario-blog.mjs) com decisão 410. O post sai também de
 * lib/blog-data.ts, e com isso do sitemap, do /blog e do llms-full.txt.
 *
 * Um slug não pode estar aqui e em lib/blog-redirects.ts ao mesmo tempo: o
 * redirect do next.config roda antes do proxy e o 410 nunca apareceria.
 *
 * PARA REVERTER: tire o slug desta lista e restaure o post em
 * lib/blog-data.ts pelo histórico do git.
 */
export const POSTS_REMOVIDOS: string[] = [
  // Item 1.2 do handoff: fora do tema, título em inglês ou sobra de prompt.
  'san-jose-arts-culture-architecture',
  'jogo-split-fiction-da-hazelight-vende-4-milhoes-de-copias',
  'novo-clube-fitness-netanya-experiencia-bem-estar',
  'balistica-de-colorado-resolve-crimes',
  'robos-com-batimentos-cardiacos',
  'chip-fotonico-eletronico-3d',
  // Família "habilidades do desenvolvedor" que sobrou da consolidação de ago/2026.
  'habilidades-essenciais-desenvolvedores-2025-5',
  '7-habilidades-desenvolvedor',
  'domine-2025-principais-habilidades-desenvolvedores',
  'essenciais-skills-desenvolvedores-2025',
];
