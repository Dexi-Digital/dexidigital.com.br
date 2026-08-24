import type { Metadata } from 'next';
import RevenueCalculator from './RevenueCalculator';

// Página de uso interno em calls de venda: acessível só pela URL,
// sem link no site, fora do sitemap e sem indexação.
export const metadata: Metadata = {
  title: 'Calculadora de Receita Recuperável',
  description:
    'Descubra quanto dinheiro está parado na sua base de cotações não fechadas e simule o pipeline reaberto em tempo real.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: '/calculator' },
  openGraph: {
    title: 'Calculadora de Receita Recuperável | Dexi Digital',
    description: 'Quanto de receita está parada na sua base de cotações não fechadas?',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function CalculatorPage() {
  return <RevenueCalculator />;
}
