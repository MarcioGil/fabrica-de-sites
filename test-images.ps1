# Script PowerShell para testar se todas as imagens do portfolio estão acessíveis

Write-Host "🔍 Testando imagens do portfolio..." -ForegroundColor Cyan

# Array com todas as imagens esperadas
$images = @(
  "padaria-interior.svg",
  "farmacia-interior.svg", 
  "loja-roupas-interior.svg",
  "restaurant-landing.svg",
  "site-institucional-consultoria.svg",
  "landing-page-ecommerce.svg"
)

$basePath = "public\images\portfolio"
$missingImages = @()

foreach ($image in $images) {
  $fullPath = Join-Path $basePath $image
  if (Test-Path $fullPath) {
    Write-Host "✅ $image encontrada" -ForegroundColor Green
  } else {
    Write-Host "❌ $image NÃO encontrada" -ForegroundColor Red
    $missingImages += $image
  }
}

if ($missingImages.Count -eq 0) {
  Write-Host ""
  Write-Host "🎉 Todas as imagens foram encontradas!" -ForegroundColor Green
  Write-Host ""
  Write-Host "📂 Imagens disponíveis:" -ForegroundColor Yellow
  Get-ChildItem $basePath | Format-Table Name, Length, LastWriteTime
} else {
  Write-Host ""
  Write-Host "⚠️  Imagens faltando:" -ForegroundColor Yellow
  foreach ($missing in $missingImages) {
    Write-Host "   - $missing" -ForegroundColor Red
  }
}

Write-Host ""
Write-Host "🌐 Para testar no navegador, acesse:" -ForegroundColor Cyan
Write-Host "http://localhost:3001" -ForegroundColor White