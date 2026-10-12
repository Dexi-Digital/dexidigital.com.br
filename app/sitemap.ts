import { MetadataRoute } from 'next';
import { FABRICAS } from '@/lib/seo/fabricas';
import { GRUPOS } from '@/lib/seo/grupos';
import { SOLUCOES } from '@/lib/seo/solucoes';
import { COMPARATIVOS } from '@/lib/seo/comparativo';
import { GUIAS } from '@/lib/seo/guias';
import { GLOSSARIO_TERMS } from '@/lib/seo/glossario';
import { INTEGRACOES } from '@/lib/seo/integracoes';
import { getAllArticles } from '@/lib/blog-data';
import { getPublishedDbPosts } from '@/lib/blog-db';
import { getRecentNews } from '@/lib/news-db';
import { PILLARS } from '@/lib/pillars';
import { ultimaEdicao, maisRecente } from '@/lib/datas-paginas';

export const dynamic = 'force-dynamic';

type Frequencia = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

const baseUrl = 'https://dexidigital.com.br';

/**
 * Uma URL do sitemap. O lastmod é a data real da última edição: o último
 * commit nos arquivos da página (ver lib/datas-paginas.ts) ou, quando a página
 * lista conteúdo, o conteúdo mais novo. Nunca a hora da requisição.
 */
function url(
  rota: string,
  arquivos: string[],
  changeFrequency: Frequencia,
  priority: number,
  ...outrasDatas: (Date | string | null | undefined)[]
): MetadataRoute.Sitemap[number] {
  return {
    url: rota === '/' ? baseUrl : `${baseUrl}${rota}`,
    lastModified: maisRecente(ultimaEdicao(...arquivos), ...outrasDatas),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedDbPosts();
  const artigos = getAllArticles();
  const postMaisNovo = maisRecente(...artigos.map((a) => a.date), ...posts.map((p) => p.publishedAt));

  const principais = [
    url('/', ['app/page.tsx'], 'weekly', 1),
    url('/o-fykos', ['app/o-fykos'], 'weekly', 0.95),
    url('/metodologia', ['app/metodologia'], 'monthly', 0.9),
  ];

  const servicos = [
    url('/servicos', ['app/servicos/page.tsx'], 'monthly', 0.9),
    url('/servicos/ia-para-empresas', ['app/servicos/ia-para-empresas'], 'monthly', 0.85),
    url('/servicos/inteligencia-de-dados', ['app/servicos/inteligencia-de-dados'], 'monthly', 0.85),
    url('/servicos/software-sob-medida', ['app/servicos/software-sob-medida'], 'monthly', 0.85),
  ];

  const setores = [
    url('/automotivo', ['app/automotivo'], 'weekly', 0.95),
    url('/construtoras', ['app/construtoras'], 'weekly', 0.9),
    url('/clinicas', ['app/clinicas'], 'weekly', 0.9),
    url('/setores/automotivo-premium', ['app/setores/automotivo-premium'], 'monthly', 0.85),
  ];

  // Páginas geradas a partir de dados: valem o template e o arquivo de dados.
  const fabricas = FABRICAS.map((f) =>
    url(`/setores/fabricas/${f.slug}`, ['app/setores/fabricas', 'lib/seo/fabricas.ts'], 'monthly', 0.85),
  );
  const grupos = GRUPOS.map((g) =>
    url(`/setores/grupos/${g.slug}`, ['app/setores/grupos', 'lib/seo/grupos.ts'], 'monthly', 0.85),
  );
  const solucoes = SOLUCOES.map((s) =>
    url(`/solucoes/${s.slug}`, ['app/solucoes', 'lib/seo/solucoes.ts'], 'monthly', 0.8),
  );
  const comparativos = COMPARATIVOS.map((c) =>
    url(`/comparativo/${c.slug}`, ['app/comparativo', 'lib/seo/comparativo.ts'], 'monthly', 0.85),
  );
  const guias = GUIAS.map((g) => url(`/guias/${g.slug}`, ['app/guias', 'lib/seo/guias.ts'], 'monthly', 0.75));
  const glossario = [
    url('/glossario-ia-automotiva', ['app/glossario-ia-automotiva/page.tsx', 'lib/seo/glossario.ts'], 'monthly', 0.7),
    ...GLOSSARIO_TERMS.map((t) =>
      url(
        `/glossario-ia-automotiva/${t.slug}`,
        ['app/glossario-ia-automotiva/[slug]', 'lib/seo/glossario.ts'],
        'monthly',
        0.65,
      ),
    ),
  ];
  const integracoes = INTEGRACOES.map((i) =>
    url(`/integracoes/${i.slug}`, ['app/integracoes', 'lib/seo/integracoes.ts'], 'monthly', 0.75),
  );

  const produtos = [url('/produtos/webos', ['app/produtos/webos'], 'monthly', 0.9)];

  const materiais = [
    url('/materiais/calculadora-roi', ['app/materiais/calculadora-roi'], 'monthly', 0.8),
    url('/materiais/checklist-qualidade', ['app/materiais/checklist-qualidade'], 'monthly', 0.7),
  ];

  const institucionais = [
    url('/sobre', ['app/sobre'], 'monthly', 0.6),
    url('/contato', ['app/contato'], 'monthly', 0.8),
    url('/cases', ['app/cases'], 'monthly', 0.7),
    url('/faq', ['app/faq'], 'monthly', 0.5),
  ];

  // Pilares listam os posts do próprio cluster: o post mais novo também conta.
  const pilares = PILLARS.map((pilar) =>
    url(
      `/${pilar.slug}`,
      ['app/[pillarSlug]', 'lib/pillars.ts'],
      'weekly',
      0.75,
      ...posts.filter((p) => p.pillarLink === `/${pilar.slug}`).map((p) => p.publishedAt),
    ),
  );

  const blog = [
    url('/blog', ['app/blog/page.tsx'], 'weekly', 0.7, postMaisNovo),
    ...artigos.map((artigo) => ({
      url: `${baseUrl}/blog/${artigo.slug}`,
      lastModified: maisRecente(artigo.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: maisRecente(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  const noticias = [
    url('/noticias', ['app/noticias'], 'daily', 0.6, getRecentNews()[0]?.publishedAt),
  ];

  return [
    ...principais,
    ...servicos,
    ...setores,
    ...fabricas,
    ...grupos,
    ...solucoes,
    ...comparativos,
    ...guias,
    ...glossario,
    ...integracoes,
    ...produtos,
    ...materiais,
    ...institucionais,
    ...pilares,
    ...blog,
    ...noticias,
  ];
}
