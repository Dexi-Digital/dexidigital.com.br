import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://dexidigital.com.br';

  // Bots de LLM liberados explicitamente (GEO/LLMO) — além do wildcard "*"
  // abaixo, que já libera tudo. Explícito para nunca ficar bloqueado por
  // acidente numa mudança futura no wildcard.
  const llmBots = [
    'GPTBot',
    'ChatGPT-User',
    'ClaudeBot',
    'anthropic-ai',
    'Google-Extended',
    'PerplexityBot',
    'OAI-SearchBot',
    'CCBot',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      ...llmBots.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/admin/'],
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

