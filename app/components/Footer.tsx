import Link from 'next/link';
import { siteConfig } from '../config/site';
import { navigationContent } from '../config/navigationContent';

/**
 * Pie de página global del sitio.
 * Incluye columnas de marca, navegación y contacto.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-16 md:py-20">
      <div className="container-portfolio">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Columna 1: Marca */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{siteConfig.architect.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.architect.subtitle}
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-sm">
              {navigationContent.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                  {siteConfig.socialLinks.instagram && (
                    <a
                      href={siteConfig.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      aria-label={`Instagram de ${siteConfig.architect.name}`}
                    >
                      Instagram
                    </a>
                  )}
                  {siteConfig.socialLinks.linkedin && (
                    <a
                      href={siteConfig.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      aria-label={`LinkedIn de ${siteConfig.architect.name}`}
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteConfig.architect.name}. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Desarrollado por{' '}
              <a
                href="https://github.com/crimanlor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Lorena Criado.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
