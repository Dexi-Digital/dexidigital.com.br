import type { Metadata } from 'next';

// A page.tsx e 'use client' e nao pode exportar metadata. O layout irmao e o
// lugar certo — era a unica das 34 rotas sem titulo e descricao proprios, e
// justamente uma pagina de captura.
export const metadata: Metadata = {
  title: 'Calculadora de ROI em IA | Quanto sua operação recupera | Dexi Digital',
  description:
    'Estime em minutos quanto a sua operação deixa de faturar por retrabalho e resposta lenta ao lead — e o retorno de automatizar com IA. Sem cadastro para calcular.',
  alternates: { canonical: 'https://dexidigital.com.br/materiais/calculadora-roi' },
  openGraph: {
    title: 'Calculadora de ROI em IA | Dexi Digital',
    description:
      'Estime quanto a sua operação deixa de faturar por retrabalho e resposta lenta ao lead.',
    url: 'https://dexidigital.com.br/materiais/calculadora-roi',
    type: 'website',
  },
};

export default function CalculadoraROILayout({ children }: { children: React.ReactNode }) {
  return children;
}
