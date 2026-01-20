# Guía de Desarrollo - Portfolio Arquitecto

## 🎯 Próximos Pasos para Personalización

### 1. Agregar Contenido Real

#### Reemplazar placeholders de imágenes
```bash
# Colocar tus imágenes en:
public/images/
public/placeholder-projects/
```

Actualizar rutas en componentes:
```tsx
import Image from 'next/image';

<Image
  src="/images/proyecto-1.jpg"
  alt="Descripción"
  width={800}
  height={600}
/>
```

#### Actualizar textos
- Modificar nombre en `Navigation.tsx`
- Actualizar biografía en `app/about/page.tsx`
- Cambiar datos de contacto en `Footer.tsx`
- Actualizar proyectos en `app/lib/data.ts`

### 2. Conectar con Backend/CMS

Crear un servicio para obtener datos dinámicos:

```typescript
// app/services/projectService.ts
export async function getProjects() {
  const res = await fetch('https://tu-api.com/projects');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
```

### 3. Implementar Formulario de Contacto

```typescript
// app/components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Enviar a tu backend
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
    </form>
  );
}
```

### 4. SEO y Analytics

Agregar Google Analytics:

```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout() {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `}
        </Script>
      </head>
      {/* ... */}
    </html>
  );
}
```

### 5. Mejoras de Performance

#### Optimizar imágenes
```tsx
import Image from 'next/image';

<Image
  src="/images/proyecto.jpg"
  alt="Proyecto"
  width={1200}
  height={800}
  priority={false}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### Lazy loading de componentes
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Cargando...</div>,
});
```

### 6. Testing

Estructura básica para tests:

```typescript
// __tests__/components/Navigation.test.tsx
import { render, screen } from '@testing-library/react';
import Navigation from '@/app/components/Navigation';

describe('Navigation', () => {
  it('renders navigation menu', () => {
    render(<Navigation />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
  });
});
```

### 7. Deployment

#### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
# Sigue las instrucciones
```

#### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### 8. Estructura Escalable

Para un proyecto más grande, considera:

```
app/
├── components/
│   ├── common/         # Componentes reutilizables
│   ├── sections/       # Secciones grandes
│   └── ui/             # UI atoms
├── features/           # Feature folders
│   ├── projects/
│   ├── gallery/
│   └── contact/
├── services/           # APIs, servicios
├── hooks/              # Custom hooks
├── utils/              # Utilidades
├── constants/          # Constantes
└── types/              # Tipos TypeScript
```

### 9. Variables de Entorno

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://tu-sitio.com
API_BASE_URL=https://tu-api.com
NEXT_PUBLIC_GA_ID=GA_123456
```

### 10. Personalización Avanzada

#### Cambiar tipografía
```css
/* app/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
```

#### Agregar dark mode
```typescript
// tailwind.config.ts
export default {
  darkMode: 'class',
  // ...
};
```

```tsx
// app/layout.tsx
<html className="dark" lang="es">
```

## 📚 Recursos Útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Tailwind](https://tailwindcss.com/docs)
- [React TypeScript](https://react.dev)
- [Vercel Deployment](https://vercel.com/docs)

## 🔍 Checklist Pre-Lanzamiento

- [ ] Reemplazar todos los placeholders de texto
- [ ] Agregar imágenes reales
- [ ] Configurar dominio personalizado
- [ ] Agregar formulario de contacto funcional
- [ ] Implementar Analytics
- [ ] Configurar SEO (metadata, Open Graph)
- [ ] Testing en múltiples navegadores
- [ ] Testing responsivo (mobile, tablet, desktop)
- [ ] Performance audit (Lighthouse)
- [ ] Security audit
- [ ] Configurar SSL/HTTPS
- [ ] Backup y recovery plan

## 💡 Tips de Desarrollo

### Hot Reload
El proyecto tiene hot reload automático. Solo guarda los cambios y verás los cambios en tiempo real.

### Debugging
```tsx
console.log('Debug:', variable);
// En navegador: DevTools > Console
```

### Error Handling
```typescript
try {
  const data = await fetchData();
} catch (error) {
  console.error('Error:', error);
  // Mostrar mensaje al usuario
}
```

---

¡Feliz desarrollo! 🚀
