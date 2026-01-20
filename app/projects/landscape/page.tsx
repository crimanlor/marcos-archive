import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proyectos Paisajísticos | Arquitecto',
  description: 'Galería de proyectos de paisajismo y diseño de espacios naturales contemporáneos',
};

const landscapeProjects = [
  {
    id: 1,
    title: 'Jardín Minimalista',
    location: 'Barcelona, España',
    year: 2023,
    description: 'Un jardín contemporáneo que integra elementos naturales con diseño geométrico. Piedra, agua y vegetación nativa crean un espacio de contemplación.',
  },
  {
    id: 2,
    title: 'Paisaje Urbano',
    location: 'Madrid, España',
    year: 2022,
    description: 'Reconfiguración de un espacio público tradicional en un área metropolitana con enfoque naturalista.',
  },
  {
    id: 3,
    title: 'Terraza con Vistas',
    location: 'Costa Brava, España',
    year: 2023,
    description: 'Integración de terrazas con el paisaje natural circundante, maximizando conexión visual con el entorno.',
  },
];

export default function LandscapeProjectsPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-portfolio max-w-4xl">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a proyectos
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 mb-6 text-balance">
            Proyectos Paisajísticos
          </h1>
          <p className="text-xl text-gray-600 text-balance">
            Selección de trabajos dedicados al diseño del paisaje y espacios naturales con enfoque minimalista y contemporáneo.
          </p>
        </div>
      </section>

      {/* Projects list */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="space-y-20">
            {landscapeProjects.map((project, index) => (
              <article key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image */}
                <div className={`w-full bg-gray-100 aspect-square rounded-lg flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="text-center text-gray-500 w-full h-full flex items-center justify-center">
                    <div>
                      <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Proyecto {project.id}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-4">{project.title}</h2>
                  
                  <div className="flex flex-col gap-2 mb-6 text-gray-600">
                    <p><span className="font-semibold text-gray-950">Ubicación:</span> {project.location}</p>
                    <p><span className="font-semibold text-gray-950">Año:</span> {project.year}</p>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-col gap-3">
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-sm font-semibold text-gray-950 mb-3">Características principales</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-950 mt-1">•</span>
                          <span>Diseño minimalista integrado con naturaleza</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-950 mt-1">•</span>
                          <span>Uso de materiales naturales y locales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-950 mt-1">•</span>
                          <span>Sostenibilidad y respeto ambiental</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-950 mt-1">•</span>
                          <span>Espacios de contemplación y conexión</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/projects/landscape"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white"
            >
              <p className="text-sm text-gray-600 mb-2">Siguiente categoría</p>
              <h3 className="text-lg font-semibold text-gray-950">Acuarelas Arquitectónicas</h3>
            </Link>
            <Link
              href="/projects"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white text-right"
            >
              <p className="text-sm text-gray-600 mb-2">Volver a</p>
              <h3 className="text-lg font-semibold text-gray-950">Todos los proyectos</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
