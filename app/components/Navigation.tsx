'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '../config/site';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container-portfolio flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
          {siteConfig.architect.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Inicio
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Sobre mí
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Proyectos
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-gray-950 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container-portfolio py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Inicio
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Sobre mí
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Proyectos
            </Link>
            <Link href="/contact" className="px-6 py-2 bg-gray-950 text-white rounded-lg text-sm font-medium text-center hover:bg-gray-800 transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
