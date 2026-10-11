# Reposicionamento Dexi e Fykos — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aplicar o reposicionamento comercial nas páginas iniciais de dexidigital.com.br (empresa) e fykos.com.br (produto), com CTA único de "conversa de aderência", formulário curto compartilhado e tracking por origem, sem publicar métricas, marcas ou promessas não comprovadas.

**Architecture:** O site da Dexi (Next.js 16, este repositório) ganha um módulo puro `lib/lead-aderencia.ts` que é a fonte única dos campos, opções e validação do formulário curto; `/api/contact` passa a usá-lo e libera CORS só para fykos.com.br. O site do Fykos (Astro 5, `/Users/lorrayneparaiso/dev/fykos/website`, sem git) troca a home e o `/acesso`, cujo formulário passa a enviar para a API da Dexi com `origem: "fykos"`. Cases da home ficam atrás de um filtro (`lib/provas.ts`) que só publica caso completo e autorizado.

**Tech Stack:** Next.js 16 / React 19 / Tailwind 4 (Dexi) · Astro 5 / Vue 3 / Tailwind 4 (Fykos) · `node --test` com type stripping do Node 24 · Supabase (tabela `leads`, já existente) · Resend.

**Spec:** `docs/superpowers/specs/2026-10-11-reposicionamento-dexi-fykos.md` (cópia de `~/Downloads/Reposicionamento_Dexi_Fykos.md`).

## Global Constraints

- A Dexi continua empresa; o Fykos continua produto. "A Dexi apresenta competência da empresa; o Fykos apresenta produto."
- Copys de hero, blocos e CTAs: usar os textos do spec **literalmente** (seções 1 e 2).
- "NÃO publicar percentuais e valores globais sem documentação da metodologia." Remover +45%, R$ 7M+, 35%, 60% do pipeline, 99,8%/99.98% uptime, 84 ms, 7–21 dias das páginas tocadas.
- "Evitar promessas de 'zero alucinação', 'nenhuma oportunidade perdida' ou 'zero risco'."
- "CTA inicial = reunião de aderência; não prometer relatórios de ROI em 24h sem análise real."
- "Menos afirmações sobre concorrentes e superioridade sem prova." Remover "IA de prateleira × Dexi" e "IA generativa típica × Fykos".
- "Não depender de vocabulário de arquitetura distribuída no primeiro scroll." Os sete nós ficam só na área técnica do Fykos.
- "Formulário curto: segmento, tamanho da operação, desafio mais relevante, CRM (opcional), cargo, contato. Não exigir detalhes confidenciais de carteira na primeira etapa."
- "Não inventar integrações nem métricas." Não citar integrações na home da Dexi; manter só as que já estavam publicadas no `/o-fykos` (Syonet, AutoConf) e marcá-las para conferência.
- "Preservando identidade visual, logos existentes, links e SEO": mesmas URLs, mesmas âncoras (`/#nos`, `/#operacao`), mesmo design system de cada site.
- "Não publicar automaticamente sem revisão": nada de commit/push/deploy nesta execução; entregar diff local para revisão.
- `source` da tabela `leads` mantém `website_contact_form` para leads da Dexi (filtro existente); leads do Fykos usam `fykos_contact_form`.

## Review Focus

1. Formulário do Fykos enviado de outro domínio: sem `Access-Control-Allow-Origin` correto o navegador bloqueia e o lead some sem erro visível. → teste de `cabecalhosCors` (Task 1) + verificação manual do preflight (Task 10).
2. Corpo de requisição que não é JSON/objeto (bot, `null`, array, texto): deve virar 400, nunca 500 nem exceção. → teste "corpo que não é objeto" (Task 1) + `request.json()` em try próprio (Task 2).
3. Falha de rede/CORS no `/acesso` do Fykos: a pessoa precisa ver mensagem útil com e-mail alternativo, não "Failed to fetch". → script do formulário só exibe mensagem vinda da API; qualquer outra falha mostra o texto padrão (Task 9) + teste manual com API desligada (Task 10).
4. Case incompleto ou sem autorização aparecendo na home por engano. → `casosPublicaveis` exige todos os campos, autorização de números e data de validação; testes de cada campo faltante (Task 4).
5. Texto digitado pelo visitante injetado no e-mail interno (HTML). → `escaparHtml` testado (Task 1) e usado em todo valor do e-mail (Task 2).

---

## Mapa de arquivos

**Dexi (este repositório)**

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `lib/lead-aderencia.ts` | criar | opções, validação, linha do Supabase, CORS, escape HTML |
| `lib/lead-aderencia.test.ts` | criar | testes `node --test` |
| `lib/provas.ts` / `lib/provas.test.ts` | criar | regra de publicação de cases + testes |
| `app/api/contact/route.ts` | modificar | usar o módulo, CORS, OPTIONS, e-mail escapado |
| `components/ContactForm.tsx` | reescrever | formulário curto + rastreio (cta, página, UTM) |
| `app/contato/page.tsx` | reescrever | página "Conversa de aderência" |
| `components/ui/TrackedCTA.tsx` | modificar | novo tipo `aderencia` → `/contato?cta=<location>` |
| `app/page.tsx` | reescrever | home com os blocos do spec |
| `app/o-fykos/page.tsx` | reescrever | página do produto alinhada ao Fykos |
| `components/layout/Header.tsx`, `Footer.tsx` | modificar | CTA e textos de posicionamento |
| `app/layout.tsx` | modificar | metadata padrão |
| `lib/structured-data.ts` | modificar | Organization/WebSite/ProfessionalService; FAQ da home sai daqui |
| `public/llms.txt`, `app/llms-full.txt/route.ts` | modificar | cabeçalho de posicionamento |
| `public/og-image-home.jpg` | regerar | mesma arte, novo texto |

**Fykos (`/Users/lorrayneparaiso/dev/fykos/website`)**

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `src/layouts/Shell.astro` | modificar | title/description/keywords padrão |
| `src/components/sections/Hero.astro` | reescrever | hero do spec + painel do fluxo |
| `src/components/sections/FluxoTrabalho.astro` | criar | `#como-funciona` (4 etapas) |
| `src/components/sections/Aplicacoes.astro` | criar | `#aplicacoes` (4 aplicações) |
| `src/components/sections/Governanca.astro` | criar | `#governanca` |
| `src/components/sections/BentoNos.astro` | modificar | vira área técnica (mantém `#nos`) |
| `src/components/sections/OperacaoZeroFriccao.astro` | modificar | copy sem "zero", exemplo marcado como ilustrativo (mantém `#operacao`) |
| `src/components/sections/CTAFinal.astro`, `Header.astro`, `Footer.astro` | modificar | CTA único, navegação |
| `src/pages/index.astro` | modificar | nova ordem de seções |
| `src/lib/aderencia.ts` | criar | cópia das opções do formulário |
| `src/env.d.ts` | criar | tipo de `PUBLIC_DEXI_LEAD_API` |
| `src/pages/acesso.astro` | reescrever | formulário curto → API da Dexi |

`Problema.astro`, `DeterministicMatrix.vue` e `TelemetryStrip.vue` deixam de ser importados. Não são apagados (o diretório não tem git; apagar seria irreversível).

---

### Task 1: Módulo do lead de aderência (Dexi)

