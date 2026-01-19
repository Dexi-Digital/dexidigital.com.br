'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);

  const navigation = [
    { name: 'A Dexi', href: '/sobre' },
    {
      name: 'Soluções',
      href: '/servicos',
      submenu: [
        { name: 'Consultoria de IA', href: '/servicos/ia-para-empresas' },
        { name: 'Inteligência de Dados', href: '/servicos/inteligencia-de-dados' },
        { name: 'Software Sob Medida', href: '/servicos/software-sob-medida' },
      ]
    },
    { name: 'Setores', href: '/setores/automotivo-premium' },
    { name: 'Metodologia', href: '/metodologia' },
    { name: 'Insights', href: '/blog' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-2" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo - Compact: 24px height */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded">
              <span className="sr-only">Dexi Digital - Consultoria de IA e Dados</span>
              <div className="relative h-10 w-auto">
                <Image
                  src="/images/brand/logo.svg"
                  alt="Dexi Digital - Consultoria de IA para Empresas"
                  width={180}
                  height={48}
                  className="h-full w-auto object-contain"
                  priority
                  style={{ maxHeight: '40px' }}
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button - Compact */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-1.5 p-1.5 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              </span>
              {mobileMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation - Compact spacing */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              'submenu' in item && item.submenu ? (
                <div key={item.name} className="relative group">
                  <button
                    className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
                    onMouseEnter={() => setSolucoesOpen(true)}
                    onMouseLeave={() => setSolucoesOpen(false)}
                  >
                    {item.name}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-0 top-full pt-1 w-52 ${solucoesOpen ? 'block' : 'hidden'} group-hover:block`}
                    onMouseEnter={() => setSolucoesOpen(true)}
                    onMouseLeave={() => setSolucoesOpen(false)}
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA - Compact button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link href="/contato" className="inline-flex items-center px-4 py-1.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
              Agendar Diagnóstico
            </Link>
          </div>
        </div>

        {/* Mobile menu - Compact */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-gray-100 pt-3 animate-fade-in-down">
            <div className="space-y-0.5">
              {navigation.map((item) => (
                'submenu' in item && item.submenu ? (
                  <div key={item.name}>
                    <div className="px-2 py-2 text-sm font-semibold text-gray-900">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-0.5">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-2 py-1.5 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-2 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-3 px-2">
                <Link
                  href="/contato"
                  className="block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agendar Diagnóstico
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

