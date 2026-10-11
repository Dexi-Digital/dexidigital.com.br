/**
 * WhatsApp configuration for Dexi Digital
 */

export const WHATSAPP_PHONE = '5511991847629';

export const WHATSAPP_MESSAGES = {
  default: 'Olá! Gostaria de saber mais sobre os serviços da Dexi Digital.',
  diagnostic: 'Olá! Gostaria de conversar sobre a aderência da minha operação.',
  automotivo: 'Olá! Gostaria de conversar sobre a aderência da operação do meu grupo automotivo.',
  contact: 'Olá! Vim pelo site da Dexi Digital e gostaria de conversar.',
} as const;

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(message: keyof typeof WHATSAPP_MESSAGES | string = 'default'): string {
  const text = WHATSAPP_MESSAGES[message as keyof typeof WHATSAPP_MESSAGES] || message;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}

/**
 * WhatsApp URL for the conversa de aderência (most common use case).
 * O nome do export é legado (era o "diagnóstico"); mantido porque é importado em vários lugares.
 */
export const WHATSAPP_DIAGNOSTIC_URL = getWhatsAppUrl('diagnostic');

/**
 * WhatsApp URL for automotive sector
 */
export const WHATSAPP_AUTOMOTIVO_URL = getWhatsAppUrl('automotivo');

