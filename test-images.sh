#!/bin/bash
# Script para testar se todas as imagens do portfolio estão acessíveis

echo "🔍 Testando imagens do portfolio..."

# Array com todas as imagens esperadas
images=(
  "padaria-interior.svg"
  "farmacia-interior.svg"
  "loja-roupas-interior.svg"
  "restaurant-landing.svg"
  "site-institucional-consultoria.svg"
  "landing-page-ecommerce.svg"
)

base_path="public/images/portfolio"
missing_images=()

for image in "${images[@]}"; do
  if [ -f "$base_path/$image" ]; then
    echo "✅ $image encontrada"
  else
    echo "❌ $image NÃO encontrada"
    missing_images+=("$image")
  fi
done

if [ ${#missing_images[@]} -eq 0 ]; then
  echo ""
  echo "🎉 Todas as imagens foram encontradas!"
  echo ""
  echo "📂 Imagens disponíveis:"
  ls -la "$base_path"
else
  echo ""
  echo "⚠️  Imagens faltando:"
  for missing in "${missing_images[@]}"; do
    echo "   - $missing"
  done
fi