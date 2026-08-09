# Infra técnica de GEO/LLMO — Fase 1 — Design

## Contexto

Primeira de três fases de um programa maior de automação de conteúdo
(`estrategia-blog.md` + `calendario-conteudo-dexi-2026-S2.xlsx`, fornecidos
pela usuária em 2026-08-09). O programa completo é grande demais para uma
spec só — foi decomposto em:

1. **Fase 1 (este documento)** — infra técnica de GEO. Rápida, sem LLM.
2. **Fase 2** — migrar o blog de array estático (`lib/blog-data.ts`) para a
   tabela `posts` do Supabase (já existe no schema, nunca foi usada).
3. **Fase 3** — motor de geração de posts via LLM (pauta → rascunho →
   validação → aprovação → publicação), a automação em si.

Faixa C do calendário (calculadoras, glossários, comparativos) é um projeto
de engenharia à parte (ferramentas interativas, não geração de texto) — fica
fora de todas as três fases acima.

**Decisão de negócio confirmada com a usuária**: Automotivo e Construção já
têm dado proprietário para as peças-âncora. Clínicas ainda não tem prova
sólida, mas a usuária quer publicar sobre o tema mesmo assim — nas próximas
fases isso deve pesar mais para conteúdo educacional/regulatório (Faixa B)
do que para âncoras com dado exclusivo (Faixa A) até existir prova.

## Escopo da Fase 1

1. **`app/robots.ts`** — adicionar regras explícitas por bot, além do
   wildcard `*` que já libera tudo: `GPTBot`, `ChatGPT-User`, `ClaudeBot`,
   `anthropic-ai`, `Google-Extended`, `PerplexityBot`, `OAI-SearchBot`,
   `CCBot`, todos com `allow: '/'` e o mesmo `disallow: ['/api/', '/admin/']`
   do wildcard.
2. **`public/llms.txt`** (novo) — descrição da empresa e links pras páginas
   atuais (não referencia os 3 pilares do calendário — essas páginas não
   existem ainda; atualizar quando a Fase 3 publicar os pilares).
3. **`FAQPage` schema — explicitamente fora de escopo agora.** Só faz
   sentido em posts novos já estruturados com bloco de FAQ (Fase 3);
   extrair FAQ dos 600 posts antigos em texto livre é retrabalho que não
   serve o objetivo.
4. **Verificação de SSR** — confirmar que o conteúdo do site aparece no
   HTML servido sem depender de JS (esperado: já é verdade, Next.js App
   Router renderiza no servidor por padrão). Só checagem, sem mudança de
   código esperada.
5. **`organizationSchema` com `sameAs`** — já existe e já está em toda
   página via `app/layout.tsx`. Nenhuma mudança necessária nesta fase.

## Fora de escopo (fases futuras)

- Migração do blog pro Supabase (Fase 2).
- Motor de geração via LLM, `Validator`, fila de aprovação (Fase 3).
- Faixa C (calculadoras, glossários, comparativos) — projeto à parte.
- `llm_probe.py` / bateria de prompts mensal — não é geração de blog, é
  monitoramento; não decompor nem especificar agora.
