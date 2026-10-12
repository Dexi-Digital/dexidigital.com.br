/**
 * Redirects 301 de posts do blog.
 *
 * Histórico:
 * - 25/08/2026: 80 posts sobre "habilidades do desenvolvedor" e mais três
 *   aglomerados de posts canibais viraram redirects para quatro canônicos.
 * - 11/10/2026 (handoff de SEO, itens 1.2 e 1.3): o canônico "habilidades"
 *   ganhou slug novo e entraram quatro consolidações de quase duplicatas.
 * - 12/10/2026: o inventário tirou do ar todos os destinos (eram posts do
 *   WordPress fora do público da Dexi). Redirecionar para um assunto diferente o
 *   buscador trata como 404, então as origens passaram a responder 410 junto com
 *   os destinos (ver lib/blog-removidos.ts) e a lista ficou vazia.
 *
 * Regras para um redirect novo: o destino precisa ser um post publicado, tratar
 * do mesmo assunto da origem e não ser origem de outro redirect (um salto só).
 * lib/blog-removidos.test.ts confere as três coisas.
 */
export const BLOG_REDIRECTS: [origem: string, destino: string][] = [];
