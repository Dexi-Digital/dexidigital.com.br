'use client';

import Link from 'next/link';
import { trackCTAClick, trackWhatsAppClick } from '@/lib/tracking';
import { WHATSAPP_DIAGNOSTIC_URL, WHATSAPP_AUTOMOTIVO_URL } from '@/lib/whatsapp';

type CTAVariant = 'primary' | 'secondary' | 'white' | 'link' | 'money';
type CTAType = 'validation' | 'whatsapp' | 'synapse' | 'contact' | 'material' | 'aderencia' | 'custom';

interface TrackedCTAProps {
  /** Tipo de CTA padronizado */
  type: CTAType;
  /** Variante visual */
  variant?: CTAVariant;
  /** Localização na página (para tracking) */
  location: string;
  /** Texto customizado (opcional) */
  text?: string;
  /** URL customizada (para type='custom') */
  href?: string;
  /** Classes adicionais */
  className?: string;
  /** Setor específico (para WhatsApp) */
  sector?: 'automotivo' | 'default';
}

// CTAs padronizados conforme diretrizes de conversão
const CTA_CONFIG: Record<CTAType, { text: string; href?: string; isExternal?: boolean }> = {
  // Legado: era o WhatsApp do "diagnóstico em 24h". Desde o reposicionamento
  // (out/2026) é sinônimo de `aderencia`, para nenhum uso antigo prometer 24h.
  validation: {
    text: 'Avaliar aderência da minha operação',
    href: '/contato',
  },
  whatsapp: {
    text: 'Falar com Especialista',
    href: WHATSAPP_DIAGNOSTIC_URL,
    isExternal: true,
  },
  synapse: {
    text: 'Conhecer o Fykos',
    href: 'https://fykos.com.br',
    isExternal: true,
  },
  contact: {
    text: 'Iniciar Conversa',
    href: '/contato',
  },
  material: {
    text: 'Acessar Material',
    href: '/materiais/calculadora-roi',
  },
  aderencia: {
    text: 'Avaliar aderência da minha operação',
    href: '/contato',
  },
  custom: {
    text: 'Saiba Mais',
  },
};

const VARIANT_CLASSES: Record<CTAVariant, string> = {
  primary: 'btn btn-primary shadow-lg shadow-[var(--color-primary-500)]/20',
  money: 'btn btn-lg btn-money',
  secondary: 'btn btn-secondary',
  white: 'btn bg-white text-[var(--color-primary-700)] hover:bg-white/90 shadow-lg font-bold',
  link: 'text-sm font-medium text-[var(--color-primary-600)] hover:underline',
};

export default function TrackedCTA({
  type,
  variant = 'primary',
  location,
  text,
  href,
  className = '',
  sector = 'default',
}: TrackedCTAProps) {
  const config = CTA_CONFIG[type];
  const displayText = text || config.text;
  
  // Determine final href
  let finalHref = href || config.href || '/';
  if (type === 'whatsapp') {
    finalHref = sector === 'automotivo' ? WHATSAPP_AUTOMOTIVO_URL : WHATSAPP_DIAGNOSTIC_URL;
  }
  // Conversa de aderência: o formulário registra de qual CTA a pessoa veio.
  if ((type === 'aderencia' || type === 'validation') && !href) {
    finalHref = `/contato?cta=${encodeURIComponent(location)}`;
  }

  const isExternal = config.isExternal || finalHref.startsWith('http');
  const variantClasses = VARIANT_CLASSES[variant];

  const handleClick = () => {
    if (type === 'whatsapp') {
      trackWhatsAppClick(location, type);
    } else {
      trackCTAClick(type, location, variant);
    }
  };

  if (isExternal) {
    return (
      <a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${variantClasses} ${className}`}
        onClick={handleClick}
      >
        {displayText}
      </a>
    );
  }

  return (
    <Link
      href={finalHref}
      className={`${variantClasses} ${className}`}
      onClick={handleClick}
    >
      {displayText}
    </Link>
  );
}

// Componentes pré-configurados para uso rápido
export function ValidationCTA({ location, variant = 'primary', className = '' }: { location: string; variant?: CTAVariant; className?: string }) {
  return <TrackedCTA type="validation" location={location} variant={variant} className={className} />;
}

export function WhatsAppCTA({ location, variant = 'primary', className = '' }: { location: string; variant?: CTAVariant; className?: string }) {
  return <TrackedCTA type="whatsapp" location={location} variant={variant} className={className} />;
}

export function SynapseCTA({ location, variant = 'secondary', className = '' }: { location: string; variant?: CTAVariant; className?: string }) {
  return <TrackedCTA type="synapse" location={location} variant={variant} className={className} />;
}

