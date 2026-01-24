import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Acuarelas Arquitectónicas | Arquitecto',
  description: 'Galería de acuarelas: interpretación artística de proyectos y conceptos arquitectónicos',
};

// Array de acuarelas con información
const watercolors = [
  {
    id: 1,
    title: 'Jardín de Contemplación',
    description: 'Exploración de espacios verdes integrados con arquitectura minimalista',
    image: '/images/watercolor-001.jpg',
    orientation: 'vertical', // 1600x2000
  },
  {
    id: 2,
    title: 'Luz y Sombra',
    description: 'Estudio de contrastes lumínicos en espacios interiores',
    image: '/images/watercolor-002.jpg',
    orientation: 'horizontal', // 2000x1600
  },
  {
    id: 3,
    title: 'Paisaje Natural',
    description: 'Interpretación de la relación entre construcción y naturaleza',
    image: '/images/watercolor-003.jpg',
    orientation: 'vertical', // 1600x2000
  },
  {
    id: 4,
    title: 'Materiales Orgánicos',
    description: 'Texturas y formas naturales aplicadas al diseño',
    image: '/images/watercolor-004.jpg',
    orientation: 'vertical', // 1600x2000
  },
  {
    id: 5,
    title: 'Espacio Fluido',
    description: 'Conceptualización de espacios abiertos y continuos',
    image: '/images/watercolor-005.jpg',
    orientation: 'horizontal', // 2000x1599
  },
  {
    id: 6,
    title: 'Geometría Natural',
    description: 'Patrones geométricos inspirados en formas orgánicas',
    image: '/images/watercolor-006.jpg',
    orientation: 'horizontal', // 2000x1599
  },
  {
    id: 7,
    title: 'Refugio Minimalista',
    description: 'Concepto de espacio reducido a su esencia',
    image: '/images/watercolor-007.jpg',
    orientation: 'horizontal', // 2000x1600
  },
  {
    id: 8,
    title: 'Transición Interior-Exterior',
    description: 'Difuminación de límites entre espacios construidos y naturales',
    image: '/images/watercolor-008.jpg',
    orientation: 'horizontal', // 2000x1600
  },
  {
    id: 9,
    title: 'Composición Abstracta',
    description: 'Interpretación libre de formas y colores arquitectónicos',
    image: '/images/watercolor-009.jpg',
    orientation: 'vertical', // 1600x2000
  },
];

export default function WatercolorsPage() {
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
            Acuarelas Arquitectónicas
          </h1>
          <p className="text-xl text-gray-600 text-balance">
            Una colección de acuarelas que exploran la interpretación artística de conceptos arquitectónicos, espacios y visiones naturalistas.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-5xl">
          <div className="space-y-24">
            {watercolors.map((watercolor, index) => (
              <article 
                key={watercolor.id} 
                className="flex flex-col items-center"
              >
                {/* Image - Centrada y prominente */}
                <div className={`relative w-full mb-8 shadow-sm border border-gray-100 bg-white rounded-lg overflow-hidden group ${
                  watercolor.orientation === 'vertical' 
                    ? 'max-w-xl aspect-[4/5]' 
                    : 'max-w-2xl aspect-[5/4]'
                }`}>
                  <Image
                    src={watercolor.image}
                    alt={watercolor.title}
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    sizes={watercolor.orientation === 'vertical' 
                      ? '(max-width: 768px) 100vw, 576px' 
                      : '(max-width: 768px) 100vw, 672px'}
                  />
                </div>

                {/* Content - Debajo y centrado */}
                <div className="max-w-2xl text-center">
                  {/* Number */}
                  <p className="text-sm font-semibold text-gray-400 mb-3 tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  
                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-4 text-balance">
                    {watercolor.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {watercolor.description}
                  </p>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 justify-center">
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Acuarela</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">2023-2024</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
