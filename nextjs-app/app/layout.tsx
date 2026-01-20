import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';
import { ThemeProvider } from '@/components/ThemeProvider';
import FingerprintTracker from '@/components/analytics/FingerprintTracker';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Dexi Digital - Inteligência de Dados e Software com IA Acelerada',
    template: '%s | Dexi Digital',
  },
  description:
    'Desenvolvimento de software sob medida e inteligência de dados com IA acelerada e supervisão técnica humana. 10+ anos de experiência com grupos automotivos e grandes corporações.',
  keywords: [
    'inteligência de dados',
    'IA empresarial',
    'software sob medida',
    'data intelligence',
    'AI acelerada',
    'desenvolvimento enterprise',
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
    title: 'Dexi Digital - IA Acelerada + Inteligência de Dados para Empresas',
    description:
      'Soluções de software e dados para empresas que não podem falhar. IA como acelerador, nunca sozinha.',
    images: [
      {
        url: '/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Dexi Digital - IA Acelerada + Inteligência de Dados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dexi Digital - IA Acelerada + Inteligência de Dados para Empresas',
    description:
      'Soluções de software e dados para empresas que não podem falhar. IA como acelerador, nunca sozinha.',
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
        <ThemeProvider defaultTheme="system" storageKey="dexi-ui-theme">
          <FingerprintTracker />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

