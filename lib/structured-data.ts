// JSON-LD Structured Data for SEO and LLMO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://dexidigital.com.br/#organization',
  name: 'Dexi Digital',
  alternateName: 'Dexi',
  url: 'https://dexidigital.com.br',
  logo: {
    '@type': 'ImageObject',
    url: 'https://dexidigital.com.br/logo.png',
    width: 512,
    height: 512,
  },
  image: 'https://dexidigital.com.br/og-image-home.jpg',
  description:
    'A Dexi Digital desenvolve tecnologia para decisões comerciais de alto valor: sistemas que transformam dados da operação em prioridades e ações comerciais, integrando as fontes existentes, com regras, supervisão e rastreabilidade, sem exigir a troca do CRM. Criou o Fykos, produto de inteligência e execução comercial. Atende grupos automotivos e outras operações em que cada oportunidade tem valor alto.',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Uberlândia',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contato@dexidigital.com.br',
    contactType: 'customer service',
    availableLanguage: ['Portuguese', 'English'],
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brazil',
  },
  knowsAbout: [
    'Inteligência comercial',
    'Execução comercial',
    'Priorização de oportunidades',
    'Sistema Operacional de Receita',
    'Fykos',
    'IA sobre CRM existente',
    'Vazamento de receita no funil comercial',
    'Reativação de base morta de leads',
    'Tempo de resposta ao lead',
    'Inteligência de Dados',
    'IA para Vendas',
    'Software Sob Medida para Empresas',
    'Grupos Automotivos',
    'Concessionárias',
    'Clínicas de procedimento',
    'Construtoras e Incorporadoras',
    'Integração com DMS e CRM',
    'Governança de IA',
  ],
  slogan: 'Tecnologia para decisões comerciais de alto valor.',
  sameAs: [
    'https://linkedin.com/company/dexi-digital',
    'https://github.com/dexi-digital',
  ],
};

// LocalBusiness schema for local SEO
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://dexidigital.com.br/#localbusiness',
  name: 'Dexi Digital',
  description:
    'Tecnologia para decisões comerciais de alto valor: integração de dados da operação, priorização de oportunidades e execução comercial com rastreabilidade.',
  url: 'https://dexidigital.com.br',
  telephone: '+55-11-99184-7629',
  email: 'contato@dexidigital.com.br',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Uberlândia',
    addressRegion: 'MG',
    postalCode: '38400-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -18.9186,
    longitude: -48.2772,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Brazil',
    },
  ],
  priceRange: '$$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  serviceType: [
    'Fykos: inteligência e execução comercial',
    'Engenharia de Dados & Ativos de Inteligência',
    'Desenvolvimento de Sistemas de Missão Crítica',
    'Inteligência comercial para grupos automotivos',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Consultoria',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Conversa de aderência',
          description:
            'Avaliação da aderência da operação comercial: volume, dados disponíveis e viabilidade de implementação.',
        },
      },
    ],
  },
};

/**
 * O Fykos como produto da Dexi. Fica só em /o-fykos, não no layout: o teste
 * de resultados avançados do Google pede preço ou avaliação em
 * SoftwareApplication e acusa erro sem eles, e o Fykos não tem preço público.
 * Assim a home, os posts, o comparativo e o glossário seguem sem erro.
 */
export function getFykosSchema(descricao: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://dexidigital.com.br/o-fykos#app',
    name: 'Fykos',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: descricao,
    url: 'https://dexidigital.com.br/o-fykos',
    sameAs: ['https://fykos.com.br'],
    publisher: { '@id': 'https://dexidigital.com.br/#organization' },
  };
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://dexidigital.com.br/#website',
  url: 'https://dexidigital.com.br',
  name: 'Dexi Digital',
  description: 'Tecnologia para decisões comerciais de alto valor',
  publisher: {
    '@id': 'https://dexidigital.com.br/#organization',
  },
  inLanguage: 'pt-BR',
};

