import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLink {
  href: string;
  label: string;
  sublabel: string;
}

interface ProjectCategoryLayoutProps {
  /** Título de la categoría mostrado en el h1 */
  title: string;
  /** Contenido principal de la página (galería, lista, etc.) */
  children: ReactNode;
  /** Enlace de navegación izquierdo (normalmente "Todos los proyectos") */
  navLeft: NavLink;
  /** Enlace de navegación derecho (siguiente categoría). Omitir si no hay siguiente. */
  navRight?: NavLink;
  /** Variante de fondo de la sección de navegación inferior */
  navSectionBg?: 'white' | 'gray';
}

/**
 * Layout compartido para todas las páginas de categoría de proyectos.
 * Incluye el back-link, el h1 y la barra de navegación inferior entre categorías.
 */
export default function ProjectCategoryLayout({
  title,
  children,
  navLeft,
  navRight,
  navSectionBg = 'gray',
}: ProjectCategoryLayoutProps) {
  const navBgClass = navSectionBg === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-portfolio max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a proyectos
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 mb-6 text-balance">
            {title}
          </h1>
        </div>
      </section>

      {/* Contenido de la categoría */}
      {children}

      {/* Navegación entre categorías */}
      <section className={`py-16 md:py-24 border-t border-gray-200 ${navBgClass}`}>
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={navLeft.href}
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white"
            >
              <p className="text-sm text-gray-600 mb-2">{navLeft.sublabel}</p>
              <h3 className="text-lg font-semibold text-gray-950">{navLeft.label}</h3>
            </Link>

            {navRight && (
              <Link
                href={navRight.href}
                className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white text-right"
              >
                <p className="text-sm text-gray-600 mb-2">{navRight.sublabel}</p>
                <h3 className="text-lg font-semibold text-gray-950">{navRight.label}</h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
