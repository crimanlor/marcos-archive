'use client';

import Link from 'next/link';
import Image from 'next/image';
import { photos } from '../../lib/photos';
import { useGalleryModal } from '../../hooks/useGalleryModal';
import { getImagePath, IMAGE_SIZES, IMAGE_CLASSES } from '../../lib/imageConfig';
import PhotoModal from '../../components/PhotoModal';
import { projectsContent } from '../../config/projectsContent';

export default function PhotographyPage() {
  const { 
    selectedIndex, 
    selectedItem: selectedPhoto,
    isOpen,
    openModal,
    closeModal,
    handleNext, 
    handlePrevious,
    hasNext,
    hasPrevious 
  } = useGalleryModal(photos);

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
            {projectsContent.categories.find(cat => cat.id === 'photography')?.title}
          </h1>
          <p className="text-xl text-gray-600 text-balance">
            {projectsContent.categories.find(cat => cat.id === 'photography')?.description}
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
                onClick={() => openModal(index)}
                className="relative bg-gray-100 aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <Image
                  src={getImagePath(photo.filename)}
                  alt={photo.title}
                  fill
                  className={`${IMAGE_CLASSES.cover} ${IMAGE_CLASSES.hoverZoom}`}
                  sizes={IMAGE_SIZES.photoGrid}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      <PhotoModal
        isOpen={isOpen}
        onClose={closeModal}
        imageSrc={selectedPhoto ? getImagePath(selectedPhoto.filename) : ''}
        imageAlt={selectedPhoto?.title || ''}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />

      {/* Navigation */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/projects"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-gray-50"
            >
              <p className="text-sm text-gray-600 mb-2">Volver a</p>
              <h3 className="text-lg font-semibold text-gray-950">Todos los proyectos</h3>
            </Link>
            <Link
              href="/projects/references"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-gray-50 text-right"
            >
              <p className="text-sm text-gray-600 mb-2">Siguiente categoría</p>
              <h3 className="text-lg font-semibold text-gray-950">Referencias</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
