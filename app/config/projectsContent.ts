/**
 * Contenido de la página de Proyectos
 * Modifica estos valores para actualizar las categorías de proyectos
 */

import { watercolors } from '../lib/watercolors';
import { photos } from '../lib/photos';
import { landscapeProjects } from '../lib/landscape';

export const projectsContent = {
  // Título principal
  pageTitle: 'Proyectos',
  pageDescription: '', // Vacío actualmente, pero disponible para futuro uso
  
  // Categorías de proyectos
  categories: [
    {
      id: 'landscape',
      title: 'Proyectos conceptuales',
      description: 'Proyectos conceptuales de paisajismo y espacio público',
      slug: 'landscape',
      count: landscapeProjects.length, // Se actualiza automáticamente
      image: '/images/image-projects-1.jpg',
    },
    {
      id: 'watercolors',
      title: 'Sketches',
      description: 'Sketches de arquitectura y paisaje',
      slug: 'watercolors',
      count: watercolors.length, // Se actualiza automáticamente
      image: '/images/image-projects-2.jpg',
    },
    {
      id: 'photography',
      title: 'Archivo fotográfico',
      description: 'Archivo fotográfico y espacios públicos',
      slug: 'photography',
      count: photos.length, // Se actualiza automáticamente
      image: '/images/image-projects-3.jpg',
    },
    {
      id: 'references',
      title: 'Referencias',
      description: 'Referencias de proyectos, obras y artistas',
      slug: 'references',
      count: 1,
      image: '/images/image-projects-4.jpg',
    },
  ],
};
