import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';
import { ThemeProvider } from '@/components/ThemeProvider';
import dynamic from 'next/dynamic';

import AnalyticsWrapper from '@/components/analytics/AnalyticsWrapper';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import OpenAIPixel from '@/components/analytics/OpenAIPixel';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Dexi Digital | Tecnologia para decisões comerciais de alto valor',
    template: '%s | Dexi Digital',
  },
  description:
    'A Dexi desenvolve sistemas que transformam dados da operação em prioridades e ações comerciais, com regras, supervisão e rastreabilidade — sem exigir a troca do CRM. Criadora do Fykos.',
  keywords: [
    'inteligência comercial',
    'execução comercial',
    'priorização de oportunidades',
    'inteligência de dados',
    'Fykos',
    'integração com CRM',
  ],
  authors: [{ name: 'Dexi Digital' }],
  creator: 'Dexi Digital',
  publisher: 'Dexi Digital',
  metadataBase: new URL('https://dexidigital.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://dexidigital.com.br',
    siteName: 'Dexi Digital',
    title: 'Dexi Digital | Tecnologia para decisões comerciais de alto valor',
    description:
      'A Dexi desenvolve sistemas que transformam dados da operação em prioridades e ações comerciais, com regras, supervisão e rastreabilidade — sem exigir a troca do CRM. Criadora do Fykos.',
    images: [
      {
        url: '/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Dexi Digital: tecnologia para decisões comerciais de alto valor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dexi Digital | Tecnologia para decisões comerciais de alto valor',
    description:
      'A Dexi desenvolve sistemas que transformam dados da operação em prioridades e ações comerciais, com regras, supervisão e rastreabilidade — sem exigir a troca do CRM. Criadora do Fykos.',
    images: ['/og-image-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global schemas (Organization + Website) present on all pages
  const globalSchemas = [organizationSchema, websiteSchema];

  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {globalSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <OpenAIPixel />
        <ThemeProvider defaultTheme="system" storageKey="dexi-ui-theme">
          <AnalyticsWrapper />
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

