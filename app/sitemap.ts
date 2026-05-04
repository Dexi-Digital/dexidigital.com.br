import { MetadataRoute } from 'next';
import { FABRICAS } from '@/lib/seo/fabricas';
import { GRUPOS } from '@/lib/seo/grupos';
import { SOLUCOES } from '@/lib/seo/solucoes';
import { COMPARATIVOS } from '@/lib/seo/comparativo';
import { GUIAS } from '@/lib/seo/guias';
import { GLOSSARIO_TERMS } from '@/lib/seo/glossario';
import { INTEGRACOES } from '@/lib/seo/integracoes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dexidigital.com.br';
  const currentDate = new Date();

  // Páginas principais com alta prioridade
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/metodologia`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Páginas de serviços
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/servicos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicos/ia-para-empresas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicos/inteligencia-de-dados`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicos/software-sob-medida`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // Páginas de setores
  const sectorPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/setores/automotivo-premium`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // SEO: Fábricas (segmentos automotivos)
  const fabricaPages: MetadataRoute.Sitemap = FABRICAS.map((f) => ({
    url: `${baseUrl}/setores/fabricas/${f.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // SEO: Grupos Automotivos
  const grupoPages: MetadataRoute.Sitemap = GRUPOS.map((g) => ({
    url: `${baseUrl}/setores/grupos/${g.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // SEO: Soluções por Problema
  const solucaoPages: MetadataRoute.Sitemap = SOLUCOES.map((s) => ({
    url: `${baseUrl}/solucoes/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // SEO: Comparativos (Dexi vs Syonet)
  const comparativoPages: MetadataRoute.Sitemap = COMPARATIVOS.map((c) => ({
    url: `${baseUrl}/comparativo/${c.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // SEO: Guias de Transformação Digital
  const guiaPages: MetadataRoute.Sitemap = GUIAS.map((g) => ({
    url: `${baseUrl}/guias/${g.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // SEO: Glossário IA Automotiva
  const glossarioPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/glossario-ia-automotiva`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...GLOSSARIO_TERMS.map((t) => ({
      url: `${baseUrl}/glossario-ia-automotiva/${t.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
  ];

  // SEO: Integrações
  const integracaoPages: MetadataRoute.Sitemap = INTEGRACOES.map((i) => ({
    url: `${baseUrl}/integracoes/${i.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Páginas de produtos
  const productPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/produtos/webos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Materiais e recursos para C-Level
  const materialPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/materiais/guia-ia-empresarial`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/materiais/calculadora-roi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/materiais/checklist-qualidade`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Páginas institucionais
  const companyPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/sobre`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Blog
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  return [
    ...mainPages,
    ...servicePages,
    ...sectorPages,
    ...fabricaPages,
    ...grupoPages,
    ...solucaoPages,
    ...comparativoPages,
    ...guiaPages,
    ...glossarioPages,
    ...integracaoPages,
    ...productPages,
    ...materialPages,
    ...companyPages,
    ...blogPages,
  ];
}
