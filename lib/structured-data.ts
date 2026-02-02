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
    'Dexi Digital é uma consultoria estratégica de IA e inteligência de dados focada em resultados de vendas, eficiência operacional e governança de IA para empresas brasileiras. Especializada em grupos automotivos premium e grandes corporações.',
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
    'Consultoria de IA',
    'Inteligência de Dados',
    'IA para Vendas',
    'Eficiência Operacional com IA',
    'Machine Learning',
    'Software Sob Medida para Empresas',
    'Grupos Automotivos',
    'Concessionárias Premium',
    'Data Warehouse',
    'Business Intelligence',
    'Governança de IA',
  ],
  slogan: 'IA como acelerador, nunca sozinha.',
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
  name: 'Dexi Digital - Consultoria de IA e Inteligência de Dados',
  description:
    'Consultoria estratégica de IA e inteligência de dados para empresas enterprise no Brasil. Especializada em transformar processos de vendas complexos em alta conversão através de tecnologia brasileira.',
  url: 'https://dexidigital.com.br',
  telephone: '+55-34-99999-9999',
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
    'Arquitetura de Execução Agêntica (Synapse OS)',
    'Engenharia de Dados & Ativos de Inteligência',
    'Desenvolvimento de Sistemas de Missão Crítica',
    'IA para Grupos Automotivos',
    'Consultoria de IA para Vendas',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Consultoria',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diagnóstico de Potencial de IA',
          description: 'Análise gratuita do potencial de IA para sua empresa em 24h',
        },
      },
    ],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://dexidigital.com.br/#website',
  url: 'https://dexidigital.com.br',
  name: 'Dexi Digital',
  description: 'Inteligência de Dados e Software com IA Acelerada',
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
      'Transformamos dados brutos em combustível para a tomada de decisão autônoma. Estruturamos a base necessária para que o Synapse OS opere com precisão, garantindo que a informação flua sem gargalos, como implementado na gestão de 180k leads da Attra Veículos.',
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
    name: 'Arquitetura de Execução Agêntica (Synapse OS)',
    description:
      'Implementação de agentes autônomos que não apenas respondem, mas executam. Focamos em ganho de escala e redução de latência operacional, transformando a IA em um motor de EBITDA real, com resultados validados no setor imobiliário de alto padrão da TGV Empreendimentos.',
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

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://dexidigital.com.br/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A Dexi substitui desenvolvedores por IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. IA acelera tarefas repetitivas e prototipagem, mas toda solução passa por revisão técnica humana especializada. Arquitetura, segurança, escalabilidade e manutenibilidade são validadas por engenheiros experientes. IA é ferramenta, não substituta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como a Dexi garante segurança em soluções com IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Implementamos governança desde o início: rastreabilidade de decisões, explicabilidade de modelos, controle de acesso, auditoria completa e compliance com LGPD/GDPR. IA empresarial exige controle total, não caixas-pretas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva um projeto típico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende da complexidade. MVPs de inteligência de dados: 4-8 semanas. Sistemas enterprise completos: 3-6 meses. Sempre com entregas incrementais e validação contínua. Agilidade sem comprometer qualidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Dexi trabalha com empresas de que porte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Focamos em médias e grandes empresas (50+ funcionários) com desafios complexos de dados e software. Grupos automotivos, corporações multi-unidade, empresas em crescimento acelerado. Clientes que não podem falhar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona o suporte pós-entrega?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Todo projeto inclui documentação técnica completa, testes automatizados e período de garantia. Oferecemos contratos de suporte contínuo com SLA definido, evolução de features e monitoramento proativo.',
      },
    },
  ],
};

export function getHomePageSchemas() {
  return [
    organizationSchema,
    websiteSchema,
    ...servicesSchema,
    faqSchema,
  ];
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
    author: {
      '@type': 'Organization',
      '@id': 'https://dexidigital.com.br/#organization',
      name: article.author,
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
