#!/usr/bin/env node
/**
 * Blog Post Generation Script
 * Pega a próxima pauta do topic bank (Faixa B), deduplica, gera via Gemini e
 * passa pelo revisor (lib/revisor-blog.ts). Só publica o que o revisor aprovar;
 * quando ele pede correção, o redator reescreve e o revisor confere de novo, até
 * MAX_CORRECOES vezes. Reprovado, pendente ou sem aprovação depois das correções
 * fica como rascunho (não aparece no /blog), com o parecer salvo no banco.
 *
 * Usage: node --env-file=.env.local scripts/generate-blog-post.mjs [--simular]
 *   --simular: gera, revisa e corrige, mas não grava nada (nem post, nem pauta).
 */

import { getNextBacklogTopic, markTopicStatus, getPublishedTitlesForVertical } from '../lib/topic-bank-db.ts';
import { isDuplicateTitle } from '../lib/topic-deduplicator.ts';
import { generatePost, corrigirPost } from '../lib/gemini.ts';
import { validatePost } from '../lib/content-validator.ts';
import { revisarPost, problemasDeEstrutura } from '../lib/revisor-blog.ts';
import { semTravessao } from '../lib/sem-travessao.ts';
import { insertPost } from '../lib/blog-db.ts';
import { getAllArticles } from '../lib/blog-data.ts';
import { notifyPostPublished, notifyGenerationFailed } from '../lib/slack.ts';

const MAX_CORRECOES = 2;
const SIMULAR = process.argv.includes('--simular');

function slugify(title) {
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function estimateReadTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(3, Math.round(words / 200))} min`;
}

// Travessão é proibido no site: corrigido aqui, sem gastar uma rodada do revisor.
function semTravessaoNoPost(post) {
  return {
    title: semTravessao(post.title, { titulo: true }),
    excerpt: semTravessao(post.excerpt),
    content: semTravessao(post.content),
  };
}

// Guardado fora de main() para que o handler de erro lá embaixo saiba qual
// pauta quebrou, mesmo que a falha aconteça depois da seleção.
let currentTopic = null;

async function main() {
  const topic = getNextBacklogTopic();
  if (!topic) {
    console.log('Nenhuma pauta no backlog (topic bank vazio ou tudo já processado).');
    return;
  }
  currentTopic = topic;
  console.log(`Pauta selecionada: "${topic.title}" (${topic.vertical})`);

  const existingTitles = [...getAllArticles().map((a) => a.title), ...getPublishedTitlesForVertical(topic.vertical)];

  if (isDuplicateTitle(topic.title, existingTitles)) {
    console.log('Pauta muito parecida com conteúdo já publicado. Marcando como skipped_duplicate.');
    markTopicStatus(topic.id, 'skipped_duplicate');
    return;
  }

  console.log('Gerando rascunho via Gemini...');
  let post = semTravessaoNoPost(await generatePost(topic));
  console.log(`Gerado: "${post.title}"`);

  let report;
  let revisao;
  let rodadas = 0;
  for (;;) {
    report = validatePost(post.content, topic.vertical, topic.pillarLink);
    revisao = await revisarPost(
      { titulo: post.title, resumo: post.excerpt, conteudo: post.content },
      { extras: problemasDeEstrutura(report, topic.pillarLink) }
    );
    rodadas++;
    console.log(`Revisão ${rodadas}: ${revisao.veredito}${revisao.erro ? ` (${revisao.erro.slice(0, 200)})` : ''}`);
    for (const p of revisao.problemas) console.log(`  - [${p.regra}] ${p.motivo} | "${p.trecho.slice(0, 120)}"`);

    if (revisao.veredito !== 'corrigir' || rodadas > MAX_CORRECOES) break;
    console.log('Corrigindo o que o revisor apontou...');
    try {
      post = semTravessaoNoPost(await corrigirPost(topic, post, revisao.problemas));
    } catch (error) {
      // Sem a correção, vale o último parecer ("corrigir"): o post fica como rascunho.
      console.error('Correção falhou:', error);
      break;
    }
  }

  const slug = slugify(post.title);
  const status = revisao.veredito === 'aprovado' ? 'published' : 'draft';

  if (SIMULAR) {
    console.log(`Simulação: seria ${status} como /blog/${slug} depois de ${rodadas} revisão(ões). Nada foi gravado.`);
    console.log(post.content.slice(0, 1500));
    return;
  }

  const postId = insertPost(
    {
      id: slug,
      slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: topic.vertical,
      readTime: estimateReadTime(post.content),
      author: 'Equipe Dexi Digital',
      metaDescription: post.excerpt,
      focusKeyword: topic.keyword,
      vertical: topic.vertical,
      cluster: topic.cluster,
      pillarLink: topic.pillarLink,
      validatorReport: JSON.stringify(report),
      reviewReport: JSON.stringify({ ...revisao, rodadas }),
    },
    status
  );

  markTopicStatus(topic.id, 'generated', postId);

  if (status === 'published') {
    console.log(`Publicado: /blog/${slug}`);
    await notifyPostPublished({
      title: post.title,
      slug,
      vertical: topic.vertical,
      readTime: estimateReadTime(post.content),
    });
  } else {
    console.log(`Revisor não aprovou (${revisao.veredito}): salvo como rascunho, não aparece no /blog: ${slug}`);
  }
}

main().catch(async (error) => {
  console.error('Erro fatal na geração:', error);
  await notifyGenerationFailed({ topicTitle: currentTopic?.title ?? null, error });
  process.exit(1);
});
