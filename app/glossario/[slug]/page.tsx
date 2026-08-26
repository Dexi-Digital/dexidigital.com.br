import { permanentRedirect, notFound } from 'next/navigation';
import { destinoLegadoGlossario } from '@/lib/seo/glossario-legado';

// Rota-coringa para os 2.057 endereços do glossário do WordPress. Não renderiza
// nada: ou redireciona com 301, ou entrega 404 com a página de conteúdo.
export default async function GlossarioLegado({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destino = destinoLegadoGlossario(slug);

  if (destino) permanentRedirect(destino);
  notFound();
}
