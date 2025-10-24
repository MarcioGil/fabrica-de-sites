# 🚀 Guia de Deploy - Doce-Code256

## 📝 Pré-Deploy Checklist

Antes de fazer o deploy, verifique:

- [ ] Todos os dados de contato estão corretos
- [ ] Links do WhatsApp funcionam corretamente  
- [ ] Links do Instagram estão funcionais
- [ ] Todas as imagens estão carregando
- [ ] Formulários estão validando corretamente
- [ ] Site está responsivo em todos os dispositivos
- [ ] Performance está otimizada (Lighthouse > 90)
- [ ] SEO básico está implementado

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado)

**Por que Vercel?**
- Deploy automático via Git
- CDN global gratuito
- HTTPS automático
- Zero configuration
- Perfeito para React/Vite

**Passos:**

1. **Criar conta na Vercel**
   ```
   https://vercel.com/signup
   ```

2. **Conectar repositório GitHub**
   - Clique em "New Project"
   - Importe o repositório `fabrica-de-sites`
   - Configure branch como `main`

3. **Configurações do projeto:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Deploy automático**
   - Todo push na branch `main` = deploy automático
   - Preview deployments para branches/PRs

**URL final:** `https://fabrica-de-sites-marciogil.vercel.app`

### 2. Netlify

**Vantagens:**
- Interface amigável
- Forms handling gratuito
- Redirects e rewrites fáceis

**Passos:**

1. **Criar conta no Netlify**
   ```
   https://app.netlify.com/signup
   ```

2. **Deploy via GitHub:**
   - "New site from Git"
   - Conectar GitHub
   - Selecionar repositório

3. **Configurações:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Configurar domínio customizado (opcional)**

### 3. GitHub Pages

**Para deploy gratuito no GitHub:**

1. **Instalar gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Adicionar scripts no package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://marciogil.github.io/fabrica-de-sites"
   }
   ```

3. **Fazer deploy:**
   ```bash
   npm run deploy
   ```

4. **Configurar no GitHub:**
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages

**URL:** `https://marciogil.github.io/fabrica-de-sites`

## 🔧 Configurações Personalizadas

### Domínio Próprio

**Exemplo:** `www.docecode256.com.br`

1. **Comprar domínio:**
   - Registro.br (domínios .br)
   - GoDaddy, Namecheap, etc.

2. **Configurar DNS:**
   ```
   Tipo: CNAME
   Nome: www
   Valor: fabrica-de-sites-marciogil.vercel.app
   
   Tipo: A
   Nome: @
   Valor: 76.76.19.61 (IP do Vercel)
   ```

3. **Adicionar domínio na Vercel:**
   - Project Settings → Domains
   - Adicionar domínio customizado

### Analytics

**Google Analytics 4:**

1. **Criar propriedade GA4**

2. **Adicionar no index.html:**
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

**Facebook Pixel:**

```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 📧 Configuração de Email

### Formulário de Contato

**Opção 1: Formspree (Recomendado)**

```html
<form action="https://formspree.io/f/FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

**Opção 2: Netlify Forms**

```html
<form netlify>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

## 🔍 SEO Otimização

### Meta Tags

**Adicionar no index.html:**

```html
<meta name="description" content="Doce-Code256 - Sites profissionais para pequenos negócios do interior. Criamos sites, landing pages e lojas virtuais com preços acessíveis.">
<meta name="keywords" content="sites, landing pages, pequenos negócios, interior, são paulo, rio de janeiro, desenvolvimento web">
<meta name="author" content="Márcio Paiva Gil">

<!-- Open Graph -->
<meta property="og:title" content="Doce-Code256 - Sites para Pequenos Negócios">
<meta property="og:description" content="Especializados em criar sites profissionais para comércios e prestadores de serviços do interior.">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://docecode256.com.br">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Doce-Code256 - Sites para Pequenos Negócios">
<meta name="twitter:description" content="Especializados em criar sites profissionais para comércios e prestadores de serviços do interior.">
<meta name="twitter:image" content="/twitter-image.jpg">
```

### Sitemap

**Criar public/sitemap.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://docecode256.com.br/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Robots.txt

**Criar public/robots.txt:**

```txt
User-agent: *
Allow: /
Sitemap: https://docecode256.com.br/sitemap.xml
```

## 📊 Monitoramento

### Google Search Console

1. **Adicionar propriedade:**
   ```
   https://search.google.com/search-console
   ```

2. **Verificar domínio:**
   - Upload do arquivo HTML
   - ou Meta tag verification

3. **Enviar sitemap:**
   ```
   https://docecode256.com.br/sitemap.xml
   ```

### Performance Monitoring

**Tools recomendadas:**
- Google PageSpeed Insights
- GTmetrix
- Lighthouse CI
- Web.dev Measure

## 🔒 Segurança

### HTTPS

- Vercel/Netlify: Automático
- Domínio próprio: Let's Encrypt gratuito

### Headers de Segurança

**Configurar em vercel.json:**

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

## 📱 PWA (Progressive Web App)

### Service Worker

**Criar public/sw.js:**

```javascript
const CACHE_NAME = 'docecode256-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

### Web App Manifest

**Criar public/manifest.json:**

```json
{
  "name": "Doce-Code256",
  "short_name": "DoceCode256",
  "description": "Sites profissionais para pequenos negócios",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#667eea",
  "theme_color": "#667eea",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 🚨 Troubleshooting

### Problemas Comuns

**1. Build falha:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

**2. Imagens não carregam:**
- Verificar se estão na pasta `public/`
- Verificar caminhos relativos
- Verificar se arquivos existem

**3. Links WhatsApp não funcionam:**
- Verificar formato: `https://wa.me/5521964949427`
- Testar número sem caracteres especiais

**4. Deploy não atualiza:**
- Verificar se branch está correta
- Force push se necessário
- Limpar cache do CDN

### Logs e Debug

**Vercel:**
```bash
# Instalar CLI
npm i -g vercel

# Ver logs
vercel logs
```

**Netlify:**
- Deploy logs no dashboard
- Function logs para serverless

## 📞 Suporte

**Para questões de deploy:**

- **Email:** marciopaivagil@gmail.com
- **WhatsApp:** (21) 96494-9427
- **Instagram:** [@docecodigo.tech256](https://www.instagram.com/docecodigo.tech256)

---

**Desenvolvido por Márcio Paiva Gil - Doce-Code256** 🍰💻

*Site no ar = negócios crescendo!* 🚀