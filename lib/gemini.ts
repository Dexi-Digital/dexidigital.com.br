import { POSICIONAMENTO, PUBLICO, CTA, fatosEmLista } from './regras-editoriais.ts';

/**
 * Modelos que escrevem os posts, em ordem de preferência. O revisor começa por
 * outro (ver lib/revisor-blog.ts). O segundo da lista é reserva: no plano
 * gratuito, o 503 de "alta demanda" às vezes dura a manhã inteira num modelo.
 */
export const MODELOS_REDATOR = modelosDoAmbiente('GEMINI_MODELOS_REDATOR') ?? ['gemini-3.5-flash', 'gemini-3.8-flash'];

/** Lista de modelos trocada por variável de ambiente (ex.: "gemini-3.5-flash-lite,gemini-3.1-flash-lite"). */
export function modelosDoAmbiente(nome: string): string[] | null {
  const lista = process.env[nome]?.split(',').map((m) => m.trim()).filter(Boolean);
  return lista?.length ? lista : null;
}

export interface TopicInput {
  title: string;
  vertical: string;
  cluster: string;
  keyword: string;
  requiredData: string;
  dataSource: string;
  pillarLink: string;
}

export interface GeneratedPost {
  title: string;
  excerpt: string;
  content: string;
}

/** Problema apontado pelo revisor, no formato que o redator recebe para corrigir. */
export interface ProblemaParaCorrigir {
  regra: string;
  trecho: string;
  motivo: string;
  correcao: string;
}

function regrasDeEscrita(pillarLink: string): string {
  return `REGRAS OBRIGATÓRIAS (siga à risca, formato exato):
1. Comece o corpo com a linha literal "**Resposta rápida:** " seguida de uma resposta autocontida de 40 a 60 palavras que resuma a pauta inteira, é o trecho que ferramentas como ChatGPT, Perplexity e o AI Overview do Google extraem direto.
2. Pelo menos um subtítulo (##) deve ser uma pergunta, terminando literalmente em "?".
3. Número de mercado só com fonte pública que você conhece com certeza, citada com link Markdown para a página exata que mostra o número, no formato "Segundo [fonte](url), em [período], [dado]". Se não souber o link exato, escreva sem o número: o argumento se sustenta pela lógica. Um revisor abre cada link e reprova o post se a página não mostrar o número. Nunca invente fonte, pesquisa, número ou link.
4. Se usar tabela, use tabela Markdown nativa (| coluna | coluna |), nunca descreva como se fosse imagem.
5. Inclua pelo menos 2 links internos em Markdown apontando exatamente para ${pillarLink}.
6. NÃO faça nenhuma alegação de resultado clínico ou médico (ex: "cura", "elimina", "garante resultado"), mesmo que a vertical seja Clínicas.
7. Tom direto, consultivo, em português do Brasil, sem jargão de marketing vazio. 800 a 1200 palavras no corpo.
8. Assine como "Equipe Dexi Digital".
9. REGRA CRÍTICA DE NEGÓCIO: NÃO ENTREGUE O "COMO" COMPLETO: este texto é conteúdo de topo/meio de funil, não um manual de implementação. Explique o problema, por que ele é caro, e os PRINCÍPIOS por trás da solução (o "o quê" e o "por quê"), mas NÃO forneça um checklist ou passo a passo replicável o suficiente para o leitor (ou um concorrente) implementar sozinho sem a Dexi. Nunca liste nomes exatos de configuração, sequência completa de mensagens/cadência com detalhes acionáveis, ou "receita de bolo" pronta para copiar. Sempre que o texto chegar perto de revelar o método completo, pare, e diga que essa execução (segmentação, automação, integração de dados) é exatamente o que a Dexi/Fykos entrega operacionalmente, e direcione para falar com a Dexi. O post deve gerar desejo de contratar, não permitir fazer sozinho.
10. NÃO cite nenhum número operacional implementável (ex: "espace as mensagens em 72 horas", "envie 3 mensagens por dia", "use janela de 24h"), mesmo enquadrado como "dado" ou "resultado observado". Números são permitidos SOMENTE quando descrevem o tamanho do problema ou o resultado de mercado (ex: taxa de conversão média do setor, CAC médio, % de leads perdidos), nunca quando funcionam como instrução de configuração que o leitor poderia copiar direto.
11. NUNCA use travessão (—) nem meia-risca (–) como pontuação, em nenhum campo (título, resumo, corpo). Use dois-pontos, vírgula, parênteses ou ponto final.
12. Ao direcionar para a Dexi: ${CTA} Nunca prometa diagnóstico em 24h, ROI garantido ou números da Dexi/Fykos.
13. Sobre o Fykos, afirme só o que está nos fatos abaixo. Não cite cliente, caso, integração com sistema por nome nem concorrente.`;
}

