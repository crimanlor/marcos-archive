# Ejemplos de Uso de Componentes

Este archivo contiene ejemplos de cómo usar los componentes creados en el proyecto.

## 1. Importar Componentes

```tsx
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import GalleryGrid from '@/app/components/GalleryGrid';
import Breadcrumb from '@/app/components/Breadcrumb';
```

## 2. Usar Navigation

Ya está incluido en `layout.tsx` y aparece automáticamente en todas las páginas.

## 3. Usar Button con Variantes

```tsx
// Primary button
<Button variant="primary" size="lg">
  Botón principal
</Button>

// Secondary button
<Button variant="secondary" size="md">
  Botón secundario
</Button>

// Outline button
<Button variant="outline" size="md">
  Botón contorno
</Button>

// Ghost button
<Button variant="ghost" size="sm">
  Botón fantasma
</Button>

// As link
<Button asLink href="/projects" variant="primary">
  Ver proyectos
</Button>

// With onClick
<Button
  onClick={() => console.log('Clicked!')}
  variant="primary"
>
  Click me
</Button>
```

## 4. Usar GalleryGrid

```tsx
// Grid 3 columnas (responsive)
<GalleryGrid columns="auto" gap="md">
  {projects.map((project) => (
    <div key={project.id}>
      {project.title}
    </div>
  ))}
</GalleryGrid>

// Grid 2 columnas
<GalleryGrid columns={2} gap="lg">
  {projects.map((project) => (
    <div key={project.id}>Proyecto</div>
  ))}
</GalleryGrid>
```

## 5. Usar Breadcrumb

```tsx
<Breadcrumb
  items={[
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'Paisajismo', href: '/projects/landscape' },
    { label: 'Jardín Minimalista' },
  ]}
/>
```

## 6. Crear Nueva Página

```tsx
// app/projects/landscape/page.tsx
import { Metadata } from 'next';
import Breadcrumb from '@/app/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Proyectos Paisajísticos | Arquitecto',
  description: 'Galería de proyectos de paisajismo',
};

export default function LandscapeProjectsPage() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="py-16 md:py-24 bg-white">
        <div className="container-portfolio max-w-4xl">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Proyectos', href: '/projects' },
              { label: 'Paisajismo' },
            ]}
          />

          <h1 className="text-5xl font-bold text-gray-950 mt-8 mb-6">
            Proyectos Paisajísticos
          </h1>
          <p className="text-xl text-gray-600">
            Selección de trabajos dedicados al paisajismo...
          </p>
        </div>
      </section>
    </div>
  );
}
```

## 7. Agregar Animaciones

```tsx
// Fade in
<h1 className="text-4xl font-bold animate-fade-in">
  Este texto aparece suavemente
</h1>

// Fade in up
<p className="text-lg animate-fade-in-up">
  Este párrafo entra desde abajo
</p>

// Slide in left
<div className="animate-slide-in-left">
  Este elemento entra desde la izquierda
</div>

// Scroll reveal
<div className="scroll-fade">
  Este elemento aparece al hacer scroll
</div>
```

## 8. Usar Hook Personalizado

```tsx
'use client';

import { useScrollReveal } from '@/app/utils/hooks';

export default function PageWithScrollReveal() {
  useScrollReveal(); // Activa el reveal al scroll

  return (
    <div>
      <section className="scroll-fade">
        Esta sección aparecerá cuando entres en viewport
      </section>
    </div>
  );
}
```

## 9. Crear Componente Reutilizable

```tsx
// app/components/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  href: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  href,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group block bg-white border border-gray-200 hover:border-gray-950 rounded-lg overflow-hidden transition-all"
    >
      <div className="w-full bg-gray-100 aspect-square overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-950 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
}
```

## 10. Usar Config Centralizado

```tsx
import { siteConfig } from '@/app/config/site';

export default function ContactInfo() {
  return (
    <div>
      <h2>{siteConfig.siteName}</h2>
      <p>{siteConfig.contact.email}</p>
      <p>{siteConfig.contact.phone}</p>

      <a href={siteConfig.socialLinks.instagram}>Instagram</a>
      <a href={siteConfig.socialLinks.linkedin}>LinkedIn</a>

      <h3>{siteConfig.architect.name}</h3>
      <p>{siteConfig.architect.bio}</p>
    </div>
  );
}
```

## 11. Mapear y Renderizar Listas

```tsx
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

export default function ListExample() {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="p-4 bg-gray-100">
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```

## 12. Usar Link de Next.js

```tsx
import Link from 'next/link';

export default function NavigationExample() {
  return (
    <nav className="flex gap-4">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        Sobre mí
      </Link>
      <Link href="/projects" className="hover:underline">
        Proyectos
      </Link>
    </nav>
  );
}
```

## 13. Metadata Dinámico

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mi Página | Arquitecto',
  description: 'Descripción de la página',
  openGraph: {
    title: 'Mi Página',
    description: 'Descripción',
    images: ['/og-image.jpg'],
  },
};

export default function MyPage() {
  return <h1>Mi Página</h1>;
}
```

## 14. Clases Responsive (Tailwind)

```tsx
// Desktop: 3 columnas, Mobile: 1 columna
<div className="flex flex-col md:flex-row lg:flex-row">
  <div className="w-full md:w-1/2 lg:w-1/3">Columna 1</div>
  <div className="w-full md:w-1/2 lg:w-1/3">Columna 2</div>
  <div className="w-full md:w-1/2 lg:w-1/3">Columna 3</div>
</div>
```

## 15. Breakpoints Tailwind

```
xs: 0px        (default)
sm: 640px      (mobile horizontal)
md: 768px      (tablet)
lg: 1024px     (desktop)
xl: 1280px     (desktop large)
2xl: 1536px    (desktop extra large)
```

Uso: `md:block lg:hidden` = mostrar en md y arriba, pero no en lg y arriba

---

**Más información en la documentación oficial:**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