**Files:**
- Create: `lib/lead-aderencia.ts`
- Test: `lib/lead-aderencia.test.ts`

**Interfaces:**
- Produces: `SEGMENTOS`, `TAMANHOS_OPERACAO`, `DESAFIOS: Opcao[]`; `rotulo(opcoes, valor): string`; `validarLeadAderencia(corpo: unknown): ResultadoValidacao`; `montarRegistroLead(lead): RegistroLead`; `cabecalhosCors(origin: string | null, dev?: boolean): Record<string,string>`; `escaparHtml(s): string`; `dominioDaOrigem(origem): string`; tipos `LeadAderencia`, `Origem`.

- [ ] **Step 1: Escrever os testes**

```ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  validarLeadAderencia,
  montarRegistroLead,
  cabecalhosCors,
  escaparHtml,
} from './lead-aderencia.ts';

const VALIDO = {
  nome: '  Ana Souza ',
  cargo: 'Diretora comercial',
  empresa: 'Grupo Exemplo',
  email: 'ana@grupoexemplo.com.br',
  whatsapp: '(34) 99999-0000',
  segmento: 'automotivo',
  tamanhoOperacao: '200-1000',
  desafio: 'priorizacao',
  crm: 'Syonet',
};

function leadValido(extra: Record<string, unknown> = {}) {
  const r = validarLeadAderencia({ ...VALIDO, ...extra });
  if (!r.ok) throw new Error(`esperava válido, veio: ${r.erro}`);
  return r.lead;
}

test('aceita o formulário curto e apara espaços', () => {
  const lead = leadValido();
  assert.equal(lead.nome, 'Ana Souza');
  assert.equal(lead.crm, 'Syonet');
  assert.equal(lead.origem, 'dexi');
  assert.equal(lead.cta, 'direto');
});

test('origem: aceita fykos, descarta valor desconhecido', () => {
  assert.equal(leadValido({ origem: 'fykos' }).origem, 'fykos');
  assert.equal(leadValido({ origem: 'concorrente' }).origem, 'dexi');
});

test('exige nome, cargo, empresa e e-mail', () => {
  for (const campo of ['nome', 'cargo', 'empresa', 'email']) {
    const r = validarLeadAderencia({ ...VALIDO, [campo]: '   ' });
    assert.equal(r.ok, false, campo);
  }
});

test('rejeita e-mail inválido', () => {
  const r = validarLeadAderencia({ ...VALIDO, email: 'ana@sem-ponto' });
  assert.deepEqual(r, { ok: false, erro: 'E-mail inválido.' });
});

test('WhatsApp e CRM são opcionais; WhatsApp preenchido precisa ser telefone', () => {
  assert.equal(leadValido({ whatsapp: '', crm: '' }).whatsapp, '');
  assert.equal(leadValido({ whatsapp: '+55 11 99184-7629' }).whatsapp, '+55 11 99184-7629');
  assert.equal(validarLeadAderencia({ ...VALIDO, whatsapp: 'me liga' }).ok, false);
});

test('rejeita opção fora da lista em segmento, tamanho e desafio', () => {
  for (const campo of ['segmento', 'tamanhoOperacao', 'desafio']) {
    assert.equal(validarLeadAderencia({ ...VALIDO, [campo]: 'inventado' }).ok, false, campo);
    assert.equal(validarLeadAderencia({ ...VALIDO, [campo]: '' }).ok, false, campo);
  }
});

test('corpo que não é objeto vira erro, não exceção', () => {
  for (const corpo of [null, undefined, 'texto', 42, [VALIDO]]) {
    assert.deepEqual(validarLeadAderencia(corpo), { ok: false, erro: 'Requisição inválida.' });
  }
});

test('campos que não são texto são tratados como vazios', () => {
  assert.equal(validarLeadAderencia({ ...VALIDO, nome: { $ne: '' } }).ok, false);
});

test('cta vira slug curto', () => {
  assert.equal(leadValido({ cta: 'Hero <script>' }).cta, 'hero-script');
  assert.equal(leadValido({ cta: 'x'.repeat(200) }).cta.length, 60);
});

test('UTM: só as cinco chaves conhecidas, truncadas', () => {
  const lead = leadValido({
    utm: { utm_source: 'linkedin', utm_campaign: 'c'.repeat(300), gclid: 'abc', utm_medium: '' },
  });
  assert.deepEqual(Object.keys(lead.utm), ['utm_source', 'utm_campaign']);
  assert.equal(lead.utm.utm_campaign?.length, 100);
  assert.deepEqual(leadValido({ utm: 'nao-objeto' }).utm, {});
});

test('trunca campos longos', () => {
  assert.equal(leadValido({ nome: 'a'.repeat(500) }).nome.length, 100);
});

test('montarRegistroLead: source preserva o filtro do site da Dexi', () => {
  assert.equal(montarRegistroLead(leadValido()).source, 'website_contact_form');
  assert.equal(montarRegistroLead(leadValido({ origem: 'fykos' })).source, 'fykos_contact_form');
});

test('montarRegistroLead: rótulos legíveis, CRM opcional e rastreio de origem', () => {
  const registro = montarRegistroLead(
    leadValido({ crm: '', cta: 'hero', origem: 'fykos', pagina: 'https://fykos.com.br/acesso?cta=hero', utm: { utm_source: 'linkedin' } }),
  );
  assert.equal(registro.name, 'Ana Souza');
  assert.equal(registro.company, 'Grupo Exemplo');
  assert.equal(registro.phone, '(34) 99999-0000');
  assert.equal(registro.status, 'new');
  assert.equal(registro.service, 'Saber quais oportunidades merecem atenção agora');
  assert.match(registro.message, /^\[Conversa de aderência\]/);
  assert.match(registro.message, /Segmento: Automotivo \(concessionária ou grupo\)/);
  assert.match(registro.message, /CRM: Não informado/);
  assert.match(registro.message, /Origem: fykos\.com\.br · CTA: hero/);
  assert.match(registro.message, /UTM: utm_source=linkedin/);
  assert.equal(montarRegistroLead(leadValido({ whatsapp: '' })).phone, null);
});

test('escaparHtml neutraliza marcação', () => {
  assert.equal(escaparHtml(`<img src=x onerror="a('b')">&`), '&lt;img src=x onerror=&quot;a(&#39;b&#39;)&quot;&gt;&amp;');
});

test('cabecalhosCors: só o site do Fykos; localhost só em dev', () => {
  assert.equal(cabecalhosCors('https://fykos.com.br')['Access-Control-Allow-Origin'], 'https://fykos.com.br');
  assert.equal(cabecalhosCors('https://www.fykos.com.br')['Access-Control-Allow-Origin'], 'https://www.fykos.com.br');
  assert.deepEqual(cabecalhosCors('https://malicioso.com'), {});
  assert.deepEqual(cabecalhosCors(null), {});
  assert.deepEqual(cabecalhosCors('http://localhost:4321'), {});
  assert.equal(cabecalhosCors('http://localhost:4321', true)['Access-Control-Allow-Origin'], 'http://localhost:4321');
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `node --test lib/lead-aderencia.test.ts`
Expected: FAIL — `Cannot find module './lead-aderencia.ts'`.

- [ ] **Step 3: Implementar `lib/lead-aderencia.ts`**

```ts
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
  const utmBruto = ehObjeto(corpo.utm) ? corpo.utm : {};
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
```

- [ ] **Step 4: Rodar e ver passar**

Run: `node --test lib/lead-aderencia.test.ts`
Expected: PASS (15 testes).

---

### Task 2: `/api/contact` usa o módulo, libera CORS para o Fykos e escapa o e-mail

**Files:**
- Modify: `app/api/contact/route.ts` (arquivo inteiro)

**Interfaces:**
- Consumes: tudo de `@/lib/lead-aderencia` (Task 1).
- Produces: `POST /api/contact` aceita `{nome, cargo, empresa, email, whatsapp?, segmento, tamanhoOperacao, desafio, crm?, origem?, cta?, pagina?, utm?, eventId?}` → `200 {success:true}` | `400/429/500 {error}`; `OPTIONS /api/contact` → 204 com CORS para fykos.com.br.

- [ ] **Step 1: Reescrever a rota**

```ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { checkRateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';
import { sendOpenAIAdsConversion } from '@/lib/openai-ads';
import {
  validarLeadAderencia,
  montarRegistroLead,
  cabecalhosCors,
  escaparHtml,
  rotulo,
  dominioDaOrigem,
  SEGMENTOS,
  TAMANHOS_OPERACAO,
  DESAFIOS,
  type LeadAderencia,
} from '@/lib/lead-aderencia';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const isDev = process.env.NODE_ENV !== 'production';

// Lazy initialization of Resend client
let resendInstance: Resend | null = null;

function getResend(): Resend | null {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY not configured - email notifications disabled');
      return null;
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

const FROM_EMAIL = process.env.EMAIL_FROM || 'Dexi Digital <contato@dexidigital.com.br>';
const INTERNAL_EMAIL = process.env.INTERNAL_NOTIFICATION_EMAIL || 'contato@dexidigital.com.br';

// Preflight do formulário de fykos.com.br/acesso (outro domínio).
export function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: cabecalhosCors(request.headers.get('origin'), isDev),
  });
}

