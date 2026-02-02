import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Engenharia de Dados & Ativos de Inteligência', href: '/servicos/inteligencia-de-dados' },
      { name: 'Desenvolvimento de Sistemas de Missão Crítica', href: '/servicos/software-sob-medida' },
      { name: 'Arquitetura de Execução Agêntica (Synapse OS)', href: '/servicos/ia-para-empresas' },
    ],
    company: [
      { name: 'Sobre', href: '/sobre' },
      { name: 'Cases', href: '/cases' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contato', href: '/contato' },
    ],
    legal: [
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Termos de Uso', href: '/termos' },
    ],
  };

  return (
    <footer className="bg-[#050608] text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(33,150,243,0.03)] pointer-events-none" />

      <div className="container py-14 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-400)] rounded-lg transition-base">
              <Image
                src="/images/brand/logo.svg"
                alt="Dexi Digital"
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Arquitetura de Execução Agêntica e Engenharia de Missão Crítica. Orquestramos o Synapse OS para garantir soberania digital e impacto direto no EBITDA através de inteligência autônoma e supervisão técnica de elite.
            </p>
            <p className="text-sm text-white/40">
              Para operações onde a precisão é inegociável.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Serviços</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-base">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Empresa</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-base">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@dexidigital.com.br"
                  className="text-sm text-white/60 hover:text-white transition-base"
                >
                  contato@dexidigital.com.br
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_DIAGNOSTIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)] transition-base group"
                >
                  Validar Impacto no EBITDA
                  <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Positioning Microcopy */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="text-center mb-10">
            <p className="text-lg md:text-xl font-semibold text-white tracking-tight mb-2">
              Engenharia de Execução Agêntica para Operações de Missão Crítica.
            </p>
            <p className="text-sm text-white/40">
            Orquestramos o Synapse para converter dados complexos em soberania digital e EBITDA. Tecnologia brasileira com execução validada em líderes.
            </p>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5">
            <p className="text-xs text-white/40">
              © {currentYear} Dexi Digital. Engenharia de Elite para a Era Agêntica. Tecnologia validada em operações.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link key={item.name} href={item.href} className="text-xs text-white/40 hover:text-white/70 transition-base">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

