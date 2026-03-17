import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Core settings
  reactStrictMode: true,

  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon sizes
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },

  // Experimental features for performance
  experimental: {
    optimizeCss: true, // CSS optimization (if critters is available)
  },

  // 301 Redirects (www to non-www + legacy URLs)
  async redirects() {
    return [
      // www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dexidigital.com.br',
          },
        ],
        destination: 'https://dexidigital.com.br/:path*',
        permanent: true,
      },
      // Legacy WordPress URLs - Consultoria de IA
      {
        source: '/consultoria-ia-inteligencia-de-dados',
        destination: '/servicos/inteligencia-de-dados',
        permanent: true,
      },
      {
        source: '/consultoria-ia',
        destination: '/servicos/ia-para-empresas',
        permanent: true,
      },
      {
        source: '/consultoria-de-ia',
        destination: '/servicos/ia-para-empresas',
        permanent: true,
      },
      // Legacy service URLs
      {
        source: '/servicos/consultoria-ia',
        destination: '/servicos/ia-para-empresas',
        permanent: true,
      },
      {
        source: '/servicos/dados',
        destination: '/servicos/inteligencia-de-dados',
        permanent: true,
      },
      {
        source: '/servicos/desenvolvimento',
        destination: '/servicos/software-sob-medida',
        permanent: true,
      },
      // Legacy sector URLs
      {
        source: '/setores',
        destination: '/setores/automotivo-premium',
        permanent: false, // temporary until more sectors added
      },
      {
        source: '/automotivo',
        destination: '/setores/automotivo-premium',
        permanent: true,
      },
      {
        source: '/concessionarias',
        destination: '/setores/automotivo-premium',
        permanent: true,
      },
      // Legacy misc URLs
      {
        source: '/quem-somos',
        destination: '/sobre',
        permanent: true,
      },
      {
        source: '/empresa',
        destination: '/sobre',
        permanent: true,
      },
      {
        source: '/fale-conosco',
        destination: '/contato',
        permanent: true,
      },
      {
        source: '/processo',
        destination: '/metodologia',
        permanent: true,
      },
      {
        source: '/synapse',
        destination: '/metodologia',
        permanent: true,
      },
      {
        source: '/synapse-os',
        destination: '/metodologia',
        permanent: true,
      },
      // Legacy materials/resources
      {
        source: '/recursos',
        destination: '/materiais/guia-ia-empresarial',
        permanent: false,
      },
      {
        source: '/calculadora',
        destination: '/materiais/calculadora-roi',
        permanent: true,
      },
      {
        source: '/roi',
        destination: '/materiais/calculadora-roi',
        permanent: true,
      },
    ];
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        // Cache static assets aggressively
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts
        source: '/:path*.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Security headers for all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        // API-specific security headers
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

