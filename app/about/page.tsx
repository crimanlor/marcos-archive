import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre mí | Arquitecto',
  description: 'Conoce la filosofía y enfoque naturalista de nuestro trabajo arquitectónico',
};

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-portfolio max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 mb-8 text-balance">
            Filosofía de diseño
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main text */}
            <div className="md:col-span-2 prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-950 mb-6">Quién soy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Soy un arquitecto especializado en diseño minimalista y paisajismo contemporáneo. Mi práctica se fundamenta en la creencia de que la arquitectura debe establecer un diálogo respetuoso con la naturaleza.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Cada proyecto que desarrollo es una reflexión profunda sobre la relación entre el espacio construido y el entorno natural. Creo en la simplicidad como medio para alcanzar la elegancia, y utilizo materiales naturales y formas puras como vocabulario arquitectónico.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mi metodología combina investigación rigurosa del contexto con una sensibilidad artística que busca crear espacios donde las personas puedan experimentar la tranquilidad y la conexión con la naturaleza.
              </p>

              <h2 className="text-3xl font-bold text-gray-950 mb-6 mt-12">Áreas de expertise</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                <div className="p-6 border border-gray-200 hover:border-gray-950 transition-colors rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-950 mb-2">Paisajismo</h3>
                  <p className="text-gray-600 text-sm">
                    Diseño de espacios verdes, jardines contemporáneos y reinterpretación del paisaje natural.
                  </p>
                </div>
                <div className="p-6 border border-gray-200 hover:border-gray-950 transition-colors rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-950 mb-2">Residencial</h3>
                  <p className="text-gray-600 text-sm">
                    Viviendas unifamiliares con enfoque naturalista y materiales sostenibles.
                  </p>
                </div>
                <div className="p-6 border border-gray-200 hover:border-gray-950 transition-colors rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-950 mb-2">Espacios Públicos</h3>
                  <p className="text-gray-600 text-sm">
                    Plazas, parques y espacios comunitarios que fomentan la conexión social.
                  </p>
                </div>
                <div className="p-6 border border-gray-200 hover:border-gray-950 transition-colors rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-950 mb-2">Acuarelas</h3>
                  <p className="text-gray-600 text-sm">
                    Interpretación artística y conceptual de proyectos arquitectónicos.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 aspect-square rounded-lg flex items-center justify-center mb-8 h-64 md:h-80">
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Foto del arquitecto</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-950 mb-4">Credentials</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-gray-950 font-medium">2020-Presente</span>
                    <p>Práctica independiente</p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-950 font-medium">2018-2020</span>
                    <p>Arquitecto Senior en Estudio XYZ</p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-950 font-medium">2015</span>
                    <p>Máster en Arquitectura del Paisaje</p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-950 font-medium">2013</span>
                    <p>Grado en Arquitectura</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-950 mb-12">Principios de diseño</h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Minimalismo inteligente',
                description: 'Reducción a lo esencial sin sacrificar funcionalidad. Cada elemento tiene propósito y significado.'
              },
              {
                title: 'Respeto por el contexto',
                description: 'La arquitectura debe escuchar y dialogar con el entorno, no imponerse sobre él.'
              },
              {
                title: 'Sostenibilidad inherente',
                description: 'Materiales naturales, eficiencia energética y diseño atemporal que envejezca con gracia.'
              },
              {
                title: 'Experiencia humana',
                description: 'Espacios diseñados para generar bienestar, contemplación y conexión con la naturaleza.'
              }
            ].map((principle, index) => (
              <div key={index} className="border-l-4 border-gray-950 pl-6">
                <h3 className="text-xl font-semibold text-gray-950 mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
