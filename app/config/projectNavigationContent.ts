/**
 * Contenido de textos de navegación de proyectos
 * Modifica estos valores para actualizar los textos de navegación entre proyectos
 */

export const projectNavigationContent = {
  // Botón de volver
  backButton: {
    text: 'Volver a proyectos',
    textAll: 'Todos los proyectos',
  },
  
  // Navegación entre proyectos
  navigation: {
    previous: 'Anterior',
    next: 'Siguiente',
    backTo: 'Volver a',
    projectOf: 'Proyecto',
  },
  
  // Detalles del proyecto
  projectDetails: {
    location: 'Ubicación',
    year: 'Año',
    area: 'Superficie',
    distance: 'Distancia',
    category: 'Categoría',
  },
  
  // Secciones
  sections: {
    features: 'Características principales',
    aboutProject: 'Sobre este proyecto',
    gallery: 'Galería del proyecto',
    plantsAndTextures: 'Plantas y texturas',
  },
  
  // Botones de llamada a la acción
  cta: {
    viewFullProject: 'Ver proyecto completo',
  },
};

export type ProjectNavigationContent = typeof projectNavigationContent;
