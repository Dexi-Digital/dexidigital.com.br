/**
 * Lead da conversa de aderência.
 *
 * Fonte única dos campos, das opções e da validação do formulário curto que
 * os dois sites usam: dexidigital.com.br/contato e fykos.com.br/acesso.
 * O site do Fykos (repositório separado, Astro) replica as opções em
 * src/lib/aderencia.ts — mudou um `value` aqui, mude lá também.
 *
 * Sem imports com alias: roda no Next e no `node --test`.
 */

export interface Opcao {
  value: string;
  label: string;
}

export const SEGMENTOS: Opcao[] = [
  { value: 'automotivo', label: 'Automotivo (concessionária ou grupo)' },
  { value: 'construcao-incorporacao', label: 'Construção e incorporação' },
  { value: 'saude', label: 'Clínicas e saúde' },
  { value: 'servicos-financeiros', label: 'Serviços financeiros' },
  { value: 'industria-distribuicao', label: 'Indústria ou distribuição B2B' },
  { value: 'outro', label: 'Outro' },
];

export const TAMANHOS_OPERACAO: Opcao[] = [
  { value: 'ate-200', label: 'Até 200 oportunidades por mês' },
  { value: '200-1000', label: 'De 200 a 1.000 oportunidades por mês' },
  { value: '1000-5000', label: 'De 1.000 a 5.000 oportunidades por mês' },
  { value: 'acima-5000', label: 'Mais de 5.000 oportunidades por mês' },
  { value: 'nao-sei', label: 'Não sei informar' },
];

export const DESAFIOS: Opcao[] = [
  { value: 'priorizacao', label: 'Saber quais oportunidades merecem atenção agora' },
  { value: 'sinais-perdidos', label: 'Sinais importantes que passam despercebidos entre sistemas e equipes' },
  { value: 'carteira-parada', label: 'Carteira e base de contatos sem reativação' },
  { value: 'entrada-demanda', label: 'Atendimento de entrada sem qualificação ou sem transição ao vendedor' },
  { value: 'rastreabilidade', label: 'Pouca rastreabilidade das ações comerciais' },
  { value: 'outro', label: 'Outro' },
];

export const ORIGENS = ['dexi', 'fykos'] as const;
export type Origem = (typeof ORIGENS)[number];

const DOMINIO_POR_ORIGEM: Record<Origem, string> = {
  dexi: 'dexidigital.com.br',
  fykos: 'fykos.com.br',
};

const CHAVES_UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
type ChaveUtm = (typeof CHAVES_UTM)[number];

export interface LeadAderencia {
  nome: string;
  cargo: string;
  empresa: string;
  email: string;
  whatsapp: string;
  segmento: string;
  tamanhoOperacao: string;
  desafio: string;
  crm: string;
  origem: Origem;
  cta: string;
  pagina: string;
  utm: Partial<Record<ChaveUtm, string>>;
  eventId: string;
}

export type ResultadoValidacao =
  | { ok: true; lead: LeadAderencia }
  | { ok: false; erro: string };

export interface RegistroLead {
  name: string;
  email: string;
  company: string;
  phone: string | null;
  service: string;
  message: string;
  status: 'new';
  source: 'website_contact_form' | 'fykos_contact_form';
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEFONE = /^\+?\d{8,15}$/;

function texto(valor: unknown, max: number): string {
  if (typeof valor !== 'string' && typeof valor !== 'number') return '';
  return String(valor).trim().slice(0, max);
}

function slug(valor: unknown, max: number): string {
  return texto(valor, 200)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, max);
}

function ehObjeto(valor: unknown): valor is Record<string, unknown> {
  return typeof valor === 'object' && valor !== null && !Array.isArray(valor);
}

function opcaoValida(opcoes: Opcao[], valor: string): boolean {
  return opcoes.some((o) => o.value === valor);
}

export function rotulo(opcoes: Opcao[], valor: string): string {
  return opcoes.find((o) => o.value === valor)?.label ?? valor;
}

export function dominioDaOrigem(origem: Origem): string {
  return DOMINIO_POR_ORIGEM[origem];
}

