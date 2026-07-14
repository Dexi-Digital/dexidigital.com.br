---
name: testing-dexi-seo
description: Test Dexi Digital SEO content pages end-to-end. Use when verifying SEO page content, anonymization, or PDF-derived content integration.
---

# Testing Dexi Digital SEO Pages

## Overview
Dexi Digital is a Next.js site with dynamic SEO pages for automotive segments (fábricas, grupos, guias, comparativos, glossário, integrações, soluções). Content is driven by TypeScript data files in `lib/seo/`.

## Building & Running Locally

```bash
cd /home/ubuntu/repos/dexidigital.com.br
npm install
npm run dev
# Dev server starts on http://localhost:3000
```

Alternatively, for production build:
```bash
npm run build
npm start
```

## Key SEO Routes to Test

| Route | Data Source | What to Check |
|-------|------------|---------------|
| `/setores/automotivo-premium` | `app/setores/automotivo-premium/page.tsx` | Challenges, cases, metrics, hero text |
| `/setores/fabricas/[slug]` | `lib/seo/fabricas.ts` | Segment desafios, soluções, FAQ |
| `/setores/grupos/[slug]` | `lib/seo/grupos.ts` | Group desafios, soluções, FAQ |
| `/guias/[slug]` | `lib/seo/guias.ts` | Guide sections, table of contents |
| `/comparativo/[slug]` | `lib/seo/comparativo.ts` | Comparison table, analysis sections |
| `/glossario-ia-automotiva` | `lib/seo/glossario.ts` | Terms, categories |
| `/integracoes/[slug]` | `lib/seo/integracoes.ts` | Integration details |
| `/solucoes/[slug]` | `lib/seo/solucoes.ts` | Solution details |

## Anonymization Verification

The site must NOT contain direct client/brand names in public-facing content. Run this check:

```bash
grep -riE "GWM|Euroville|Royal Enfield|Bamaq|Eurobike|Attra Veículos|TGV Empreendimentos" \
  --include="*.tsx" --include="*.ts" app/ lib/ components/
```

Expected: NO MATCHES FOUND.

Also verify on rendered pages via browser JS console:
```js
const brands = ['GWM', 'Euroville', 'Royal Enfield', 'Bamaq', 'Eurobike', 'Attra', 'TGV', 'Volvo', 'Audi', 'BMW'];
const found = brands.filter(b => document.body.innerText.includes(b));
console.log('Found brands:', found.length ? found.join(', ') : 'NONE');
```

## Anonymized Segment Slugs

Fábricas segments use anonymized slugs:
- `montadoras-expansao` (replaces specific brand pages)
- `motos-premium`
- `luxo-tecnologia`
- `performance-premium`
- `seguranca-sustentabilidade`

Grupos segments:
- `multi-marca`
- `grande-porte`
- `premium-especializado`

## Key Content Concepts (from PDF integration)

These concepts should appear in the content across various pages:
- **Silêncio financeiro**: gap between ERP theory and operational reality (grupos/grande-porte)
- **Infraestrutura de 3 camadas**: ingestão, inteligência comportamental, governança RAG (fabricas/montadoras-expansao)
- **Workforce híbrida**: human-AI sales model (grupos/grande-porte, guias)
- **Digital Talent Enabler**: onboarding acceleration (fabricas/performance-premium)
- **Ciência de Follow-up**: persistent follow-up cadence (fabricas/performance-premium)
- **Persuasão Adaptativa MAS**: motivational alignment system (automotivo-premium)
- **Shadow CRM**: unified data layer (automotivo-premium)

## Key Metrics to Verify

These operational metrics should appear on `/setores/automotivo-premium`:
- 1.230 leads processados
- 640 leads quentes / oportunidades quentes
- 73% de aceitação premium
- 4 msgs/sessão
- 132 leads reengajados
- Go-live em 7 dias

## Common Pitfalls

### Ambiente de teste
O site roda em VPS dedicada (sem preview deployments). Use `localhost:3000` para testar antes do deploy.

### Lint Command
`npx next lint` may produce unexpected output. Use `npx next build` to verify code quality instead.

### Dynamic Routes
All dynamic SEO pages use `generateStaticParams()`. If a slug doesn't exist in the data file, the page will 404.

## Devin Secrets Needed
- None required for local testing
- `JINA_API_KEY` — only needed if testing Jina.ai reranker/embeddings integration
