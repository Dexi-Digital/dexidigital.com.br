/**
 * Limpeza dos posts migrados do WordPress (lib/blog-data.ts).
 *
 * A migração trouxe o shortcode de legenda de imagem sem a imagem, e o texto
 * da legenda aparecia solto no topo do artigo, entre colchetes. O bloco
 * inteiro sai na renderização; o dado fica como veio, para não reescrever o
 * arquivo gerado.
 */
export function semLegendaWordPress(texto: string): string {
  return texto.replace(/\[caption[^\]]*\][\s\S]*?\[\/caption\][ \t]*(\r?\n)?/g, '');
}
