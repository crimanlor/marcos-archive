'use client';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Proyectos Paisajísticos',
    description: 'Diseño del paisaje y espacios naturales contemporáneos',
    href: '/projects/landscape',
    image: '/images/image-landscape-01.jpg',
  },
  {
    id: 2,
    title: 'Acuarelas Arquitectónicas',
    description: 'Interpretación artística de espacios y conceptos',
    href: '/projects/watercolors',
    image: '/images/watercolor-008.jpg',
  },
  {
    id: 3,
    title: 'Archivo Fotográfico',
    description: 'Documentación visual de proyectos y espacios',
    href: '/projects/photography',
    image: '/images/photo-003.jpg',
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
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-950 text-gray-950 font-medium hover:bg-gray-950 hover:text-white transition-all duration-300 rounded-lg"
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
