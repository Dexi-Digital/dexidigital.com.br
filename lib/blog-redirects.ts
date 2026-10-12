/**
 * Consolidação de posts canibais — 25/08/2026.
 *
 * A auditoria encontrou 4 aglomerados de posts disputando a mesma intenção de
 * busca. Dois deles concentravam 80 posts sobre "habilidades do desenvolvedor",
 * assunto que não atrai o público que a Dexi vende (grupo automotivo, clínica,
 * incorporadora). Com 80 páginas na mesma consulta, nenhuma acumula autoridade
 * e o buscador escolhe uma quase ao acaso.
 *
 * Cada aglomerado virou um post canônico; o resto redireciona com 301 para ele.
 * Nenhuma URL retorna 404 — quem tinha link continua chegando em conteúdo vivo,
 * e a autoridade dos 83 endereços se concentra em 4.
 *
 * PARA REVERTER: apague este arquivo, remova o import em next.config.ts e
 * restaure lib/blog-data.ts do histórico do git. Nada foi perdido.
 *
 * O canônico foi escolhido por profundidade de conteúdo e data, porque não há
 * Search Console conectado. Com dados de tráfego, vale reconferir se o canônico
 * escolhido é mesmo o que tinha posição — e trocar o destino, se não for.
 *
 * Out/2026 (handoff de SEO, itens 1.2 e 1.3):
 * - O canônico da família "habilidades" foi reescrito em ago/2026 como "4
 *   habilidades que fazem um time técnico gerar receita" e ganhou slug que bate
 *   com o título. O slug antigo redireciona, e os redirects de ago/2026 apontam
 *   direto para o novo: todo 301 daqui chega ao destino em um salto só.
 * - Quatro pares de quase duplicatas foram consolidados. Nada das origens foi
 *   juntado ao destino: o que elas tinham de diferente eram "cases" e ROI sem
 *   fonte, que o site não publica.
 */
