import React, { useState, useEffect } from 'react';
import './index.css';
import RequirementsForm from './components/RequirementsForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [testimonialForm, setTestimonialForm] = useState({
    nome: '',
    empresa: '',
    depoimento: '',
    estrelas: 5
  });
  const [showForm, setShowForm] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

  // Portfolio com imagens reais
  const portfolioProjects = [
    {
      id: 1,
      title: "Padaria Doce Manhã",
      description: "Site institucional com catálogo de produtos e sistema de encomendas online",
      image: "./images/portfolio/real-padaria.svg",
      tech: ["React", "Node.js", "MongoDB"],
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Farmácia Popular",
      description: "Portal completo com delivery de medicamentos e consulta médica online",
      image: "./images/portfolio/real-farmacia.svg",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      category: "Saúde"
    },
    {
      id: 3,
      title: "Moda Elegante",
      description: "Loja virtual de roupas femininas com sistema de pagamento integrado",
      image: "./images/portfolio/real-moda.svg",
      tech: ["Angular", "Python", "SQLite"],
      category: "Fashion"
    },
    {
      id: 4,
      title: "Casa & Lar Móveis",
      description: "Showroom virtual de móveis e decoração com realidade aumentada",
      image: "./images/portfolio/real-moveis.svg",
      tech: ["React", "Three.js", "Firebase"],
      category: "Decoração"
    },
    {
      id: 5,
      title: "Advocacia Santos",
      description: "Site profissional para escritório de advocacia com agendamento online",
      image: "./images/portfolio/real-advocacia.svg",
      tech: ["WordPress", "PHP", "MySQL"],
      category: "Jurídico"
    },
    {
      id: 6,
      title: "Pizzaria Bella",
      description: "Sistema completo de delivery com cardápio interativo e pagamento online",
      image: "./images/portfolio/real-pizzaria.svg",
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
    <div className="app">
      {/* Menu Horizontal Fixo */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="heart-logo">
              <svg width="32" height="32" viewBox="0 0 64 64">
                <rect x="12" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="16" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="20" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="36" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="40" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="44" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="8" y="12" width="4" height="4" fill="#e53e3e"/>
                <rect x="12" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="16" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="12" width="4" height="4" fill="#e53e3e"/>
                <rect x="32" y="12" width="4" height="4" fill="#e53e3e"/>
                <rect x="36" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="48" y="12" width="4" height="4" fill="#e53e3e"/>
                <rect x="4" y="16" width="4" height="4" fill="#e53e3e"/>
                <rect x="8" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="12" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="16" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="16" width="4" height="4" fill="#e53e3e"/>
                <rect x="32" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="48" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="52" y="16" width="4" height="4" fill="#e53e3e"/>
                <rect x="4" y="20" width="4" height="4" fill="#e53e3e"/>
                <rect x="8" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="12" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="16" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="48" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="52" y="20" width="4" height="4" fill="#e53e3e"/>
                <rect x="8" y="24" width="4" height="4" fill="#e53e3e"/>
                <rect x="12" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="16" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="48" y="24" width="4" height="4" fill="#e53e3e"/>
                <rect x="12" y="28" width="4" height="4" fill="#e53e3e"/>
                <rect x="16" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="28" width="4" height="4" fill="#e53e3e"/>
                <rect x="16" y="32" width="4" height="4" fill="#e53e3e"/>
                <rect x="20" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="32" width="4" height="4" fill="#e53e3e"/>
                <rect x="20" y="36" width="4" height="4" fill="#e53e3e"/>
                <rect x="24" y="36" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="36" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="36" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="36" width="4" height="4" fill="#e53e3e"/>
                <rect x="24" y="40" width="4" height="4" fill="#e53e3e"/>
                <rect x="28" y="40" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="40" width="4" height="4" fill="#e53e3e"/>
                <rect x="28" y="44" width="4" height="4" fill="#e53e3e"/>
              </svg>
            </div>
            <span className="logo-text">Fábrica de Sites</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#inicio" onClick={() => scrollToSection('inicio')} 
               className={activeSection === 'inicio' ? 'active' : ''}>Início</a>
            <a href="#sobre" onClick={() => scrollToSection('sobre')} 
               className={activeSection === 'sobre' ? 'active' : ''}>Sobre</a>
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
          <h1>Criamos Sites que <span className="highlight">Vendem</span></h1>
          <p>Transformamos sua ideia em uma presença digital poderosa que atrai clientes e gera resultados reais para o seu negócio.</p>
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
          <button className="cta-button" onClick={() => setShowRequirements(true)}>
            Iniciar Meu Projeto
          </button>
          <button className="cta-button-secondary" onClick={() => scrollToSection('contato')}>
            Solicitar Orçamento
          </button>
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
          <h2>Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Sites Institucionais</h3>
              <p>Sites profissionais que transmitem credibilidade e fortalecem sua marca no mercado.</p>
              <ul>
                <li>Design responsivo</li>
                <li>SEO otimizado</li>
                <li>Carregamento rápido</li>
                <li>Painel administrativo</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h3>E-commerce</h3>
              <p>Lojas virtuais completas com sistema de pagamento e gestão de estoque integrados.</p>
              <ul>
                <li>Catálogo de produtos</li>
                <li>Carrinho de compras</li>
                <li>Múltiplas formas de pagamento</li>
                <li>Relatórios de vendas</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Aplicativos Web</h3>
              <p>Sistemas web personalizados para automatizar e otimizar processos do seu negócio.</p>
              <ul>
                <li>Desenvolvimento sob medida</li>
                <li>Integração com APIs</li>
                <li>Dashboard administrativo</li>
                <li>Relatórios em tempo real</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Interfaces intuitivas e experiências de usuário que convertem visitantes em clientes.</p>
              <ul>
                <li>Prototipação interativa</li>
                <li>Testes de usabilidade</li>
                <li>Design system</li>
                <li>Otimização de conversão</li>
              </ul>
            </div>
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
          <h2>O que nossos clientes dizem</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.image}</div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.company}</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="testimonial-cta">
            <h3>Trabalhou conosco?</h3>
            <p>Compartilhe sua experiência e ajude outros empresários a conhecer nosso trabalho!</p>
            <button 
              className="btn-secondary" 
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancelar' : 'Deixar Depoimento'}
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
  );
}

export default App;