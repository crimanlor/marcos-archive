import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { photos } from '../../../lib/photos';
import { projectNavigationContent } from '../../../config/projectNavigationContent';

interface PageProps {
  params: Promise<{ id: string }>;
}

/**
 * Genera rutas estáticas para todas las fotos del archivo en build time.
 * Esto convierte la página en un Server Component con generación estática (SSG).
 */
export async function generateStaticParams() {
  return photos.map((photo) => ({ id: String(photo.id) }));
}

export default async function PhotoDetailPage({ params }: PageProps) {
  const { id } = await params;
  const photoId = parseInt(id);
  const photo = photos.find(p => p.id === photoId);

  if (!photo) notFound();

  // Navegación circular: la primera foto apunta a la última y viceversa
  const currentIndex = photos.findIndex(p => p.id === photoId);
  const previousPhoto = currentIndex > 0 ? photos[currentIndex - 1] : photos[photos.length - 1];
  const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : photos[0];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white">
      {/* Cabecera con botón de vuelta */}
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
              {projectNavigationContent.backButton.text}
            </Link>
            <p className="text-sm text-gray-500">
              {currentIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16 md:py-24">
        <div className="container-portfolio max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Imagen */}
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

            {/* Información */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-gray-400 mb-3 tracking-wider">
                {String(photo.id).padStart(2, '0')}
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 text-balance">
                {photo.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">{photo.description}</p>

              {/* Metadatos */}
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

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-950 mb-3">
                  {projectNavigationContent.sections.aboutProject}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {photo.additionalInfo || 'Aquí puedes añadir más información sobre el proyecto, detalles técnicos, proceso creativo, o cualquier otro contenido relevante que quieras compartir.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación circular entre fotos */}
      <section className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="container-portfolio max-w-6xl">
          <div className="grid grid-cols-2 gap-6">
            <Link
              href={`/projects/photography/${previousPhoto.id}`}
              className="group p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white"
            >
              <p className="text-sm text-gray-600 mb-2">{projectNavigationContent.navigation.previous}</p>
              <h3 className="text-lg font-semibold text-gray-950 group-hover:text-gray-700">
                {previousPhoto.title}
              </h3>
            </Link>

            <Link
              href={`/projects/photography/${nextPhoto.id}`}
              className="group p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white text-right"
            >
              <p className="text-sm text-gray-600 mb-2">{projectNavigationContent.navigation.next}</p>
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
