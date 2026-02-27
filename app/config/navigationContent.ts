/**
 * Contenido de la navegación
 * Modifica estos valores para actualizar los enlaces del menú
 */

export const navigationContent = {
  // Elementos del menú de navegación
  items: [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre mí', href: '/about' },
    { label: 'Proyectos', href: '/projects' },
  ],
  
  // Botón de contacto
  contactButton: {
    label: 'Contacto',
    href: '/contact',
  },
  
  // Etiquetas para móviles
  mobile: {
    backButton: 'Volver',
    menuLabel: 'Menú',
  },
};

export type NavigationContent = typeof navigationContent;
