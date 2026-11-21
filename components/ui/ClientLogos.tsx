import React from 'react';

/**
 * `src` é o logo do próprio grupo, nunca o da montadora: com o logo da marca
 * (as argolas da Audi, por exemplo) o visitante lê a montadora como cliente.
 * Sem logo próprio, o nome aparece em texto. Marca de cliente só com
 * autorização dele (spec de reposicionamento, out/2026).
 */
export type ClientLogo = {
  name: string;
  src?: string;
  /** Arquivo feito para fundo escuro (texto branco no próprio logo). */
  fundoEscuro?: boolean;
};

/** Clientes automotivos (home + /automotivo) */
export const AUTOMOTIVE_CLIENTS: ClientLogo[] = [
  // audi-center.png é o logo da Audi (montadora), não o do Audi Center.
  { name: 'Audi Center Uberlândia' },
  { name: 'Euroville GWM', src: '/images/clients/euroville-gwm.png' },
  // "Euroville / Uberlândia | Juiz de Fora" é texto branco no arquivo.
  { name: 'Euroville Royal Enfield', src: '/images/clients/euroville-royal-enfield.png', fundoEscuro: true },
  { name: 'Attra Veículos', src: '/images/clients/attra.png' },
  { name: 'Vamaq Motors', src: '/images/clients/vamaq.svg' },
];

/** Clientes de construtoras/incorporadoras (/construtoras); na página, sempre "alguns dos clientes" */
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
          className={`flex items-center justify-center h-16 px-6 rounded-xl border border-[var(--border-subtle)] shadow-sm ${
            logo.fundoEscuro ? 'bg-[#111117]' : 'bg-white'
          }`}
        >
          {logo.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-8 w-auto object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
            />
          ) : (
            // max-w quebra o nome em duas linhas: com ele numa linha só, o chip
            // ficava largo e a faixa de 5 logos passava para duas linhas.
            <span className="max-w-[6rem] text-center text-sm font-semibold leading-tight tracking-tight text-[var(--color-gray-700)]">
              {logo.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
