// Configuración centralizada de proyectos paisajísticos

export interface ProjectImage {
  filename: string;
  caption?: string;
}

export interface LandscapeProject {
  id: number;
  filename: string;
  title: string;
  description: string;
  location: string;
  year: string;
  area?: string; // Superficie del proyecto
  // medium?: string;
  category?: 'Proyecto conceptual' | 'Proyecto realizado';
  features?: string[]; // Características principales del proyecto
  additionalInfo?: string; // Contenido adicional "Sobre este proyecto"
  // Galería de imágenes adicionales
  detailImages?: ProjectImage[]; // Dos imágenes en fila
  featureImage?: ProjectImage; // Imagen grande centrada
  planImage?: ProjectImage; // Imagen del plano
  // Nueva información para estrategia
  strategy?: {
    title: string; // Título de la estrategia
    description: string; // Explicación de la estrategia
    planCaption?: string; // Pie de foto del plano
  };
  authorNote?: string; // Nota del autor
}

export const landscapeProjects: LandscapeProject[] = [
  { 
    id: 1, 
    filename: 'image-landscape-project-1.jpg', 
    title: 'Cubierta verde · Residencia Sanitas Consell de Cent', 
    description: 'Cubierta vegetal como espacio de bienestar y refugio biofílico en altura.',
    location: 'Barcelona, España',
    year: '2026',
    area: '168 m²',
    category: 'Proyecto conceptual',
    // medium: 'Paisajismo',
    features: [
      'Cubierta vegetal semi-intensiva adaptada al clima mediterráneo',
      'Jardín elevado como sistema de confort térmico y ambiental',
      'Vegetación de bajo consumo hídrico y mantenimiento reducido',
      'Recorrido accesible y continuo para personas mayores',
      'Espacios de sombra, estancia y contemplación orientados al bienestar'
    ],
    additionalInfo: 'Este proyecto plantea la transformación de una azotea dura e infrautilizada en un oasis vegetal elevado, concebido como un jardín mediterráneo adaptado al clima de Barcelona. La intervención busca mejorar el confort térmico, visual y emocional del espacio, integrando vegetación, recorridos accesibles y zonas de descanso orientadas al bienestar de los usuarios de la residencia. ',
    detailImages: [
      { filename: 'image-landscape-project-2.jpg', caption: 'Vista aérea. Estado previo de la cubierta y relación con el entorno urbano.' },
      { filename: 'image-landscape-project-4.jpg', caption: 'Azotea existente, sin un sistema vegetal integrado ni espacios de estancia definidos.' },
      { filename: 'image-landscape-project-6.jpg', caption: 'Misma azotea pero con una sombra de vela para verano.' }
    ],
    featureImage: { 
      filename: 'image-landscape-project-3.jpg', 
      caption: 'Superficie dura y fragmentada antes de la intervención.' 
    },
    planImage: { 
      filename: 'image-landscape-project-5.jpg', 
      caption: 'Planta general del proyecto · Distribución y zonificación' 
    },
    strategy: {
      title: 'Estrategia de intervención',
      description: 'La propuesta organiza la cubierta mediante un sistema continuo de vegetación, recorridos accesibles y áreas de estancia. La plantación se concibe como una capa climática activa, capaz de mitigar el calor, retener agua y generar una experiencia sensorial ligada al paisaje mediterráneo.',
      planCaption: 'Planta general del proyecto · Distribución y zonificación'
    },
    authorNote: 'Este proyecto supone un primer acercamiento a la arquitectura del paisaje como herramienta para humanizar espacios urbanos y mejorar la calidad de vida a través del diseño vegetal.'
  }
];