const FORMATO_JSON = `Responda em JSON válido, SEM formatação markdown de code fence ao redor, exatamente neste formato:
{"title": "título do post", "excerpt": "resumo de até 160 caracteres para meta description", "content": "corpo completo em markdown, incluindo a linha de Resposta rápida e os subtítulos"}`;

function contexto(): string {
  return `QUEM É A DEXI: ${POSICIONAMENTO}

O QUE O FYKOS FAZ EM PRODUÇÃO (fora disto, não afirme):
${fatosEmLista()}

LEITOR: ${PUBLICO}`;
}

function buildPrompt(topic: TopicInput): string {
  return `Você é redator sênior de conteúdo B2B da Dexi Digital, escrevendo para o blog institucional (dexidigital.com.br/blog).

${contexto()}

PAUTA: ${topic.title}
VERTICAL: ${topic.vertical}
CLUSTER TEMÁTICO: ${topic.cluster}
KEYWORD-ALVO (SEO): ${topic.keyword}
DADO SUGERIDO (use só se tiver a fonte com link, ver regra 3): ${topic.requiredData}
TIPO DE FONTE SUGERIDA: ${topic.dataSource}
LINK DO PILAR (usar pelo menos 2 vezes como link interno): ${topic.pillarLink}

${regrasDeEscrita(topic.pillarLink)}

${FORMATO_JSON}`;
}

function buildPromptCorrecao(topic: TopicInput, post: GeneratedPost, problemas: ProblemaParaCorrigir[]): string {
  const lista = problemas
    .map((p, i) => `${i + 1}. [${p.regra}] Trecho: "${p.trecho}"\n   Motivo: ${p.motivo}\n   Correção pedida: ${p.correcao}`)
    .join('\n');
  return `Você é redator sênior de conteúdo B2B da Dexi Digital. O revisor editorial devolveu o seu post com problemas. Reescreva o post corrigindo TODOS eles.

Como corrigir:
- Quando o problema é uma afirmação ou um número sem prova, corte ou reescreva sem ele. Não troque por outro número nem por outra fonte que você não tenha certeza que existe.
- Mantenha o assunto, a pauta e tudo o que não foi apontado.
- O resultado precisa continuar seguindo todas as regras abaixo.

${contexto()}

PAUTA: ${topic.title}
LINK DO PILAR: ${topic.pillarLink}

${regrasDeEscrita(topic.pillarLink)}

PROBLEMAS APONTADOS PELO REVISOR:
${lista}

POST ATUAL:
Título: ${post.title}
Resumo: ${post.excerpt}
Corpo:
${post.content}

${FORMATO_JSON}`;
}

/**
 * Extrai o primeiro objeto JSON completo do texto do modelo.
 *
 * Mesmo com responseMimeType: 'application/json', o Gemini às vezes anexa lixo
 * depois do objeto (o caso observado: um "}" solto numa linha nova). JSON.parse
 * direto quebra com "Unexpected non-whitespace character after JSON", e um
 * regex guloso /\{[\s\S]*\}/ não resolve, ele vai até a ÚLTIMA "}", ou seja,
 * devolve exatamente a mesma string quebrada.
 *
 * Aqui varremos a partir da primeira "{" contando profundidade de chaves,
 * ignorando chaves dentro de strings e escapes, e paramos na chave que fecha o
 * objeto. Lixo depois disso é descartado; truncamento de verdade ainda falha.
 */
