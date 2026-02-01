/**
 * Datos mock del proyecto
 * Reemplaza con datos reales según necesites
 */

import { Project, ProjectCategory } from './types';

// Categorías de proyectos
export const projectCategories: ProjectCategory[] = [
  {
    id: 'landscape',
    title: 'Proyectos Paisajísticos',
    description: 'Diseño del paisaje y espacios naturales contemporáneos',
    slug: 'landscape',
    count: 8,
    image: '/placeholder-projects/landscape.jpg',
  },
  {
    id: 'watercolors',
    title: 'Sketching',
    description: 'Interpretación artística de espacios y conceptos',
    slug: 'watercolors',
    count: 12,
    image: '/placeholder-projects/watercolors.jpg',
  },
  {
    id: 'photography',
    title: 'Archivo Fotográfico',
    description: 'Documentación visual de proyectos y espacios',
    slug: 'photography',
    count: 45,
    image: '/placeholder-projects/photography.jpg',
  },
];

// Proyectos paisajísticos
export const landscapeProjects: Project[] = [
  {
    id: 1,
    title: 'Jardín Minimalista Urbano',
    slug: 'jardin-minimalista',
    description: 'Un jardín contemporáneo que integra elementos naturales con diseño geométrico.',
    location: 'Barcelona, España',
    year: 2023,
  },
  {
    id: 2,
    title: 'Paisaje Urbano Sostenible',
    slug: 'paisaje-urbano',
    description: 'Reconfiguración de un espacio público con enfoque naturalista.',
    location: 'Madrid, España',
    year: 2022,
  },
  {
    id: 3,
    title: 'Terraza con Vistas al Mar',
    slug: 'terraza-vistas',
    description: 'Integración de terrazas con el paisaje natural circundante.',
    location: 'Costa Brava, España',
    year: 2023,
  },
];
