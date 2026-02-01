# Guía de Desarrollo y Escalabilidad

## 📁 Estructura del Proyecto

```
app/
├── lib/                    # Lógica y datos del negocio
│   ├── types.ts           # ✨ Interfaces TypeScript centralizadas
│   ├── metadata.ts        # ✨ Utilidades para metadata SEO
│   ├── imageConfig.ts     # ✨ Configuración de imágenes
│   ├── landscape.ts       # Datos de proyectos paisajísticos
│   ├── photos.ts          # Datos del archivo fotográfico
│   ├── watercolors.ts     # Datos de acuarelas
│   └── data.ts            # Datos generales
├── hooks/                  # Hooks personalizados de React
│   └── useGalleryModal.ts # ✨ Hook para galerías con modal
├── components/            # Componentes reutilizables
└── projects/              # Páginas de proyectos
```

## 🎯 Cómo Añadir Nuevo Contenido

### Añadir un Nuevo Proyecto de Paisajismo

1. **Preparar las imágenes**
   - Coloca las imágenes en `/public/images/`
   - Usa nombres descriptivos: `image-landscape-03.jpg`, `image-landscape-03-1.jpg`, etc.

2. **Añadir datos del proyecto** en `app/lib/landscape.ts`:
   ```typescript
   {
     id: 3,
     filename: 'image-landscape-03.jpg',
     title: 'Nombre del Proyecto',
     description: 'Descripción breve...',
     location: 'Ciudad',
     year: '2026',
     area: '500 m²',
     category: 'Proyecto conceptual',
     features: [
       'Característica 1',
       'Característica 2',
     ],
     additionalInfo: [
       'Párrafo 1...',
       'Párrafo 2...',
     ],
     detailImages: [
       { filename: 'image-landscape-03-1.jpg', caption: 'Vista 1' },
       { filename: 'image-landscape-03-2.jpg', caption: 'Vista 2' }
     ],
     plantsAndTextures: [
       { filename: 'plant-nombre.jpg', name: 'NOMBRE PLANTA' }
     ]
   }
   ```

### Añadir Fotografías

1. **Preparar imágenes** en `/public/images/`
2. **Añadir entrada** en `app/lib/photos.ts`:
   ```typescript
   {
     id: 18,
     filename: 'photo-018.jpg',
     title: 'Título',
     description: 'Descripción',
     location: 'Barcelona',
     year: '2026',
     category: 'Paisajismo'
   }
   ```

### Añadir Acuarelas

1. **Preparar imágenes** en `/public/images/`
2. **Añadir entrada** en `app/lib/watercolors.ts`:
   ```typescript
   {
     id: 12,
     filename: 'watercolor-012.jpg',
     title: 'Título',
     description: 'Descripción',
     orientation: 'vertical',
     year: '2026',
     medium: 'Acuarela sobre papel'
   }
   ```

## 🛠️ Utilidades Disponibles

### Hook useGalleryModal

Para galerías con navegación modal:

```typescript
import { useGalleryModal } from '@/hooks/useGalleryModal';

const { 
  isOpen, 
  openModal, 
  closeModal,
  handleNext,
  handlePrevious,
  hasNext,
  hasPrevious,
  selectedItem 
} = useGalleryModal(items);
```

### Configuración de Imágenes

Usa constantes predefinidas para sizes y clases:

```typescript
import { 
  IMAGE_SIZES, 
  IMAGE_CLASSES, 
  getImagePath 
} from '@/lib/imageConfig';

<Image
  src={getImagePath('photo.jpg')}
  sizes={IMAGE_SIZES.photoGrid}
  className={IMAGE_CLASSES.hoverZoom}
/>
```

### Metadata SEO

Genera metadata consistente:

```typescript
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Mi Página',
  description: 'Descripción',
  path: '/mi-pagina'
});
```

## 📝 Tipos TypeScript

Todas las interfaces están centralizadas en `app/lib/types.ts`:

- `LandscapeProject` - Proyectos paisajísticos
- `Photo` - Fotografías
- `Watercolor` - Acuarelas
- `ProjectImage` - Imágenes de proyectos
- `PlantTexture` - Plantas y texturas

## ✅ Checklist para Nuevos Proyectos

- [ ] Optimizar imágenes (ejecutar `./optimize-images.sh`)
- [ ] Añadir datos al archivo correspondiente (`landscape.ts`, `photos.ts`, etc.)
- [ ] Verificar que las imágenes están en `/public/images/`
- [ ] Comprobar tipos TypeScript
- [ ] Probar en desarrollo (`npm run dev`)
- [ ] Verificar responsive
- [ ] Commit y push

## 🎨 Convenciones de Nombres

- **Proyectos paisajísticos**: `image-landscape-XX.jpg`
- **Fotografías**: `photo-XXX.jpg`
- **Acuarelas**: `watercolor-XXX.jpg`
- **Plantas**: `plant-nombre-cientifico.jpg`
- **Texturas**: `texture-descripcion.jpg`

## 🚀 Optimización

Antes de añadir imágenes, ejecuta:
```bash
./optimize-images.sh
```

Esto optimizará automáticamente todas las imágenes en `/public/images/originales/`.

## 📚 Recursos Adicionales

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Tailwind CSS](https://tailwindcss.com/docs)
