import { NextResponse, type NextRequest } from 'next/server';
import { POSTS_REMOVIDOS } from '@/lib/blog-removidos';

const REMOVIDOS = new Set(POSTS_REMOVIDOS.map((slug) => `/blog/${slug}`));

// Página mínima para quem chega por link antigo. O buscador só lê o status.
const PAGINA_REMOVIDA = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Conteúdo removido | Dexi Digital</title>
<style>
  :root { color-scheme: light dark; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 16px;
    font-family: system-ui, -apple-system, sans-serif; background: #fff; color: #111; }
  @media (prefers-color-scheme: dark) { body { background: #0b0b0f; color: #eee; } a { color: #8ab4ff; } }
  main { max-width: 32rem; text-align: center; }
  a { color: #1d4ed8; }
</style>
</head>
<body>
<main>
<h1>Este conteúdo foi removido</h1>
<p>O artigo saiu do ar e não vai voltar. Os artigos atuais estão no <a href="/blog">blog</a>.</p>
<p><a href="/">Ir para a página inicial</a></p>
</main>
</body>
</html>`;

/**
 * 410 para os posts removidos na limpeza de SEO (ver lib/blog-removidos.ts).
 * Os redirects do next.config rodam antes daqui, então slug redirecionado
 * nunca chega a este ponto.
 */
export function proxy(request: NextRequest) {
  if (!REMOVIDOS.has(request.nextUrl.pathname)) return NextResponse.next();

  return new NextResponse(PAGINA_REMOVIDA, {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
}

export const config = {
  matcher: '/blog/:slug',
};
