import { PaginaIndice } from '@/components/seo/PaginaIndice';
import { buildMeta } from '@/lib/seo/meta';

export const metadata = buildMeta({
  title: 'Soluções de inteligência comercial automotiva',
  description:
    'Gestão de leads para concessionárias, comparativos com robô de atendimento e CRM, WhatsApp Business e a metodologia da Dexi para levar o Fykos à operação.',
  path: '/solucoes',
  keywords: ['gestão de leads automotivo', 'inteligência comercial', 'robô de atendimento', 'CRM automotivo', 'Fykos'],
});

export default function SolucoesPage() {
  return (
    <PaginaIndice
      hub="solucoes"
      overline="SOLUÇÕES"
      titulo="Soluções de inteligência e execução comercial"
      intro={
        <p>
          Onde o Fykos atua na venda automotiva, como ele se compara a um robô de atendimento e a um CRM, e como a
          Dexi leva o projeto até a operação. Sempre sobre os sistemas que a empresa já usa, sem trocar o CRM.
        </p>
      }
    />
  );
}
