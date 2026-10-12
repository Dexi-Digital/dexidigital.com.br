#!/usr/bin/env node
/**
 * Passa o revisor (lib/revisor-blog.ts) nos posts que já estão no ar.
 *
 * Os 80 posts da automação foram publicados antes de existir revisão, e os
 * poucos posts migrados do WordPress que sobraram nunca foram revisados.
 *
 * Uso (na VPS, na pasta do site):
 *   node --env-file=.env.local scripts/revisar-blog.mjs              # automação: só revisa e guarda o parecer
 *   node --env-file=.env.local scripts/revisar-blog.mjs --aplicar    # automação: corrige ou tira do ar
 *   node --env-file=.env.local scripts/revisar-blog.mjs --wordpress  # WordPress: só relatório
 *   --limite N: revisa no máximo N posts nesta execução (padrão: todos)
 *
 * O cron /etc/cron.d/dexi-blog-revisao roda com --aplicar --limite 4 todo dia
 * depois do post do dia: no plano gratuito do Gemini cada modelo aceita 20
 * chamadas por dia, e um post corrigido gasta até 5. Quando todos os posts
 * tiverem parecer aprovado, a execução não chama o Gemini.
 *
 * Com --aplicar, para cada post da automação:
 *   aprovado  -> fica como está;
 *   corrigir  -> o redator reescreve e o revisor confere de novo (até 2 vezes);
 *                aprovado, o texto novo substitui o antigo no mesmo endereço;
 *   reprovado, ou sem aprovação depois das correções -> status "removido".
 * No fim, lista os slugs removidos: eles entram em lib/blog-removidos.ts para
 * responder 410 (até lá, respondem 404).
 *
 * Pode parar no meio (cota do Gemini): o parecer de cada post fica salvo no
 * banco e a próxima execução pula o que já foi revisado com as regras atuais.
 * Relatório: logs/revisao-blog.jsonl (uma linha por post).
 */

import { appendFileSync, mkdirSync } from 'node:fs';
import { getPublishedDbPosts, salvarRevisao, atualizarPostRevisado, marcarRemovido } from '../lib/blog-db.ts';
import { getAllArticles } from '../lib/blog-data.ts';
import { revisarPost, problemasDeEstrutura, VERSAO_REGRAS } from '../lib/revisor-blog.ts';
import { validatePost } from '../lib/content-validator.ts';
import { corrigirPost } from '../lib/gemini.ts';
import { semTravessao } from '../lib/sem-travessao.ts';

const args = new Set(process.argv.slice(2));
const APLICAR = args.has('--aplicar');
const WORDPRESS = args.has('--wordpress');
const argv = process.argv.slice(2);
const LIMITE = argv.includes('--limite') ? Number(argv[argv.indexOf('--limite') + 1]) : Infinity;
const MAX_CORRECOES = 2;
// Plano gratuito do Gemini: poucas chamadas por minuto por modelo.
const PAUSA_MS = 8_000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

mkdirSync('logs', { recursive: true });
function registrar(linha) {
  appendFileSync('logs/revisao-blog.jsonl', JSON.stringify({ em: new Date().toISOString(), ...linha }) + '\n');
}

