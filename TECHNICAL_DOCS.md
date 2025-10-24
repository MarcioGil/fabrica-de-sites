# 📚 Documentação Técnica - Doce-Code256

## 🔧 Configurações do Projeto

### Vite Configuration (vite.config.js)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

### ESLint Configuration (eslint.config.js)

```javascript
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.2' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
```

## 📦 Package.json

```json
{
  "name": "doce-code256-landing",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^9.9.1",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "vite": "^5.0.8"
  }
}
```

## 🎨 Sistema de Design

### Paleta de Cores

```css
/* Cores Primárias */
--primary-blue: #667eea;
--primary-purple: #764ba2;
--accent-red: #ff6b6b;
--accent-yellow: #feca57;

/* Cores de Estado */
--success: #28a745;
--warning: #ffc107;
--error: #dc3545;
--info: #17a2b8;

/* Cores Neutras */
--white: #ffffff;
--light-gray: #f8f9fa;
--medium-gray: #6c757d;
--dark-gray: #343a40;
--black: #000000;

/* Gradientes */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-accent: linear-gradient(45deg, #ff6b6b, #feca57);
--gradient-light: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
```

### Tipografia

```css
/* Fonte Principal */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Hierarquia de Títulos */
h1: 3.5rem (56px) - Hero titles
h2: 2.5rem (40px) - Section titles  
h3: 1.8rem (28px) - Subsection titles
h4: 1.3rem (20px) - Card titles
h5: 1.1rem (18px) - Small headings
h6: 1rem (16px) - Base size

/* Corpo do Texto */
body: 1rem (16px) - Base
small: 0.875rem (14px) - Secondary text
```

### Espaçamentos

```css
/* Grid System */
--container-max-width: 1200px;
--grid-gap: 30px;
--section-padding: 80px 0;

/* Espaçamentos Padrão */
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
--spacing-xxl: 64px;

/* Border Radius */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 15px;
--radius-xl: 20px;
--radius-full: 50px;
```

## 🧩 Estrutura de Componentes

### App.jsx - Componente Principal

```javascript
// Estrutura do componente principal
function App() {
  // Estados para dados dinâmicos
  const [testimonials, setTestimonials] = useState([]);
  
  // Dados estáticos
  const portfolioProjects = [...];
  const services = [...];
  
  // Funções de callback
  const addTestimonial = (newTestimonial) => { ... };
  
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
```

### PortfolioGallery.jsx

```javascript
// Props esperadas
interface PortfolioGalleryProps {
  projects: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    details: string;
  }>;
}

// Estados internos
const [selectedProject, setSelectedProject] = useState(null);

// Funcionalidades
- Modal para exibição detalhada
- Sistema de tags para filtros
- Navegação entre projetos
- Responsividade automática
```

### AdvancedTestimonialSystem.jsx

```javascript
// Props esperadas
interface AdvancedTestimonialSystemProps {
  testimonials: Array<{
    name: string;
    company?: string;
    city?: string;
    text: string;
    rating: number;
    date: string;
    projectType?: string;
    verified: boolean;
    recent: boolean;
    recommendToFriends: boolean;
  }>;
  onAddTestimonial: (testimonial: object) => void;
}

// Estados internos
const [formData, setFormData] = useState({...});
const [filter, setFilter] = useState('all');
const [sortBy, setSortBy] = useState('newest');
const [showForm, setShowForm] = useState(false);

// Funcionalidades
- Formulário completo com validação
- Sistema de filtros e ordenação
- Métricas em tempo real
- Interface responsiva
```

## 📱 Responsividade

### Breakpoints

```css
/* Mobile First Approach */
/* Extra Small devices (phones, 576px and down) */
@media (max-width: 575.98px) { ... }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { ... }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }
```

### Grid System

```css
/* Container Principal */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Grids Responsivos */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
}
```

## 🔧 Otimizações de Performance

### Lazy Loading

