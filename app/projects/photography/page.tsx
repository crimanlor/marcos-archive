'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { photos } from '../../lib/photos';
import PhotoModal from '../../components/PhotoModal';

export default function PhotographyPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex < photos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  const selectedPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

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
            Archivo Fotográfico
          </h1>
          <p className="text-xl text-gray-600 text-balance">
            Documentación visual de proyectos completados, espacios naturales y detalles arquitectónicos que capturan la esencia de nuestro trabajo.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Photos grid */}
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="relative bg-gray-100 aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <Image
                  src={`/images/${photo.filename}`}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      <PhotoModal
        isOpen={selectedPhoto !== null}
        onClose={() => setSelectedPhotoIndex(null)}
        imageSrc={selectedPhoto ? `/images/${selectedPhoto.filename}` : ''}
        imageAlt={selectedPhoto?.title || ''}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={selectedPhotoIndex !== null && selectedPhotoIndex < photos.length - 1}
        hasPrevious={selectedPhotoIndex !== null && selectedPhotoIndex > 0}
      />

      {/* About section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-portfolio max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-950 mb-6">Documentación visual</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mi mirada se detiene en las relaciones: entre lo natural y lo artificial, entre lo orgánico y lo hierático, entre lo vivo y lo construido. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Me interesa cómo la vegetación ocupa, transforma o dialoga con estructuras existentes, y cómo pequeños gestos activan el paisaje. El archivo fotográfico funciona como un registro de estas interacciones.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/projects/watercolors"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-gray-50"
            >
              <p className="text-sm text-gray-600 mb-2">Anterior</p>
              <h3 className="text-lg font-semibold text-gray-950">Acuarelas Arquitectónicas</h3>
            </Link>
            <Link
              href="/projects"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-gray-50 text-right"
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
