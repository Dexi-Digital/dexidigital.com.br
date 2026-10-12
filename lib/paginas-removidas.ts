/**
 * Páginas fora do blog que saíram do ar de vez e respondem 410 (ver proxy.ts).
 * Os posts do blog ficam em lib/blog-removidos.ts.
 *
 * Out/2026:
 * - Checklist de Qualidade: o PDF prometido nunca existiu e o tema (qualidade
 *   de software) era da Dexi software house.
 * - Integrações com portais automotivos e com Google/Meta Ads: afirmavam
 *   integrações que a Dexi nunca fez.
 * - Soluções de integração com DMS, atendimento omnichannel e CRM unificado: a
 *   premissa de cada uma era um recurso que o Fykos não tem.
 */
export const PAGINAS_REMOVIDAS: string[] = [
  '/materiais/checklist-qualidade',
  '/downloads/checklist-qualidade.pdf',
  '/integracoes/portais-automotivos-integracao',
  '/integracoes/google-ads-meta-ads-automotivo',
  '/solucoes/integracao-dms-concessionaria',
  '/solucoes/atendimento-omnichannel-automotivo',
  '/solucoes/crm-unificado-grupo-automotivo',
];
