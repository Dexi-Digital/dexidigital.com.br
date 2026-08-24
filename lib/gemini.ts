const GEMINI_MODEL = 'gemini-3.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

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

function buildPrompt(topic: TopicInput): string {
  return `Você é redator sênior de conteúdo B2B da Dexi Digital, escrevendo para o blog institucional (dexidigital.com.br/blog). Dexi Digital é uma consultoria de IA e inteligência de dados que criou o Fykos, um sistema que reinventa o CRM usando dados e IA sobre os sistemas que o cliente já usa.

PAUTA: ${topic.title}
VERTICAL: ${topic.vertical}
CLUSTER TEMÁTICO: ${topic.cluster}
KEYWORD-ALVO (SEO): ${topic.keyword}
DADO EXIGIDO NO TEXTO: ${topic.requiredData}
FONTE DO DADO: ${topic.dataSource}
LINK DO PILAR (usar pelo menos 2 vezes como link interno): ${topic.pillarLink}

REGRAS OBRIGATÓRIAS — siga à risca, formato exato:
1. Comece o corpo com a linha literal "**Resposta rápida:** " seguida de uma resposta autocontida de 40 a 60 palavras que resuma a pauta inteira — é o trecho que ferramentas como ChatGPT, Perplexity e o AI Overview do Google extraem direto.
2. Pelo menos um subtítulo (##) deve ser uma pergunta, terminando literalmente em "?".
3. Toda afirmação numérica precisa vir com fonte nomeada e período, no formato "Segundo [fonte], em [período], [dado]".
4. Se usar tabela, use tabela Markdown nativa (| coluna | coluna |) — nunca descreva como se fosse imagem.
5. Inclua pelo menos 2 links internos em Markdown apontando exatamente para ${topic.pillarLink}.
6. NÃO faça nenhuma alegação de resultado clínico ou médico (ex: "cura", "elimina", "garante resultado") — mesmo que a vertical seja Clínicas.
7. Tom direto, consultivo, em português do Brasil, sem jargão de marketing vazio. 800 a 1200 palavras no corpo.
8. Assine como "Equipe Dexi Digital".
9. REGRA CRÍTICA DE NEGÓCIO — NÃO ENTREGUE O "COMO" COMPLETO: este texto é conteúdo de topo/meio de funil, não um manual de implementação. Explique o problema, por que ele é caro, e os PRINCÍPIOS por trás da solução (o "o quê" e o "por quê") — mas NÃO forneça um checklist ou passo a passo replicável o suficiente para o leitor (ou um concorrente) implementar sozinho sem a Dexi. Nunca liste nomes exatos de configuração, sequência completa de mensagens/cadência com detalhes acionáveis, ou "receita de bolo" pronta para copiar. Sempre que o texto chegar perto de revelar o método completo, pare, e diga que essa execução (segmentação, automação, integração de dados) é exatamente o que a Dexi/Fykos entrega operacionalmente — e direcione para falar com a Dexi. O post deve gerar desejo de contratar, não permitir fazer sozinho.
10. NÃO cite nenhum número operacional implementável (ex: "espace as mensagens em 72 horas", "envie 3 mensagens por dia", "use janela de 24h") — mesmo enquadrado como "dado" ou "resultado observado". Números são permitidos SOMENTE quando descrevem o tamanho do problema ou o resultado de mercado (ex: taxa de conversão média do setor, CAC médio, % de leads perdidos) — nunca quando funcionam como instrução de configuração que o leitor poderia copiar direto.

Responda em JSON válido, SEM formatação markdown de code fence ao redor, exatamente neste formato:
{"title": "título do post", "excerpt": "resumo de até 160 caracteres para meta description", "content": "corpo completo em markdown, incluindo a linha de Resposta rápida e os subtítulos"}`;
}

/**
 * Extrai o primeiro objeto JSON completo do texto do modelo.
 *
 * Mesmo com responseMimeType: 'application/json', o Gemini às vezes anexa lixo
 * depois do objeto (o caso observado: um "}" solto numa linha nova). JSON.parse
 * direto quebra com "Unexpected non-whitespace character after JSON", e um
 * regex guloso /\{[\s\S]*\}/ não resolve — ele vai até a ÚLTIMA "}", ou seja,
 * devolve exatamente a mesma string quebrada.
 *
 * Aqui varremos a partir da primeira "{" contando profundidade de chaves,
 * ignorando chaves dentro de strings e escapes, e paramos na chave que fecha o
 * objeto. Lixo depois disso é descartado; truncamento de verdade ainda falha.
 */
export function extractJsonObject(raw: string): GeneratedPost {
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

async function callGemini(topic: TopicInput, apiKey: string): Promise<GeneratedPost> {
  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: buildPrompt(topic) }] }],
      generationConfig: { responseMimeType: 'application/json' },
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Resposta do Gemini sem conteúdo de texto');
  }

  const parsed = extractJsonObject(text);

  if (!parsed.title || !parsed.excerpt || !parsed.content) {
    throw new Error('Resposta do Gemini incompleta (faltando title/excerpt/content)');
  }

  return parsed;
}

const MAX_ATTEMPTS = 4;
const BACKOFF_MS = [5_000, 20_000, 60_000];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// O 503 ("high demand") do Gemini vem em rajada: medindo 9 chamadas seguidas,
// 3 falharam e as falhas saíram consecutivas. Retry imediato cai dentro da
// mesma rajada, então o backoff exponencial é o que faz a diferença aqui —
// como isso roda num cron diário, esperar minutos não custa nada.
export async function generatePost(topic: TopicInput): Promise<GeneratedPost> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY não configurada');
  }

  let lastError: unknown;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    try {
      return await callGemini(topic, apiKey);
    } catch (error) {
      lastError = error;
      const message = error instanceof Error ? error.message : String(error);
      const wait = BACKOFF_MS[attempt];
      if (wait === undefined) break;
      console.error(
        `[Gemini] Tentativa ${attempt + 1}/${MAX_ATTEMPTS} falhou (${message}). Nova tentativa em ${wait / 1000}s.`
      );
      await sleep(wait);
    }
  }

  throw lastError;
}