function tempoDeLeitura(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(3, Math.round(words / 200))} min`;
}

function semTravessaoNoPost(post) {
  return {
    title: semTravessao(post.title, { titulo: true }),
    excerpt: semTravessao(post.excerpt),
    content: semTravessao(post.content),
  };
}

const paraRevisor = (p) => ({ titulo: p.title, resumo: p.excerpt, conteudo: p.content });
// Post da automação também passa pelo validador estrutural, como no cron.
const revisarDaAutomacao = (post, original) =>
  revisarPost(paraRevisor(post), {
    extras: problemasDeEstrutura(validatePost(post.content, original.vertical, original.pillarLink), original.pillarLink),
  });
const cotaEsgotada = (revisao) => revisao.veredito === 'pendente' && /\b429\b/.test(revisao.erro ?? '');

function parecerSalvo(post) {
  try {
    const r = JSON.parse(post.reviewReport ?? 'null');
    return r?.versaoRegras === VERSAO_REGRAS && r.veredito !== 'pendente' ? r : null;
  } catch {
    return null;
  }
}

async function revisarWordpress() {
  const contagem = {};
  for (const artigo of getAllArticles().slice(0, LIMITE)) {
    const revisao = await revisarPost({ titulo: artigo.title, resumo: artigo.excerpt, conteudo: artigo.content });
    contagem[revisao.veredito] = (contagem[revisao.veredito] ?? 0) + 1;
    registrar({ origem: 'wordpress', slug: artigo.slug, ...revisao });
    console.log(`${revisao.veredito.padEnd(9)} ${artigo.slug}`);
    for (const p of revisao.problemas) console.log(`  - [${p.regra}] ${p.motivo} | "${p.trecho.slice(0, 140)}"`);
    if (cotaEsgotada(revisao)) return console.log('Cota do Gemini esgotada: rode de novo mais tarde.');
    await sleep(PAUSA_MS);
  }
  console.log('Resumo:', contagem);
}

async function revisarAutomacao() {
  const contagem = {};
  const removidos = [];
  let revisados = 0;
  for (const original of getPublishedDbPosts()) {
    let revisao = parecerSalvo(original);
    if (revisao?.veredito === 'aprovado') {
      contagem.aprovado = (contagem.aprovado ?? 0) + 1;
      continue;
    }
    // Sem --aplicar, post já revisado não gasta chamada de novo.
    if (revisao && !APLICAR) continue;
    if (revisados++ >= LIMITE) break;
    if (!revisao) {
      revisao = await revisarDaAutomacao(original, original);
      await sleep(PAUSA_MS);
      if (cotaEsgotada(revisao)) {
        console.log('Cota do Gemini esgotada: rode de novo mais tarde (o que já foi revisado fica salvo).');
        break;
      }
      if (revisao.veredito !== 'pendente') salvarRevisao(original.slug, JSON.stringify(revisao));
    }

    let acao = 'nenhuma';
    if (APLICAR && revisao.veredito !== 'pendente' && revisao.veredito !== 'aprovado') {
      let post = { title: original.title, excerpt: original.excerpt, content: original.content };
      const pauta = {
        title: original.title,
        vertical: original.vertical,
        cluster: original.cluster,
        keyword: original.focusKeyword,
        requiredData: '',
        dataSource: '',
        pillarLink: original.pillarLink,
      };
      try {
        for (let rodada = 0; revisao.veredito === 'corrigir' && rodada < MAX_CORRECOES; rodada++) {
          post = semTravessaoNoPost(await corrigirPost(pauta, post, revisao.problemas));
          revisao = await revisarDaAutomacao(post, original);
          await sleep(PAUSA_MS);
        }
      } catch (error) {
        // Redator falhou depois das tentativas: o post fica como está e volta na próxima execução.
        console.log(`Correção falhou em ${original.slug}: ${String(error?.message ?? error).slice(0, 200)}`);
        if (/\b429\b/.test(String(error?.message))) break;
        continue;
      }
      if (cotaEsgotada(revisao)) {
        console.log('Cota do Gemini esgotada no meio da correção: rode de novo mais tarde.');
        break;
      }
      if (revisao.veredito === 'aprovado') {
        atualizarPostRevisado(original.slug, { ...post, readTime: tempoDeLeitura(post.content) }, JSON.stringify(revisao));
        acao = 'corrigido';
      } else if (revisao.veredito !== 'pendente') {
        marcarRemovido(original.slug, JSON.stringify(revisao));
        removidos.push(original.slug);
        acao = 'removido';
      }
    }

    contagem[revisao.veredito] = (contagem[revisao.veredito] ?? 0) + 1;
    registrar({ origem: 'automacao', slug: original.slug, acao, ...revisao });
    console.log(`${revisao.veredito.padEnd(9)} ${acao.padEnd(9)} ${original.slug}`);
    for (const p of revisao.problemas) console.log(`  - [${p.regra}] ${p.motivo} | "${p.trecho.slice(0, 140)}"`);
  }
  console.log('Resumo:', contagem);
  if (removidos.length) {
    console.log('\nSlugs para lib/blog-removidos.ts (410):');
    for (const slug of removidos) console.log(`  '${slug}',`);
  }
}

await (WORDPRESS ? revisarWordpress() : revisarAutomacao());
