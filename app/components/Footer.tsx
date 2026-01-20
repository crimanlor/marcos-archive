import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-16 md:py-20">
      <div className="container-portfolio">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Estudio Arquitectura</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Diseño minimalista, paisajismo contemporáneo y espacios que dialogan con la naturaleza.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@example.com
                </a>
              </li>
              <li>
                <a href="tel:+34000000000" className="text-gray-400 hover:text-white transition-colors">
                  +34 000 000 000
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Linkedin
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Estudio Arquitectura. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
