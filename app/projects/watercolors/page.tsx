'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { watercolors } from '../../lib/watercolors';
import PhotoModal from '../../components/PhotoModal';

export default function WatercolorsPage() {
  const [selectedWatercolorIndex, setSelectedWatercolorIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedWatercolorIndex !== null && selectedWatercolorIndex < watercolors.length - 1) {
      setSelectedWatercolorIndex(selectedWatercolorIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedWatercolorIndex !== null && selectedWatercolorIndex > 0) {
      setSelectedWatercolorIndex(selectedWatercolorIndex - 1);
    }
  };

  const selectedWatercolor = selectedWatercolorIndex !== null ? watercolors[selectedWatercolorIndex] : null;
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
            Sketching
          </h1>
          <p className="text-xl text-gray-600 text-balance">
            Una colección de acuarelas que exploran la interpretación artística de conceptos arquitectónicos, espacios y visiones naturalistas.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {watercolors.map((watercolor, index) => (
              <button
                key={watercolor.id}
                onClick={() => setSelectedWatercolorIndex(index)}
                className="relative bg-gray-50 aspect-square rounded-lg overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <Image
                  src={`/images/${watercolor.filename}`}
                  alt={watercolor.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Watercolor Modal */}
      <PhotoModal
        isOpen={selectedWatercolor !== null}
        onClose={() => setSelectedWatercolorIndex(null)}
        imageSrc={selectedWatercolor ? `/images/${selectedWatercolor.filename}` : ''}
        imageAlt={selectedWatercolor?.title || ''}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={selectedWatercolorIndex !== null && selectedWatercolorIndex < watercolors.length - 1}
        hasPrevious={selectedWatercolorIndex !== null && selectedWatercolorIndex > 0}
      />

{/* About section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-portfolio max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-950 mb-6">Sobre esta serie</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Las acuarelas representan un proceso de reflexión creativa sobre el diseño arquitectónico. Cada pieza es una exploración artística de conceptos, espacios y la relación entre forma, luz y naturaleza.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Utilizadas tanto para la conceptualización de proyectos como para la comunicación visual de ideas, estas acuarelas capturan la esencia emocional de espacios que buscan inspirar calma y conexión con el entorno natural.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/projects/landscape"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-gray-50"
            >
              <p className="text-sm text-gray-600 mb-2">Anterior</p>
              <h3 className="text-lg font-semibold text-gray-950">Proyectos Paisajísticos</h3>
            </Link>
            <Link
              href="/projects/photography"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-gray-50 text-right"
            >
              <p className="text-sm text-gray-600 mb-2">Siguiente</p>
              <h3 className="text-lg font-semibold text-gray-950">Archivo Fotográfico</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
