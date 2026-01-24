# 📸 Guía para Optimizar Imágenes del Portfolio

## Método Rápido (Recomendado) 🚀

### 1. Añade tus imágenes
Copia tus nuevas imágenes a la carpeta `public/images/`

### 2. Ejecuta el script de optimización
```bash
./optimize-images.sh
```

¡Listo! El script:
- ✅ Optimiza automáticamente todas las imágenes nuevas
- ✅ Reduce el tamaño a máximo 2000px
- ✅ Aplica compresión de calidad 80%
- ✅ Guarda las originales en `public/images/originales/`
- ✅ Muestra el tamaño antes y después

---

## Método Manual (Si prefieres más control) 🛠️

### Para una sola imagen:
```bash
sips -Z 2000 --setProperty formatOptions 80 tu-imagen.jpg --out tu-imagen.jpg
```

### Para todas las imágenes en una carpeta:
```bash
cd public/images
for img in *.jpg; do
  sips -Z 2000 --setProperty formatOptions 80 "$img" --out "$img"
done
```

---

## Parámetros de Optimización 📊

- **Tamaño máximo:** 2000px (ancho o alto, lo que sea mayor)
- **Calidad JPEG:** 80% (buen balance calidad/tamaño)
- **Resultado:** Reducción típica del 80-95% del tamaño original

### ¿Necesitas cambiar los parámetros?

Edita el archivo `optimize-images.sh` y modifica estos valores:

```bash
# Para imágenes más grandes (más calidad, más peso):
sips -Z 2500 --setProperty formatOptions 85 "$img"

# Para imágenes más pequeñas (menos calidad, menos peso):
sips -Z 1500 --setProperty formatOptions 75 "$img"
```

---

## Buenas Prácticas 💡

1. **Siempre haz backup de tus originales** (el script lo hace automáticamente en `public/images/originales/`)
2. **NO subas las originales a Git** - Ya están en `.gitignore` para evitarlo
3. **Guarda las originales en tu disco local o en la nube** (Google Drive, Dropbox, etc.)
4. **Optimiza antes de hacer commit** a git
5. **Verifica la calidad visual** después de optimizar
6. **Para fotografías de portfolio:** 2000px y calidad 80% es ideal
7. **Para miniaturas:** podrías usar 1000px y calidad 75%

### ⚠️ Importante sobre Backups

- ✅ Las originales se guardan en `public/images/originales/`
- ✅ Esta carpeta está en `.gitignore` (no se sube a GitHub)
- ✅ Guarda tus originales en un servicio de almacenamiento en la nube
- ❌ NO borres la carpeta `originales/` hasta estar seguro de la calidad
- ❌ NO subas originales al repositorio (son muy pesadas: 4-13MB c/u)

### 💾 Recomendación de Backup Externo

```bash
# Copia las originales a una carpeta fuera del proyecto
cp -r public/images/originales ~/Dropbox/Portfolio-Originales/
# o
cp -r public/images/originales ~/Google\ Drive/Portfolio-Originales/
```

---

## Troubleshooting 🔧

### El script no funciona
```bash
# Dale permisos de ejecución:
chmod +x optimize-images.sh
```

### No se encuentran las imágenes
Verifica que estés en la carpeta raíz del proyecto:
```bash
cd /ruta/a/tu/proyecto
./optimize-images.sh
```

### Quiero optimizar solo imágenes específicas
```bash
# Optimiza solo las que empiezan con "photo-"
cd public/images
for img in photo-*.jpg; do
  sips -Z 2000 --setProperty formatOptions 80 "$img" --out "$img"
done
```

---

## Alternativas con Herramientas Externas 🔌

### ImageOptim (macOS - Interfaz gráfica)
1. Descarga: https://imageoptim.com/
2. Arrastra tus imágenes a la app
3. Optimización automática

### TinyPNG (Online)
1. https://tinypng.com/
2. Sube máximo 20 imágenes a la vez
3. Descarga las optimizadas

### ImageMagick (Más potente)
```bash
# Instalar con Homebrew
brew install imagemagick

# Optimizar
convert imagen.jpg -resize 2000x2000\> -quality 80 imagen.jpg
```

---

## Flujo de Trabajo Recomendado 📋

1. **Añadir imágenes nuevas** → `public/images/`
2. **Ejecutar script** → `./optimize-images.sh`
3. **Verificar resultado** → Abrir en navegador
4. **Actualizar código** → Añadir al array en el componente
5. **Commit** → `git add . && git commit -m "Add new photos"`

---

¿Preguntas? Revisa la documentación de sips:
```bash
man sips
```
