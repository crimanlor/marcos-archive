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

# Buscar todas las imágenes JPG y JPEG
for img in "$IMAGE_DIR"/*.{jpg,jpeg,JPG,JPEG} 2>/dev/null; do
  # Verificar si el archivo existe
  if [ -f "$img" ]; then
    # Obtener el nombre del archivo
    filename=$(basename "$img")
    
    # Verificar si ya está en la carpeta de originales (para no procesar dos veces)
    if [[ ! "$img" == *"/originales/"* ]]; then
      # Obtener el tamaño original
      original_size=$(du -h "$img" | cut -f1)
      
      # Hacer backup del original
      cp "$img" "$IMAGE_DIR/originales/$filename"
      
      # Optimizar la imagen (max 2000px, calidad 80%)
      sips -Z 2000 --setProperty formatOptions 80 "$img" --out "$img" > /dev/null 2>&1
      
      # Obtener el nuevo tamaño
      new_size=$(du -h "$img" | cut -f1)
      
      echo "✅ $filename"
      echo "   Antes: $original_size → Después: $new_size"
      echo ""
      
      ((count++))
    fi
  fi
done

# Buscar también imágenes PNG
for img in "$IMAGE_DIR"/*.{png,PNG} 2>/dev/null; do
  if [ -f "$img" ]; then
    filename=$(basename "$img")
    
    if [[ ! "$img" == *"/originales/"* ]]; then
      original_size=$(du -h "$img" | cut -f1)
      cp "$img" "$IMAGE_DIR/originales/$filename"
      sips -Z 2000 "$img" --out "$img" > /dev/null 2>&1
      new_size=$(du -h "$img" | cut -f1)
      
      echo "✅ $filename"
      echo "   Antes: $original_size → Después: $new_size"
      echo ""
      
      ((count++))
    fi
  fi
done

if [ $count -eq 0 ]; then
  echo "ℹ️  No se encontraron imágenes nuevas para optimizar"
else
  echo "🎉 ¡Listo! Se optimizaron $count imágenes"
  echo "📁 Las originales están guardadas en: $IMAGE_DIR/originales/"
fi
