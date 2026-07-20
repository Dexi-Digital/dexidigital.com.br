import React from 'react';

export type ClientLogo = { name: string; src: string };

/** Clientes automotivos (home + /automotivo) */
export const AUTOMOTIVE_CLIENTS: ClientLogo[] = [
  { name: 'Audi Center Uberlândia', src: '/images/clients/audi-center.png' },
  { name: 'Euroville GWM', src: '/images/clients/euroville-gwm.png' },
  { name: 'Euroville Royal Enfield', src: '/images/clients/euroville-royal-enfield.png' },
  { name: 'Attra Veículos', src: '/images/clients/attra.png' },
  { name: 'Vamaq Motors', src: '/images/clients/vamaq.svg' },
];

/** Cliente de construtoras/incorporadoras (/construtoras) */
export const CONSTRUCTION_CLIENTS: ClientLogo[] = [
  { name: 'TGV Empreendimentos', src: '/images/clients/tgv.png' },
];

/**
 * ClientLogos: barra de logos de clientes.
 * Cada logo fica num chip claro para garantir contraste (várias logos são escuras),
 * em escala de cinza suave que colore no hover. Sem next/image (formatos mistos: png/webp/svg).
 */
export default function ClientLogos({
  logos = AUTOMOTIVE_CLIENTS,
  className = '',
  align = 'center',
}: {
  logos?: ClientLogo[];
  className?: string;
  align?: 'center' | 'start';
}) {
  const justify = align === 'start' ? 'md:justify-start justify-center' : 'justify-center';
  return (
    <div className={`flex flex-wrap items-center gap-4 ${justify} ${className}`}>
      {logos.map((logo) => (
        <div
          key={logo.name}
          title={logo.name}
          className="flex items-center justify-center h-16 px-6 rounded-xl bg-white border border-[var(--border-subtle)] shadow-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            className="max-h-8 w-auto object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}
