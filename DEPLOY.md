# Deploy Configuration
# Este arquivo contém configurações para diferentes plataformas de deploy

## 🚀 Deploy Options

### 1. GitHub Pages
Se o projeto está no GitHub, adicione este workflow em `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 2. Netlify
1. Faça o build: `npm run build`
2. Acesse: https://app.netlify.com/drop
3. Arraste a pasta `dist` para a área de drop

**Configurações do Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`

### 3. Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
npx vercel
```

**Configurações automáticas do Vercel:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### 4. Azure Static Web Apps
```bash
# Já configurado com SWA CLI
npx swa deploy --env production
```

### 5. Firebase Hosting
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Inicializar
firebase init

# Deploy
firebase deploy
```

## 📊 Build Information
- Framework: React + Vite
- Build folder: `dist`
- Build command: `npm run build`
- Dev server: `npm run dev` (http://localhost:5173)

## 🔧 Troubleshooting
- Se houver erro de permissão no PowerShell: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
- Para ver logs detalhados: adicione `--verbose` aos comandos
- Para builds de produção: certifique-se que NODE_ENV=production