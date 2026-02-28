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

  // Textos de la barra de navegación entre categorías
  categoryNav: {
    backTo: 'Volver a',
    allProjects: 'Todos los proyectos',
    nextCategory: 'Siguiente categoría',
  },

  // Título del sidebar de detalles del proyecto
  sidebar: {
    projectDetails: 'Detalles del proyecto',
  },

  // Etiquetas de accesibilidad del modal de fotos
  modal: {
    close: 'Cerrar',
    previous: 'Anterior',
    next: 'Siguiente',
  },

  // Textos de fallback para imágenes sin caption
  fallbacks: {
    detailImage: (n: number) => `Detalle ${n}`,
    featureImage: 'Imagen destacada',
    planImage: 'Plano del proyecto',
    additionalInfo:
      'Aquí puedes añadir más información sobre el proyecto, detalles técnicos, proceso creativo, o cualquier otro contenido relevante que quieras compartir.',
  },
};

export type ProjectNavigationContent = typeof projectNavigationContent;
