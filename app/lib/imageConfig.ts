/**
 * Configuración centralizada para imágenes del proyecto
 * Facilita el mantenimiento y escalabilidad de tamaños y formatos
 */

// Rutas base
export const IMAGE_BASE_PATH = '/images';

// Tamaños de imagen para diferentes contextos
export const IMAGE_SIZES = {
  // Grid de fotografías (4 columnas)
  photoGrid: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
  
  // Grid de acuarelas (3 columnas)
  watercolorGrid: '(max-width: 768px) 50vw, 33vw',
  
  // Imágenes de proyectos paisajísticos (2 columnas cuando hay 2 imágenes)
  landscapeDetail2Col: '(max-width: 768px) 100vw, 50vw',
  
  // Imágenes de proyectos paisajísticos (3 columnas)
  landscapeDetail3Col: '(max-width: 768px) 100vw, 33vw',
  
  // Imagen hero de proyecto
  projectHero: '(max-width: 1280px) 100vw, 1280px',
  
  // Imagen de planta/textura pequeña
  plantTexture: '(max-width: 640px) 25vw, (max-width: 768px) 16vw, (max-width: 1024px) 12vw, 9vw',
  
  // Modal fullscreen
  modal: '100vw',
} as const;

// Aspect ratios comunes
export const ASPECT_RATIOS = {
  square: 'aspect-square',
  landscape: 'aspect-[16/9]',
  portrait: 'aspect-[3/4]',
  photo: 'aspect-[4/3]',
} as const;

// Configuración de optimización
export const IMAGE_QUALITY = {
  default: 85,
  high: 95,
  thumbnail: 75,
} as const;

// Clases de estilo comunes para imágenes
export const IMAGE_CLASSES = {
  // Efecto hover básico
  hoverZoom: 'group-hover:scale-105 transition-transform duration-300',
  
  // Efecto hover suave
  hoverZoomSubtle: 'group-hover:scale-[1.02] transition-transform duration-300',
  
  // Object fit
  cover: 'object-cover',
  contain: 'object-contain',
  
  // Redondeo
  rounded: 'rounded-lg',
  
  // Sombras
  shadow: 'shadow-sm hover:shadow-lg transition-shadow duration-300',
} as const;

/**
 * Construye la ruta completa de una imagen
 * @param filename - Nombre del archivo de imagen
 * @returns Ruta completa de la imagen
 */
export function getImagePath(filename: string): string {
  return `${IMAGE_BASE_PATH}/${filename}`;
}
