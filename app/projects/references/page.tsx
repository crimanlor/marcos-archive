import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referencias | Arquitecto',
  description: 'Proyectos, referentes y profesionales que inspiran mi práctica arquitectónica y paisajística',
};

const references = {
  'Arquitectura del paisaje y espacio público': [
    {
      name: 'Jardins de la Rambla de Sants',
      author: 'Sergi Godia + Ana Molino',
      location: 'Barcelona',
      year: '2016',
      description: 'Cubierta verde como rambla elevada y sutura urbana.',
    },
    {
      name: 'Parc de Can Batlló',
      author: 'Batlleiroig',
      location: 'Barcelona',
      year: '2012–2015',
      description: 'Espacio verde en reconversión industrial con lógica de proceso.',
    },
    {
      name: 'Renaturalización del río Besòs',
      author: 'AMB + ReViuBesòs + Aj. Sant Adrià de Besòs',
      location: 'Sant Adrià de Besòs',
      year: '2026',
      description: 'Recuperación ecológica y social de la desembocadura como paisaje metropolitano.',
    },
    {
      name: 'Parque Río Manzanares (Madrid Río)',
      author: 'Burgos & Garrido + Porras La Casta + Rubio & Á-Sala + West 8 (colab.)',
      location: 'Madrid',
      year: '2011',
      description: 'Reencuentro ciudad–río mediante parque lineal e infraestructura blanda.',
    },
    {
      name: 'The High Line',
      author: 'Field Operations + Diller Scofidio + Renfro + Piet Oudolf',
      location: 'Nueva York, EE. UU.',
      year: '',
      description: 'Infraestructura obsoleta transformada en recorrido y ecología urbana.',
    },
    {
      name: 'Little Island',
      author: 'Heatherwick Studio + MNLA',
      location: 'Nueva York, EE. UU.',
      year: '2021',
      description: 'Topografía artificial como experiencia sensorial y pública.',
    },
  ],
  'Paisaje, botánica y ecología aplicada': [
    {
      name: 'Lur Garden',
      author: 'LUR Paisajistak (Iñigo Segurola + Juan Iriarte)',
      location: 'Oiartzun (Gipuzkoa)',
      year: '',
      description: 'Jardín-laboratorio: ensayo de plantaciones y estética ecológica.',
    },
    {
      name: 'Eden Project',
      author: 'Grimshaw',
      location: 'Cornwall, Reino Unido',
      year: '2001',
      description: 'Arquitectura bioclimática como divulgación y ecosistema construido.',
    },
    {
      name: 'Parque Botánico Río Medellín',
      author: 'Plan:B + Colectivo 720 + EPM',
      location: 'Medellín, Colombia',
      year: '2019',
      description: 'Renaturalización fluvial como infraestructura verde y espacio público metropolitano.',
    },
    {
      name: 'Gardens by the Bay',
      author: 'Grant Associates + WilkinsonEyre',
      location: 'Singapur',
      year: '2012',
      description: 'Paisaje tecnológico: botánica, clima y espectáculo ambiental.',
    },
  ],
  'Arquitectura, cultura y experiencia': [
    {
      name: 'Barbican Centre',
      author: 'Chamberlin, Powell and Bon',
      location: 'Londres',
      year: '1982',
      description: 'Brutalismo habitable con recorridos elevados y jardines interiores.',
    },
    {
      name: 'Museum of Ethnography',
      author: 'NAPUR Architect (Marcel Ferencz)',
      location: 'Budapest',
      year: '2022',
      description: 'Edificio-paisaje con cubierta ajardinada integrada en el parque.',
    },
    {
      name: 'House of Music Hungary',
      author: 'Sou Fujimoto',
      location: 'Budapest',
      year: '2022',
      description: 'Arquitectura porosa entre arbolado, sonido y atmósfera.',
    },
    {
      name: 'La Grieta / The Crack',
      author: 'taktyk + ALIVE Architecture',
      location: 'Bruselas',
      year: '2021',
      description: 'Intervención mínima: fisura, suelo y recorrido como experiencia espacial.',
    },
    {
      name: 'Chichu Art Museum',
      author: 'Tadao Ando',
      location: 'Naoshima, Japón',
      year: '',
      description: 'Arquitectura enterrada donde luz y recorrido construyen paisaje.',
    },
  ],
  'Referentes': [
    {
      name: 'Piet Oudolf',
      author: 'Paisajista',
      location: '',
      year: '',
      description: 'Diseño vegetal naturalista, temporalidad y ecología aplicada al espacio público.',
    },
    {
      name: 'Nigel Dunnett',
      author: 'Paisajista',
      location: '',
      year: '',
      description: 'Investigación y diseño vegetal sostenible en ecología urbana.',
    },
    {
      name: 'James Turrell',
      author: 'Artista',
      location: '',
      year: '',
      description: 'Luz, percepción y experiencia sensorial del espacio.',
    },
    {
      name: 'Do Ho Suh',
      author: 'Artista',
      location: '',
      year: '',
      description: 'Arquitecturas textiles: memoria, hogar y tránsito.',
    },
    {
      name: 'Chiharu Shiota',
      author: 'Artista',
      location: '',
      year: '',
      description: 'Instalaciones inmersivas: espacio, ausencia y emoción.',
    },
  ],
};

export default function ReferencesPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-portfolio max-w-4xl">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a proyectos
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 text-balance">
            Referencias
          </h1>
        </div>
      </section>

      {/* References Content */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-5xl">
          {Object.entries(references).map(([category, items], categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              {/* Category Title */}
              <h2 className="text-3xl font-bold text-gray-950 mb-8 pb-4 border-b-2 border-gray-950">
                {category}
              </h2>

              {/* Items Grid */}
              <div className="space-y-8">
                {items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <div className="flex flex-col gap-2">
                      {/* Project Name */}
                      <h3 className="text-xl font-semibold text-gray-950 group-hover:text-gray-700 transition-colors">
                        {item.name}
                      </h3>
                      
                      {/* Author */}
                      <p className="text-base text-gray-600 font-medium">
                        {item.author}
                      </p>
                      
                      {/* Location & Year */}
                      {(item.location || item.year) && (
                        <p className="text-sm text-gray-500">
                          {[item.location, item.year].filter(Boolean).join(', ')}
                        </p>
                      )}
                      
                      {/* Description */}
                      <p className="text-base text-gray-700 leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-950 text-gray-950 font-medium hover:bg-gray-950 hover:text-white transition-all duration-300 rounded-lg"
            >
              Volver a todos los proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
