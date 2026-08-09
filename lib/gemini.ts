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

Responda em JSON válido, SEM formatação markdown de code fence ao redor, exatamente neste formato:
{"title": "título do post", "excerpt": "resumo de até 160 caracteres para meta description", "content": "corpo completo em markdown, incluindo a linha de Resposta rápida e os subtítulos"}`;
}

export async function generatePost(topic: TopicInput): Promise<GeneratedPost> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY não configurada');
  }

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

  let parsed: GeneratedPost;
  try {
    parsed = JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Não foi possível extrair JSON da resposta do Gemini');
    parsed = JSON.parse(match[0]);
  }

  if (!parsed.title || !parsed.excerpt || !parsed.content) {
    throw new Error('Resposta do Gemini incompleta (faltando title/excerpt/content)');
  }

  return parsed;
}
