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
  medium?: string;
  category?: 'Jardín Privado' | 'Parque Público' | 'Espacio Corporativo' | 'Intervención Natural';
  features?: string[]; // Características principales del proyecto
  additionalInfo?: string; // Contenido adicional "Sobre este proyecto"
  // Galería de imágenes adicionales
  detailImages?: ProjectImage[]; // Dos imágenes en fila
  featureImage?: ProjectImage; // Imagen grande centrada
  planImage?: ProjectImage; // Imagen del plano
}

export const landscapeProjects: LandscapeProject[] = [
  { 
    id: 1, 
    filename: 'image-landscape-project-1.jpg', 
    title: 'Jardín Minimalista', 
    description: 'Un jardín contemporáneo que integra elementos naturales con diseño geométrico. Piedra, agua y vegetación nativa crean un espacio de contemplación.',
    location: 'Barcelona, España',
    year: '2023',
    area: '500 m²',
    category: 'Jardín Privado',
    medium: 'Paisajismo',
    features: [
      'Diseño minimalista integrado con naturaleza',
      'Uso de materiales naturales y locales',
      'Sostenibilidad y respeto ambiental',
      'Espacios de contemplación y conexión'
    ],
    additionalInfo: 'Este proyecto integra elementos naturales con diseño contemporáneo, creando un espacio armónico que dialoga con su entorno.',
    detailImages: [
      { filename: 'image-landscape-project-2.jpg', caption: 'Vista del acceso principal con vegetación nativa' },
      { filename: 'image-landscape-project-3.jpg', caption: 'Detalle del pavimento y elementos pétreos' }
    ],
    featureImage: { 
      filename: 'image-landscape-project-4.jpg', 
      caption: 'Vista panorámica del jardín integrado con la arquitectura existente' 
    },
    planImage: { 
      filename: 'image-landscape-project-5.jpg', 
      caption: 'Planta general del proyecto - Distribución y zonificación' 
    }
  }
];

