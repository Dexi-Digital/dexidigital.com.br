import { getBreadcrumbSchema } from '@/lib/structured-data';

interface BreadcrumbSchemaProps {
  /** Do mais raso ao mais profundo. NÃO inclua "Início": ele é adicionado aqui. */
  trilha: { nome: string; url: string }[];
}

/**
 * Emite BreadcrumbList. Mesmo padrão do FAQSchema, para as páginas não
 * repetirem o <script type="application/ld+json"> à mão.
 *
 * "Início" entra sempre como primeiro item — se cada página declarasse por
 * conta própria, uma esqueceria e a trilha ficaria começando no meio.
 */
export function BreadcrumbSchema({ trilha }: BreadcrumbSchemaProps) {
  const schema = getBreadcrumbSchema([{ nome: 'Início', url: '/' }, ...trilha]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