export async function POST(request: NextRequest) {
  const cors = cabecalhosCors(request.headers.get('origin'), isDev);
  const responder = (corpo: object, status: number, extra: Record<string, string> = {}) =>
    NextResponse.json(corpo, { status, headers: { ...cors, ...extra } });

  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimitResult = checkRateLimit(clientIP, RATE_LIMITS.contactForm);

    if (!rateLimitResult.success) {
      return responder({ error: 'Muitas requisições. Por favor, aguarde alguns minutos.' }, 429, {
        'Retry-After': String(rateLimitResult.resetIn),
        'X-RateLimit-Remaining': '0',
      });
    }

    let corpo: unknown;
    try {
      corpo = await request.json();
    } catch {
      return responder({ error: 'Requisição inválida.' }, 400);
    }

    const resultado = validarLeadAderencia(corpo);
    if (!resultado.ok) {
      return responder({ error: resultado.erro }, 400);
    }
    const { lead } = resultado;

    // Create Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { error } = await supabase.from('leads').insert([montarRegistroLead(lead)]);

    if (error) {
      console.error('Supabase error:', error);
      return responder({ error: 'Erro ao salvar contato' }, 500);
    }

    // Send email notification (non-blocking)
    sendContactNotification(lead).catch(console.error);

    // Server-side conversion tracking (non-blocking)
    if (lead.eventId) {
      sendOpenAIAdsConversion({
        eventId: lead.eventId,
        sourceUrl: request.headers.get('referer') || `${process.env.NEXT_PUBLIC_SITE_URL}/contato`,
      }).catch(console.error);
    }

    return responder({ success: true }, 200);
  } catch (error) {
    console.error('Contact form error:', error);
    return responder({ error: 'Erro interno do servidor' }, 500);
  }
}

async function sendContactNotification(lead: LeadAderencia): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const origem = dominioDaOrigem(lead.origem);
  const linhas: [string, string][] = [
    ['Nome', lead.nome],
    ['Cargo', lead.cargo],
    ['Empresa', lead.empresa],
    ['E-mail', lead.email],
    ['WhatsApp', lead.whatsapp || 'Não informado'],
    ['Segmento', rotulo(SEGMENTOS, lead.segmento)],
    ['Tamanho da operação', rotulo(TAMANHOS_OPERACAO, lead.tamanhoOperacao)],
    ['Desafio mais relevante', rotulo(DESAFIOS, lead.desafio)],
    ['CRM', lead.crm || 'Não informado'],
    ['Origem', `${origem} · CTA ${lead.cta}`],
  ];
  const tabela = linhas
    .map(
      ([campo, valor]) => `
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 35%;">${campo}:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escaparHtml(valor)}</td>
      </tr>`,
    )
    .join('');
  const telefone = lead.whatsapp.replace(/\D/g, '');

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: INTERNAL_EMAIL,
      subject: `Conversa de aderência: ${lead.empresa} (${origem})`,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family: 'Segoe UI', sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 25px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 20px;">Nova solicitação de conversa de aderência</h1>
  </div>

  <div style="background: #fff; padding: 25px; border: 1px solid #e5e7eb; border-top: none;">
    <table style="width: 100%; border-collapse: collapse;">${tabela}
    </table>

    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;">

    <div>
      <a href="mailto:${escaparHtml(lead.email)}" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">Responder por e-mail</a>
      ${telefone ? `<a href="https://api.whatsapp.com/send?phone=${telefone}" style="display: inline-block; background: #25D366; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">WhatsApp</a>` : ''}
    </div>
  </div>

  <div style="background: #f8fafc; padding: 15px; border-radius: 0 0 12px 12px; text-align: center; font-size: 12px; color: #6b7280;">
    <p style="margin: 0;">Dexi Digital - Sistema de Leads</p>
  </div>
</body>
</html>
      `,
    });
  } catch (error) {
    console.error('Failed to send contact notification:', error);
  }
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit -p .`
Expected: sem erros novos em `app/api/contact/route.ts` e `lib/lead-aderencia.ts`.

---

### Task 3: CTA único, formulário curto e página `/contato`

**Files:**
- Modify: `components/ui/TrackedCTA.tsx`
- Rewrite: `components/ContactForm.tsx`, `app/contato/page.tsx`

**Interfaces:**
- Consumes: `SEGMENTOS`, `TAMANHOS_OPERACAO`, `DESAFIOS` (Task 1); `POST /api/contact` (Task 2).
- Produces: `<TrackedCTA type="aderencia" location="..." />` → link interno `/contato?cta=<location>`, texto padrão "Avaliar aderência da minha operação". Usado pelas Tasks 5–7.

- [ ] **Step 1: `TrackedCTA` — novo tipo**

Em `CTAType` acrescentar `'aderencia'`; em `CTA_CONFIG`:

```ts
  aderencia: {
    text: 'Avaliar aderência da minha operação',
    href: '/contato',
  },
```

E logo após o bloco que resolve `whatsapp`/`validation`:

```ts
  // Conversa de aderência: o formulário registra de qual CTA a pessoa veio.
  if (type === 'aderencia' && !href) {
    finalHref = `/contato?cta=${encodeURIComponent(location)}`;
  }
```

- [ ] **Step 2: `ContactForm` — formulário curto**

