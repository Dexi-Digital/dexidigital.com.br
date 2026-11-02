import { buildMeta } from '@/lib/seo/meta';

// A page.tsx e 'use client' e nao pode exportar metadata. O layout irmao e o
// lugar certo — era a unica das 34 rotas sem titulo e descricao proprios, e
// justamente uma pagina de captura.
export const metadata = buildMeta({
  title: 'Calculadora de ROI em IA | Quanto sua operação recupera',
  description:
    'Estime em minutos quanto a operação deixa de faturar por retrabalho e resposta lenta ao lead, e o retorno de automatizar com IA. Sem cadastro.',
  path: '/materiais/calculadora-roi',
});

export default function CalculadoraROILayout({ children }: { children: React.ReactNode }) {
  return children;
}
