# Script de Deploy para Fabrica de Sites
# Este script automatiza o processo de build e preparacao para deploy

Write-Host "Iniciando processo de deploy..." -ForegroundColor Green

# Verificar se as dependencias estao instaladas
if (!(Test-Path "node_modules")) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm install
}

# Fazer o build da aplicacao
Write-Host "Fazendo build da aplicacao..." -ForegroundColor Yellow
npm run build

# Verificar se o build foi bem-sucedido
if (Test-Path "dist") {
    Write-Host "Build concluido com sucesso!" -ForegroundColor Green
    Write-Host "Arquivos prontos para deploy em: $(Get-Location)\dist" -ForegroundColor Cyan
    
    # Mostrar informacoes do build
    $distSize = (Get-ChildItem -Path "dist" -Recurse | Measure-Object -Property Length -Sum).Sum
    $distSizeMB = [math]::Round($distSize / 1MB, 2)
    Write-Host "Tamanho total do build: $distSizeMB MB" -ForegroundColor Cyan
    
    Write-Host ""
    Write-Host "Opcoes de Deploy Disponiveis:" -ForegroundColor Magenta
    Write-Host "1. GitHub Pages - Configure no repositorio GitHub" -ForegroundColor White
    Write-Host "2. Netlify - Arraste a pasta 'dist' para netlify.app/drop" -ForegroundColor White
    Write-Host "3. Vercel - Execute 'npx vercel' nesta pasta" -ForegroundColor White
    Write-Host "4. Azure Static Web Apps - Execute 'npx swa deploy --env production'" -ForegroundColor White
    Write-Host ""
    
    # Abrir a pasta dist no explorer
    Write-Host "Abrindo pasta de build..." -ForegroundColor Yellow
    Start-Process "dist"
    
} else {
    Write-Host "Erro no build! Verifique as mensagens acima." -ForegroundColor Red
    exit 1
}

Write-Host "Script de deploy finalizado!" -ForegroundColor Green