```tsx
'use client';

import { useState } from 'react';
import { trackFormSubmit } from '@/lib/tracking';
import { SEGMENTOS, TAMANHOS_OPERACAO, DESAFIOS } from '@/lib/lead-aderencia';

const CAMPOS_INICIAIS = {
  nome: '',
  cargo: '',
  empresa: '',
  email: '',
  whatsapp: '',
  segmento: '',
  tamanhoOperacao: '',
  desafio: '',
  crm: '',
};

const CHAVES_UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

const ERRO_PADRAO =
  'Não foi possível enviar agora. Tente novamente ou escreva para contato@dexidigital.com.br';

// De onde a pessoa veio: CTA clicado (?cta=), página e UTMs presentes na URL.
function rastreioDaPagina() {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const chave of CHAVES_UTM) {
    const valor = params.get(chave);
    if (valor) utm[chave] = valor;
  }
  return { cta: params.get('cta') ?? 'direto', pagina: window.location.href, utm };
}

export default function ContactForm() {
  const [formData, setFormData] = useState(CAMPOS_INICIAIS);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const eventId = crypto.randomUUID();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, origem: 'dexi', ...rastreioDaPagina(), eventId }),
      });

      if (!response.ok) {
        const corpo = await response.json().catch(() => null);
        throw new Error(typeof corpo?.error === 'string' ? corpo.error : ERRO_PADRAO);
      }

      setStatus('success');
      trackFormSubmit('contact_form', true, eventId);
      setFormData(CAMPOS_INICIAIS);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error && error.message ? error.message : ERRO_PADRAO);
      trackFormSubmit('contact_form', false);
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8 animate-fade-in-up" role="status">
        <div className="w-16 h-16 bg-[var(--color-success-100)] dark:bg-[var(--color-success-900)]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[var(--color-success-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-h3 mb-2">Solicitação recebida</h3>
        <p className="text-body-sm text-[var(--text-secondary)] mb-6">
          Vamos analisar as informações e entrar em contato para agendar a conversa de aderência.
        </p>
        <button onClick={() => setStatus('idle')} className="btn btn-ghost">
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-base";
  const labelClasses = "block text-sm font-medium text-[var(--text-primary)] mb-1.5";
  const obrigatorio = <span className="text-[var(--color-error-500)]">*</span>;
  const opcional = <span className="font-normal text-[var(--text-tertiary)]">(opcional)</span>;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className={labelClasses}>Nome {obrigatorio}</label>
          <input type="text" id="nome" name="nome" required autoComplete="name" value={formData.nome} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="cargo" className={labelClasses}>Cargo {obrigatorio}</label>
          <input type="text" id="cargo" name="cargo" required autoComplete="organization-title" value={formData.cargo} onChange={handleChange} className={inputClasses} placeholder="Ex.: Diretor comercial" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="empresa" className={labelClasses}>Empresa {obrigatorio}</label>
          <input type="text" id="empresa" name="empresa" required autoComplete="organization" value={formData.empresa} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>E-mail corporativo {obrigatorio}</label>
          <input type="email" id="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelClasses}>WhatsApp {opcional}</label>
        <input type="tel" id="whatsapp" name="whatsapp" autoComplete="tel" value={formData.whatsapp} onChange={handleChange} className={inputClasses} placeholder="(00) 00000-0000" />
      </div>

      <div>
        <label htmlFor="segmento" className={labelClasses}>Segmento {obrigatorio}</label>
        <select id="segmento" name="segmento" required value={formData.segmento} onChange={handleChange} className={inputClasses}>
          <option value="">Selecione</option>
          {SEGMENTOS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="tamanhoOperacao" className={labelClasses}>Tamanho da operação {obrigatorio}</label>
        <select id="tamanhoOperacao" name="tamanhoOperacao" required value={formData.tamanhoOperacao} onChange={handleChange} className={inputClasses}>
          <option value="">Volume aproximado de oportunidades</option>
          {TAMANHOS_OPERACAO.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="desafio" className={labelClasses}>Desafio mais relevante {obrigatorio}</label>
        <select id="desafio" name="desafio" required value={formData.desafio} onChange={handleChange} className={inputClasses}>
          <option value="">Selecione</option>
          {DESAFIOS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="crm" className={labelClasses}>CRM atual {opcional}</label>
        <input type="text" id="crm" name="crm" value={formData.crm} onChange={handleChange} className={inputClasses} placeholder="Ex.: Syonet, Salesforce, RD Station" />
      </div>

      {status === 'error' && (
        <div className="p-4 bg-[var(--color-error-50)] dark:bg-[var(--color-error-900)]/20 border border-[var(--color-error-200)] dark:border-[var(--color-error-800)] rounded-xl animate-fade-in" role="alert">
          <p className="text-sm text-[var(--color-error-600)]">{errorMessage}</p>
        </div>
      )}

      <button type="submit" disabled={status === 'loading'} className="btn btn-primary w-full justify-center py-4">
        {status === 'loading' ? 'Enviando...' : 'Solicitar conversa de aderência'}
      </button>

      <p className="text-xs text-[var(--text-tertiary)] text-center">
        Nesta etapa não pedimos dados confidenciais de carteira.
      </p>
    </form>
  );
}
```

(Mantém o spinner SVG do original dentro do botão no estado `loading`.)

- [ ] **Step 3: `app/contato/page.tsx`**

Metadata: `title: 'Conversa de aderência'` (o template do layout acrescenta "| Dexi Digital"; o título atual sai duplicado), description: "Solicite uma conversa de aderência: entendemos sua operação comercial, os sistemas em uso e o desafio mais relevante para avaliar se existe uma oportunidade concreta. Formulário curto, sem dados confidenciais de carteira."

Hero: overline "CONVERSA DE ADERÊNCIA"; H1 "Vamos avaliar se existe uma oportunidade concreta na sua operação."; lead "Uma conversa para entender sua operação comercial, os sistemas em uso e o desafio mais relevante. Sem compromisso e sem pedir dados confidenciais de carteira nesta etapa."

Coluna esquerda "Como funciona a conversa" (lista numerada, estilo `text-number` da home antiga):

```tsx
const ETAPAS = [
  { n: '01', titulo: 'Entendemos o contexto', texto: 'Segmento, tamanho da operação, sistemas em uso e o desafio mais relevante.' },
  { n: '02', titulo: 'Avaliamos a aderência', texto: 'Volume, dados disponíveis e viabilidade de implementação.' },
  { n: '03', titulo: 'Indicamos o próximo passo', texto: 'Se houver aderência, propomos uma análise mais detalhada. Se não houver, dizemos isso com clareza.' },
];
```

Mantém os blocos "Prefere WhatsApp?" e "Prefere email direto?" do arquivo atual. Card do formulário: título "Solicitar conversa de aderência" + `<ContactForm />`. Remover "Estimativa de ROI", "Resposta em 24h" e "Roadmap sugerido".

- [ ] **Step 4: Typecheck** — `npx tsc --noEmit -p .` sem erros nos três arquivos.

---

### Task 4: Regra de publicação de cases

**Files:**
- Create: `lib/provas.ts`
- Test: `lib/provas.test.ts`

**Interfaces:**
- Produces: `CasoProva`, `CAMPOS_CASO: { campo: CampoCaso; rotulo: string }[]`, `CASOS`, `casoPublicavel(caso)`, `casosPublicaveis(casos?)` (máx. 2), `nomeExibido(caso)`. Consumido pela Task 5.

