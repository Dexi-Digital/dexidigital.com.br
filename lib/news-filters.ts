// Cada entrada deve sobreviver à pluralização: se a PRIMEIRA palavra de uma
// frase pode flexionar (ex: "ação" -> "ações"), o substring quebra. Por isso
// preferimos stems de uma palavra só nesses casos (ver "hacker", "judicial",
// "queda", "falha", "bug") em vez de frases de duas palavras.
const NEGATIVE_KEYWORDS = [
  'demiss', 'demite', 'demitiu', 'corte de vaga', 'corte de emprego', 'corte de custo',
  'desliga funcion', 'reducao de pessoal', 'reducoes de pessoal', 'layoff',
  'vazamento de dados', 'hacker', 'ciberataque', 'invasao', 'judicial',
  'multa', 'multad', 'prejuizo', 'preju', 'crise', 'fraude', 'falencia', 'recall',
  'escandal', 'polemic', 'acusad', 'banid', 'proibid', 'colapso', 'queda',
  'hackead', 'golpe', 'phishing', 'malware', 'ransomware', 'censura', 'boicote',
  'greve', 'protesto', 'denuncia', 'investigacao', 'apagao', 'falha',
  'bug', 'inseguranca', 'plagio', 'discrimina', 'desemprego',
  // Tom crítico/controverso que passou batido em testes reais (ver spec):
  'escond', 'tirar do ar', 'fora da lei', 'nao resolve',
];

// Listas de compras/ofertas (ex: "selecionamos as melhores TVs em promoção
// na Amazon") não são notícia, são conteúdo comercial/afiliado — mesmo
// citando marcas de tech, não devem entrar no feed.
const PROMOTIONAL_KEYWORDS = [
  'promocao', 'selecionamos', 'oferta', 'ofertas', 'cupom', 'desconto',
  'menor preco', 'melhor preco', 'compre agora', 'black friday',
];

// Verbos de queda financeira. Precisam de fronteira de palavra: "cai" cru
// casaria com "caixa" ("IA na caixa de entrada" nao e noticia negativa) e
// "despencar" cru pegaria conjugacoes que nao existem. Com \b, "cai" pega
// "cai" mas nao "caixa"; "caiu"/"caem" entram como termos proprios.
// Exatos: fecham dos dois lados. Sao os que teriam colisao se virassem radical
// ("cai" -> "caixa", "desaba" -> "desabafo", "tomba" -> "tombamento").
const NEGATIVE_EXACT_TERMS = [
  'cai', 'caiu', 'caem', 'cairam', 'desaba', 'desabou', 'desabam',
  'recua', 'recuou', 'recuam', 'tomba', 'tombou',
];

// Radicais: fecham so no inicio e aceitam qualquer conjugacao depois. So entram
// aqui os que nenhuma outra palavra do portugues comeca igual — senao viram
// falso positivo silencioso.
const NEGATIVE_STEMS = ['despenc', 'encolh', 'derret', 'afund', 'naufrag'];

// Termos de uma letra/palavra curta precisam de fronteira de palavra (\b)
// para não colidir com substrings de outras palavras (ex: "ia" dentro de
// "história", "app" dentro de outra palavra qualquer).
const POSITIVE_SHORT_TERMS = ['ia', 'ai', 'ti', 'ml', 'ar', 'vr', '5g', 'tech', 'app'];

const POSITIVE_PHRASES = [
  'tecnologia', 'tecnologico', 'inteligencia artificial', 'ia generativa',
  'chatgpt', 'openai', 'gemini', 'copilot', 'claude', 'anthropic', 'llm',
  'machine learning', 'aprendizado de maquina', 'algoritmo', 'software',
  'aplicativo', 'digital', 'robo', 'robotica', 'automacao', 'startup',
  'smartphone', 'celular', 'computador', 'internet', 'nuvem',
  'cloud', 'big data', 'ciberseguranca', 'blockchain', 'criptomoeda',
  'bitcoin', 'realidade virtual', 'realidade aumentada', 'drone', 'wearable',
  'semicondutor', 'processador', 'google', 'microsoft', 'apple',
  'samsung', 'nvidia', 'tesla', 'gadget',
];

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

const NEGATIVE_SHORT_REGEX = new RegExp(
  [
    ...NEGATIVE_EXACT_TERMS.map((term) => `\\b${escapeRegExp(term)}\\b`),
    ...NEGATIVE_STEMS.map((stem) => `\\b${escapeRegExp(stem)}\\w*`),
  ].join('|'),
  'i'
);

export function isNegativeNews(title: string, summary: string): boolean {
  const haystack = normalize(`${title} ${summary}`);
  if (NEGATIVE_KEYWORDS.some((keyword) => haystack.includes(keyword))) return true;
  return NEGATIVE_SHORT_REGEX.test(haystack);
}

export function isPromotionalContent(title: string): boolean {
  const haystack = normalize(title);
  return PROMOTIONAL_KEYWORDS.some((keyword) => haystack.includes(keyword));
}

const POSITIVE_REGEX = new RegExp(
  [
    ...POSITIVE_PHRASES.map(escapeRegExp),
    ...POSITIVE_SHORT_TERMS.map((term) => `\\b${escapeRegExp(term)}\\b`),
  ].join('|'),
  'i'
);

export function isTechOrAiNews(title: string, summary: string): boolean {
  const haystack = normalize(`${title} ${summary}`);
  return POSITIVE_REGEX.test(haystack);
}