export function extractJsonObject<T = GeneratedPost>(raw: string): T {
  const text = raw.replace(/```(?:json)?/gi, '');
  const start = text.indexOf('{');
  if (start === -1) throw new Error('Não foi possível extrair JSON da resposta do Gemini');

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < text.length; i++) {
    const char = text[i];

    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === '\\') {
      escaped = true;
      continue;
    }
    if (char === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;

    if (char === '{') depth++;
    else if (char === '}') {
      depth--;
      if (depth === 0) return JSON.parse(text.slice(start, i + 1));
    }
  }

  throw new Error('JSON da resposta do Gemini está truncado (objeto nunca fecha)');
}

// Chamada pendurada não costuma voltar: medido em out/2026, o 3.8-flash
// sobrecarregado segurava pedido longo por 160s para então devolver 503.
const TEMPO_LIMITE_MS = 90_000;

async function chamarUmaVez(prompt: string, modelo: string, apiKey: string): Promise<string> {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: 'application/json' },
    }),
    // Sem limite, uma chamada pendurada segura o cron por muitos minutos.
    signal: AbortSignal.timeout(TEMPO_LIMITE_MS),
  });

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Resposta do Gemini sem conteúdo de texto');
  }
  return text;
}

const MAX_ATTEMPTS = 3;
const BACKOFF_MS = [5_000, 30_000];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Modelo que esgotou as tentativas fica de lado por um tempo, para o script de
// revisão em lote não gastar minutos em cada post com o mesmo modelo fora do ar.
const DESCANSO_MS = 15 * 60_000;
// Plano gratuito: 20 chamadas por dia por modelo. Esgotou, só volta no dia seguinte.
const DESCANSO_COTA_DIARIA_MS = 6 * 60 * 60_000;
const foraDoArAte = new Map<string, number>();

/**
 * Chama o Gemini e devolve o JSON da resposta, já validado por `validar`, e o
 * modelo que respondeu. Tenta cada modelo da lista, em ordem.
 *
 * O 503 ("high demand") do Gemini vem em rajada: medindo 9 chamadas seguidas,
 * 3 falharam e as falhas saíram consecutivas. Retry imediato cai dentro da
 * mesma rajada, então o backoff é o que faz a diferença aqui; quando a rajada
 * não passa, o modelo reserva responde. Isso roda num cron diário, esperar
 * minutos não custa nada.
 */
export async function chamarGemini<T>(
  prompt: string,
  modelos: string[],
  validar: (bruto: unknown) => T
): Promise<{ resposta: T; modelo: string }> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY não configurada');
  }

  let lastError: unknown;

  // Se todos estão de descanso, tenta todos assim mesmo.
  const disponiveis = modelos.filter((m) => (foraDoArAte.get(m) ?? 0) < Date.now());
  for (const modelo of disponiveis.length ? disponiveis : modelos) {
    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      try {
        const resposta = validar(extractJsonObject<unknown>(await chamarUmaVez(prompt, modelo, apiKey)));
        return { resposta, modelo };
      } catch (error) {
        lastError = error;
        const message = error instanceof Error ? error.message : String(error);
        if (/PerDay/.test(message)) {
          console.error(`[Gemini ${modelo}] Cota diária esgotada. Indo para o próximo modelo.`);
          foraDoArAte.set(modelo, Date.now() + DESCANSO_COTA_DIARIA_MS);
          break;
        }
        const wait = BACKOFF_MS[attempt];
        console.error(
          `[Gemini ${modelo}] Tentativa ${attempt + 1}/${MAX_ATTEMPTS} falhou (${message.slice(0, 200)}).` +
            (wait === undefined ? '' : ` Nova tentativa em ${wait / 1000}s.`)
        );
        if (wait === undefined) {
          foraDoArAte.set(modelo, Date.now() + DESCANSO_MS);
          break;
        }
        await sleep(wait);
      }
    }
  }

  throw lastError;
}

function validarPost(bruto: unknown): GeneratedPost {
  const p = bruto as Partial<GeneratedPost>;
  if (!p?.title || !p.excerpt || !p.content) {
    throw new Error('Resposta do Gemini incompleta (faltando title/excerpt/content)');
  }
  return { title: p.title, excerpt: p.excerpt, content: p.content };
}

export async function generatePost(topic: TopicInput): Promise<GeneratedPost> {
  return (await chamarGemini(buildPrompt(topic), MODELOS_REDATOR, validarPost)).resposta;
}

/** Reescreve o post corrigindo o que o revisor apontou. */
export async function corrigirPost(
  topic: TopicInput,
  post: GeneratedPost,
  problemas: ProblemaParaCorrigir[]
): Promise<GeneratedPost> {
  return (await chamarGemini(buildPromptCorrecao(topic, post, problemas), MODELOS_REDATOR, validarPost)).resposta;
}
