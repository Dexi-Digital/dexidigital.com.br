# Dexi — Plano de Arquitetura & Desenvolvimento do Novo Site
Branch: `feature/hero-redesign` · Stack existente: Next.js (App Router) + Tailwind v4 tokens em `app/globals.css`

## Decisão de arquitetura (ADR resumido)
- **Contexto:** hoje a home é automotiva-first e usa nomes desatualizados ("Synapse OS"). O posicionamento fechado é: home **horizontal** (categoria Fykos), prova **vertical** (automotivo), com páginas por setor.
- **Decisão:** SPA/MPA já é Next.js — mantemos. Criamos **home horizontal** + **3 rotas verticais** sob o menu "Áreas atendidas". Reaproveitamos o design system e os componentes já commitados (`HeroWave`, `CountUp`, `.text-result`, `.btn-money`, `.card-result`, faixa `dark`).
- **Consequência:** o conteúdo automotivo atual da home **migra** para `/automotivo`. A home recebe copy de categoria (doc de mensagem §3). Nenhum código de efeito/token é reescrito.

## Rotas
```
/                app/page.tsx              Home HORIZONTAL (Fykos) + seção caso automotivo + Áreas atendidas
/automotivo      app/automotivo/page.tsx   Vertical carro-chefe (prova cheia: clientes + DMS/Syonet/NBS)
/construtoras    app/construtoras/page.tsx Vertical (prova: TGV Empreendimentos)
/clinicas        app/clinicas/page.tsx     Vertical (aplicação + cliente-fundador, SEM logo falso)
```

## Componentes / design system (reuso — não recriar)
- `components/HeroWave.tsx` — fundo luz fluindo (params 45/7, Pumpkin). Reusar em toda hero.
- `components/ui/CountUp.tsx` — números animados por viewport.
- `components/ui/TrackedCTA.tsx` — variante `money` já existe.
- `app/globals.css` — escala `result` (Pumpkin), `.text-result`, `.btn-money`, `.card-result`, faixa `dark`.
- Padrão de seção dark autocontida: `<section className="dark relative overflow-hidden bg-[var(--bg-primary)]">`.

## Regras de conteúdo (guardrails)
- **Proibido** a palavra "agentes" e o nome "Synapse OS" em qualquer lugar. Produto = **Fykos**.
- **Proibido** logo/《cliente》de setor sem cliente real. Clínicas = aplicação + cliente-fundador.
- Home horizontal fala "sistema-núcleo de qualquer setor"; automotivo é a prova.
- Automotivo: clientes Audi Center Uberlândia · Euroville GWM · Euroville Royal Enfield · Attra Veículos · Vamaq Motors. Integrações DMS das montadoras · Syonet · NBS (em breve).
- Construtoras: prova = TGV Empreendimentos.

## Decisões travadas para esta sprint (defaults — ajustáveis)
- **Home hero:** Opção 1 do doc — "Reinventamos o CRM. Seus dados viram receita."
- **Clínicas:** sem cliente → modelo cliente-fundador + diagnóstico.

## Tickets & sequência
**Lote 1 (converte hoje) — em paralelo:**
- T1 · Home + Nav (dono: Agente Home) — `app/page.tsx` vira horizontal (doc §3); `components/layout/Header.tsx` vira menu com "Áreas atendidas" (dropdown Automotivo/Clínicas/Construtoras); purgar "agentes"/"Synapse OS".
- T2 · Página `/automotivo` (dono: Agente Verticais) — mover a copy automotiva atual (hero "não deixa um lead morrer", contraste, 3 diferenciais, integrações DMS/Syonet/NBS, clientes) para `app/automotivo/page.tsx`.

**Lote 2 — em paralelo com T2:**
- T3 · `/construtoras` (dono: Agente Verticais) — doc §4.2, prova TGV.
- T4 · `/clinicas` (dono: Agente Verticais) — doc §4.3, cliente-fundador.

**Verificação (dono: orquestrador):** `git diff` revisado, `npm run build` local (node_modules não existe no ambiente da sessão — build roda na máquina da Lorrayne).

## Fora de escopo desta sprint
- Página `/o-fykos` dedicada (linka pro fykos.com.br por ora).
- Métrica por cliente (aguarda números reais).
