import { Metadata } from 'next';
import Image from 'next/image';

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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Main text */}
            <div className="md:col-span-3 prose prose-lg max-w-none">
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
            <div className="md:col-span-2">
              {/* Image */}
<div className="relative aspect-square w-full mb-8 rounded-lg overflow-hidden border border-neutral-200">
  <Image
    src="/images/image-quien-soy-1.jpg"
    alt="Marcos Villén Rubio - Arquitecto"
    fill
    className="object-cover object-center"
    priority
  />
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