- [ ] **Step 1: Testes**

```ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CASOS, CAMPOS_CASO, casoPublicavel, casosPublicaveis, nomeExibido, type CasoProva } from './provas.ts';

const COMPLETO: CasoProva = {
  id: 'teste',
  titulo: 'Caso de teste',
  segmento: 'Automotivo',
  cenarioAnterior: 'Base sem priorização',
  periodo: 'mar–mai/2026',
  oportunidadesAnalisadas: '1.000',
  acoesIniciadas: '400 abordagens',
  negociosConfirmados: '12 vendas faturadas',
  criterioAtribuicao: 'Venda faturada até 30 dias após ação registrada',
  cliente: 'Cliente X',
  autorizacaoMarca: false,
  autorizacaoNumeros: true,
  validadoEm: '2026-10-01',
};

test('rascunhos atuais não aparecem no site', () => {
  assert.deepEqual(casosPublicaveis(CASOS), []);
});

test('caso completo, validado e com números autorizados é publicável', () => {
  assert.equal(casoPublicavel(COMPLETO), true);
});

test('qualquer campo obrigatório vazio bloqueia', () => {
  for (const { campo } of CAMPOS_CASO) {
    assert.equal(casoPublicavel({ ...COMPLETO, [campo]: null }), false, `${campo} null`);
    assert.equal(casoPublicavel({ ...COMPLETO, [campo]: '   ' }), false, `${campo} em branco`);
  }
});

test('sem autorização de números ou sem validação, não publica', () => {
  assert.equal(casoPublicavel({ ...COMPLETO, autorizacaoNumeros: false }), false);
  assert.equal(casoPublicavel({ ...COMPLETO, validadoEm: null }), false);
});

test('home mostra no máximo dois cases', () => {
  const tres = [1, 2, 3].map((i) => ({ ...COMPLETO, id: `c${i}` }));
  assert.deepEqual(casosPublicaveis(tres).map((c) => c.id), ['c1', 'c2']);
});

test('marca do cliente só com autorização de marca', () => {
  assert.equal(nomeExibido(COMPLETO), 'Automotivo');
  assert.equal(nomeExibido({ ...COMPLETO, autorizacaoMarca: true }), 'Cliente X');
  assert.equal(nomeExibido({ ...COMPLETO, autorizacaoMarca: true, cliente: null }), 'Automotivo');
});
```

- [ ] **Step 2:** `node --test lib/provas.test.ts` → FAIL (módulo inexistente).

- [ ] **Step 3: Implementar**

```ts
/**
 * Provas (cases) da home.
 *
 * Regra do reposicionamento (docs/superpowers/specs/2026-10-11-reposicionamento-dexi-fykos.md):
 * um case só aparece no site com cenário anterior, período, volume analisado,
 * ações iniciadas, negócios efetivamente confirmados e critério de atribuição,
 * MAIS autorização do cliente para os números e a data em que autoria, período
 * e atribuição foram conferidos. A marca só aparece com autorização de marca;
 * sem ela, o case sai identificado pelo segmento.
 *
 * "Pipeline influenciado" não é "receita incremental": nunca use um no lugar
 * do outro em `negociosConfirmados`.
 */

export type CampoCaso =
  | 'cenarioAnterior'
  | 'periodo'
  | 'oportunidadesAnalisadas'
  | 'acoesIniciadas'
  | 'negociosConfirmados'
  | 'criterioAtribuicao';

export interface CasoProva {
  id: string;
  titulo: string;
  segmento: string;
  cenarioAnterior: string | null;
  periodo: string | null;
  oportunidadesAnalisadas: string | null;
  acoesIniciadas: string | null;
  negociosConfirmados: string | null;
  criterioAtribuicao: string | null;
  /** Nome ou marca do cliente. Só é exibido com `autorizacaoMarca`. */
  cliente: string | null;
  autorizacaoMarca: boolean;
  autorizacaoNumeros: boolean;
  /** AAAA-MM-DD em que autoria, período e atribuição foram conferidos. */
  validadoEm: string | null;
}

export const CAMPOS_CASO: { campo: CampoCaso; rotulo: string }[] = [
  { campo: 'cenarioAnterior', rotulo: 'Cenário anterior' },
  { campo: 'periodo', rotulo: 'Período' },
  { campo: 'oportunidadesAnalisadas', rotulo: 'Oportunidades analisadas' },
  { campo: 'acoesIniciadas', rotulo: 'Ações iniciadas' },
  { campo: 'negociosConfirmados', rotulo: 'Negócios efetivamente confirmados' },
  { campo: 'criterioAtribuicao', rotulo: 'Critério de atribuição' },
];

const LIMITE_HOME = 2;

/**
 * Rascunhos montados a partir do que já está publicado em /cases. Ficam fora
 * do site até alguém preencher os campos nulos, obter as autorizações e
 * registrar `validadoEm`.
 */
export const CASOS: CasoProva[] = [
  {
    id: 'automotivo-alto-ticket',
    titulo: 'Venda de alto ticket conduzida do primeiro contato ao fechamento',
    segmento: 'Automotivo · alto ticket',
    cenarioAnterior: 'Jornada de compra longa, com muitas idas e vindas, em um veículo de altíssimo ticket.',
    periodo: null, // /cases cita "15 dias do primeiro contato ao fechamento": falta o período (datas)
    oportunidadesAnalisadas: null,
    acoesIniciadas: null,
    negociosConfirmados: '1 venda (ticket de R$ 1 milhão)', // conferir documentação
    criterioAtribuicao: null,
    cliente: null,
    autorizacaoMarca: false,
    autorizacaoNumeros: false,
    validadoEm: null,
  },
  {
    id: 'automotivo-duas-rodas',
    titulo: 'Priorização da base em operação de duas rodas premium',
    segmento: 'Automotivo · duas rodas premium',
    cenarioAnterior: 'Volume alto de leads sem estrutura para priorizar e dar continuidade em escala.',
    periodo: null,
    oportunidadesAnalisadas: '1.230 leads processados',
    acoesIniciadas: null,
    // /cases cita R$ 1,79 mi "em pipeline mapeado": é pipeline influenciado, não negócio confirmado.
    negociosConfirmados: null,
    criterioAtribuicao: null,
    cliente: null,
    autorizacaoMarca: false,
    autorizacaoNumeros: false,
    validadoEm: null,
  },
];

export function casoPublicavel(caso: CasoProva): boolean {
  if (!caso.autorizacaoNumeros || !caso.validadoEm) return false;
  return CAMPOS_CASO.every(({ campo }) => (caso[campo] ?? '').trim() !== '');
}

export function casosPublicaveis(casos: CasoProva[] = CASOS): CasoProva[] {
  return casos.filter(casoPublicavel).slice(0, LIMITE_HOME);
}

export function nomeExibido(caso: CasoProva): string {
  return caso.autorizacaoMarca && caso.cliente ? caso.cliente : caso.segmento;
}
```

- [ ] **Step 4:** `node --test lib/provas.test.ts` → PASS (6 testes).

---

### Task 5: Home da Dexi + dados estruturados

**Files:**
- Rewrite: `app/page.tsx`
- Modify: `lib/structured-data.ts` (`organizationSchema`, `localBusinessSchema`, `websiteSchema`, `getHomePageSchemas`; remover `faqSchema`, que só a home usava e não batia com o FAQ visível)

