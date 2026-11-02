import Link from 'next/link';
import { PaginaIndice } from '@/components/seo/PaginaIndice';
import { buildMeta } from '@/lib/seo/meta';

export const metadata = buildMeta({
  title: 'Guias de inteligência comercial automotiva',
  description:
    'Guias para concessionárias e grupos automotivos: transformação digital, IA na venda de veículos e como escolher o CRM, sempre com foco em receita.',
  path: '/guias',
  keywords: ['guia concessionária', 'IA automotiva', 'CRM automotivo', 'transformação digital concessionária'],
});

export default function GuiasPage() {
  return (
    <PaginaIndice
      hub="guias"
      overline="GUIAS"
      titulo="Guias de inteligência comercial para concessionárias"
      intro={
        <p>
          Para quem decide a operação comercial de concessionárias e grupos automotivos: por onde começar a
          transformação digital, onde a IA muda a venda e como escolher o CRM. Os termos técnicos estão no{' '}
          <Link href="/glossario-ia-automotiva" className="underline hover:text-[var(--color-primary-500)]">
            glossário de IA automotiva
          </Link>
          .
        </p>
      }
    />
  );
}