export function validarLeadAderencia(corpo: unknown): ResultadoValidacao {
  if (!ehObjeto(corpo)) return { ok: false, erro: 'Requisição inválida.' };

  const origem = ORIGENS.find((o) => o === corpo.origem) ?? 'dexi';
  const utmBruto: Record<string, unknown> = ehObjeto(corpo.utm) ? corpo.utm : {};
  const utm: LeadAderencia['utm'] = {};
  for (const chave of CHAVES_UTM) {
    const valor = texto(utmBruto[chave], 100);
    if (valor) utm[chave] = valor;
  }

  const lead: LeadAderencia = {
    nome: texto(corpo.nome, 100),
    cargo: texto(corpo.cargo, 100),
    empresa: texto(corpo.empresa, 200),
    email: texto(corpo.email, 254),
    whatsapp: texto(corpo.whatsapp, 20),
    segmento: texto(corpo.segmento, 50),
    tamanhoOperacao: texto(corpo.tamanhoOperacao, 50),
    desafio: texto(corpo.desafio, 50),
    crm: texto(corpo.crm, 100),
    origem,
    cta: slug(corpo.cta, 60) || 'direto',
    pagina: texto(corpo.pagina, 300),
    utm,
    eventId: texto(corpo.eventId, 100),
  };

  if (!lead.nome || !lead.cargo || !lead.empresa || !lead.email) {
    return { ok: false, erro: 'Preencha nome, cargo, empresa e e-mail.' };
  }
  if (!EMAIL.test(lead.email)) {
    return { ok: false, erro: 'E-mail inválido.' };
  }
  if (lead.whatsapp && !TELEFONE.test(lead.whatsapp.replace(/[\s\-().]/g, ''))) {
    return { ok: false, erro: 'WhatsApp inválido.' };
  }
  if (
    !opcaoValida(SEGMENTOS, lead.segmento) ||
    !opcaoValida(TAMANHOS_OPERACAO, lead.tamanhoOperacao) ||
    !opcaoValida(DESAFIOS, lead.desafio)
  ) {
    return { ok: false, erro: 'Selecione segmento, tamanho da operação e desafio.' };
  }

  return { ok: true, lead };
}

/**
 * Linha da tabela `leads` (Supabase). Usa só as colunas que a rota já gravava;
 * cargo, segmento, porte, CRM e o rastreio de origem vão no texto de `message`.
 * `source` mantém 'website_contact_form' para o site da Dexi, para não quebrar
 * filtro existente, e usa 'fykos_contact_form' para o site do Fykos.
 */
export function montarRegistroLead(lead: LeadAderencia): RegistroLead {
  const linhas = [
    '[Conversa de aderência]',
    `Cargo: ${lead.cargo}`,
    `Segmento: ${rotulo(SEGMENTOS, lead.segmento)}`,
    `Tamanho da operação: ${rotulo(TAMANHOS_OPERACAO, lead.tamanhoOperacao)}`,
    `Desafio mais relevante: ${rotulo(DESAFIOS, lead.desafio)}`,
    `CRM: ${lead.crm || 'Não informado'}`,
    `Origem: ${dominioDaOrigem(lead.origem)} · CTA: ${lead.cta}`,
  ];
  if (lead.pagina) linhas.push(`Página: ${lead.pagina}`);
  const utm = Object.entries(lead.utm)
    .map(([chave, valor]) => `${chave}=${valor}`)
    .join('; ');
  if (utm) linhas.push(`UTM: ${utm}`);

  return {
    name: lead.nome,
    email: lead.email,
    company: lead.empresa,
    phone: lead.whatsapp || null,
    service: rotulo(DESAFIOS, lead.desafio),
    message: linhas.join('\n'),
    status: 'new',
    source: lead.origem === 'fykos' ? 'fykos_contact_form' : 'website_contact_form',
  };
}

export function escaparHtml(valor: string): string {
  return valor
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const ORIGENS_CORS = ['https://fykos.com.br', 'https://www.fykos.com.br'];
const ORIGENS_CORS_DEV = ['http://localhost:4321', 'http://127.0.0.1:4321'];

/**
 * O formulário de fykos.com.br/acesso envia para esta API, de outro domínio.
 * Só as origens do site do Fykos recebem cabeçalho CORS; em dev, também o
 * `astro dev` local.
 */
export function cabecalhosCors(origin: string | null, dev = false): Record<string, string> {
  const permitidas = dev ? [...ORIGENS_CORS, ...ORIGENS_CORS_DEV] : ORIGENS_CORS;
  if (!origin || !permitidas.includes(origin)) return {};
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}