**Interfaces:**
- Consumes: `TrackedCTA type="aderencia"` (Task 3), `casosPublicaveis`, `nomeExibido`, `CAMPOS_CASO` (Task 4), `FAQSchema` de `components/seo/FAQSchema.tsx` (existente).

- [ ] **Step 1: Metadata**

```ts
const TITULO = 'Dexi Digital | Tecnologia para decisões comerciais de alto valor';
const DESCRICAO =
  'A Dexi desenvolve sistemas que transformam dados da operação em prioridades e ações comerciais, com regras, supervisão e rastreabilidade — sem exigir a troca do CRM. Criadora do Fykos.';
```

`openGraph` repete `url`, `siteName`, `images` (o Next substitui o objeto inteiro — ver comentário existente). `keywords`: 'inteligência comercial', 'execução comercial', 'priorização de oportunidades', 'decisões comerciais de alto valor', 'Fykos', 'sistema operacional de receita', 'grupos automotivos', 'integração com CRM'.

- [ ] **Step 2: Seções, nesta ordem** (copys literais do spec, seção 1)

1. `#hero` (mesmo fundo por imagem): overline "TECNOLOGIA PARA DECISÕES COMERCIAIS DE ALTO VALOR"; H1 "Se cada oportunidade vale muito, improviso comercial `<span className="text-result">custa caro</span>`."; lead = subtítulo do spec; CTAs `<TrackedCTA type="aderencia" location="hero" variant="money" />` e `<TrackedCTA type="synapse" location="hero" variant="secondary" />` ("Conhecer o Fykos").
2. `#a-dor`: overline "O PONTO CEGO"; H2 "Seu CRM registra o que aconteceu. Mas quem identifica o que merece atenção agora?"; parágrafo "Uma mudança de estoque, uma condição comercial, um contato que voltou a demonstrar intenção: sinais importantes podem passar despercebidos entre sistemas e equipes."; três cartões de sinal (`SINAIS`); destaque com borda à esquerda: "Quando a oportunidade é valiosa, o custo não é uma mensagem sem resposta: é uma decisão comercial que não aconteceu."
3. `#o-que-fazemos`: overline "O QUE FAZEMOS"; H2 "Dos dados à ação, com controle"; três cartões 01/02/03 — Identificamos / Orquestramos / Executamos e acompanhamos, com os textos do spec.
4. `#para-quem`: overline "PARA QUEM"; H2 "Operações em que cada decisão comercial pesa"; lead "Grupos automotivos, operações de alto valor e empresas nas quais a decisão comercial requer integração, continuidade e controle."; nota "A aplicação depende de volume, dados disponíveis e viabilidade de implementação."; três links (mantém as URLs de hoje): Automotivo `/automotivo`, Construtoras e incorporadoras `/construtoras`, Clínicas `/clinicas`, sem selo "Prova: TGV" nem "carro-chefe".
5. `#fykos`: overline "O PRODUTO"; H2 "Fykos: inteligência e execução comercial"; texto "A Dexi é a empresa. O Fykos é o produto que desenvolvemos para levar a oportunidade identificada até a ação executada, com regras definidas e cada etapa relevante registrada."; `<TrackedCTA type="synapse" location="fykos" variant="secondary" text="Conhecer o Fykos →" />`.
6. `#provas`: overline "PROVAS"; H2 "Resultado com método, não número solto"; lead "Cada número vem com período, volume analisado e critério de atribuição. Pipeline influenciado não é apresentado como receita."; se `casosPublicaveis()` tiver itens, cartões com `<dl>` de `CAMPOS_CASO`; senão, cartão com "Cada case que apresentamos traz os mesmos seis elementos. Números e marcas só são publicados com autorização do cliente — os cases documentados são apresentados na conversa de aderência." + checklist dos seis rótulos.
7. `#faq`: FAQ visível + `<FAQSchema faqs={FAQ_HOME} pageName="Dexi Digital" />` a partir do mesmo array:

```ts
const FAQ_HOME = [
  { question: 'Preciso trocar o meu CRM?', answer: 'Não. A Dexi integra as fontes que a operação já usa — CRM, estoque, histórico de atendimento e outras fontes autorizadas — e trabalha sobre elas.' },
  { question: 'Para que tipo de operação isso faz sentido?', answer: 'Para operações em que cada oportunidade tem valor alto e a decisão comercial depende de integração, continuidade e controle, como grupos automotivos. A aplicação depende de volume, dados disponíveis e viabilidade de implementação, e é isso que avaliamos na conversa de aderência.' },
  { question: 'O que acontece na conversa de aderência?', answer: 'Entendemos a operação, os sistemas em uso e o desafio mais relevante. Se houver aderência, propomos o próximo passo para uma análise mais detalhada; se não houver, dizemos isso com clareza. Nesta etapa não pedimos dados confidenciais de carteira.' },
  { question: 'Como acompanho o que foi executado?', answer: 'Cada etapa relevante fica registrada: eventos, ações iniciadas, falhas e encaminhamentos ao time. Isso permite auditar o que aconteceu e ajustar as regras ao longo do tempo.' },
  { question: 'Qual a relação entre a Dexi e o Fykos?', answer: 'A Dexi é a empresa. O Fykos é o produto de inteligência e execução comercial desenvolvido por ela.' },
];
```

8. `#cta` (`section-cta-premium`): H2 "Sua operação já tem dados."; texto "Vamos identificar onde existe uma oportunidade concreta para agir?"; `<TrackedCTA type="aderencia" location="cta-final" variant="money" text="Solicitar conversa de aderência" />`.
9. CTA fixo mobile: `<TrackedCTA type="aderencia" location="mobile-sticky" variant="primary" text="Avaliar aderência" ... />`.

Sai da home: faixa CountUp (+45%, R$ 7M+, 35%), "IA de prateleira × Dexi", "Nenhum lead morre", lista de integrações (DMS, Syonet, NBS), `ClientLogos`, "Diagnóstico de 24h", "Problemas que convertemos em resultado", "O custo de esperar (60%…)".

- [ ] **Step 3: `lib/structured-data.ts`**

```ts
// organizationSchema
  description:
    'A Dexi Digital desenvolve tecnologia para decisões comerciais de alto valor: sistemas que transformam dados da operação em prioridades e ações comerciais, integrando as fontes existentes, com regras, supervisão e rastreabilidade, sem exigir a troca do CRM. Criou o Fykos, produto de inteligência e execução comercial. Atende grupos automotivos e outras operações em que cada oportunidade tem valor alto.',
// knowsAbout: acrescentar no início 'Inteligência comercial', 'Execução comercial', 'Priorização de oportunidades'
  slogan: 'Tecnologia para decisões comerciais de alto valor.',

// localBusinessSchema
  name: 'Dexi Digital',
  description: 'Tecnologia para decisões comerciais de alto valor: integração de dados da operação, priorização de oportunidades e execução comercial com rastreabilidade.',
  serviceType: ['Fykos: inteligência e execução comercial', 'Engenharia de Dados & Ativos de Inteligência', 'Desenvolvimento de Sistemas de Missão Crítica', 'Inteligência comercial para grupos automotivos'],
  // oferta:
  name: 'Conversa de aderência',
  description: 'Avaliação da aderência da operação comercial: volume, dados disponíveis e viabilidade de implementação.',

// websiteSchema
  description: 'Tecnologia para decisões comerciais de alto valor',

export function getHomePageSchemas() {
  // organizationSchema e websiteSchema NAO entram aqui: o layout raiz ja os
  // emite em toda pagina. O FAQPage da home sai do proprio app/page.tsx, a
  // partir das mesmas perguntas exibidas na pagina.
  return [...servicesSchema];
}
```

