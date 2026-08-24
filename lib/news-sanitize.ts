// As APIs de notícia (GNews, WorldNewsAPI) entregam título e resumo com
// resíduo de HTML: entidades numéricas (&#8220;), entidades nomeadas (&amp;),
// tags soltas (<b>, <a href>) e às vezes entidade duplamente escapada
// (&amp;#8220;). Nada disso é texto — é sintaxe que vazou da origem.
//
// Isto NÃO é sobre XSS: o React escapa o que renderiza, então uma tag no
// título apareceria literal, não executaria. É sobre o texto sair legível,
// e sobre os filtros (news-filters) enxergarem a palavra de verdade em vez
// de "&#8220;colonialismo".

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  hellip: '…', mdash: '—', ndash: '–', minus: '−',
  lsquo: '‘', rsquo: '’', sbquo: '‚',
  ldquo: '“', rdquo: '”', bdquo: '„',
  laquo: '«', raquo: '»', lsaquo: '‹', rsaquo: '›',
  bull: '•', middot: '·', deg: '°', trade: '™', copy: '©', reg: '®',
  euro: '€', pound: '£', yen: '¥', cent: '¢', sect: '§', para: '¶',
  times: '×', divide: '÷', frac12: '½', frac14: '¼', permil: '‰',
  dagger: '†', Dagger: '‡', prime: '′', Prime: '″', tilde: '˜', circ: 'ˆ',
  ensp: ' ', emsp: ' ', thinsp: ' ', shy: '', zwj: '', zwnj: '',
};

// Notícia em português vem cheia de &otilde;, &ccedil;, &atilde;, &eacute;.
// Em vez de listar as ~60 entidades acentuadas do Latin-1 na mão, compomos:
// "o" + til combinante, normalizado em NFC, vira "õ". Preserva a caixa, então
// &Otilde; sai "Õ" sem entrada extra.
const COMBINING_ACCENTS: Record<string, string> = {
  acute: '\u0301', grave: '\u0300', circ: '\u0302', tilde: '\u0303',
  uml: '\u0308', ring: '\u030a', cedil: '\u0327',
};

// Os que não têm forma combinante e precisam ser literais mesmo.
const IRREGULAR_ENTITIES: Record<string, string> = {
  szlig: 'ß', aelig: 'æ', AElig: 'Æ', oelig: 'œ', OElig: 'Œ',
  eth: 'ð', ETH: 'Ð', thorn: 'þ', THORN: 'Þ',
  oslash: 'ø', Oslash: 'Ø', iexcl: '¡', iquest: '¿', ordf: 'ª', ordm: 'º',
};

function composeAccented(name: string): string | undefined {
  const match = /^([a-z])(acute|grave|circ|tilde|uml|ring|cedil)$/i.exec(name);
  if (!match) return undefined;
  const [, letter, accent] = match;
  const mark = COMBINING_ACCENTS[accent.toLowerCase()];
  if (!mark) return undefined;
  const composed = (letter + mark).normalize('NFC');
  // Só aceita se realmente virou um caractere único precomposto; senão a
  // combinação não existe (ex: &qacute;) e é melhor deixar cru.
  return [...composed].length === 1 ? composed : undefined;
}

// Faixa proibida de code points: substitutos, BOM/zero-width e caracteres de
// controle. Esses são DESCARTADOS, não mantidos crus — deixar "&#0;" visível
// num título é pior do que sumir com um caractere que seria invisível.
function isSafeCodePoint(cp: number): boolean {
  if (!Number.isFinite(cp) || cp <= 0 || cp > 0x10ffff) return false;
  if (cp >= 0xd800 && cp <= 0xdfff) return false;
  if (cp < 0x20 && cp !== 0x09 && cp !== 0x0a) return false;
  if (cp === 0xfeff || (cp >= 0x200b && cp <= 0x200f)) return false;
  return true;
}

function decodeOnce(text: string): string {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
      const cp = parseInt(hex, 16);
      return isSafeCodePoint(cp) ? String.fromCodePoint(cp) : '';
    })
    .replace(/&#(\d+);/g, (match, dec) => {
      const cp = parseInt(dec, 10);
      return isSafeCodePoint(cp) ? String.fromCodePoint(cp) : '';
    })
    .replace(/&([a-z][a-z0-9]{1,10});/gi, (match, name) => {
      const exact = NAMED_ENTITIES[name] ?? IRREGULAR_ENTITIES[name];
      if (exact !== undefined) return exact;
      const lower = NAMED_ENTITIES[name.toLowerCase()];
      if (lower !== undefined) return lower;
      return composeAccented(name) ?? match;
    });
}

// Duas passadas resolvem &amp;#8220; (duplo escape, comum nesses feeds) sem
// abrir espaço para loop: para assim que a passada não muda mais nada.
function decodeEntities(text: string): string {
  let current = text;
  for (let pass = 0; pass < 2; pass += 1) {
    const next = decodeOnce(current);
    if (next === current) break;
    current = next;
  }
  return current;
}

// Exige letra ou "/" depois do "<" para não comer comparações legítimas do
// tipo "lucro < 5%" — `<[^>]*>` engoliria "< 5%" num título assim.
function stripTags(text: string): string {
  return text
    .replace(/<(script|style)\b[\s\S]*?<\/\1\s*>/gi, ' ')
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<\/?[a-z][^>]*>/gi, ' ');
}

/**
 * Limpa texto vindo de API de notícia. Idempotente: rodar duas vezes dá o
 * mesmo resultado.
 *
 * Ordem importa — tira tag, decodifica, tira tag DE NOVO. A segunda passada
 * existe porque decodificar &lt;script&gt; produz uma tag que não existia
 * antes do decode.
 */
export function sanitizeText(input: string | null | undefined): string {
  if (typeof input !== 'string' || input.length === 0) return '';
  let text = stripTags(input);
  text = decodeEntities(text);
  text = stripTags(text);
  return text
    .replace(/[   ]/g, ' ')
    .replace(/[​-‏﻿]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Sobrou sintaxe? Usado pelo ingest para avisar em vez de engolir calado. */
export function hasMarkupResidue(text: string): boolean {
  return /&#?[a-z0-9]{1,10};|<\/?[a-z][^>]*>/i.test(text);
}
