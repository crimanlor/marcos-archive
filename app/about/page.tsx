import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre mí | Marcos Villén Rubio',
  description: 'Conoce la filosofía y enfoque naturalista de nuestro trabajo arquitectónico',
};

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-portfolio max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 text-balance">
            Sobre mí
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:items-center">
            {/* Main text */}
            <div className="md:col-span-3 prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-950 mb-6">Quién soy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               Esta página nace como un espacio de transición y construcción: el inicio de una nueva etapa académica, profesional y personal vinculada a la Arquitectura del Paisaje. Es un lugar desde el que ordenar intereses, aprendizajes y miradas, y desde el que comenzar a dar forma a una trayectoria en desarrollo.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mi trayectoria ha pasado por ámbitos como la administración y la logística, la educación social e infantil, el sector marítimo y el turismo; experiencias diversas que han ido configurando una mirada amplia sobre los espacios, las personas y la forma en que habitamos el entorno.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Siempre he mantenido una conexión profunda con la naturaleza, la arquitectura y el ámbito social, entendiendo el paisaje como un lugar de relación, cuidado y equilibrio entre lo humano y lo natural.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En 2026 iniciaré el Grado en Paisajismo en la Universitat Politècnica de Catalunya (UPC), dando forma académica a una vocación clara y meditada. 
                Me interesan especialmente el urbanismo, la biofilia y la restauración y rehabilitación de ecosistemas en contextos urbanos y periurbanos.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Me atraen los proyectos donde el paisaje dialoga con la arquitectura y la ciudad: espacios públicos, cubiertas verdes, patios, parques, entornos educativos o áreas en proceso de transformación, con una atención especial al bienestar colectivo y la sostenibilidad.
              </p>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2">
              {/* Image */}
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-neutral-200">
              <Image
                src="/images/image-quien-soy-1.jpg"
                alt="Marcos Villén Rubio - Arquitecto"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formación section */}
      <section className="py-16 md:py-24 bg-gray-100 border-t border-gray-200">
        <div className="container-portfolio max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-950 mb-12">Formación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-base"><span className="text-gray-950 font-semibold">2026</span> · AutoCAD 2D - Básico</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-base"><span className="text-gray-950 font-semibold">2025</span> · Introducción a la Botánica</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-base"><span className="text-gray-950 font-semibold">2025</span> · Técnicas sketch urbano</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-base"><span className="text-gray-950 font-semibold">2025</span> · Envolventes vegetales para la regeneración de entornos urbanos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-base"><span className="text-gray-950 font-semibold">2016</span> · CFGS Educación Infantil</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-base"><span className="text-gray-950 font-semibold">2014</span> · CFGM Administración de Empresas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia laboral section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-950 mb-6">Experiencia laboral en entornos de</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-950 mb-3">Gestión y funcionamiento de espacios de uso público</h3>
              <p className="text-gray-600 text-base">(Sector hotelero)</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-950 mb-3">Atención al público y entorno comercial</h3>
              <p className="text-gray-600 text-base">(Comercio y venta especializada)</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-950 mb-3">Procesos técnicos, materiales y químicos</h3>
              <p className="text-gray-600 text-base">(Industria de productos técnicos y mantenimiento)</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-950 mb-3">Logística, organización y ejecución</h3>
              <p className="text-gray-600 text-base">(Almacén, distribución y operativa)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