- [ ] **Step 4:** `npx tsc --noEmit -p .` e `npx eslint app/page.tsx lib/structured-data.ts` sem erros.

---

### Task 6: Header, footer, metadata padrão, llms e imagem OG

**Files:**
- Modify: `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `app/layout.tsx`, `public/llms.txt`, `app/llms-full.txt/route.ts`
- Regenerate: `public/og-image-home.jpg`

- [ ] **Step 1: Header** — os dois CTAs (`header`, `header-mobile`) viram `<TrackedCTA type="aderencia" location="header" variant="money" text="Avaliar aderência" className="text-sm" />`; `sr-only` e `alt` do logo: "Dexi Digital".

- [ ] **Step 2: Footer**
  - Parágrafo da marca: "A Dexi desenvolve sistemas que transformam dados da operação em prioridades e ações comerciais. Criou o Fykos, produto de inteligência e execução comercial."; linha de apoio: "Integração, regras, supervisão e rastreabilidade."
  - Serviços: "Sistema Operacional de Receita (Fykos)" → "Fykos: inteligência e execução comercial" (mesmo href).
  - Contato: "Validar Impacto no EBITDA" (WhatsApp) → `<Link href="/contato?cta=footer">Avaliar aderência →</Link>`; remover import de `WHATSAPP_DIAGNOSTIC_URL` se ficar sem uso.
  - Microcopy: "Tecnologia para decisões comerciais de alto valor." / "Dados da operação transformados em prioridades e ações, sem trocar o CRM."; rodapé "© {ano} Dexi Digital. Tecnologia para decisões comerciais de alto valor."

- [ ] **Step 3: `app/layout.tsx`** — `title.default`, `description`, `openGraph.title/description/images[0].alt`, `twitter.title/description` com o TITULO/DESCRICAO da Task 5; `websiteSchema` já ajustado.

- [ ] **Step 4: llms** — `public/llms.txt` linhas 3 e 5, item "O Fykos" e "Contato":

```
> A Dexi Digital desenvolve tecnologia para decisões comerciais de alto valor: sistemas que transformam dados da operação em prioridades e ações comerciais, sem exigir a troca do CRM. Criadora do Fykos, produto de inteligência e execução comercial.

