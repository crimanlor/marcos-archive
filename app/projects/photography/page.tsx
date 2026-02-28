'use client';

import Image from 'next/image';
import { photos } from '../../lib/photos';
import { useGalleryModal } from '../../hooks/useGalleryModal';
import { getImagePath, IMAGE_SIZES, IMAGE_CLASSES } from '../../lib/imageConfig';
import PhotoModal from '../../components/PhotoModal';
import { projectsContent } from '../../config/projectsContent';
import ProjectCategoryLayout from '../../components/ProjectCategoryLayout';

export default function PhotographyPage() {
  const category = projectsContent.categories.find(cat => cat.id === 'photography')!;
  const nextCategory = projectsContent.categories.find(cat => cat.id === 'references')!;

  const {
    selectedItem: selectedPhoto,
    isOpen,
    openModal,
    closeModal,
    handleNext,
    handlePrevious,
    hasNext,
    hasPrevious,
  } = useGalleryModal(photos);

  return (
    <ProjectCategoryLayout
      title={category.title}
      navLeft={{ href: '/projects', label: 'Todos los proyectos', sublabel: 'Volver a' }}
      navRight={{ href: `/projects/${nextCategory.slug}`, label: nextCategory.title, sublabel: 'Siguiente categoría' }}
      navSectionBg="white"
    >
      {/* Grid de fotografías */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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

      {/* Modal de visualización */}
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
    </ProjectCategoryLayout>
  );
}
