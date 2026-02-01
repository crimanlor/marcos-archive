// Interfaces compartidas del proyecto

// ===== Interfaces de proyectos generales =====
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  location?: string;
  year?: number;
  image?: string;
  count?: number;
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  slug: string;
  count: number;
  image: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}

// ===== Interfaces de medios compartidas =====
export interface ProjectImage {
  filename: string;
  caption?: string;
}

export interface PlantTexture {
  filename: string;
  name: string;
}

// ===== Interfaces de proyectos específicos =====
export interface LandscapeProject {
  id: number;
  filename: string;
  title: string;
  description: string;
  location: string;
  year: string;
  area?: string;
  distance?: string;
  category?: 'Proyecto conceptual' | 'Proyecto realizado';
  features?: string[];
  additionalInfo?: string | string[];
  detailImages?: ProjectImage[];
  featureImage?: ProjectImage;
  planImage?: ProjectImage;
  strategy?: {
    title: string;
    description: string;
    planCaption?: string;
  };
  authorNote?: string;
  plantsAndTextures?: PlantTexture[];
}

export interface Photo {
  id: number;
  filename: string;
  title: string;
  description: string;
  location: string;
  year: string;
  category: 'Paisajismo' | 'Arquitectura' | 'Detalles';
  additionalInfo?: string;
}

export interface Watercolor {
  id: number;
  filename: string;
  title: string;
  description: string;
  orientation: 'vertical' | 'horizontal';
  year: string;
  medium?: string;
  additionalInfo?: string;
}

