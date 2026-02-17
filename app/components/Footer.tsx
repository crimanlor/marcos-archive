import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-16 md:py-20">
      <div className="container-portfolio">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Marcos Villén Rubio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Urbanismo · Biofilia · Regeneración Ecológica
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
  <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
    Contacto
  </h4>

  <ul className="space-y-2 text-sm">

    {/* Email */}
    <li>
      <a
        href="mailto:marcos-landscape@proton.me"
        className="text-gray-400 hover:text-white transition-colors"
      >
        marcos-landscape@proton.me
      </a>
    </li>

    {/* Teléfono */}
    <li>
      <a
        href="tel:+34695531983"
        className="text-gray-400 hover:text-white transition-colors"
      >
        +34 695 531 983
      </a>
    </li>

    {/* Redes sociales */}
    <li className="pt-2">
      <div className="flex gap-4">

        <a
          href="https://instagram.com/marcosvillen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-sm"
          aria-label="Instagram de Marcos Villén"
        >
          Instagram
        </a>

        <a
          href="https://www.linkedin.com/in/marcosvillen/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-sm"
          aria-label="LinkedIn de Marcos Villén"
        >
          LinkedIn
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
            © {currentYear} Marcos Villén Rubio. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm">
            Desarrollado por{" "}
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
