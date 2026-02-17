'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { landscapeProjects } from '../../../lib/landscape';

export default function LandscapeProjectDetailPage() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const project = landscapeProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-950 mb-4">Proyecto no encontrado</h1>
          <Link href="/projects/landscape" className="text-gray-600 hover:text-gray-950 underline">
            Volver a proyectos paisajísticos
          </Link>
        </div>
      </div>
    );
  }

  // Encontrar proyecto anterior y siguiente (navegación NO circular)
  const currentIndex = landscapeProjects.findIndex(p => p.id === projectId);
  const previousProject = currentIndex > 0 ? landscapeProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < landscapeProjects.length - 1 ? landscapeProjects[currentIndex + 1] : null;

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white">
      {/* Header with back button */}
      <section className="py-8 border-b border-gray-200">
        <div className="container-portfolio">
          <div className="flex items-center justify-between">
            <Link 
              href="/projects/landscape" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a proyectos paisajísticos
            </Link>
            <p className="text-sm text-gray-500">
              Proyecto {currentIndex + 1} / {landscapeProjects.length}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 md:py-24">
        <div className="container-portfolio max-w-6xl">
          <div className="relative w-full aspect-[16/9] bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 mb-12">
            <Image
              src={`/images/${project.filename}`}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={95}
              priority
            />
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 text-balance">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Additional Info Section */}
              {project.additionalInfo && (
                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-950 mb-4">Sobre este proyecto</h2>
                  <div className="space-y-4">
                    {Array.isArray(project.additionalInfo) ? (
                      project.additionalInfo.map((paragraph, idx) => (
                        <p key={idx} className="text-lg text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {project.additionalInfo}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-gray-950 mb-6">Características principales</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-950 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar - Project Details */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-950 mb-4">Detalles del proyecto</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ubicación</p>
                    <p className="text-gray-950 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Año</p>
                    <p className="text-gray-950 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {project.year}
                    </p>
                  </div>

                  {project.area && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Superficie</p>
                      <p className="text-gray-950 font-medium flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        {project.area}
                      </p>
                    </div>
                  )}
                  {project.distance && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Distancia</p>
                      <p className="text-gray-950 font-medium flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        {project.distance}
                      </p>
                    </div>
                  )}

                  {project.category && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Categoría</p>
                      <span className="inline-block px-3 py-1 bg-white text-gray-950 rounded-full text-sm font-medium border border-gray-200">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plants and Textures Section */}
      {project.plantsAndTextures && project.plantsAndTextures.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <div className="container-portfolio max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-950 mb-12">Plantas y texturas</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-4">
              {project.plantsAndTextures.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <Image
                      src={`/images/${item.filename}`}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 25vw, (max-width: 768px) 16vw, (max-width: 1024px) 12vw, 9vw"
                    />
                  </div>
                  <p className="text-xs text-gray-700 font-medium leading-tight">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Project Images Gallery */}
      {(project.detailImages || project.featureImage || project.planImage) && (
        <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
          <div className="container-portfolio max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-950 mb-12">Galería del proyecto</h2>
            
            {/* Three images in a row */}
            {project.detailImages && project.detailImages.length > 0 && (
              <div className={`grid grid-cols-1 gap-8 mb-12 ${project.detailImages.length === 2 ? 'md:grid-cols-2' : project.detailImages.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                {project.detailImages.map((img, idx) => (
                  <div key={idx} className="group">
                    <div className={`relative w-full bg-gray-100 rounded-lg overflow-hidden mb-4 ${project.detailImages && project.detailImages.length === 2 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                      <Image
                        src={`/images/${img.filename}`}
                        alt={img.caption || `Detalle ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    {img.caption && (
                      <p className="text-sm text-gray-600 text-center">{img.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Large centered feature image */}
            {project.featureImage && (
              <div className="group mb-12">
                <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`/images/${project.featureImage.filename}`}
                    alt={project.featureImage.caption || 'Imagen destacada'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
                {project.featureImage.caption && (
                  <p className="text-sm text-gray-600 text-center">{project.featureImage.caption}</p>
                )}
              </div>
            )}

            {/* Large plan image */}
            {project.planImage && (
              <div className="mb-12">
                <div className="relative w-full aspect-[16/9] bg-white rounded-lg overflow-hidden mb-4 border border-gray-200">
                  <Image
                    src={`/images/${project.planImage.filename}`}
                    alt={project.planImage.caption || 'Plano del proyecto'}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
                {project.planImage.caption && (
                  <p className="text-sm text-gray-600 text-center">
                    {project.planImage.caption}
                  </p>
                )}
              </div>
            )}

            {/* Author note section */}
            {project.authorNote && (
              <div className="border-t border-gray-200 pt-12">
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.authorNote}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Navigation between projects */}
      <section className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="container-portfolio max-w-6xl">
          <div className={`grid gap-6 ${previousProject && nextProject ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {/* Previous */}
            {previousProject && (
              <Link
                href={`/projects/landscape/${previousProject.id}`}
                className={`group p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white ${!nextProject ? 'max-w-md' : ''}`}
              >
                <p className="text-sm text-gray-600 mb-2">Anterior</p>
                <h3 className="text-lg font-semibold text-gray-950 group-hover:text-gray-700">
                  {previousProject.title}
                </h3>
              </Link>
            )}

            {/* Next */}
            {nextProject && (
              <Link
                href={`/projects/landscape/${nextProject.id}`}
                className={`group p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white text-right ${!previousProject ? 'ml-auto max-w-md' : ''}`}
              >
                <p className="text-sm text-gray-600 mb-2">Siguiente</p>
                <h3 className="text-lg font-semibold text-gray-950 group-hover:text-gray-700">
                  {nextProject.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
