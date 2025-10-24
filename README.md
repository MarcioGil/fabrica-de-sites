# 🍰 Doce-Code256 - Landing Page

> **Fábrica de Sites Profissionais para Pequenos Negócios do Interior**

Uma landing page moderna e responsiva desenvolvida em React para a **Doce-Code256**, especializada em criar sites profissionais para pequenos comércios e prestadores de serviços do interior do Brasil.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Componentes Principais](#-componentes-principais)
- [Customização](#-customização)
- [Deploy](#-deploy)
- [Contato](#-contato)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

A **Doce-Code256** é uma empresa especializada em desenvolvimento de sites para pequenos negócios do interior, oferecendo soluções digitais acessíveis e profissionais. Esta landing page foi desenvolvida para:

- 🏪 Atrair pequenos comerciantes e prestadores de serviços
- 💰 Apresentar preços acessíveis para a realidade do interior
- 📱 Funcionar perfeitamente em dispositivos móveis
- ⭐ Permitir que clientes deixem avaliações detalhadas
- 🎨 Mostrar portfólio com projetos reais

### Proprietário e Fundador
- **Nome:** Márcio Paiva Gil
- **Email:** marciopaivagil@gmail.com
- **WhatsApp:** (21) 96494-9427
- **Instagram:** [@docecodigo.tech256](https://www.instagram.com/docecodigo.tech256?igsh=Z3U0bnJod3hhMTc=)

Este projeto foi desenvolvido em React com Vite, oferecendo uma experiência moderna e responsiva para apresentar os serviços da Doce-Code256. A landing page inclui:

- ✨ Design moderno e responsivo
- 🎨 Animações suaves e interativas
- 📱 Totalmente otimizada para mobile
- 🌟 Sistema de avaliações avançado com filtros e métricas
- 📧 Seção de contato completa
- 🎯 Call-to-actions estratégicos
- 🖼️ Portfólio interativo com projetos reais

## ✨ Funcionalidades

### 🎨 Design e Interface

- ✅ Design moderno com gradientes e animações suaves
- ✅ Totalmente responsivo (mobile-first)
- ✅ Navegação smooth scroll entre seções
- ✅ Paleta de cores profissional
- ✅ Tipografia otimizada para legibilidade

### 📊 Sistema Avançado de Avaliações

- ✅ Formulário completo para novas avaliações
- ✅ Sistema de filtros (todas, 5 estrelas, recentes)
- ✅ Ordenação por data, nota ou nome
- ✅ Métricas de satisfação em tempo real
- ✅ Avaliações verificadas com badges
- ✅ Distribuição visual de notas (gráfico de barras)

### �️ Portfólio Interativo

- ✅ Galeria de projetos com modal expandido
- ✅ Projetos específicos para negócios do interior
- ✅ Tags para categorização
- ✅ Descrições detalhadas dos projetos
- ✅ Mockups em SVG customizados

### 📞 Seção de Contato

- ✅ Formulário de contato completo
- ✅ Integração com WhatsApp
- ✅ Informações de atendimento
- ✅ Área de cobertura claramente definida

## �🛠️ Tecnologias Utilizadas

### Frontend

- **React 18.2.0** - Biblioteca JavaScript para interfaces
- **Vite 5.0.8** - Build tool moderna e rápida
- **CSS3** - Estilização avançada com flexbox e grid
- **JavaScript ES6+** - Sintaxe moderna

### Dependências de Desenvolvimento

- **ESLint** - Linting de código JavaScript
- **@vitejs/plugin-react** - Plugin do Vite para React
- **@eslint/js** - Configurações base do ESLint

### Design e Assets

- **SVG** - Ícones e mockups vetorizados
- **Google Fonts** - Tipografia (Inter)
- **CSS Animations** - Transições e efeitos visuais

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** (geralmente vem com o Node.js)
- **Git** (para clonagem do repositório)

Verificar versões:

```bash
node --version
npm --version
git --version
```

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/MarcioGil/fabrica-de-sites.git
cd fabrica-de-sites
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto em modo desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em: `http://localhost:3000`

### 4. Build para produção

```bash
npm run build
```

### 5. Preview do build de produção

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```text
fabrica-de-sites/
├── public/
│   ├── images/
│   │   ├── padaria-interior.svg
│   │   ├── farmacia-interior.svg
│   │   ├── loja-roupas-interior.svg
│   │   ├── restaurante.svg
│   │   ├── portfolio.svg
│   │   └── ecommerce.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PortfolioGallery.jsx
│   │   └── AdvancedTestimonialSystem.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

### Descrição dos Diretórios

- **`public/`** - Arquivos estáticos servidos diretamente
- **`public/images/`** - Mockups em SVG dos projetos do portfólio
- **`src/`** - Código fonte da aplicação
- **`src/components/`** - Componentes React reutilizáveis
- **`src/App.jsx`** - Componente principal da aplicação
- **`src/index.css`** - Estilos globais da aplicação

## 🧩 Componentes Principais

### App.jsx

Componente principal que contém:

- Hero Section com call-to-action
- Seção de benefícios para pequenos negócios
- Grid de serviços com preços
- Portfólio de projetos
- Sistema de avaliações
- Formulário de contato
- Footer com informações

### PortfolioGallery.jsx

Componente interativo que exibe:

- Grid responsivo de projetos
- Modal com detalhes expandidos
- Sistema de tags
- Navegação entre projetos

### AdvancedTestimonialSystem.jsx

Sistema completo de avaliações com:

- Resumo estatístico das avaliações
- Filtros e ordenação
- Formulário para novas avaliações
- Validação de dados
- Métricas de satisfação

## 🎨 Customização

### Cores e Tema

As cores principais estão definidas no arquivo `src/index.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-gradient: linear-gradient(45deg, #ff6b6b, #feca57);
  --text-primary: #333;
  --text-secondary: #666;
  --background-light: #f8f9fa;
}
```

### Serviços e Preços

Para alterar os serviços oferecidos, edite o array `services` em `src/App.jsx`:

```javascript
const services = [
  {
    icon: "🌐",
    title: "Sites Profissionais",
    description: "Sites institucionais para apresentar seu negócio...",
    price: "A partir de R$ 899",
    features: ["Design Responsivo", "Otimização SEO", ...]
  },
  // Adicione mais serviços aqui
];
```

### Projetos do Portfólio

Para adicionar novos projetos, edite o array `portfolioProjects` em `src/App.jsx`:

```javascript
const portfolioProjects = [
  {
    id: 1,
    title: "Nome do Projeto",
    description: "Descrição breve...",
    image: "/images/projeto.svg",
    tags: ["Tag1", "Tag2"],
    details: "Descrição detalhada..."
  },
  // Adicione mais projetos aqui
];
```

## 📞 Contato

### Proprietário

- **Márcio Paiva Gil**
- **Email:** <marciopaivagil@gmail.com>
- **WhatsApp:** (21) 96494-9427
- **Instagram:** [@docecodigo.tech256](https://www.instagram.com/docecodigo.tech256?igsh=Z3U0bnJod3hhMTc=)

### Empresa

- **Nome:** Doce-Code256
- **Especialidade:** Sites para pequenos negócios do interior
- **Área de Atendimento:** Todo o Brasil (especialista em SP e RJ)
- **Horário:** Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h

## 📄 Licença

Este projeto é propriedade da **Doce-Code256** e **Márcio Paiva Gil**. Todos os direitos reservados.

---

**Desenvolvido com ❤️ por Márcio Paiva Gil**

*Transformando pequenos negócios em grandes sucessos digitais!* 🚀
- **JavaScript ES6+** - Funcionalidades modernas

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/MarcioGil/fabrica-de-sites.git
cd fabrica-de-sites
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

### Scripts disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção
- `npm run lint` - Executa o linter para verificar o código

## 🎨 Funcionalidades

### 📱 Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Breakpoints otimizados para diferentes dispositivos
- Experiência consistente em todas as telas

### 🌟 Sistema de Depoimentos
- Exibição de depoimentos com sistema de estrelas
- Formulário para adicionar novos depoimentos
- Avaliação interativa com hover effects
- Validação de formulário

### 🎯 Seções Principais
- **Hero Section**: Apresentação impactante
- **Serviços**: Cards detalhados com preços
- **Portfólio**: Exemplos de trabalhos realizados
- **Valores**: Visão, missão e valores da empresa
- **Requisitos**: O que os clientes esperam
- **Depoimentos**: Feedback dos clientes
- **Contato**: Múltiplas formas de contato

### ✨ Animações e Interações
- Hover effects em cards e botões
- Transições suaves entre estados
- Animações de entrada dos elementos
- Loading states e feedback visual

## 📁 Estrutura do Projeto

```
fabrica-de-sites/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Componente principal
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
├── vite.config.js       # Configuração do Vite
└── README.md           # Este arquivo
```

## 🎨 Paleta de Cores

- **Azul Principal**: #007BFF
- **Azul Claro**: #00BFFF
- **Dourado**: #FFD700 (para estrelas)
- **Verde**: #28a745 (para preços)
- **Cinza**: #333, #666, #999
- **Branco**: #FFFFFF
- **Background**: Gradiente de #f5f7fa para #c3cfe2

## 📞 Informações de Contato

- **Email**: marciopaivagil@gmail.com
- **WhatsApp**: (21) 96494-9427
- **Instagram**: @docecodigo.tech256

## 🚀 Deploy

### Para fazer deploy em produção:

1. **Construa o projeto:**
```bash
npm run build
```

2. **Os arquivos otimizados estarão na pasta `dist/`**

3. **Opções de deploy:**
   - Vercel: `npm i -g vercel && vercel`
   - Netlify: Arraste a pasta `dist` para netlify.com
   - GitHub Pages: Configure GitHub Actions
   - Qualquer servidor web: Faça upload da pasta `dist`

## 📝 Customização

### Alterando cores:
Edite as variáveis CSS no arquivo `src/index.css`

### Modificando conteúdo:
Edite o componente `src/App.jsx`

### Adicionando novas seções:
1. Crie um novo componente
2. Adicione os estilos correspondentes
3. Importe e use no App.jsx

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- Design inspirado nas melhores práticas de UX/UI
- Ícones e emojis para melhor experiência visual
- Comunidade React por todas as ferramentas incríveis

---

**Desenvolvido com ❤️ por Doce-Code256**

*"Transformando ideias em experiências digitais únicas"*