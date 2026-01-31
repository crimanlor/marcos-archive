'use client';

import Link from 'next/link';
import Image from 'next/image';

const projectCategories = [
  {
    id: 'landscape',
    title: 'Proyectos Paisajísticos',
    description: 'Diseño contemporáneo de espacios naturales y jardines minimalistas',
    slug: 'landscape',
    count: 8,
    image: '/images/image-projects-1.jpg',
  },
  {
    id: 'watercolors',
    title: 'Acuarelas Arquitectónicas',
    description: 'Interpretación artística y conceptual de proyectos',
    slug: 'watercolors',
    count: 8,
    image: '/images/image-projects-2.jpg',
  },
  {
    id: 'photography',
    title: 'Archivo Fotográfico',
    description: 'Documentación visual de espacios y proyectos completados',
    slug: 'photography',
    count: 36,
    image: '/images/image-projects-3.jpg',
  },
  {
    id: 'references',
    title: 'Referencias',
    description: 'Documentación visual de espacios y proyectos completados',
    slug: 'references',
    count: 1,
    image: '/images/image-projects-4.jpg',
  }
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-portfolio">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 text-balance">
            Proyectos
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl text-balance">
            Una selección de proyectos que reflejan nuestra filosofía de diseño: elegancia, funcionalidad y respeto por la naturaleza.
          </p> */}
        </div>

         {/* Projects grid */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/projects/${category.slug}`}
                className="group flex flex-col overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-lg bg-stone-100"
              >
                {/* Number header */}
                <div className="p-6 pb-4">
                  <h3 className="text-5xl font-bold text-gray-950 mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </h3>
                  <div className="w-full h-px bg-gray-300"></div>
                </div>

                {/* Image container */}
                <div className="relative w-full bg-gray-100 aspect-square overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className={`object-cover ${index === 2 ? 'object-top' : ''}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-950 mb-2 group-hover:text-gray-700 transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-1">{category.description}</p>
                  {/* <div className="flex items-center justify-end pt-4 border-t border-gray-200">
                    <svg className="w-5 h-5 text-gray-950 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

        {/* View all button */}
        {/* <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-950 text-gray-950 font-medium hover:bg-gray-950 hover:text-white transition-all duration-300 rounded-lg"
          >
            Ver todos los proyectos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
