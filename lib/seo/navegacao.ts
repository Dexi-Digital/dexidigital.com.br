/**
 * Ligações internas das páginas de conteúdo: as páginas índice (/guias,
 * /setores, /solucoes), o bloco "Conteúdos relacionados" de cada página filha
 * e o que a home destaca.
 *
 * Por que existe: em out/2026 o Ahrefs achou 14 páginas só no sitemap, sem
 * nenhum link interno. Cada página filha precisa de pelo menos 2 links vindos
 * de páginas rastreáveis: a índice e as irmãs. O teste
 * (navegacao.test.ts) confere isso a partir deste arquivo.
 *
 * Âncora é o nome do tema (o título da página), nunca "clique aqui".
 *
 * Sem imports com alias: roda no Next e no `node --test`.
 */
import { GUIAS } from './guias.ts';
import { SOLUCOES } from './solucoes.ts';
import { COMPARATIVOS } from './comparativo.ts';
import { INTEGRACOES } from './integracoes.ts';
import { FABRICAS } from './fabricas.ts';
import { GRUPOS } from './grupos.ts';

export interface LinkConteudo {
  href: string;
  titulo: string;
  resumo: string;
}

export interface Hub {
  href: string;
  /** Nome curto (menu, rodapé, trilha). */
  nome: string;
  /** Âncora do link para a índice no bloco de relacionados. */
  ancoraTodos: string;
}

export const HUBS = {
  guias: { href: '/guias', nome: 'Guias', ancoraTodos: 'Todos os guias' },
  setores: { href: '/setores', nome: 'Setores', ancoraTodos: 'Todos os setores automotivos' },
  solucoes: { href: '/solucoes', nome: 'Soluções', ancoraTodos: 'Todas as soluções e comparativos' },
} as const satisfies Record<string, Hub>;

export type ChaveHub = keyof typeof HUBS;

export const METODOLOGIA: LinkConteudo = {
  href: '/metodologia',
  titulo: 'Metodologia: como o Fykos chega à operação',
  resumo: 'As etapas do projeto: imersão, mapeamento dos fluxos, adaptação, ativação assistida e evolução contínua.',
};

const guias = GUIAS.map((g) => ({ href: `/guias/${g.slug}`, titulo: g.title, resumo: g.resumo }));
const solucoes = SOLUCOES.map((s) => ({ href: `/solucoes/${s.slug}`, titulo: s.title, resumo: s.resumo }));
const comparativos = COMPARATIVOS.map((c) => ({ href: `/comparativo/${c.slug}`, titulo: c.title, resumo: c.resumo }));
const integracoes = INTEGRACOES.map((i) => ({ href: `/integracoes/${i.slug}`, titulo: i.title, resumo: i.resumo }));
const fabricas = FABRICAS.map((f) => ({
  href: `/setores/fabricas/${f.slug}`,
  titulo: `Concessionárias de ${f.brand}`,
  resumo: f.resumo,
}));
const grupos = GRUPOS.map((g) => ({ href: `/setores/grupos/${g.slug}`, titulo: g.nome, resumo: g.resumo }));

/** O que cada página índice lista, em seções. */
export const SECOES_HUB: Record<ChaveHub, { titulo: string; intro?: string; itens: LinkConteudo[] }[]> = {
  guias: [{ titulo: 'Guias', itens: guias }],
  setores: [
    {
      titulo: 'Fábricas e marcas',
      intro: 'Concessionárias agrupadas pelo perfil da marca que representam.',
      itens: fabricas,
    },
    {
      titulo: 'Grupos automotivos',
      intro: 'Grupos agrupados pelo porte e pelo jeito de operar várias marcas e unidades.',
      itens: grupos,
    },
  ],
  solucoes: [
    { titulo: 'Soluções', itens: solucoes },
    { titulo: 'Comparativos', itens: comparativos },
    { titulo: 'Canais', itens: integracoes },
    { titulo: 'Como trabalhamos', itens: [METODOLOGIA] },
  ],
};

/** Todas as páginas de conteúdo, por caminho. */
export const CATALOGO: Record<string, LinkConteudo> = Object.fromEntries(
  [...guias, ...solucoes, ...comparativos, ...integracoes, ...fabricas, ...grupos, METODOLOGIA].map((l) => [l.href, l]),
);

/** Índice a que cada página filha pertence (trilha e link "todos os ..."). */
export function hubDe(caminho: string): Hub | undefined {
  if (caminho.startsWith('/guias/')) return HUBS.guias;
  if (caminho.startsWith('/setores/')) return HUBS.setores;
  if (/^\/(solucoes|comparativo|integracoes)\//.test(caminho)) return HUBS.solucoes;
  if (caminho === '/metodologia') return HUBS.solucoes;
  return undefined;
}

// Irmãs em rodízio: cada página aponta para as `n` seguintes da lista, então
// toda página recebe `n` links das irmãs, não só as primeiras da lista.
function rodizio(lista: LinkConteudo[], n: number): Record<string, string[]> {
  return Object.fromEntries(
    lista.map((item, i) => [
      item.href,
      Array.from({ length: Math.min(n, lista.length - 1) }, (_, k) => lista[(i + k + 1) % lista.length].href),
    ]),
  );
}

const G = (slug: string) => `/guias/${slug}`;
const ROBO = '/comparativo/robo-de-atendimento-vs-inteligencia-comercial';
const CRM = '/comparativo/dexi-vs-crm-tradicional';
const LEADS = '/solucoes/gestao-leads-automotivo';
const WHATSAPP = '/integracoes/whatsapp-business-concessionaria';

/**
 * Bloco "Conteúdos relacionados" de cada página: 2 ou 3 irmãs. O link para a
 * índice entra sozinho (ver hubDe).
 */
export const RELACIONADOS: Record<string, string[]> = {
  [G('como-escolher-crm-automotivo')]: [G('transformacao-digital-concessionaria'), G('ia-automotiva-brasil'), LEADS],
  [G('ia-automotiva-brasil')]: [G('como-escolher-crm-automotivo'), G('transformacao-digital-concessionaria'), ROBO],
  [G('transformacao-digital-concessionaria')]: [G('ia-automotiva-brasil'), G('como-escolher-crm-automotivo'), '/metodologia'],
  [LEADS]: [G('como-escolher-crm-automotivo'), ROBO, WHATSAPP],
  [ROBO]: [LEADS, CRM, G('ia-automotiva-brasil')],
  [CRM]: [ROBO, G('como-escolher-crm-automotivo'), LEADS],
  [WHATSAPP]: [LEADS, ROBO],
  '/metodologia': [G('ia-automotiva-brasil'), G('transformacao-digital-concessionaria'), LEADS],
  ...rodizio(fabricas, 3),
  ...rodizio(grupos, 2),
};

export function relacionadosDe(caminho: string): LinkConteudo[] {
  return (RELACIONADOS[caminho] ?? []).map((href) => {
    const item = CATALOGO[href];
    if (!item) throw new Error(`Relacionado sem cadastro no catálogo: ${href}`);
    return item;
  });
}

/** O que a home destaca: os 3 guias, a solução de leads, o comparativo com robô e a metodologia. */
export const DESTAQUES_HOME: LinkConteudo[] = [...guias, CATALOGO[LEADS], CATALOGO[ROBO], METODOLOGIA];
