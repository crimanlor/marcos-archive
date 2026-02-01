'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { photos } from '../../../lib/photos';

export default function PhotoDetailPage() {
  const params = useParams();
  const photoId = parseInt(params.id as string);
  const photo = photos.find(p => p.id === photoId);

  if (!photo) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-950 mb-4">Imagen no encontrada</h1>
          <Link href="/projects/photography" className="text-gray-600 hover:text-gray-950 underline">
            Volver al archivo fotográfico
          </Link>
        </div>
      </div>
    );
  }

  // Encontrar foto anterior y siguiente (navegación circular)
  const currentIndex = photos.findIndex(p => p.id === photoId);
  const previousPhoto = currentIndex > 0 
    ? photos[currentIndex - 1] 
    : photos[photos.length - 1]; // Si es la primera, ir a la última
  const nextPhoto = currentIndex < photos.length - 1 
    ? photos[currentIndex + 1] 
    : photos[0]; // Si es la última, ir a la primera

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white">
      {/* Header with back button */}
      <section className="py-8 border-b border-gray-200">
        <div className="container-portfolio">
          <div className="flex items-center justify-between">
            <Link 
              href="/projects/photography" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al archivo
            </Link>
            <p className="text-sm text-gray-500">
              {currentIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="container-portfolio max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-[4/3] shadow-sm border border-gray-100">
              <Image
                src={`/images/${photo.filename}`}
                alt={photo.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-gray-400 mb-3 tracking-wider">
                {String(photo.id).padStart(2, '0')}
              </p>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 text-balance">
                {photo.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {photo.description}
              </p>

              {/* Metadata */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{photo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{photo.year}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {photo.category}
                  </span>
                </div>
              </div>

              {/* Additional content section - customizable */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-950 mb-3">Sobre este proyecto</h3>
                <p className="text-gray-600 leading-relaxed">
                  {photo.additionalInfo || 'Aquí puedes añadir más información sobre el proyecto, detalles técnicos, proceso creativo, o cualquier otro contenido relevante que quieras compartir.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between photos */}
      <section className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="container-portfolio max-w-6xl">
          <div className="grid grid-cols-2 gap-6">
            {/* Previous */}
            <Link
              href={`/projects/photography/${previousPhoto.id}`}
              className="group p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white"
            >
              <p className="text-sm text-gray-600 mb-2">Anterior</p>
              <h3 className="text-lg font-semibold text-gray-950 group-hover:text-gray-700">
                {previousPhoto.title}
              </h3>
            </Link>

            {/* Next */}
            <Link
              href={`/projects/photography/${nextPhoto.id}`}
              className="group p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white text-right"
            >
              <p className="text-sm text-gray-600 mb-2">Siguiente</p>
              <h3 className="text-lg font-semibold text-gray-950 group-hover:text-gray-700">
                {nextPhoto.title}
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