export const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://dexidigital.com.br/servicos/inteligencia-de-dados',
    name: 'Engenharia de Dados & Ativos de Inteligência',
    description:
      'Transformamos dados brutos em combustível para a tomada de decisão. Estruturamos a base necessária para que o Fykos opere com precisão, conectando CRM, ERP, WhatsApp e voz em ativos proprietários auditáveis.',
    provider: {
      '@id': 'https://dexidigital.com.br/#organization',
    },
    serviceType: 'Data Intelligence',
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Inteligência de Dados',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dashboards executivos em tempo real',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Modelos preditivos para demanda e churn',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data warehouse moderno (Snowflake, BigQuery)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Governança e compliance (LGPD, SOC2)',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://dexidigital.com.br/servicos/software-sob-medida',
    name: 'Desenvolvimento de Sistemas de Missão Crítica',
    description:
      'Nossa expertise de 10 anos em engenharia para criar soluções proprietárias que resolvem o que o mercado não resolve. Construímos a "última milha" da integração tecnológica, garantindo que a inovação se conecte perfeitamente aos sistemas legados e processos core da sua empresa.',
    provider: {
      '@id': 'https://dexidigital.com.br/#organization',
    },
    serviceType: 'Custom Software Development',
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Desenvolvimento de Software',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Arquitetura moderna (microserviços, serverless)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Testes automatizados e CI/CD',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Documentação técnica completa',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Suporte e evolução contínua',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://dexidigital.com.br/servicos/ia-para-empresas',
    name: 'Fykos: inteligência e execução comercial',
    description:
      'O Fykos é o produto de inteligência e execução comercial da Dexi: identifica oportunidades nos dados da operação, orienta a próxima ação e executa processos dentro de regras definidas, para que a receita que já está na base vire previsibilidade de venda.',
    provider: {
      '@id': 'https://dexidigital.com.br/#organization',
    },
    serviceType: 'Enterprise AI Solutions',
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de IA Empresarial',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IA governada e auditável',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Integração com sistemas existentes',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Treinamento de equipes internas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roadmap de adoção gradual',
          },
        },
      ],
    },
  },
];

export function getHomePageSchemas() {
  // organizationSchema e websiteSchema NAO entram aqui: o layout raiz ja os
  // emite em toda pagina. Repetir gerava dois Organization com o mesmo @id
  // no HTML da home. O FAQPage da home sai do proprio app/page.tsx, a partir
  // das mesmas perguntas exibidas na pagina.
  return [...servicesSchema];
}

export function getArticleSchema(article: {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  author: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://dexidigital.com.br/blog/${article.slug}`,
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    // Sem autoria individual no blog, o autor é a própria organização, com o
    // mesmo nome do nó Organization. Com o nome do post ("Equipe Dexi
    // Digital"), o mesmo @id aparecia com dois nomes.
    author: {
      '@type': 'Organization',
      '@id': 'https://dexidigital.com.br/#organization',
      name: 'Dexi Digital',
      url: 'https://dexidigital.com.br',
    },
    publisher: {
      '@id': 'https://dexidigital.com.br/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dexidigital.com.br/blog/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: 'pt-BR',
  };
}

/**
 * BreadcrumbList — o site tem hierarquia profunda (/setores/grupos/[slug],
 * /servicos/[x], /blog/[slug]) e nao declarava nenhuma. Sem isso o buscador
 * adivinha a posicao da pagina no conjunto, e o motor generativo cita a URL
 * sem saber de que secao ela veio.
 */
export function getBreadcrumbSchema(trilha: { nome: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trilha.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.nome,
      item: item.url.startsWith('http') ? item.url : `https://dexidigital.com.br${item.url}`,
    })),
  };
}

/**
 * HowTo — para metodologia e guias, que descrevem processo em etapas. E o
 * schema que alimenta resposta passo a passo em motor de busca e de resposta.
 */
export function getHowToSchema(input: {
  nome: string;
  descricao: string;
  url: string;
  etapas: { nome: string; texto: string }[];
  tempoTotal?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.nome,
    description: input.descricao,
    ...(input.tempoTotal ? { totalTime: input.tempoTotal } : {}),
    step: input.etapas.map((etapa, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: etapa.nome,
      text: etapa.texto,
      url: `${input.url}#etapa-${i + 1}`,
    })),
  };
}