A Dexi integra CRM, estoque, histórico e fontes operacionais autorizadas para identificar oportunidades relevantes, orquestra a próxima ação com regras de negócio e executa processos com supervisão e rastreabilidade. Atua principalmente com grupos automotivos, além de construtoras/incorporadoras e clínicas no Brasil. O Fykos atua sobre os sistemas comerciais existentes — não exige migração de CRM.
- [O Fykos](https://dexidigital.com.br/o-fykos): produto de inteligência e execução comercial da Dexi — da oportunidade identificada à ação executada, com controle
- [Contato](https://dexidigital.com.br/contato): conversa de aderência
```

`app/llms-full.txt/route.ts`: mesmo resumo na linha `>`; "Quem a Dexi atende" → "Operações de alto valor por oportunidade, em que a decisão comercial requer integração, continuidade e controle:"; "Como a Dexi trabalha" → "Identifica: conecta CRM, estoque, histórico e fontes operacionais autorizadas. Orquestra: aplica regras de negócio para priorizar a próxima ação. Executa e acompanha: aciona fluxos e pessoas, registrando eventos, falhas e resultados. Não substitui o CRM: opera sobre ele."

- [ ] **Step 5: OG** — regerar 1200×630 com sharp no mesmo layout (fundo branco, logo `public/images/brand/logo.svg` com `.trim()`, faixa azul inferior), trocando as duas linhas por "Tecnologia para decisões comerciais de alto valor" / "Dados da operação transformados em prioridades e ações". Script descartável no scratchpad (o original também não foi versionado).

---

### Task 7: `/o-fykos` alinhado à página de produto

**Files:**
- Rewrite: `app/o-fykos/page.tsx`

- [ ] **Step 1:** metadata `title: 'O Fykos: inteligência e execução comercial'`, description "O Fykos é o produto da Dexi para inteligência e execução comercial: atua sobre os sistemas existentes, identifica oportunidades, orienta a próxima ação e executa processos dentro de regras definidas, com rastreabilidade." (mantém 'Fykos' e 'Sistema Operacional de Receita' em `keywords`).
- [ ] **Step 2: seções** — hero (supertítulo, H1, subtítulo e CTAs do spec, seção 2; CTA primário `aderencia` location `o-fykos-hero` com texto "Entender a aplicação na minha operação", secundário `#como-funciona` "Como funciona"); `#como-funciona` (4 etapas); `#aplicacoes` (4 aplicações); `#governanca` (texto do spec + 4 itens: Conectores, Regras e validações, Observabilidade, Limites e exceções); `#arquitetura` "Para times de TI" (as 4 camadas atuais sem "sem alucinação" e sem "ROI validado antes de escalar"; integrações Syonet/AutoConf mantidas; link para `https://fykos.com.br/#nos`); `#engenharia` (autoria, sem mudança); `#cta` "Avaliar aderência técnica e econômica ao Fykos." com `aderencia` location `o-fykos-cta-final`; CTA fixo mobile `aderencia`.
- [ ] **Step 3:** sai: "Lema" (trilhos), números técnicos (7–21 dias, 99,8%), "Pilares" (Nenhum lead morre), "Diagnóstico de 24h".

---

### Task 8: Home do Fykos

**Files (todos em `/Users/lorrayneparaiso/dev/fykos/website`):** ver mapa de arquivos.

- [ ] **Step 0:** backup `cp -R src <scratchpad>/fykos-src-original` (diretório sem git) e `pnpm install`.
- [ ] **Step 1: Shell** — `title = "Fykos | Inteligência e execução comercial"`, `description = "O Fykos atua sobre sistemas comerciais existentes: identifica situações que exigem atenção, orienta a próxima ação e executa processos dentro de regras definidas, com rastreabilidade."`, keywords "inteligência comercial, execução comercial, priorização de oportunidades, reativação de carteira, sistema operacional de receita".
- [ ] **Step 2: Hero** — Eyebrow "Fykos | Inteligência e execução comercial"; H1 "Da oportunidade identificada à ação executada. <span cyan>Com controle.</span>"; subtítulo literal; CTAs "Entender a aplicação na minha operação" → `/acesso?cta=hero` e "Como funciona" → `#como-funciona`; linha mono "Um produto Dexi Digital. Sem substituir o seu CRM."; painel à direita com as 4 etapas (sem telemetria inventada e sem o diagrama dos 7 nós).
- [ ] **Step 3: FluxoTrabalho** (`#como-funciona`) — 4 etapas com os textos literais do spec; H2 "Quatro etapas, do sinal ao resultado."
- [ ] **Step 4: Aplicacoes** (`#aplicacoes`) — 4 cartões com os textos do spec; nota "As aplicações dependem dos módulos contratados, do volume e dos dados disponíveis em cada operação."
- [ ] **Step 5: Governanca** (`#governanca`) — H2 "Inteligência para interpretar. Regras para executar."; texto literal do spec; 4 itens.
- [ ] **Step 6: BentoNos** — Eyebrow "Área técnica · para times de TI"; texto "Para quem avalia a arquitetura: cada nó tem função única, contrato de entrada e contrato de saída. Quais nós entram em cada operação depende dos módulos contratados."; `status="MÓDULO"` nos cards (não afirmar que todos estão ativos).
- [ ] **Step 7: OperacaoZeroFriccao** — Eyebrow "Área técnica · operação por comando"; H2 "Operação por comando, com supervisão."; texto sem "zero"; rótulo "Exemplo ilustrativo" acima do log.
- [ ] **Step 8: CTAFinal** — H2 "Avaliar aderência técnica e econômica ao Fykos."; texto "Uma conversa para entender sua operação, os sistemas em uso e os dados disponíveis — e verificar se existe uma aplicação concreta. Nesta etapa não pedimos dados confidenciais de carteira."; CTA → `/acesso?cta=cta-final`.
- [ ] **Step 9: Header/Footer** — nav "Como funciona" `/#como-funciona`, "Aplicações" `/#aplicacoes`, "Arquitetura" `/#nos`, CTA "Avaliar aderência" `/acesso?cta=header` visível também no mobile; footer: produto (Como funciona, Aplicações, Engenharia e governança, Arquitetura), tagline "Inteligência e execução comercial.", "UM PRODUTO DEXI DIGITAL" no lugar de "STATUS // OPERACIONAL", "Conversa de aderência" → `/acesso?cta=footer`.
- [ ] **Step 10: index.astro** — Hero, FluxoTrabalho, Aplicacoes, Governanca, BentoNos, OperacaoZeroFriccao, CTAFinal.

---

### Task 9: `/acesso` do Fykos envia para a API da Dexi

**Files:** `src/lib/aderencia.ts`, `src/env.d.ts`, `src/pages/acesso.astro`

**Interfaces:**
- Consumes: `POST https://dexidigital.com.br/api/contact` (Task 2) com `origem: "fykos"`; URL sobrescrevível por `PUBLIC_DEXI_LEAD_API`.

- [ ] **Step 1:** `src/lib/aderencia.ts` com `SEGMENTOS`, `TAMANHOS_OPERACAO`, `DESAFIOS` idênticos à Task 1 (comentário apontando a fonte).
- [ ] **Step 2:** `src/env.d.ts`: `interface ImportMetaEnv { readonly PUBLIC_DEXI_LEAD_API?: string }`.
- [ ] **Step 3:** página: Eyebrow "Conversa de aderência"; H1 "Entender a aplicação do Fykos na sua operação."; texto "Uma conversa com a equipe da Dexi para entender sua operação, os sistemas em uso e o desafio mais relevante — e avaliar se existe aderência técnica e econômica. Nesta etapa não pedimos dados confidenciais de carteira."; mesmos campos da Task 3; `<p role="status" aria-live="polite">`; bloco de sucesso oculto.
- [ ] **Step 4:** script: `fetch(API, { method: 'POST', body: JSON.stringify({ ...campos, origem: 'fykos', cta, pagina, utm }) })`; erro exibe `corpo.error` só se a API respondeu; falha de rede/CORS mostra "Não foi possível enviar agora. Tente novamente ou escreva para contato@dexidigital.com.br."; botão desabilitado durante o envio.

---

### Task 10: Verificação

- [ ] `node --test lib/*.test.ts` → todos passam.
- [ ] `npx tsc --noEmit -p .`, `npm run lint` (arquivos tocados) e `npm run build` no site da Dexi.
- [ ] `pnpm astro check` e `pnpm astro build --outDir <scratchpad>` no Fykos (não sobrescrever `dist/`, que é o que está no ar).
- [ ] `curl -X OPTIONS -H 'Origin: http://localhost:4321'` em `localhost:3000/api/contact` → 204 com `Access-Control-Allow-Origin`; `curl -X POST` com corpo inválido e com JSON quebrado → 400 (nenhum lead real gravado).
- [ ] `/acesso` do Fykos contra um mock local da API (sucesso) e com a API desligada (mensagem padrão).
- [ ] Screenshots desktop e 390 px (claro/escuro na Dexi) via CDP; `cssContentSize.width == 390` (sem rolagem horizontal).
- [ ] `grep` nas páginas tocadas: nenhum "24h", "alucinação", "Nenhum lead morre", "+45", "7M", "99,8", "99.98", "IA de prateleira".

## Notas de execução (2026-10-11)

- Todas as tasks executadas; nada commitado, publicado ou deployado.
- `node --test lib/*.test.ts`: 32/32 (15 lead, 6 provas, 11 calculadora já existente). `tsc --noEmit` limpo; `next build` ok; `astro check` 0 erros; build do Fykos gerado fora de `dist/` (o `dist/` no ar ficou intacto).
- `npm run lint` não roda no repositório (já antes desta mudança): `.eslintrc.js` exige `eslint-plugin-vue`, que não está instalado, e o ESLint 9 não acha config flat.
- Ajuste fora do plano, no Fykos: `src/styles/globals.css` tinha `margin: 0` em `h1–h4` e `p` fora de `@layer`, o que anulava todos os `mt-*` (título colado no parágrafo também no site atual). Removido; o preflight do Tailwind já zera essas margens. O tracking largo dos títulos foi mantido.
- Ajuste fora do plano, na Dexi: a frase de destaque de `#a-dor` usava `.text-body`, que (fora de `@layer`) vence `font-semibold` e a cor; trocado por `text-lg`.
- Verificado com mock local: o `/acesso` do Fykos envia origem, CTA, página e UTMs; o corpo passa em `validarLeadAderencia`; erro da API e queda de rede mostram mensagens certas. Nenhum lead real foi gravado.

## Fora do escopo desta entrega (próxima rodada)

Páginas internas da Dexi que ainda prometem "diagnóstico de 24h" ou exibem números sem metodologia: `/automotivo`, `/clinicas`, `/construtoras`, `/cases`, `/calculator`, `/faq`, `/solucoes/*`, `/setores/*`, CTAs do blog e glossário; `ClientLogos` em `/automotivo` e `/construtoras` (autorização de marca); manifesto do Fykos ("Sem alucinações."); link `/legal/lgpd` do Fykos (404); telefone `+55-34-99999-9999` (placeholder) no `localBusinessSchema`; títulos do rodapé da Dexi quase invisíveis no tema claro (já no ar); `alternates.canonical: '/'` no layout raiz vale para toda página sem canonical próprio.

## Checklist editorial antes de publicar

- [ ] Cada aplicação do Fykos (carteira, entrada de demanda, copiloto, relacionamento contínuo) está em produção?
- [ ] Integrações citadas no `/o-fykos` (Syonet, AutoConf) e "single-tenant com criptografia" seguem verdadeiras?
- [ ] Cases: preencher `lib/provas.ts`, obter autorizações de marca e números, registrar `validadoEm`.
- [ ] Deploy do site da Dexi **antes** do Fykos (o formulário do Fykos depende do CORS novo).
