#!/usr/bin/env node
/**
 * Blog Post Generation Script
 * Pega a próxima pauta do topic bank (Faixa B), deduplica, gera via Gemini,
 * valida, e publica direto (ou marca como rascunho se falhar a validação).
 *
 * Usage: node --env-file=.env.local scripts/generate-blog-post.mjs
 */

import { getNextBacklogTopic, markTopicStatus, getPublishedTitlesForVertical } from '../lib/topic-bank-db.ts';
import { isDuplicateTitle } from '../lib/topic-deduplicator.ts';
import { generatePost } from '../lib/gemini.ts';
import { validatePost } from '../lib/content-validator.ts';
import { insertPost } from '../lib/blog-db.ts';
import { getAllArticles } from '../lib/blog-data.ts';
import { notifyPostPublished, notifyGenerationFailed } from '../lib/slack.ts';

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
  const generated = await generatePost(topic);
  console.log(`Gerado: "${generated.title}"`);

  console.log('Validando...');
  const report = validatePost(generated.content, topic.vertical, topic.pillarLink);
  console.log('Relatório do Validator:', JSON.stringify(report));

  const slug = slugify(generated.title);
  const status = report.passed ? 'published' : 'draft';

  const postId = insertPost(
    {
      id: slug,
      slug,
      title: generated.title,
      excerpt: generated.excerpt,
      content: generated.content,
      category: topic.vertical,
      readTime: estimateReadTime(generated.content),
      author: 'Equipe Dexi Digital',
      metaDescription: generated.excerpt,
      focusKeyword: topic.keyword,
      vertical: topic.vertical,
      cluster: topic.cluster,
      pillarLink: topic.pillarLink,
      validatorReport: JSON.stringify(report),
    },
    status
  );

  markTopicStatus(topic.id, 'generated', postId);

  if (status === 'published') {
    console.log(`Publicado: /blog/${slug}`);
    await notifyPostPublished({
      title: generated.title,
      slug,
      vertical: topic.vertical,
      readTime: estimateReadTime(generated.content),
    });
  } else {
    console.log(`Reprovado no Validator — salvo como rascunho (não aparece no /blog): ${slug}`);
  }
}

main().catch(async (error) => {
  console.error('Erro fatal na geração:', error);
  await notifyGenerationFailed({ topicTitle: currentTopic?.title ?? null, error });
  process.exit(1);
});
