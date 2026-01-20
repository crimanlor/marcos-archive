# 🚀 Quick Start - Portfolio Arquitecto

## ¡Bienvenido! Aquí está todo lo que necesitas saber para comenzar.

### 1️⃣ Primeros pasos (2 minutos)

```bash
# El proyecto ya está instalado, solo inicia el servidor:
npm run dev

# Abre en tu navegador:
http://localhost:3000
```

✅ ¡Ya verás la página de inicio!

### 2️⃣ Explora el sitio

- **Home** (`/`): Página inicial con hero section
- **Sobre mí** (`/about`): Información del arquitecto
- **Proyectos** (`/projects`): Índice de categorías
- **Proyectos Paisajísticos** (`/projects/landscape`): Galería
- **Acuarelas** (`/projects/watercolors`): Galería de arte
- **Fotografías** (`/projects/photography`): Archivo fotográfico

### 3️⃣ Personaliza lo básico

#### Cambiar el nombre del sitio

Edita `app/config/site.ts`:

```typescript
export const siteConfig = {
  siteName: 'Tu Nombre Aquí', // ← Cambia esto
  contact: {
    email: 'tu-email@example.com',
    phone: '+34 123 456 789',
  },
  // ...
};
```

#### Cambiar colores

Edita `app/globals.css`:

```css
:root {
  --color-primary: #000000;      /* Negro */
  --color-secondary: #1a1a1a;    /* Gris oscuro */
  --color-accent: #0d3d3d;       /* Verde oscuro */
  /* Cambia según prefieras */
}
```

#### Cambiar texto de páginas

- **Home**: `app/page.tsx`
- **Sobre mí**: `app/about/page.tsx`
- **Proyectos**: `app/projects/page.tsx`

### 4️⃣ Agregar imágenes reales

1. Coloca tus imágenes en:
   - `public/images/` - Imágenes generales
   - `public/placeholder-projects/` - Fotos de proyectos

2. Reemplaza placeholders en componentes con rutas reales:

```tsx
// Antes:
<img src="/placeholder-projects/landscape.jpg" />

// Después:
<img src="/images/proyecto-real.jpg" />
```

### 5️⃣ Estructura de carpetas (lo importante)

```
app/
├── page.tsx                    ← Home
├── about/page.tsx             ← Sobre mí
├── projects/
│   ├── page.tsx              ← Índice proyectos
│   ├── landscape/page.tsx    ← Paisajismo
│   ├── watercolors/page.tsx  ← Acuarelas
│   └── photography/page.tsx  ← Fotografías
├── components/
│   ├── Navigation.tsx        ← Menú
│   ├── Footer.tsx           ← Pie de página
│   └── ...                  ← Otros componentes
├── config/
│   └── site.ts             ← Configuración central
└── globals.css             ← Estilos globales
```

### 6️⃣ Comandos útiles

```bash
# Desarrollo con hot reload
npm run dev

# Compilar para producción
npm run build

# Ejecutar compilación de prod
npm start

# Verificar código (ESLint)
npm run lint
```

### 7️⃣ Próximos pasos (en orden)

- [ ] Cambiar nombre del sitio
- [ ] Actualizar información de contacto
- [ ] Cambiar colores si quieres
- [ ] Reemplazar textos de páginas
- [ ] Agregar imágenes reales
- [ ] Agregar formulario de contacto
- [ ] Hacer deploy (Vercel)

### 8️⃣ Componentes principales

#### Button
```tsx
<Button variant="primary">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

#### Breadcrumb
```tsx
<Breadcrumb
  items={[
    { label: 'Inicio', href: '/' },
    { label: 'Actual' },
  ]}
/>
```

#### Animaciones
```tsx
<h1 className="animate-fade-in">Aparece suavemente</h1>
<p className="animate-fade-in-up">Entra desde abajo</p>
```

### 9️⃣ Deployment en 5 minutos (Vercel)

```bash
# 1. Instala Vercel CLI
npm i -g vercel

# 2. Despliega
vercel

# 3. Sigue las instrucciones
```

¡Listo! Tu sitio estará en línea 🎉

### 🔟 Recursos útiles

📚 **Documentación:**
- [INDEX.md](./INDEX.md) - Índice completo del proyecto
- [README_PORTFOLIO.md](./README_PORTFOLIO.md) - Documentación técnica
- [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) - Guía de desarrollo
- [COMPONENT_EXAMPLES.md](./COMPONENT_EXAMPLES.md) - Ejemplos de componentes
- [CSS_CUSTOMIZATION.md](./CSS_CUSTOMIZATION.md) - Personalización CSS
- [PERFORMANCE.md](./PERFORMANCE.md) - Optimización

🎓 **Tutoriales externos:**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

## ❓ FAQs Rápidas

**P: ¿Cómo cambio el logo?**  
R: Edita `Navigation.tsx`, línea con "Estudio Arquitectura"

**P: ¿Cómo agrego una nueva página?**  
R: Crea carpeta en `app/` y añade `page.tsx`

**P: ¿Cómo hago Deploy?**  
R: Sigue pasos 9 arriba, o lee DEVELOPMENT_GUIDE.md

**P: ¿Cómo agrego un formulario?**  
R: Ver DEVELOPMENT_GUIDE.md → "Implementar Formulario de Contacto"

**P: ¿Puedo cambiar los colores?**  
R: Sí, edita `app/globals.css` o `app/config/site.ts`

---

## ✅ Checklist de Customización

- [ ] Cambié el nombre del sitio
- [ ] Actualicé información de contacto
- [ ] Cambié colores (opcional)
- [ ] Reemplacé textos de páginas
- [ ] Agregué imágenes reales
- [ ] Probé todas las páginas
- [ ] Hice deploy a Vercel

---

**¡Estás listo para empezar! Happy coding! 🚀**

Última actualización: 20 de enero de 2026
