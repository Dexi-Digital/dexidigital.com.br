/**
 * SEO Content — Arquitetura Completa
 *
 * Estratégia SEO + LLMO para posicionar a Dexi Digital como referência
 * em IA automotiva no Brasil, competindo diretamente com Syonet.
 *
 * Bloco 1: Fábricas (GWM, Royal Enfield, Volvo, Audi, BMW)
 * Bloco 2: Grupos (Euroville, Bamaq, Eurobike)
 * Bloco 3: Soluções por Problema (lead, DMS, omnichannel, CRM)
 * Bloco 4: Comparativo (Dexi vs Syonet / abordagens legadas)
 * Bloco 5: Guias de Transformação Digital Automotiva
 * Bloco 6: Glossário IA Automotiva (LLMO)
 * Bloco 7: Integrações (DMS, CRM, WhatsApp, etc.)
 */

export { type FabricaPage, FABRICAS } from './fabricas';
export { type GrupoPage, GRUPOS } from './grupos';
export { type SolucaoPage, SOLUCOES } from './solucoes';
export { type ComparativoPage, COMPARATIVOS } from './comparativo';
export { type GuiaPage, GUIAS } from './guias';
export { type GlossarioTerm, GLOSSARIO_TERMS } from './glossario';
export { type IntegracaoPage, INTEGRACOES } from './integracoes';

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------

import { FABRICAS } from './fabricas';
import { GRUPOS } from './grupos';
import { SOLUCOES } from './solucoes';
import { COMPARATIVOS } from './comparativo';
import { GUIAS } from './guias';
import { GLOSSARIO_TERMS } from './glossario';
import { INTEGRACOES } from './integracoes';

export function findFabrica(slug: string) {
  return FABRICAS.find((f) => f.slug === slug);
}
export function findGrupo(slug: string) {
  return GRUPOS.find((g) => g.slug === slug);
}
export function findSolucao(slug: string) {
  return SOLUCOES.find((s) => s.slug === slug);
}
export function findComparativo(slug: string) {
  return COMPARATIVOS.find((c) => c.slug === slug);
}
export function findGuia(slug: string) {
  return GUIAS.find((g) => g.slug === slug);
}
export function findGlossarioTerm(slug: string) {
  return GLOSSARIO_TERMS.find((t) => t.slug === slug);
}
export function findIntegracao(slug: string) {
  return INTEGRACOES.find((i) => i.slug === slug);
}