export const BLOG_REDIRECTS: [origem: string, destino: string][] = [
  ['descubra-7-habilidades-essenciais-desenvolvedores-2025-3', 'habilidades-time-tecnico-gerar-receita'],
  ['chatbots-inteligentes', 'chatbots-inteligentes-vs-bots-tradicionais'],
  ['chatbots-inteligentes-vs-bots-tradicionais-qual-realmente-melhora-o-atendimento', 'chatbots-inteligentes-vs-bots-tradicionais'],
  ['diferenca-entre-software-customizado-pronto', 'software-pronto-vs-software-customizado'],
  ['desenvolvimento-de-software-personalizado', 'desenvolvimento-de-software-sob-medida'],
  ['infraestrutura-digital', 'infraestrutura-digital-e-escalabilidade'],
  ['7-habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['abracando-a-ia-habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['adapte-se-inovem-habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedor-supere-desafios-2024-2025-habilidades-essenciais', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-se-preparar-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-10', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-11', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-2', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-3', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-4', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-5', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-6', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-7', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-8', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-2025-9', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-destacar-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-podem-superar-desafios-2024-em-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-superar-desafios-2024-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-superar-desafios-2024-2025-2', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-superar-desafios-2024-2025-3', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-superar-desafios-2024-2025-4', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-superar-desafios-2024-2025-5', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-superar-desafios-2024-2025-6', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-superar-desafios-2024-preparados-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-superar-desafios-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['como-desenvolvedores-superar-desafios-prosperar', 'habilidades-time-tecnico-gerar-receita'],
  ['como-superar-desafios-2024-dominar-2025-habilidades-essenciais', 'habilidades-time-tecnico-gerar-receita'],
  ['conquiste-2025-habilidades-essenciais-desenvolvedores', 'habilidades-time-tecnico-gerar-receita'],
  ['desafios-2024-tendencias-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['desbravando-desafios-2024-estrategias-desenvolvedores', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedor-habilidades-essenciais-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedor-habilidades-essenciais-2025-2', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedores-de-2025-habilidades-essenciais', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedores-desafios-2024-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedores-em-2025-habilidades-essenciais', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedores-habilidades-essenciais-2025-2', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedores-habilidades-essenciais-2025-3', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedores-precisam-dominar-2025-desafios-2024', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedores-prepare-se-para-2025-habilidades-essenciais', 'habilidades-time-tecnico-gerar-receita'],
  ['desenvolvedores-principais-habilidades-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['dominar-habilidades-essenciais-desenvolvedor-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['dominar-habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['dominar-habilidades-essenciais-desenvolvedores-2025-ia', 'habilidades-time-tecnico-gerar-receita'],
  ['domine-2025-7-habilidades-essenciais', 'habilidades-time-tecnico-gerar-receita'],
  ['domine-2025-como-desenvolvedores-superarao-desafios-2024', 'habilidades-time-tecnico-gerar-receita'],
  ['domine-2025-desafios-developers-2024', 'habilidades-time-tecnico-gerar-receita'],
  ['domine-competencias-essenciais-desenvolvedor-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['domine-habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['enfrente-desafios-2024-prepare-futuro-2025-7-habilidades-essenciais-desenvolvedores', 'habilidades-time-tecnico-gerar-receita'],
  ['escassez-de-talentos-tech-solucao', 'staff-augmentation-tech-solucao-escassez'],
  ['escassez-de-talentos-tech-staff-augmentation', 'staff-augmentation-tech-solucao-escassez'],
  ['estrategias-2025-desenvolvedores-superar-desafios-2024', 'habilidades-time-tecnico-gerar-receita'],
  ['fique-pronto-futuro-habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['habilidades-essenciais-desenvolvedor-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['habilidades-essenciais-desenvolvedores-2025-2', 'habilidades-time-tecnico-gerar-receita'],
  ['habilidades-essenciais-desenvolvedores-2025-3', 'habilidades-time-tecnico-gerar-receita'],
  ['habilidades-essenciais-desenvolvedores-2025-4', 'habilidades-time-tecnico-gerar-receita'],
  ['habilidades-essenciais-desenvolvedores-2025-6', 'habilidades-time-tecnico-gerar-receita'],
  ['habilidades-essenciais-desenvolvedores-2025-7', 'habilidades-time-tecnico-gerar-receita'],
  ['habilidades-essenciais-desenvolvedores-2025-8', 'habilidades-time-tecnico-gerar-receita'],
  ['prepare-para-2025-7-habilidades-essenciais-desenvolvedores', 'habilidades-time-tecnico-gerar-receita'],
  ['prepare-para-os-desafios-de-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['prepare-para-prosperar-em-2025-habilidades-essenciais-desenvolvedores', 'habilidades-time-tecnico-gerar-receita'],
  ['principais-habilidades-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['quais-sao-as-tendencias-para-2024-no-desenvolvimento-do-ecossistema-de-saude-de-acordo-com-a-dexi-digital', 'quais-sao-as-tendencias-de-desenvolvimento-movel-para-2024-de-acordo-com-a-dexi-digital'],
  ['quais-sao-as-tendencias-tecnologicas-para-2024-de-acordo-com-a-dexi-digital', 'quais-sao-as-tendencias-de-desenvolvimento-movel-para-2024-de-acordo-com-a-dexi-digital'],
  ['sete-habilidades-essenciais-desenvolvedores', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-2024-prospere-2025-habilidades-desenvolvimento', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-desafios-2024-7-habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-desafios-2024-impulsione-negocios-2025-habilidades-essenciais-desenvolvedores', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-2024-2025-desenvolvedores-prosperarem', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-2024-2025-developers-ia-habilidades-essenciais', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-2024-7-habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-2024-7-habilidades-essenciais-desenvolvedores-2025-2', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-2024-prospere-2025-habilidades-essenciais-desenvolvedores', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-de-2024-com-as-7-habilidades-essenciais-para-desenvolvedores-em-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-de-2024-com-estas-7-habilidades-essenciais-para-desenvolvedores-em-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-de-2024-com-habilidades-essenciais-desenvolvedores-2025', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-de-2024-com-habilidades-essenciais-para-desenvolvedores', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-de-2024-e-se-prepare-para-2025-7-habilidades-essenciais', 'habilidades-time-tecnico-gerar-receita'],
  ['supere-os-desafios-de-2024-impulsione-a-inovacao-em-2025', 'habilidades-time-tecnico-gerar-receita'],
];
