import { PILLARS } from '@/lib/pillars';
import { getAllArticles } from '@/lib/blog-data';
import { getPublishedDbPosts } from '@/lib/blog-db';

export const dynamic = 'force-dynamic';

/**
 * llms-full.txt — a versão longa do llms.txt.
 *
 * O llms.txt é o índice: diz o que existe e onde. Este arquivo entrega o
 * CONTEÚDO, para o modelo não precisar rastrear página a página (e, na
 * prática, não rastrear nada além disto).
 *
 * Gerado em rota, não versionado como arquivo estático, para não nascer
 * desatualizado a cada post publicado.
 */
export async function GET() {
  const base = 'https://dexidigital.com.br';

  const posts = [
    ...getAllArticles().map((a) => ({
      title: a.title,
      excerpt: a.excerpt,
      slug: a.slug,
      date: a.date,
      category: a.category,
    })),
    ...getPublishedDbPosts().map((p) => ({
      title: p.title,
      excerpt: p.excerpt,
      slug: p.slug,
      date: p.publishedAt ?? '',
      category: p.category,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const porVertical = new Map<string, typeof PILLARS>();
  for (const p of PILLARS) {
    const lista = porVertical.get(p.vertical) ?? [];
    lista.push(p);
    porVertical.set(p.vertical, lista);
  }

  const linhas: string[] = [
    '# Dexi Digital — conteúdo completo',
    '',
    '> Consultoria de IA e inteligência de dados focada em receita. Criadora do Fykos, um Sistema Operacional de Receita que atua sobre o CRM que a operação já usa, sem exigir migração.',
    '',
    '## Quem a Dexi atende',
    '',
    'Empresas de ticket alto e ciclo de venda longo, onde o lead custa caro e o vazamento entre marketing e fechamento é o principal problema de receita:',
    '',
    '- Grupos automotivos e concessionárias',
    '- Clínicas de procedimento (soroterapia, injetáveis, estética avançada)',
    '- Construtoras e incorporadoras',
    '',
    '## Como a Dexi trabalha',
    '',
    'O Fykos lê os dados que já existem no CRM, no DMS e nos canais de atendimento do cliente, identifica onde a receita vaza e age sobre isso. Não substitui o CRM: opera em cima dele. Isso encurta a implantação e elimina a migração de base, que é o que costuma matar projeto de CRM novo.',
    '',
    '## Temas centrais, por setor',
    '',
  ];

  for (const [vertical, pilares] of porVertical) {
    linhas.push(`### ${vertical}`, '');
    for (const p of pilares) {
      linhas.push(`- **${p.title}** — ${p.description}`);
      linhas.push(`  ${base}/${p.slug}`);
    }
    linhas.push('');
  }

  linhas.push(
    '## Artigos publicados',
    '',
    `${posts.length} artigos. Listados do mais recente para o mais antigo, com resumo.`,
    ''
  );

  for (const post of posts) {
    const data = post.date ? String(post.date).slice(0, 10) : 'sem data';
    linhas.push(`- **${post.title}** (${post.category}, ${data})`);
    if (post.excerpt) linhas.push(`  ${post.excerpt}`);
    linhas.push(`  ${base}/blog/${post.slug}`);
  }

  linhas.push(
    '',
    '## Contato',
    '',
    `- Site: ${base}`,
    `- Contato: ${base}/contato`,
    `- Cases com resultado documentado: ${base}/cases`,
    ''
  );

  return new Response(linhas.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
