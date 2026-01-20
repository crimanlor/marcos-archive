import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proyectos | Arquitecto',
  description: 'Galería de proyectos: paisajismo, acuarelas y fotografía arquitectónica',
};

const projectCategories = [
  {
    id: 'landscape',
    title: 'Proyectos Paisajísticos',
    description: 'Diseño contemporáneo de espacios naturales y jardines minimalistas',
    slug: 'landscape',
    count: 8,
    image: 'landscape.jpg',
  },
  {
    id: 'watercolors',
    title: 'Acuarelas Arquitectónicas',
    description: 'Interpretación artística y conceptual de proyectos',
    slug: 'watercolors',
    count: 12,
    image: 'watercolors.jpg',
  },
  {
    id: 'photography',
    title: 'Archivo Fotográfico',
    description: 'Documentación visual de espacios y proyectos completados',
    slug: 'photography',
    count: 45,
    image: 'photography.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-portfolio max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 mb-6 text-balance">
            Proyectos
          </h1>
          <p className="text-xl text-gray-600 text-balance">
            Una selección de trabajos que reflejan nuestra práctica arquitectónica centrada en la naturaleza y el minimalismo.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((category) => (
              <Link
                key={category.id}
                href={`/projects/${category.slug}`}
                className="group flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image container */}
                <div className="relative w-full bg-gray-100 aspect-square overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs">{category.image}</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-950 mb-2 group-hover:text-gray-700 transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-1">{category.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">{category.count} elementos</span>
                    <svg className="w-5 h-5 text-gray-950 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-gray-950 text-white border-t border-gray-800">
        <div className="container-portfolio text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">¿Interesado en colaborar?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Estoy disponible para nuevos proyectos. Contáctame para discutir tu idea.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-gray-950 font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Enviar propuesta
          </Link>
        </div>
      </section>
    </div>
  );
}
