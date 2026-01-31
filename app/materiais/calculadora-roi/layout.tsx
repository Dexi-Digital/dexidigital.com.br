import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora de ROI em Dados | Ferramenta Gratuita',
  description:
    'Calcule o retorno financeiro de um projeto de inteligência de dados. Ferramenta gratuita com análise personalizada e benchmarks do setor.',
};

export default function CalculadoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

