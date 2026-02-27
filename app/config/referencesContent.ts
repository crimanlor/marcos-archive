/**
 * Contenido de la página de Referencias
 * Modifica estos valores para actualizar las referencias
 */

export const referencesContent = {
  // Título de la página (se usa desde projectsContent)
  
  // Secciones de referencias
  sections: {
    architecture: {
      title: 'Arquitectura del paisaje y espacio público',
      items: [
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
    },
    botany: {
      title: 'Paisaje, botánica y ecología aplicada',
      items: [
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
    },
    culture: {
      title: 'Arquitectura, cultura y experiencia',
      items: [
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
    },
    referents: {
      title: 'Referentes',
      items: [
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
    },
  },
};

export type ReferencesContent = typeof referencesContent;
