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

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

export function isNegativeNews(title: string, summary: string): boolean {
  const haystack = normalize(`${title} ${summary}`);
  return NEGATIVE_KEYWORDS.some((keyword) => haystack.includes(keyword));
}

export function isPromotionalContent(title: string): boolean {
  const haystack = normalize(title);
  return PROMOTIONAL_KEYWORDS.some((keyword) => haystack.includes(keyword));
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
