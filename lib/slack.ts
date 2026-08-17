/**
 * Notificações do pipeline de blog no Slack, via Incoming Webhook.
 *
 * A geração roda num cron no VPS, sem sessão interativa — por isso webhook e
 * não SDK. Nada aqui lança: uma indisponibilidade do Slack não pode derrubar a
 * publicação de um post que já deu certo.
 */

interface PublishedInput {
  title: string;
  slug: string;
  vertical: string;
  readTime: string;
}

interface FailureInput {
  topicTitle: string | null;
  error: unknown;
}

// Slack exige escapar apenas estes três caracteres em texto mrkdwn.
function escapeMrkdwn(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function postToSlack(payload: unknown): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) {
    console.warn('[Slack] SLACK_WEBHOOK_URL não configurada — notificação ignorada.');
    return;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error('[Slack] Webhook respondeu', response.status, await response.text());
    }
  } catch (error) {
    console.error('[Slack] Falha ao notificar:', error);
  }
}

export async function notifyPostPublished({
  title,
  slug,
  vertical,
  readTime,
}: PublishedInput): Promise<void> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dexidigital.com.br';
  const postUrl = `${siteUrl.replace(/\/$/, '')}/blog/${slug}`;

  await postToSlack({
    text: `Novo post publicado no blog: ${title}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:white_check_mark: *Novo post publicado no blog*\n<${postUrl}|${escapeMrkdwn(title)}>`,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `${escapeMrkdwn(vertical)} · ${readTime} · aprovado no Validator`,
          },
        ],
      },
    ],
  });
}

export async function notifyGenerationFailed({ topicTitle, error }: FailureInput): Promise<void> {
  const raw = error instanceof Error ? (error.stack ?? error.message) : String(error);
  // Slack corta blocos muito longos; o começo do stack já identifica a falha.
  const detail = raw.length > 1500 ? `${raw.slice(0, 1500)}\n…` : raw;

  await postToSlack({
    text: `Falha na geração do post do blog: ${raw.split('\n')[0]}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text:
            ':rotating_light: *Falha na geração do post do blog*' +
            (topicTitle ? `\nPauta: *${escapeMrkdwn(topicTitle)}*` : '') +
            '\nA pauta continua no backlog e será tentada de novo na próxima execução.',
        },
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `\`\`\`${escapeMrkdwn(detail)}\`\`\`` },
      },
    ],
  });
}
