import { NextResponse, type NextRequest } from 'next/server';
import { POSTS_REMOVIDOS } from '@/lib/blog-removidos';
import { PAGINAS_REMOVIDAS } from '@/lib/paginas-removidas';
import { statusDoPost } from '@/lib/blog-db';

const REMOVIDOS = new Set([...POSTS_REMOVIDOS.map((slug) => `/blog/${slug}`), ...PAGINAS_REMOVIDAS]);

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
<p>Esta página saiu do ar e não vai voltar. O conteúdo atual está no <a href="/blog">blog</a> e na página inicial.</p>
<p><a href="/">Ir para a página inicial</a></p>
</main>
</body>
</html>`;

// Post da automação que o revisor tirou do ar (scripts/revisar-blog.mjs).
function removidoPeloRevisor(pathname: string): boolean {
  if (!pathname.startsWith('/blog/')) return false;
  try {
    return statusDoPost(pathname.slice('/blog/'.length)) === 'removido';
  } catch {
    return false; // Banco fora do ar não pode derrubar o blog: a página decide.
  }
}

/**
 * 410 para o que saiu do ar de vez: posts da limpeza de SEO
 * (lib/blog-removidos.ts), posts que o revisor tirou do ar (status "removido"
 * no banco) e páginas fora do blog (lib/paginas-removidas.ts). Os redirects do
 * next.config rodam antes daqui, então slug redirecionado nunca chega a este ponto.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!REMOVIDOS.has(pathname) && !removidoPeloRevisor(pathname)) return NextResponse.next();

  return new NextResponse(PAGINA_REMOVIDA, {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
}

// Literal (o Next lê o matcher sem executar o arquivo). Toda página de
// lib/paginas-removidas.ts precisa cair num destes caminhos: o teste confere.
export const config = {
  matcher: ['/blog/:slug', '/materiais/:path*', '/downloads/:path*', '/integracoes/:path*', '/solucoes/:path*'],
};
