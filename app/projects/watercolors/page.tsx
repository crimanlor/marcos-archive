'use client';

import Link from 'next/link';
import Image from 'next/image';
import { watercolors } from '../../lib/watercolors';
import { useGalleryModal } from '../../hooks/useGalleryModal';
import { getImagePath, IMAGE_SIZES, IMAGE_CLASSES } from '../../lib/imageConfig';
import PhotoModal from '../../components/PhotoModal';
import { projectsContent } from '../../config/projectsContent';

export default function WatercolorsPage() {
  const { 
    selectedIndex, 
    selectedItem: selectedWatercolor,
    isOpen,
    openModal,
    closeModal,
    handleNext, 
    handlePrevious,
    hasNext,
    hasPrevious 
  } = useGalleryModal(watercolors);
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
            {projectsContent.categories.find(cat => cat.id === 'watercolors')?.title}
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {watercolors.map((watercolor, index) => (
              <button
                key={watercolor.id}
                onClick={() => openModal(index)}
                className={`relative bg-gray-50 aspect-square rounded-lg overflow-hidden group cursor-pointer ${IMAGE_CLASSES.shadow}`}
              >
                <Image
                  src={getImagePath(watercolor.filename)}
                  alt={watercolor.title}
                  fill
                  className={`${IMAGE_CLASSES.contain} p-4 ${IMAGE_CLASSES.hoverZoom}`}
                  sizes={IMAGE_SIZES.watercolorGrid}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Watercolor Modal */}
      <PhotoModal
        isOpen={isOpen}
        onClose={closeModal}
        imageSrc={selectedWatercolor ? getImagePath(selectedWatercolor.filename) : ''}
        imageAlt={selectedWatercolor?.title || ''}
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
              href="/projects/photography"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-gray-50 text-right"
            >
              <p className="text-sm text-gray-600 mb-2">Siguiente categoría</p>
              <h3 className="text-lg font-semibold text-gray-950">Archivo Fotográfico</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
