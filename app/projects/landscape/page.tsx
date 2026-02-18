import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { landscapeProjects } from '../../lib/landscape';
import { projectsContent } from '../../config/projectsContent';

export const metadata: Metadata = {
  title: 'Proyectos Paisajísticos | Marcos Villén Rubio',
  description: 'Galería de proyectos de paisajismo y diseño de espacios naturales contemporáneos',
};

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
            {projectsContent.categories.find(cat => cat.id === 'landscape')?.title}
          </h1>
        </div>
      </section>

      {/* Projects list */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="space-y-20">
            {landscapeProjects.map((project, index) => (
              <article key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image */}
                <div className={`relative w-full bg-gray-100 aspect-square rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image
                    src={`/images/${project.filename}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-4">{project.title}</h2>
                  
                 <div className="flex flex-col gap-2 mb-6 text-gray-600">
                  <p><span className="font-semibold text-gray-950">Ubicación:</span> {project.location}</p>
                  <p><span className="font-semibold text-gray-950">Año:</span> {project.year}</p>
                  {project.area && (
                    <p><span className="font-semibold text-gray-950">Superficie:</span> {project.area}</p>
                  )}
                  {project.category && (
                    <p><span className="font-semibold text-gray-950">Categoría:</span> {project.category}</p>
                  )}

                  {/* Tag */}
                  {/* <div className="pt-2">
                    <span className="inline-block text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {project.medium || 'Paisajismo'}
                    </span>
                  </div> */}
                </div>


                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{project.description}</p>

                  {project.features && project.features.length > 0 && (
                    <div className="flex flex-col gap-3">
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-sm font-semibold text-gray-950 mb-3">Características principales</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-gray-950 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className="mt-8">
                    <Link
                      href={`/projects/landscape/${project.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Ver proyecto completo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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
              href="/projects"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white"
            >
              <p className="text-sm text-gray-600 mb-2">Volver a</p>
              <h3 className="text-lg font-semibold text-gray-950">Todos los proyectos</h3>
            </Link>
            <Link
              href="/projects/watercolors"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white text-right"
            >
              <p className="text-sm text-gray-600 mb-2">Siguiente categoría</p>
              <h3 className="text-lg font-semibold text-gray-950">Sketching</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
