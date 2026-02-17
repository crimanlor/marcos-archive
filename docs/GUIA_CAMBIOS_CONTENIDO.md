# 📝 Guía Rápida de Cambios - Portfolio

**Guía práctica para actualizar contenido e imágenes sin conocimientos técnicos**

---

## 📋 Índice Rápido

1. [🔤 Cambiar Textos](#1-cambiar-textos)
2. [🖼️ Cambiar Imágenes](#2-cambiar-imágenes)
3. [⚡ Optimizar Imágenes](#3-optimizar-imágenes)
4. [📤 Subir Cambios a GitHub](#4-subir-cambios-a-github)

---

## ⚡ Inicio Rápido

### Para cambiar textos:
1. Abre el archivo correspondiente (ver tabla de referencia)
2. Busca el texto entre comillas `'...'`
3. Cámbialo manteniendo las comillas
4. Guarda (Cmd + S)

### Para cambiar imágenes:
1. Renombra tu imagen con el nombre exacto del archivo que quieres reemplazar
2. Cópiala en `public/images/`
3. Reemplaza el archivo existente
4. Optimiza las imágenes (ver sección 3)

---

## 1. Cambiar Textos

### 📑 Tabla de Referencia Rápida

| Qué cambiar | Archivo | Línea aprox. |
|-------------|---------|--------------|
| Nombre (navegación y footer) | `app/components/Navigation.tsx` y `Footer.tsx` | 12-14 |
| Email y teléfono | `app/components/Footer.tsx` | 50-67 |
| Redes sociales (Instagram, LinkedIn) | `app/components/Footer.tsx` | 73-90 |
| Biografía en página "Sobre mí" | `app/about/page.tsx` | 28-52 |

### 🏠 Nombre, Email, Teléfono y Redes Sociales

**⚠️ IMPORTANTE:** Esta información NO está centralizada, está en varios archivos.

#### Cambiar tu Nombre

**📁 Archivo:** `app/components/Navigation.tsx` (línea 14)
```tsx
Marcos Villén Rubio  // ← Cambia aquí tu nombre
```

**📁 Archivo:** `app/components/Footer.tsx` (línea 12)
```tsx
<h3 className="text-lg font-semibold mb-4">Marcos Villén Rubio</h3>
// Cambia "Marcos Villén Rubio" por tu nombre
```

#### Cambiar Email y Teléfono

**📁 Archivo:** `app/components/Footer.tsx` (líneas 50-67)
```tsx
{/* Email - línea 51 */}
<a href="mailto:marcos-landscape@proton.me">
  marcos-landscape@proton.me  // ← Cambia aquí
</a>

{/* Teléfono - línea 61 */}
<a href="tel:+34695531983">
  +34 695 531 983  // ← Cambia aquí
</a>
```

#### Cambiar Redes Sociales

**📁 Archivo:** `app/components/Footer.tsx` (líneas 73-90)
```tsx
{/* Instagram - línea 73 */}
<a href="https://instagram.com/marcosvillen">  // ← Cambia la URL
  Instagram
</a>

{/* LinkedIn - línea 83 */}
<a href="https://www.linkedin.com/in/marcosvillen/">  // ← Cambia la URL
  LinkedIn
</a>
```

**⚠️ Importante:** Cambia solo las URLs y los textos, NO toques las comillas ni las etiquetas `<a>`, `href=`, etc.

---

### 📄 Página "Sobre mí"

**📁 Archivo:** `app/about/page.tsx`

**Cómo cambiar un párrafo:**
```tsx
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
  Escribe aquí tu texto manteniendo esta estructura
</p>
```

**✅ Cambia:** Solo el texto entre `>` y `</p>`  
**❌ No toques:** `<p className="...">`, ni ninguna etiqueta con `<` o `>`

---

### 🎨 Proyectos de Paisajismo

**📁 Archivo:** `app/lib/data.ts`

**Editar un proyecto existente:**
```typescript
{
  id: 1,                              // NO cambiar
  title: 'Nombre del Proyecto',      // ✅ Cambiar
  slug: 'nombre-del-proyecto',       // ✅ Cambiar (sin espacios, usar guiones)
  description: 'Descripción breve',  // ✅ Cambiar
  location: 'Ciudad, País',          // ✅ Cambiar
  year: 2025,                        // ✅ Cambiar
},
```

**Añadir un proyecto nuevo:**
1. Copia el bloque completo de un proyecto existente
2. Cambia el `id:` al siguiente número disponible
3. Modifica todos los campos excepto el `id`
4. Añade una coma `,` al final del proyecto anterior

---

### 📸 Fotografías del Archivo

**📁 Archivo:** `app/lib/photos.ts`

**Editar información de una foto:**
```typescript
{ 
  id: 15,
  filename: 'photo-015.jpg',         // Debe coincidir con el archivo en /images
  title: 'Título de la foto',
  description: 'Descripción breve',
  location: 'Ubicación',
  year: '2025',
  category: 'Paisajismo',           // Categorías: Paisajismo, Arquitectura, Detalles
},
```

**Añadir una nueva foto:** Igual que añadir un proyecto (copia, pega, modifica)

---

## 2. Cambiar Imágenes

### 📁 Ubicación: `public/images/`

### 🖼️ Tipos de Imágenes

| Imagen | Nombre del archivo | Uso |
|--------|-------------------|-----|
| Foto de perfil | `image-quien-soy-1.jpg` | Página "Sobre mí" |
| Portada principal | `image-hero.jpg` | Página de inicio |
| Proyectos paisajismo | `image-landscape-project-01.jpg` a `-06.jpg` | Galería de proyectos |
| Archivo fotográfico | `photo-001.jpg` a `photo-040.jpg` | Página de fotografía |
| Sketching/Acuarelas | `watercolor-001.jpg` a `watercolor-011.jpg` | Página de sketching |

---

### ✅ Pasos para Reemplazar una Imagen

1. **Prepara tu imagen:**
   - Formato: JPG (recomendado) o PNG
   - Tamaño: 1200-2000px de ancho (se optimizará después)

2. **Renombra exactamente igual:**
   - Ejemplo: Si quieres cambiar la foto 15, nómbrala `photo-015.jpg`
   - ⚠️ Respeta mayúsculas/minúsculas y guiones

3. **Copia a la carpeta:**
   - Ve a `public/images/`
   - Pega tu imagen
   - Reemplaza cuando te pregunte

4. **Optimiza** (ver siguiente sección)

---

### 🆕 Añadir una Nueva Fotografía

**Paso 1:** Coloca la imagen en `public/images/`
- Nómbrala siguiendo el patrón: `photo-041.jpg` (siguiente número)

**Paso 2:** Registra la foto en `app/lib/photos.ts`
```typescript
// Al final de la lista, añade:
{ 
  id: 41,
  filename: 'photo-041.jpg',
  title: 'Título de tu foto',
  description: 'Descripción',
  location: 'Ciudad, País',
  year: '2025',
  category: 'Paisajismo',
},
```

**⚠️ Importante:** Añade una coma `,` después de la foto anterior

---

### 📏 Reglas de Nomenclatura

✅ **Correcto:**
- `mi-proyecto.jpg`
- `photo-001.jpg`
- `image-hero.jpg`

❌ **Incorrecto:**
- `Mi Proyecto.jpg` (tiene espacios)
- `foto_acuarela.JPG` (mezcla guión bajo con mayúsculas)
- `París-2024.jpg` (tiene acentos)

**Formato:** minúsculas, sin espacios, sin acentos, usar guiones `-`

---

## 3. Optimizar Imágenes

**⚡ Paso IMPORTANTE antes de subir cambios**

Las imágenes de cámara suelen pesar 3-10 MB. El script las reduce a 100-300 KB sin perder calidad visible.

---

### 🚀 Método Automático (Recomendado)

1. **Abre la Terminal** en la carpeta del proyecto

2. **Ejecuta el script:**
   ```bash
   ./optimize-images.sh
   ```

3. **¿Qué hace el script automáticamente?**
   - ✅ Busca todas las imágenes nuevas en `public/images/`
   - ✅ Las redimensiona a máximo 2000px
   - ✅ Las comprime con calidad 80% (excelente balance)
   - ✅ Guarda las originales en `public/images/originales/`
   - ✅ Te muestra el tamaño antes y después

**Ejemplo de salida:**
```
✅ photo-041.jpg
   Antes: 4.2M → Después: 245K

✅ image-hero.jpg
   Antes: 6.8M → Después: 387K

🎉 ¡Listo! Se optimizaron 2 imágenes
```

---

### 🛠️ Método Manual (Si no funciona el script)

**Para una imagen:**
```bash
sips -Z 2000 --setProperty formatOptions 80 nombre-imagen.jpg --out nombre-imagen.jpg
```

**Para todas las imágenes JPG de la carpeta:**
```bash
cd public/images
for img in *.jpg; do
  sips -Z 2000 --setProperty formatOptions 80 "$img" --out "$img"
done
```

---

### 🔍 ¿Por qué optimizar?

| Sin optimizar | Optimizado | Beneficio |
|---------------|------------|-----------|
| 5 MB por foto | 200-300 KB | Carga 15x más rápida |
| Sitio lento | Sitio rápido | Mejor experiencia |
| Mal SEO | Buen SEO | Google te posiciona mejor |

**💡 Regla de oro:** Siempre optimiza después de añadir o cambiar imágenes

---

## 4. Subir Cambios a GitHub

Una vez realizados los cambios y optimizadas las imágenes, súbelos a GitHub.

---

### 📱 Método A: GitHub Desktop (Más Fácil)

**Si no tienes GitHub Desktop:** [Descárgalo aquí](https://desktop.github.com/)

**Pasos:**

1. **Abre GitHub Desktop**
   
2. **Verás tus cambios** en la columna izquierda:
   - Archivos modificados en amarillo
   - Archivos nuevos en verde
   - Archivos eliminados en rojo

3. **Describe tus cambios** en el campo de abajo:
   ```
   Ejemplos de buenos mensajes:
   - "Actualizar foto de perfil"
   - "Añadir 5 fotos nuevas del proyecto jardín"
   - "Cambiar información de contacto"
   - "Actualizar texto página sobre mí"
   ```

4. **Haz clic en** "Commit to main" (botón azul)

5. **Haz clic en** "Push origin" (arriba a la derecha)

✅ **¡Listo!** Tus cambios están en GitHub

---

### 💻 Método B: Terminal (Más Rápido una vez aprendido)

**Pasos:**

1. **Verifica qué cambió:**
   ```bash
   git status
   ```
   Verás una lista de archivos modificados en rojo

2. **Añade todos los cambios:**
   ```bash
   git add .
   ```

3. **Guarda los cambios con un mensaje:**
   ```bash
   git commit -m "Tu mensaje descriptivo"
   ```
   
   **Ejemplos:**
   ```bash
   git commit -m "Actualizar foto de perfil y biografía"
   git commit -m "Añadir 3 fotos nuevas del proyecto urbano"
   git commit -m "Optimizar imágenes de portada"
   ```

4. **Súbelos a GitHub:**
   ```bash
   git push
   ```

✅ **¡Hecho!** 

---

### ⏱️ ¿Cuándo se verán los cambios en el sitio web?

- Si usas **Vercel** o servicios similares: **1-5 minutos** después del push
- Recibirás un email de confirmación cuando se publique
- Puedes ver el progreso en el dashboard de Vercel

---

## 🚨 Reglas de Oro

### ✅ SIEMPRE:

1. **Guarda una copia** del archivo antes de editarlo
2. **Haz cambios pequeños** y pruébalos uno por uno
3. **Optimiza imágenes** antes de subir a GitHub
4. **Escribe mensajes claros** en los commits
5. **Verifica** que el sitio funciona después de cada cambio

### ❌ NUNCA TOQUES:

- Palabras como: `import`, `export`, `const`, `function`, `className`
- Símbolos: `{`, `}`, `[`, `]`, `(`, `)`, `<`, `>`, `` ` ``
- Los valores `id:` (solo cámbialos si añades algo nuevo)
- Archivos fuera de los mencionados en esta guía

---

## 🆘 Si Algo Sale Mal

### Deshacer el último cambio en un archivo:

**En el editor:**
- Mac: `Cmd + Z`
- Windows: `Ctrl + Z`

**En Git (antes de hacer push):**
```bash
git checkout -- nombre-del-archivo.ts
```

### Volver a la versión anterior (después de hacer push):

```bash
git revert HEAD
git push
```

### Recuperar una imagen original:

Las imágenes originales están guardadas en: `public/images/originales/`

---

## 📊 Flujo de Trabajo Completo

```
1. Editar textos 
   └─ Abrir archivo → Cambiar texto → Guardar
   
2. Cambiar imágenes
   └─ Renombrar → Copiar a /images → Reemplazar
   
3. ⚡ Optimizar imágenes
   └─ ./optimize-images.sh
   
4. Subir a GitHub
   └─ git add . → git commit → git push
   
5. ⏱️ Esperar 1-5 minutos
   └─ Verificar cambios en el sitio
```

---

## 🎯 Ejemplos Prácticos

### Ejemplo 1: Cambiar Email y Teléfono

1. Abre `app/components/Footer.tsx`
2. Busca línea 51 para el email:
   ```tsx
   <a href="mailto:marcos-landscape@proton.me">
     marcos-landscape@proton.me  // ← Cambia aquí tu email
   </a>
   ```
3. Busca línea 61 para el teléfono:
   ```tsx
   <a href="tel:+34695531983">
     +34 695 531 983  // ← Cambia aquí tu teléfono
   </a>
   ```
4. Cambia por tus datos (mantén las comillas y etiquetas)
5. Guarda (Cmd + S)
6. Sube a GitHub

**Tiempo:** 3 minutos

---

### Ejemplo 2: Añadir Nueva Foto al Archivo

1. Renombra tu foto: `photo-041.jpg`
2. Copia a `public/images/`
3. Optimiza: `./optimize-images.sh`
4. Abre `app/lib/photos.ts`
5. Al final, añade:
   ```typescript
   { id: 41, filename: 'photo-041.jpg', title: 'Mi Proyecto', ... },
   ```
6. Guarda y sube a GitHub

**Tiempo:** 5 minutos

---

### Ejemplo 3: Actualizar Biografía Completa

1. Abre `app/about/page.tsx`
2. Busca los párrafos con `<p className="text-lg...">` (líneas 30-52)
3. Cambia el texto entre `>` y `</p>`
4. Guarda
5. Sube a GitHub

**Tiempo:** 5-10 minutos

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo cambiar varios archivos a la vez?**  
R: Sí, pero es mejor hacer cambios pequeños y probar uno por uno.

**P: ¿Por qué optimizar las imágenes?**  
R: Las fotos de cámara pesan 3-10 MB. Optimizarlas a 200-300 KB hace que el sitio cargue 15x más rápido.

**P: ¿Cuánto tarda en verse el cambio en el sitio?**  
R: Entre 1-5 minutos después de hacer `push` a GitHub.

**P: ¿Qué pasa si rompo algo?**  
R: Puedes deshacer con `Cmd + Z` o volver a la versión anterior con Git (ver sección "Si algo sale mal").

**P: ¿Necesito saber programar?**  
R: No. Solo sigue esta guía y cambia textos entre comillas sin tocar el código.

**P: ¿Puedo usar cualquier formato de imagen?**  
R: Usa JPG para fotos (mejor compresión) y PNG solo para logos o imágenes con transparencia.

**P: Se me olvidó optimizar las imágenes, ¿ahora qué?**  
R: Ejecuta `./optimize-images.sh`, luego sube los cambios de nuevo con git.

**P: ¿Cómo sé si el script funcionó?**  
R: Verás mensajes como "✅ photo-041.jpg - Antes: 4.2M → Después: 245K"

---

## 📞 Soporte

Si tienes problemas, guarda esta guía como referencia.

Para dudas técnicas complejas, contacta con tu desarrollador.

---

## 🔗 Enlaces Útiles

- **GitHub Desktop:** https://desktop.github.com/
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Documentación Git básica:** https://git-scm.com/book/es/

---

*Última actualización: Febrero 2026*
*Versión: 2.0 - Guía Sintética*