```javascript
// Para componentes pesados
const AdvancedTestimonialSystem = React.lazy(() => 
  import('./components/AdvancedTestimonialSystem')
);

// Uso com Suspense
<Suspense fallback={<div>Carregando...</div>}>
  <AdvancedTestimonialSystem />
</Suspense>
```

### Code Splitting

```javascript
// Divisão por rotas (se implementar React Router)
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
```

### Otimizações de Imagem

```javascript
// SVGs otimizados
- Uso de SVG ao invés de imagens bitmap
- Compressão automática pelo Vite
- Lazy loading para imagens não críticas

// Formatos modernos
- WebP para imagens com fallback
- Uso de CSS para imagens decorativas
```

## 🚀 Processo de Build

### Development

```bash
npm run dev
# Inicia servidor de desenvolvimento
# Hot reload habilitado
# Source maps para debugging
# Porta padrão: 3000
```

### Production Build

```bash
npm run build
# Minificação automática
# Tree shaking para remover código não usado
# Otimização de assets
# Source maps para produção (opcional)
```

### Preview

```bash
npm run preview
# Serve a versão buildada localmente
# Útil para testar antes do deploy
# Simula ambiente de produção
```

## 📊 Métricas e Analytics

### Performance Metrics

```javascript
// Core Web Vitals
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

// Lighthouse Score Target
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90
```

### Bundle Analysis

```bash
# Instalar bundle analyzer
npm install --save-dev rollup-plugin-analyzer

# Analisar bundle
npm run build -- --mode analyze
```

## 🔒 Segurança

### Validação de Formulários

```javascript
// Validação no frontend
const validateForm = (data) => {
  const errors = {};
  
  if (!data.name.trim()) {
    errors.name = 'Nome é obrigatório';
  }
  
  if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.email = 'Email inválido';
  }
  
  return errors;
};

// Sanitização de dados
const sanitizeInput = (input) => {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};
```

### Headers de Segurança

```javascript
// Para implementar no servidor
{
  "Content-Security-Policy": "default-src 'self'",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}
```

## 🧪 Testes

### Setup de Testes

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

### Testes de Componente

```javascript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders hero section', () => {
    render(<App />);
    expect(screen.getByText(/Sites Profissionais/i)).toBeInTheDocument();
  });
  
  it('displays services grid', () => {
    render(<App />);
    expect(screen.getByText(/Nossos Serviços/i)).toBeInTheDocument();
  });
});
```

## 📈 Roadmap de Melhorias

### Próximas Features

1. **Sistema de Blog**
   - CMS headless (Strapi/Contentful)
   - SEO otimizado para artigos
   - Sistema de comentários

2. **Dashboard Administrativo**
   - Gerenciamento de projetos
   - Moderação de avaliações
   - Analytics integrado

3. **PWA (Progressive Web App)**
   - Service Worker
   - Offline capabilities
   - Push notifications

4. **Integração com APIs**
   - WhatsApp Business API
   - Google Analytics 4
   - Facebook Pixel

5. **Otimizações Avançadas**
   - Server-side rendering (Next.js)
   - Image optimization
   - CDN integration

### Melhorias de UX/UI

1. **Micro-interações**
   - Loading states mais elaborados
   - Feedback visual para ações
   - Animações de transição

2. **Acessibilidade**
   - Screen reader optimization
   - Keyboard navigation
   - High contrast mode

3. **Personalização**
   - Dark mode toggle
   - Tamanho de fonte ajustável
   - Preferências do usuário

---

## 📞 Suporte Técnico

Para dúvidas técnicas ou suporte:

- **Email:** marciopaivagil@gmail.com
- **WhatsApp:** (21) 96494-9427
- **Instagram:** [@docecodigo.tech256](https://www.instagram.com/docecodigo.tech256?igsh=Z3U0bnJod3hhMTc=)

**Desenvolvido por Márcio Paiva Gil - Doce-Code256** 🍰💻