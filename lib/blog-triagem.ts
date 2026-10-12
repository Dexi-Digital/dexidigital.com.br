/**
 * Triagem do blog para a limpeza de SEO de out/2026.
 *
 * Só sugere: a decisão de manter, remover (410) ou redirecionar (301) é da
 * Lorrayne, no CSV gerado por scripts/inventario-blog.mjs. Os sinais vêm do
 * handoff de SEO, com dois ajustes medidos sobre os 597 posts:
 *
 * - O tema do handoff aceitava "dados", "receita" e "atendimento" soltos, e
 *   com isso notícia de chip, de resultado trimestral e de fast food passava
 *   como "manter". Aqui o tema exige vocabulário das verticais.
 * - O tema do handoff não tinha imobiliário nem estética, e marcava para
 *   remoção posts bons das verticais de incorporadora e clínica.
 */

export type Sinal =
  | 'fora_do_tema'
  | 'sobra_de_prompt'
  | 'noticia_externa'
  | 'texto_em_ingles'
  | 'titulo_em_ingles'
  | 'titulo_diferente_do_corpo'
  | 'sobra_do_wordpress'
  | 'slug_duplicado'
  | 'texto_curto';

export type Sugestao = 'manter' | '410' | 'revisar';

export interface PostParaTriagem {
  slug: string;
  titulo: string;
  conteudo: string;
}

const TEMA =
  /concession|automotiv|ve[ií]cul|carro|seminov|\bdms\b|cl[ií]nica|paciente|est[eé]tic|procediment|no-show|construtora|incorpora(d|[cç])|imobili|im[oó]ve(l|is)|corretor|\bleads?\b|\bcrm\b|funil|follow.?up|whatsapp|\bvendas?\b|vendedor|comercial|fykos|cobran[cç]a|carteira|inadimpl/i;

const SOBRA_DE_PROMPT =
  /aqui est[áa] (o|um|a|uma) (artigo|conte[uú]do|post|texto|rascunho)|segue (o|abaixo)|como (um|uma) (modelo|ia)\b|^\s*t[ií]tulo:|^\s*claro[!,]/im;

const NOTICIA =
  /\b(lan[cç]a|anuncia|adquire|aquisi[cç][aã]o|relat(a|ou)|bilh(ão|ões|oes)|q[1-4] 20\d\d|ces 20\d\d|build 20\d\d|wwdc|openai|nvidia|microsoft|apple|amazon|aws|tesla|samsung|eua|gemini|chatgpt|windsurf|amplia|revela|estreia)\b/i;

const PALAVRAS_EN = /\b(the|and|its|beyond|with|for|how|why|of|to|is|are|your)\b/gi;
const TITULO_EN = /\b(the|and|its|beyond|with|for|how|why)\b/i;
// Shortcode de legenda e CSS do tema que vieram como texto na migração.
const SOBRA_DO_WORDPRESS = /\[\/?(caption|vc_\w+|et_pb\w*|gallery|embed)\b|:root\s*\{|<style/i;

const PARADAS = new Set([
  'para', 'como', 'sobre', 'entre', 'quando', 'porque', 'mais', 'menos', 'qual',
  'quais', 'essa', 'esse', 'isso', 'pelo', 'pela', 'pelos', 'pelas', 'suas', 'seus',
  'nossa', 'nosso', 'sendo', 'cada', 'ainda', 'guia', 'completo', 'dicas', 'passos',
  'empresa', 'empresas', 'negocio', 'negocios', 'futuro',
]);

function semAcento(texto: string): string {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/** Palavras do título com 5+ letras, sem acento e sem as genéricas. */
function palavrasDoTitulo(titulo: string): string[] {
  return [...new Set(semAcento(titulo).match(/[a-z]{5,}/g) ?? [])].filter((p) => !PARADAS.has(p));
}

/**
 * Título que promete um assunto e corpo que trata de outro: menos de um terço
 * das palavras do título aparece no começo do texto.
 */
function tituloDiferenteDoCorpo(titulo: string, conteudo: string): boolean {
  const palavras = palavrasDoTitulo(titulo);
  if (palavras.length < 3) return false;
  const inicio = semAcento(conteudo.slice(0, 1500));
  const presentes = palavras.filter((p) => inicio.includes(p.slice(0, 6))).length;
  return presentes / palavras.length < 1 / 3;
}

export function triarPost(post: PostParaTriagem): { sugestao: Sugestao; sinais: Sinal[] } {
  const { slug, titulo, conteudo } = post;
  const inicio = conteudo.slice(0, 600);
  const sinais: Sinal[] = [];

  if (!TEMA.test(`${slug.replace(/-/g, ' ')} ${titulo}`)) sinais.push('fora_do_tema');
  if (SOBRA_DE_PROMPT.test(inicio) || SOBRA_DE_PROMPT.test(titulo) || /t[ií]tulo de artigo/i.test(titulo)) {
    sinais.push('sobra_de_prompt');
  }
  if (NOTICIA.test(titulo)) sinais.push('noticia_externa');
  if ((conteudo.slice(0, 400).match(PALAVRAS_EN) ?? []).length >= 5) sinais.push('texto_em_ingles');
  else if (TITULO_EN.test(titulo)) sinais.push('titulo_em_ingles');
  if (tituloDiferenteDoCorpo(titulo, conteudo)) sinais.push('titulo_diferente_do_corpo');
  if (SOBRA_DO_WORDPRESS.test(conteudo)) sinais.push('sobra_do_wordpress');
  if (/-\d+$/.test(slug)) sinais.push('slug_duplicado');
  if (conteudo.split(/\s+/).length < 300) sinais.push('texto_curto');

  if (sinais.length === 0) return { sugestao: 'manter', sinais };
  const remover: Sinal[] = ['fora_do_tema', 'sobra_de_prompt', 'noticia_externa', 'texto_em_ingles'];
  return { sugestao: sinais.some((s) => remover.includes(s)) ? '410' : 'revisar', sinais };
}
