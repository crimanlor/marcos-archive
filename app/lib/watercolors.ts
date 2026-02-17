/**
 * Configuración automática de acuarelas
 * 
 * INSTRUCCIONES:
 * 1. Añade tus imágenes a public/images/ con el formato: watercolor-001.jpg, watercolor-002.jpg, etc.
 * 2. Cambia solo el número TOTAL_WATERCOLORS abajo
 * 3. Las acuarelas se generarán automáticamente
 */

import { Watercolor } from './types';

export { type Watercolor } from './types';

// 🎨 SOLO CAMBIA ESTE NÚMERO cuando añadas o elimines acuarelas
const TOTAL_WATERCOLORS = 11;

// Genera automáticamente el array de acuarelas
export const watercolors: Watercolor[] = Array.from(
  { length: TOTAL_WATERCOLORS }, 
  (_, i) => {
    const number = i + 1;
    return {
      id: number,
      filename: `watercolor-${String(number).padStart(3, '0')}.jpg`,
      title: `Sketch ${number}`,
      description: '',
      orientation: 'vertical', // No es crítico, las imágenes se adaptan automáticamente
      year: '2024',
      medium: 'Acuarela sobre papel'
    };
  }
);
