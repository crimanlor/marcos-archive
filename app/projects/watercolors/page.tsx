import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Acuarelas Arquitectónicas | Arquitecto',
  description: 'Galería de acuarelas: interpretación artística de proyectos y conceptos arquitectónicos',
};

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
        <div className="container-portfolio">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div
                key={item}
                className="group bg-gray-100 aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex items-center justify-center cursor-pointer hover:bg-gray-200"
              >
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-50 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">Acuarela {item}</p>
                </div>
              </div>
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
