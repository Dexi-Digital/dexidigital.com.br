import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Inteligência de Dados', href: '/servicos/inteligencia-de-dados' },
      { name: 'Software Sob Medida', href: '/servicos/software-sob-medida' },
      { name: 'IA para Empresas', href: '/servicos/ia-para-empresas' },
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/brand/logo.svg"
                alt="Dexi Digital"
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Inteligência de dados e software sob medida com IA acelerada e supervisão técnica humana.
            </p>
            <p className="text-gray-400 text-sm">
              Para empresas que não podem falhar.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@dexidigital.com.br"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  contato@dexidigital.com.br
                </a>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Agendar diagnóstico gratuito →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Dexi Digital. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
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

