'use client';

import Link from 'next/link';
import Image from 'next/image';
import { watercolors } from '../../lib/watercolors';
import { useGalleryModal } from '../../hooks/useGalleryModal';
import { getImagePath, IMAGE_SIZES, IMAGE_CLASSES } from '../../lib/imageConfig';
import PhotoModal from '../../components/PhotoModal';
import { projectsContent } from '../../config/projectsContent';
import { projectNavigationContent } from '../../config/projectNavigationContent';
import ProjectCategoryLayout from '../../components/ProjectCategoryLayout';

export default function WatercolorsPage() {
  const category = projectsContent.categories.find(cat => cat.id === 'watercolors')!;
  const nextCategory = projectsContent.categories.find(cat => cat.id === 'photography')!;

  const {
    selectedItem: selectedWatercolor,
    isOpen,
    openModal,
    closeModal,
    handleNext,
    handlePrevious,
    hasNext,
    hasPrevious,
  } = useGalleryModal(watercolors);

  return (
    <ProjectCategoryLayout
      title={category.title}
      navLeft={{ href: '/projects', label: projectNavigationContent.categoryNav.allProjects, sublabel: projectNavigationContent.categoryNav.backTo }}
      navRight={{ href: `/projects/${nextCategory.slug}`, label: nextCategory.title, sublabel: projectNavigationContent.categoryNav.nextCategory }}
      navSectionBg="white"
    >
      {/* Galería de sketches */}
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

      {/* Modal de visualización */}
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
    </ProjectCategoryLayout>
  );
}
