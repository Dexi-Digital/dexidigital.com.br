/**
 * Tracking & Analytics Events for Dexi Digital
 * 
 * Este arquivo centraliza todos os eventos de tracking para otimização de conversão.
 * Eventos são enviados para Google Analytics 4 (gtag) e podem ser estendidos para outras plataformas.
 */

// Tipos de eventos
export type TrackingEventCategory = 
  | 'cta_click'
  | 'form_submit'
  | 'material_download'
  | 'scroll_depth'
  | 'section_view'
  | 'calculator_use'
  | 'whatsapp_click'
  | 'page_engagement';

export interface TrackingEvent {
  category: TrackingEventCategory;
  action: string;
  label?: string;
  value?: number;
  custom_data?: Record<string, string | number | boolean>;
}

// Declaração global do gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Envia evento para Google Analytics 4
 */
export function trackEvent(event: TrackingEvent): void {
  if (typeof window === 'undefined') return;
  
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_data,
    });
  }

  // Console log para debug em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log('[Dexi Tracking]', event);
  }
}

// ============================================
// EVENTOS DE CTA (Calls to Action)
// ============================================

export function trackCTAClick(ctaName: string, location: string, variant?: string): void {
  trackEvent({
    category: 'cta_click',
    action: 'click',
    label: ctaName,
    custom_data: {
      cta_location: location,
      cta_variant: variant || 'default',
    },
  });
}

export function trackWhatsAppClick(location: string, message?: string): void {
  trackEvent({
    category: 'whatsapp_click',
    action: 'click',
    label: location,
    custom_data: {
      message_type: message || 'diagnostic',
    },
  });
}

// ============================================
// EVENTOS DE FORMULÁRIO
// ============================================

export function trackFormStart(formName: string): void {
  trackEvent({
    category: 'form_submit',
    action: 'form_start',
    label: formName,
  });
}

export function trackFormSubmit(formName: string, success: boolean): void {
  trackEvent({
    category: 'form_submit',
    action: success ? 'form_success' : 'form_error',
    label: formName,
  });
}

// ============================================
// EVENTOS DE MATERIAIS
// ============================================

export function trackMaterialDownload(materialName: string, materialType: string): void {
  trackEvent({
    category: 'material_download',
    action: 'download',
    label: materialName,
    custom_data: {
      material_type: materialType,
    },
  });
}

export function trackCalculatorUse(step: string, values?: Record<string, number>): void {
  trackEvent({
    category: 'calculator_use',
    action: step,
    label: 'roi_calculator',
    custom_data: values as Record<string, number> | undefined,
  });
}

// ============================================
// EVENTOS DE SCROLL E ENGAJAMENTO
// ============================================

export function trackScrollDepth(depth: number, pagePath: string): void {
  trackEvent({
    category: 'scroll_depth',
    action: `scroll_${depth}`,
    label: pagePath,
    value: depth,
  });
}

export function trackSectionView(sectionName: string, pagePath: string): void {
  trackEvent({
    category: 'section_view',
    action: 'view',
    label: sectionName,
    custom_data: {
      page_path: pagePath,
    },
  });
}

