import React, { useState, useEffect } from 'react';
import './index.css';
import RequirementsForm from './components/RequirementsForm';
import PortfolioDev from './components/PortfolioDev';

// Referenciar imagens do portfólio diretamente da pasta public
const visualPadaria = '/images/portfolio/visual-padaria.svg';
const visualSacolao = '/images/portfolio/visual-sacolao.svg';
const visualSalao = '/images/portfolio/visual-salao.svg';
const visualLanchonete = '/images/portfolio/visual-lanchonete.svg';
const visualPizzaria = '/images/portfolio/visual-pizzaria.svg';
const visualAcai = '/images/portfolio/visual-acai.svg';
const visualAngu = '/images/portfolio/visual-angu.svg';
const visualHamburger = '/images/portfolio/visual-hamburger.svg';
const visualMinimercado = '/images/portfolio/visual-minimercado.svg';
const visualFarmacia = '/images/portfolio/visual-farmacia.svg';
const visualBoutique = '/images/portfolio/visual-boutique.svg';
const logoVisual = '/images/logo-visual.svg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentComponent, setCurrentComponent] = useState('main');
  const [testimonialForm, setTestimonialForm] = useState({
    nome: '',
    empresa: '',
    depoimento: '',
    estrelas: 5
  });
  const [showForm, setShowForm] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

  // Portfolio com imagens visuais
  const portfolioProjects = [
    {
      id: 1,
      title: "Padaria Doce Manhã",
      description: "Site institucional com catálogo de produtos e sistema de encomendas online",
      image: visualPadaria,
      tech: ["React", "Node.js", "MongoDB"],
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Sacolão Verduras Frescas",
      description: "Portal completo com delivery de frutas e verduras",
      image: visualSacolao,
      tech: ["Vue.js", "Express", "PostgreSQL"],
      category: "Alimentação"
    },
    {
      id: 3,
      title: "Salão Beleza Premium",
      description: "Sistema de agendamento e catálogo de serviços",
      image: visualSalao,
      tech: ["Angular", "Python", "SQLite"],
      category: "Fashion"
    },
    {
      id: 4,
      title: "Casa & Lar Móveis",
      description: "Showroom virtual de móveis e decoração com realidade aumentada",
      image: realMoveis,
      tech: ["React", "Three.js", "Firebase"],
      category: "Decoração"
    },
    {
      id: 5,
      title: "Advocacia Santos",
      description: "Site profissional para escritório de advocacia com agendamento online",
      image: realAdvocacia,
      tech: ["WordPress", "PHP", "MySQL"],
      category: "Jurídico"
    },
    {
      id: 6,
      title: "Pizzaria Bella",
      description: "Sistema completo de delivery com cardápio interativo e pagamento online",
      image: realPizzaria,
      tech: ["React Native", "Node.js", "MongoDB"],
      category: "Alimentação"
    }
  ];

  // Depoimentos expandidos
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      company: "Tech Solutions Ltda",
      text: "A Fábrica de Sites transformou nossa presença digital completamente. O site ficou moderno, responsivo e aumentou nossas conversões em 150%.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      id: 2,
      name: "Maria Santos",
      company: "Boutique Elegance",
      text: "Profissionais excepcionais! Entregaram exatamente o que precisávamos, no prazo e com qualidade superior. Recomendo para todos!",
      rating: 5,
      image: "👩‍💼"
    },
    {
      id: 3,
      name: "Carlos Oliveira",
      company: "Restaurante Sabor & Arte",
      text: "O sistema de delivery que criaram triplicou nossos pedidos online. Interface intuitiva e suporte técnico impecável.",
      rating: 5,
      image: "👨‍🍳"
    },
    {
      id: 4,
      name: "Ana Costa",
      company: "Clínica Bem Estar",
      text: "Site profissional que transmite toda a confiança que nossos pacientes precisam. Agendamentos online funcionam perfeitamente!",
      rating: 5,
      image: "👩‍⚕️"
    }
  ];

  // Navegação suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Formulário de depoimento
  const handleTestimonialSubmit = (e) => {
    e.preventDefault();
    console.log('Novo depoimento:', testimonialForm);
    alert('Depoimento enviado com sucesso! Obrigado pelo seu feedback.');
    setTestimonialForm({ nome: '', empresa: '', depoimento: '', estrelas: 5 });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestimonialForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Formulário de requisitos
  const handleRequirementsSubmit = (formData) => {
    console.log('Requisitos do cliente:', formData);
    // Aqui você enviaria os dados para seu backend
  };

  return (
    <>
      {/* Renderização condicional dos componentes */}
      {currentComponent === 'PortfolioDev' && (
        <div>
          <button 
            onClick={() => setCurrentComponent('main')}
            style={{
              position: 'fixed',
              top: '20px',
              left: '20px',
              zIndex: 1000,
              padding: '10px 20px',
              background: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            ← Voltar ao Site Principal
          </button>
          <PortfolioDev />
        </div>
      )}

      {currentComponent === 'main' && (
    <div className="app">
      {/* Menu Horizontal Fixo */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="heart-logo">
              <img src={logoVisual} alt="Fábrica de Sites" width="32" height="32" />
            </div>
            <span className="logo-text">Fábrica de Sites</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#inicio" onClick={() => scrollToSection('inicio')} 
               className={activeSection === 'inicio' ? 'active' : ''}>Início</a>
            <a href="#exemplos" onClick={() => scrollToSection('exemplos')} 
               className={activeSection === 'exemplos' ? 'active' : ''}>Exemplos</a>
            <a href="#servicos" onClick={() => scrollToSection('servicos')} 
               className={activeSection === 'servicos' ? 'active' : ''}>Serviços</a>
            <a href="#portfolio" onClick={() => scrollToSection('portfolio')} 
               className={activeSection === 'portfolio' ? 'active' : ''}>Portfólio</a>
            <a href="#depoimentos" onClick={() => scrollToSection('depoimentos')} 
               className={activeSection === 'depoimentos' ? 'active' : ''}>Depoimentos</a>
            <a href="#contato" onClick={() => scrollToSection('contato')} 
               className={activeSection === 'contato' ? 'active' : ''}>Contato</a>
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Seção Hero */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>Criamos Sites que <span className="highlight">Transformam Negócios</span></h1>
          <p>Do pequeno empreendedor ao grande empresário, criamos sites profissionais que <strong>vendem 24 horas por dia</strong> e fazem seu negócio crescer de verdade!</p>
          
          <div className="hero-benefits">
            <div className="benefit">
              <span className="benefit-icon">💰</span>
              <div>
                <strong>Aumente suas Vendas</strong>
                <p>Sites que convertem visitantes em clientes</p>
              </div>
            </div>
            <div className="benefit">
              <span className="benefit-icon">📱</span>
              <div>
                <strong>Alcance Mais Pessoas</strong>
                <p>Presença digital profissional e responsiva</p>
              </div>
            </div>
            <div className="benefit">
              <span className="benefit-icon">⚡</span>
              <div>
                <strong>Resultados Rápidos</strong>
                <p>Entrega em até 15 dias úteis</p>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Sites Criados</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
            <div className="stat">
              <span className="stat-number">5 Anos</span>
              <span className="stat-label">No Mercado</span>
            </div>
          </div>

          <div className="hero-cta">
            <button className="cta-button" onClick={() => setShowRequirements(true)}>
              🚀 Quero Meu Site Agora!
            </button>
            <button className="cta-button-secondary" onClick={() => scrollToSection('exemplos')}>
              Ver Exemplos Reais
            </button>
          </div>

          <div className="hero-guarantee">
            <span className="guarantee-icon">✅</span>
            <p><strong>Garantia de 30 dias</strong> - Se não ficar satisfeito, devolvemos seu dinheiro!</p>
          </div>
        </div>
      </section>

      {/* Seção Exemplos de Landing Pages */}
      <section id="exemplos" className="examples-showcase">
        <div className="container">
          <h2>🎯 Veja Sites Reais que Criamos</h2>
          <p className="examples-subtitle">
            <strong>Do pequeno negócio ao grande empreendimento</strong> - criamos sites que funcionam para <em>qualquer tipo de negócio!</em>
          </p>

          <div className="business-categories">
            <div className="category-section">
              <h3>🏪 Negócios Populares & Familiares</h3>
              <div className="examples-grid">
                <div className="example-card popular">
                  <div className="example-icon">
                    <img src={visualAngu} alt="Angu à Baiana" style={{width: '60px', height: '40px', borderRadius: '8px'}} />
                  </div>
                  <div className="example-content">
                    <h4>Angu à Baiana da Tia Conceição</h4>
                    <p>Restaurante nordestino com 25 anos de tradição</p>
                    <div className="example-features">
                      <span>✅ Cardápio completo</span>
                      <span>✅ Pedidos pelo WhatsApp</span>
                      <span>✅ História familiar autêntica</span>
                    </div>
                  </div>
                </div>

                <div className="example-card popular">
                  <div className="example-icon">
                    <img src={visualHamburger} alt="Cachorro Quente" style={{width: '60px', height: '40px', borderRadius: '8px'}} />
                  </div>
                  <div className="example-content">
                    <h4>Cachorro Quente do Zé</h4>
                    <p>Carrinho de rua tradicional há 29 anos</p>
                    <div className="example-features">
                      <span>✅ Combos especiais</span>
                      <span>✅ Localização fixa</span>
                      <span>✅ Preços populares</span>
                    </div>
                  </div>
                </div>

                <div className="example-card popular">
                  <div className="example-icon">
                    <img src={visualMinimercado} alt="Mini Mercado" style={{width: '60px', height: '40px', borderRadius: '8px'}} />
                  </div>
                  <div className="example-content">
                    <h4>Mini Mercado do Seu João</h4>
                    <p>Conveniência de bairro com produtos essenciais</p>
                    <div className="example-features">
                      <span>✅ 30 produtos catalogados</span>
                      <span>✅ Entrega no bairro</span>
                      <span>✅ Negócio familiar</span>
                    </div>
                  </div>
                </div>

                <div className="example-card popular">
                  <div className="example-icon">
                    <img src={visualFarmacia} alt="Farmácia" style={{width: '60px', height: '40px', borderRadius: '8px'}} />
                  </div>
                  <div className="example-content">
                    <h4>Farmácia Vida & Saúde</h4>
                    <p>Farmácia 24h com atendimento de emergência</p>
                    <div className="example-features">
                      <span>✅ Plantão 24h</span>
                      <span>✅ Delivery de medicamentos</span>
                      <span>✅ Farmacêuticos qualificados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-section">
              <h3>🏢 Negócios Profissionais & Especializados</h3>
              <div className="examples-grid">
                <div className="example-card professional">
                  <div className="example-icon">
                    <img src={visualBoutique} alt="Boutique" style={{width: '60px', height: '40px', borderRadius: '8px'}} />
                  </div>
                  <div className="example-content">
                    <h4>Boutique Elegance</h4>
                    <p>Loja de roupas femininas com estilo único</p>
                    <div className="example-features">
                      <span>✅ Catálogo fashion</span>
                      <span>✅ E-commerce completo</span>
                      <span>✅ Guia de tamanhos</span>
                    </div>
                  </div>
                </div>

                <div className="example-card professional">
                  <div className="example-icon">
                    <img src={visualSalao} alt="Salão" style={{width: '60px', height: '40px', borderRadius: '8px'}} />
                  </div>
                  <div className="example-content">
                    <h4>Studio Hair & Beauty</h4>
                    <p>Salão de beleza com agendamento online</p>
                    <div className="example-features">
                      <span>✅ Agenda digital</span>
                      <span>✅ Galeria de trabalhos</span>
                      <span>✅ Equipe especializada</span>
                    </div>
                  </div>
                </div>

                <div className="example-card professional">
                  <div className="example-icon">
                    <img src={visualPizzaria} alt="Pizzaria" style={{width: '60px', height: '40px', borderRadius: '8px'}} />
                  </div>
                  <div className="example-content">
                    <h4>Pizzaria Nonna Rosa</h4>
                    <p>Pizzaria italiana com tradição familiar</p>
                    <div className="example-features">
                      <span>✅ Cardápio gourmet</span>
                      <span>✅ Sistema de delivery</span>
                      <span>✅ Receitas autênticas</span>
                    </div>
                  </div>
                </div>

                <div className="example-card professional">
                  <div className="example-icon">
                    <img src={visualAcai} alt="Açaí" style={{width: '60px', height: '40px', borderRadius: '8px'}} />
                  </div>
                  <div className="example-content">
                    <h4>Açaí Tropical Brasil</h4>
                    <p>Loja de açaí premium com toppings especiais</p>
                    <div className="example-features">
                      <span>✅ Cardápio interativo</span>
                      <span>✅ Personalizador de açaí</span>
                      <span>✅ Produtos naturais</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-section">
              <h3>💻 Portfólios Profissionais & Freelancers</h3>
              <div className="examples-grid">
                <div className="example-card tech">
                  <div className="example-icon">👨‍💻</div>
                  <div className="example-content">
                    <h4>Rafael Santos - Dev Full Stack</h4>
                    <p>Portfólio profissional de desenvolvedor sênior</p>
                    <div className="example-features">
                      <span>✅ Projetos em destaque</span>
                      <span>✅ Skills e tecnologias</span>
                      <span>✅ GitHub integrado</span>
                    </div>
                    <button 
                      className="view-example-btn"
                      onClick={() => setCurrentComponent('PortfolioDev')}
                    >
                      Ver Portfólio
                    </button>
                  </div>
                </div>

                <div className="example-card tech">
                  <div className="example-icon">🎨</div>
                  <div className="example-content">
                    <h4>Designer Freelancer</h4>
                    <p>Portfólio criativo para profissionais de design</p>
                    <div className="example-features">
                      <span>✅ Galeria de trabalhos</span>
                      <span>✅ Processo criativo</span>
                      <span>✅ Contato direto</span>
                    </div>
                    <button 
                      className="view-example-btn coming-soon"
                      disabled
                    >
                      Em Breve
                    </button>
                  </div>
                </div>

                <div className="example-card tech">
                  <div className="example-icon">📊</div>
                  <div className="example-content">
                    <h4>Consultor de Marketing</h4>
                    <p>Site profissional para consultores e coaches</p>
                    <div className="example-features">
                      <span>✅ Cases de sucesso</span>
                      <span>✅ Agendamento online</span>
                      <span>✅ Depoimentos de clientes</span>
                    </div>
                    <button 
                      className="view-example-btn coming-soon"
                      disabled
                    >
                      Em Breve
                    </button>
                  </div>
                </div>

                <div className="example-card tech">
                  <div className="example-icon">🎓</div>
                  <div className="example-content">
                    <h4>Professor Particular</h4>
                    <p>Plataforma para educadores independentes</p>
                    <div className="example-features">
                      <span>✅ Agendamento de aulas</span>
                      <span>✅ Material didático</span>
                      <span>✅ Avaliações de alunos</span>
                    </div>
                    <button 
                      className="view-example-btn coming-soon"
                      disabled
                    >
                      Em Breve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="examples-cta">
            <div className="cta-content">
              <h3>🤔 Não achou seu tipo de negócio?</h3>
              <p>Não se preocupe! Criamos sites personalizados para <strong>qualquer segmento</strong>. 
              Seja qual for seu negócio, temos a solução perfeita para você!</p>
              
              <div className="cta-buttons">
                <button className="cta-button" onClick={() => setShowRequirements(true)}>
                  💬 Quero Conversar sobre Meu Negócio
                </button>
                <button className="cta-button-secondary" onClick={() => scrollToSection('servicos')}>
                  Ver Todos os Serviços
                </button>
              </div>

              <div className="cta-guarantee">
                <span className="guarantee-badge">🏆 GARANTIA TOTAL</span>
                <p>Se não ficar 100% satisfeito, <strong>devolvemos seu dinheiro!</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre - Visão, Missão e Valores */}
      <section id="sobre" className="about">
        <div className="container">
          <h2>Quem Somos</h2>
          <p className="about-intro">
            Somos uma agência digital especializada em criar soluções web que impulsionam negócios. 
            Com uma equipe experiente e apaixonada por tecnologia, transformamos ideias em realidade digital.
          </p>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Nossa Missão</h3>
              <p>Democratizar a presença digital, oferecendo sites profissionais e acessíveis que ajudem empresas de todos os tamanhos a prosperarem online.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Nossa Visão</h3>
              <p>Ser a principal referência em desenvolvimento web, reconhecida pela inovação, qualidade e pelo sucesso dos nossos clientes.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Nossos Valores</h3>
              <ul>
                <li><strong>Excelência:</strong> Buscamos a perfeição em cada projeto</li>
                <li><strong>Transparência:</strong> Comunicação clara e honesta</li>
                <li><strong>Inovação:</strong> Sempre atualizados com as últimas tecnologias</li>
                <li><strong>Compromisso:</strong> Dedicação total ao sucesso do cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="services">
        <div className="container">
          <h2>💼 Como Fazemos seu Negócio Decolar</h2>
          <p className="services-subtitle">
            Cada site que criamos é uma <strong>máquina de vendas</strong> trabalhando 24h para você!
          </p>

          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-icon">🌐</div>
              <h3>Site Profissional Completo</h3>
              <p>Um site que transmite confiança e <strong>converte visitantes em clientes</strong></p>
              <div className="service-benefits">
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Design responsivo (funciona em celular, tablet e desktop)</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>SEO otimizado (aparece no Google)</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Carregamento ultra-rápido</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Painel para você mesmo atualizar</span>
                </div>
              </div>
              <div className="service-price">
                <span className="price-label">A partir de</span>
                <span className="price-value">R$ 497</span>
                <span className="price-note">ou 12x sem juros</span>
              </div>
            </div>
            
            <div className="service-card featured">
              <div className="service-icon">🛒</div>
              <h3>Loja Virtual que Vende</h3>
              <p>E-commerce completo que <strong>funciona como um vendedor automático</strong></p>
              <div className="service-benefits">
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Catálogo ilimitado de produtos</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Carrinho inteligente e checkout rápido</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Integração com Pix, cartão e boleto</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Relatórios de vendas em tempo real</span>
                </div>
              </div>
              <div className="service-price">
                <span className="price-label">A partir de</span>
                <span className="price-value">R$ 1.497</span>
                <span className="price-note">ou 12x sem juros</span>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>WhatsApp Business Integrado</h3>
              <p>Conecte seu site diretamente ao WhatsApp e <strong>receba pedidos automaticamente</strong></p>
              <div className="service-benefits">
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Botão "Pedir Agora" em todos os produtos</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Mensagens pré-formatadas com detalhes</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Catálogo automático no WhatsApp</span>
                </div>
              </div>
              <div className="service-price">
                <span className="price-label">Grátis</span>
                <span className="price-value">R$ 0</span>
                <span className="price-note">incluso em todos os planos</span>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Entrega Super Rápida</h3>
              <p>Seu site no ar em <strong>até 15 dias úteis</strong>, garantido!</p>
              <div className="service-benefits">
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Desenvolvimento ágil e eficiente</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Revisões ilimitadas até aprovação</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✅</span>
                  <span>Suporte pós-entrega por 30 dias</span>
                </div>
              </div>
              <div className="service-price">
                <span className="price-label">Garantido</span>
                <span className="price-value">15 dias</span>
                <span className="price-note">ou devolvemos o dinheiro</span>
              </div>
            </div>
          </div>

          <div className="services-cta">
            <h3>🎯 Pronto para Começar?</h3>
            <p>Não perca mais vendas! Cada dia sem site é dinheiro que sai do seu bolso.</p>
            <button className="cta-button-large" onClick={() => setShowRequirements(true)}>
              🚀 SIM! Quero Meu Site Agora
            </button>
            <p className="cta-note">⏰ <strong>Vagas limitadas</strong> - Só atendemos 10 clientes por mês para garantir qualidade máxima!</p>
          </div>
        </div>
      </section>

      {/* Seção Portfólio */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>Nosso Portfólio</h2>
          <p className="portfolio-subtitle">Conheça alguns dos projetos que desenvolvemos com amor e dedicação</p>
          
          <div className="portfolio-grid">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tech-stack">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-details">
                  <span className="portfolio-category">{project.category}</span>
                  <h4>{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section id="depoimentos" className="testimonials">
        <div className="container">
          <h2>🗣️ Clientes Reais, Resultados Reais</h2>
          <p className="testimonials-subtitle">
            Veja o que nossos clientes falam sobre os <strong>resultados que conseguiram</strong> após ter seu site:
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card featured">
              <div className="testimonial-header">
                <div className="testimonial-avatar">👨‍💼</div>
                <div className="testimonial-info">
                  <h4>João Silva - Tech Solutions</h4>
                  <p>Aumentou vendas em <strong style="color: #22c55e;">150%</strong></p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                <strong>"Em 3 meses após o site ficar pronto, minhas vendas triplicaram!"</strong> 
                O site da Fábrica de Sites transformou meu negócio completamente. Agora recebo pedidos 
                direto pelo WhatsApp todos os dias. Melhor investimento que já fiz!
              </p>
              <div className="testimonial-results">
                <span className="result-tag">📈 +150% vendas</span>
                <span className="result-tag">📱 +200% leads</span>
              </div>
            </div>

            <div className="testimonial-card featured">
              <div className="testimonial-header">
                <div className="testimonial-avatar">👩‍💼</div>
                <div className="testimonial-info">
                  <h4>Maria Santos - Boutique Elegance</h4>
                  <p>De <strong style="color: #22c55e;">0 a R$ 15mil</strong> em vendas online</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                <strong>"Nunca pensei que ia vender pela internet!"</strong> 
                Antes do site eu só vendia na loja física. Hoje faço R$ 15 mil por mês só 
                com vendas online. A equipe é muito profissional e o suporte é excepcional!
              </p>
              <div className="testimonial-results">
                <span className="result-tag">💰 R$ 15k/mês online</span>
                <span className="result-tag">🎯 ROI 800%</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">👨‍🍳</div>
                <div className="testimonial-info">
                  <h4>Carlos - Restaurante Sabor & Arte</h4>
                  <p>Delivery aumentou <strong style="color: #22c55e;">300%</strong></p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "O sistema de delivery que criaram é perfeito! Os clientes conseguem fazer 
                pedidos facilmente e eu recebo tudo organizadinho no WhatsApp. Recomendo!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">👩‍⚕️</div>
                <div className="testimonial-info">
                  <h4>Ana Costa - Clínica Bem Estar</h4>
                  <p>Agendamentos online <strong style="color: #22c55e;">+180%</strong></p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "Site profissional que transmite confiança aos pacientes. O sistema de 
                agendamento online facilitou muito nossa rotina. Equipe top!"
              </p>
            </div>
          </div>

          <div className="social-proof">
            <h3>🏆 Por que Clientes nos Escolhem:</h3>
            <div className="proof-grid">
              <div className="proof-item">
                <span className="proof-icon">⚡</span>
                <strong>Entrega Rápida</strong>
                <p>15 dias ou seu dinheiro de volta</p>
              </div>
              <div className="proof-item">
                <span className="proof-icon">💰</span>
                <strong>Preço Justo</strong>
                <p>Sem mensalidades abusivas</p>
              </div>
              <div className="proof-item">
                <span className="proof-icon">📞</span>
                <strong>Suporte Real</strong>
                <p>Pessoas reais, não robôs</p>
              </div>
              <div className="proof-item">
                <span className="proof-icon">🎯</span>
                <strong>Foco em Resultados</strong>
                <p>Sites que realmente vendem</p>
              </div>
            </div>
          </div>

          <div className="testimonial-cta">
            <h3>💬 Trabalhou conosco?</h3>
            <p>Compartilhe sua experiência e ganhe <strong>10% de desconto</strong> no próximo projeto!</p>
            <button 
              className="btn-secondary" 
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancelar' : '⭐ Deixar Meu Depoimento'}
            </button>
          </div>

          {/* Formulário de Depoimento */}
          {showForm && (
            <div className="testimonial-form-container">
              <form className="testimonial-form" onSubmit={handleTestimonialSubmit}>
                <h4>Conte sua experiência</h4>
                
                <div className="form-group">
                  <label htmlFor="nome">Seu nome:</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={testimonialForm.nome}
                    onChange={handleInputChange}
                    required
                    placeholder="João Silva"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="empresa">Empresa:</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={testimonialForm.empresa}
                    onChange={handleInputChange}
                    required
                    placeholder="Minha Empresa Ltda"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="estrelas">Avaliação:</label>
                  <select
                    id="estrelas"
                    name="estrelas"
                    value={testimonialForm.estrelas}
                    onChange={handleInputChange}
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 estrelas)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 estrelas)</option>
                    <option value={3}>⭐⭐⭐ (3 estrelas)</option>
                    <option value={2}>⭐⭐ (2 estrelas)</option>
                    <option value={1}>⭐ (1 estrela)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="depoimento">Seu depoimento:</label>
                  <textarea
                    id="depoimento"
                    name="depoimento"
                    value={testimonialForm.depoimento}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Conte como foi trabalhar conosco, o que mais gostou, os resultados obtidos..."
                  ></textarea>
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn-primary">Enviar Depoimento</button>
                  <button type="button" className="btn-secondary" onClick={() => setShowForm(false)}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="contact">
        <div className="container">
          <h2>Vamos conversar sobre seu projeto?</h2>
          <p>Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer online.</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Fale Conosco</h3>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>(21) 96494-9427</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>E-mail</strong>
                  <p>marciopaivagil@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📷</span>
                <div>
                  <strong>Instagram</strong>
                  <p>@docecodigo.tech256</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">�🕐</span>
                <div>
                  <strong>Horário</strong>
                  <p>Seg-Sex: 9h às 18h</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <strong>Resposta</strong>
                  <p>Em até 2 horas úteis</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Solicite um Orçamento</h3>
              <form>
                <div className="form-row">
                  <input type="text" placeholder="Seu nome" required />
                  <input type="email" placeholder="Seu e-mail" required />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Telefone" />
                  <input type="text" placeholder="Empresa" />
                </div>
                <select required>
                  <option value="">Tipo de projeto</option>
                  <option value="institucional">Site Institucional</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="app">Aplicativo Web</option>
                  <option value="redesign">Redesign</option>
                  <option value="manutencao">Manutenção</option>
                </select>
                <textarea placeholder="Conte-nos sobre seu projeto..." rows="4"></textarea>
                
                <div className="contact-buttons">
                  <button type="submit" className="btn-primary">Enviar Solicitação</button>
                  <button 
                    type="button" 
                    className="btn-secondary"
                    onClick={() => setShowRequirements(true)}
                  >
                    Questionário Detalhado
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>
                <div className="heart-logo">
                  <svg width="24" height="24" viewBox="0 0 64 64">
                    <rect x="12" y="8" width="4" height="4" fill="#e53e3e"/>
                    <rect x="16" y="8" width="4" height="4" fill="#e53e3e"/>
                    <rect x="20" y="8" width="4" height="4" fill="#e53e3e"/>
                    <rect x="36" y="8" width="4" height="4" fill="#e53e3e"/>
                    <rect x="40" y="8" width="4" height="4" fill="#e53e3e"/>
                    <rect x="44" y="8" width="4" height="4" fill="#e53e3e"/>
                    <rect x="28" y="44" width="4" height="4" fill="#e53e3e"/>
                  </svg>
                </div>
                Fábrica de Sites
              </h4>
              <p>Criando presença digital que gera resultados desde 2019.</p>
              <div className="social-links">
                <a href="https://www.instagram.com/docecodigo.tech256?igsh=Z3U0bnJod3hhMTc=" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="WhatsApp">💬</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#servicos">Sites Institucionais</a></li>
                <li><a href="#servicos">E-commerce</a></li>
                <li><a href="#servicos">Aplicativos Web</a></li>
                <li><a href="#servicos">UI/UX Design</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contato</h4>
              <p>📱 (21) 96494-9427</p>
              <p>📧 marciopaivagil@gmail.com</p>
              <p>📷 @docecodigo.tech256</p>
              <p>🕐 Seg-Sex: 9h às 18h</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Fábrica de Sites. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ para impulsionar seu negócio online.</p>
          </div>
        </div>
      </footer>

      {/* Questionário de Requisitos */}
      {showRequirements && (
        <RequirementsForm 
          onClose={() => setShowRequirements(false)}
          onSubmit={handleRequirementsSubmit}
        />
      )}
    </div>
      )}
    </>
  );
}

export default App;