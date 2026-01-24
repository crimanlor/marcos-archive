#!/bin/bash

# Script para optimizar imágenes del portfolio
# Uso: ./optimize-images.sh

echo "🖼️  Optimizando imágenes..."
echo ""

# Directorio de imágenes
IMAGE_DIR="public/images"

# Contador de imágenes optimizadas
count=0

# Crear carpeta temporal para las originales si no existe
mkdir -p "$IMAGE_DIR/originales"

# Función para procesar una imagen
process_image() {
  local img="$1"
  local quality="${2:-80}"
  
  if [ -f "$img" ]; then
    filename=$(basename "$img")
    
    # Verificar si ya está en la carpeta de originales
    if [[ ! "$img" == *"/originales/"* ]]; then
      # Obtener el tamaño original
      original_size=$(du -h "$img" | cut -f1)
      
      # Hacer backup del original
      cp "$img" "$IMAGE_DIR/originales/$filename"
      
      # Optimizar la imagen (max 2000px, calidad especificada)
      if [[ "$img" == *.png ]] || [[ "$img" == *.PNG ]]; then
        sips -Z 2000 "$img" --out "$img" > /dev/null 2>&1
      else
        sips -Z 2000 --setProperty formatOptions "$quality" "$img" --out "$img" > /dev/null 2>&1
      fi
      
      # Obtener el nuevo tamaño
      new_size=$(du -h "$img" | cut -f1)
      
      echo "✅ $filename"
      echo "   Antes: $original_size → Después: $new_size"
      echo ""
      
      ((count++))
    fi
  fi
}

# Procesar imágenes JPG y JPEG
for ext in jpg jpeg JPG JPEG; do
  for img in "$IMAGE_DIR"/*."$ext"; do
    process_image "$img" 80
  done
done

# Procesar imágenes PNG
for ext in png PNG; do
  for img in "$IMAGE_DIR"/*."$ext"; do
    process_image "$img"
  done
done

if [ $count -eq 0 ]; then
  echo "ℹ️  No se encontraron imágenes nuevas para optimizar"
else
  echo "🎉 ¡Listo! Se optimizaron $count imágenes"
  echo "📁 Las originales están guardadas en: $IMAGE_DIR/originales/"
fi
