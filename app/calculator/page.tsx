import { buildMeta } from '@/lib/seo/meta';
import RevenueCalculator from './RevenueCalculator';

// Página de uso interno em calls de venda: acessível só pela URL,
// sem link no site, fora do sitemap e sem indexação.
export const metadata = buildMeta({
  title: 'Calculadora de Receita Recuperável',
  description:
    'Descubra quanto dinheiro está parado na sua base de cotações não fechadas e simule o pipeline reaberto em tempo real.',
  path: '/calculator',
  nofollow: true,
});

export default function CalculatorPage() {
  return <RevenueCalculator />;
}
