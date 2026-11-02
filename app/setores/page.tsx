import Link from 'next/link';
import { PaginaIndice } from '@/components/seo/PaginaIndice';
import { buildMeta } from '@/lib/seo/meta';

export const metadata = buildMeta({
  title: 'Setores automotivos: fábricas e grupos',
  description:
    'Concessionárias por perfil de marca e grupos automotivos por porte: como o lead que custou caro vira prioridade e ação comercial com o Fykos.',
  path: '/setores',
  keywords: ['IA para concessionárias', 'grupos automotivos', 'inteligência comercial automotiva', 'Fykos'],
});

const link = 'underline hover:text-[var(--color-primary-500)]';

export default function SetoresPage() {
  return (
    <PaginaIndice
      hub="setores"
      overline="SETORES AUTOMOTIVOS"
      titulo="Inteligência comercial por segmento automotivo"
      intro={
        <p>
          Cada lead que chega à concessionária já custou caro, e o que faz ele virar venda muda conforme a marca e o
          porte do grupo. Veja como o Fykos atua em cada perfil de fábrica e de grupo. A visão geral está em{' '}
          <Link href="/automotivo" className={link}>
            Fykos para grupos automotivos e concessionárias
          </Link>
          .
        </p>
      }
      rodape={
        <p>
          Para grupos que vendem só marcas premium, veja também{' '}
          <Link href="/setores/automotivo-premium" className={link}>
            IA para grupos automotivos premium
          </Link>
          . Além do automotivo, a Dexi atende{' '}
          <Link href="/construtoras" className={link}>
            construtoras e incorporadoras
          </Link>{' '}
          e{' '}
          <Link href="/clinicas" className={link}>
            clínicas
          </Link>
          .
        </p>
      }
    />
  );
}
