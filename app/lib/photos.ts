// Configuración centralizada de todas las fotografías del archivo

export interface Photo {
  id: number;
  filename: string;
  title: string;
  description: string;
  location: string;
  year: string;
  category: 'Paisajismo' | 'Arquitectura' | 'Detalles';
  additionalInfo?: string; // Contenido adicional "Sobre este proyecto"
}

export const photos: Photo[] = [
  { 
    id: 1, 
    filename: 'photo-001.jpg', 
    title: 'Proyecto 1', 
    description: 'Descripción del proyecto fotográfico', 
    location: 'Barcelona, España', 
    year: '2024', 
    category: 'Paisajismo',
    additionalInfo: 'Información adicional sobre el proyecto, detalles técnicos, proceso creativo, etc.'
  },
  { id: 2, filename: 'photo-002.jpg', title: 'Proyecto 2', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 3, filename: 'photo-003.jpg', title: 'Proyecto 3', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 4, filename: 'photo-004.jpg', title: 'Proyecto 4', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 5, filename: 'photo-005.jpg', title: 'Proyecto 5', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 6, filename: 'photo-006.jpg', title: 'Proyecto 6', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 7, filename: 'photo-007.jpg', title: 'Proyecto 7', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 8, filename: 'photo-008.jpg', title: 'Proyecto 8', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 9, filename: 'photo-009.jpg', title: 'Proyecto 9', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 10, filename: 'photo-011.jpg', title: 'Proyecto 10', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 11, filename: 'photo-012.jpg', title: 'Proyecto 11', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 12, filename: 'photo-013.jpg', title: 'Proyecto 12', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 13, filename: 'photo-014.jpg', title: 'Proyecto 13', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 14, filename: 'photo-015.jpg', title: 'Proyecto 14', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 15, filename: 'photo-016.jpg', title: 'Proyecto 15', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 16, filename: 'photo-017.jpg', title: 'Proyecto 16', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 17, filename: 'photo-018.jpg', title: 'Proyecto 17', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 18, filename: 'photo-019.jpg', title: 'Proyecto 18', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 19, filename: 'photo-020.jpg', title: 'Proyecto 19', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 20, filename: 'photo-021.jpg', title: 'Proyecto 20', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 21, filename: 'photo-022.jpg', title: 'Proyecto 21', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 22, filename: 'photo-026.jpg', title: 'Proyecto 22', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 23, filename: 'photo-027.jpg', title: 'Proyecto 23', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 24, filename: 'photo-028.jpg', title: 'Proyecto 24', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 25, filename: 'photo-029.jpg', title: 'Proyecto 25', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 26, filename: 'photo-030.jpg', title: 'Proyecto 26', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 27, filename: 'photo-031.jpg', title: 'Proyecto 27', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 28, filename: 'photo-032.jpg', title: 'Proyecto 28', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 29, filename: '010.jpg', title: 'Proyecto 29', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 30, filename: '022.jpg', title: 'Proyecto 30', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 31, filename: '023.jpg', title: 'Proyecto 31', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 32, filename: '024.jpg', title: 'Proyecto 32', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 33, filename: '025.jpg', title: 'Proyecto 33', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
  { id: 34, filename: '033.jpg', title: 'Proyecto 34', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Paisajismo' },
  { id: 35, filename: '035.jpg', title: 'Proyecto 35', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Arquitectura' },
  { id: 36, filename: '036.jpg', title: 'Proyecto 36', description: 'Descripción del proyecto fotográfico', location: 'Barcelona, España', year: '2024', category: 'Detalles' },
];
