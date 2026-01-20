'use client';

import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Proyectos Paisajísticos',
    description: 'Diseño del paisaje y espacios naturales contemporáneos',
    href: '/projects/landscape',
    image: '/placeholder-projects/landscape.jpg',
  },
  {
    id: 2,
    title: 'Acuarelas Arquitectónicas',
    description: 'Interpretación artística de espacios y conceptos',
    href: '/projects/watercolors',
    image: '/placeholder-projects/watercolors.jpg',
  },
  {
    id: 3,
    title: 'Archivo Fotográfico',
    description: 'Documentación visual de proyectos y espacios',
    href: '/projects/photography',
    image: '/placeholder-projects/photography.jpg',
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-portfolio">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 text-balance">
            Nuestro trabajo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-balance">
            Una selección de proyectos que reflejan nuestra filosofía de diseño: elegancia, funcionalidad y respeto por la naturaleza.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative overflow-hidden bg-gray-100 rounded-lg aspect-square md:aspect-auto md:h-96 hover:shadow-lg transition-all duration-300"
            >
              {/* Placeholder for image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">{project.image}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-950 text-gray-950 font-medium hover:bg-gray-950 hover:text-white transition-all duration-300"
          >
            Ver todos los proyectos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
