import React, { useState } from 'react';
import PortfolioGallery from './components/PortfolioGallery';
import AdvancedTestimonialSystem from './components/AdvancedTestimonialSystem';

function App() {
  // Portfólio com projetos para pequenos negócios do interior
  const portfolioProjects = [
    {
      id: 1,
      title: "Padaria do Interior",
      description: "Site para padaria familiar com delivery local e produtos tradicionais. Sistema de pedidos online integrado.",
      image: "/images/portfolio/padaria-real.svg",
      tags: ["E-commerce", "Delivery", "Responsivo"],
      details: "Desenvolvemos um site completo para a Padaria da Vovó, incluindo catálogo de produtos, sistema de pedidos, área de contato e integração com WhatsApp para facilitar os pedidos dos clientes."
    },
    {
      id: 2,
      title: "Farmácia Popular",
      description: "Site institucional para farmácia local com informações de medicamentos e plantão 24h.",
      image: "/images/portfolio/farmacia-real.svg",
      tags: ["Institucional", "Saúde", "Mobile-First"],
      details: "Site desenvolvido para Farmácia São José, com design focado em acessibilidade, informações sobre medicamentos, horários de funcionamento e sistema de plantão emergencial."
    },
    {
      id: 3,
      title: "Loja de Roupas",
      description: "E-commerce para loja de roupas femininas com catálogo online e promoções especiais.",
      image: "/images/portfolio/loja-roupas-real.svg",
      tags: ["E-commerce", "Fashion", "SEO"],
      details: "Loja virtual completa para a Moda Feminina Elegante, com galeria de produtos, sistema de carrinho, área de promoções e integração com redes sociais."
    },
    {
      id: 4,
      title: "Restaurante da Família",
      description: "Website para restaurante familiar com cardápio digital e sistema de reservas online.",
      image: "/images/portfolio/restaurante-real.svg",
      tags: ["Gastronomia", "Reservas", "Responsivo"],
      details: "Site desenvolvido para o Restaurante da Nonna, incluindo cardápio digital interativo, sistema de reservas, galeria de pratos e informações sobre eventos especiais."
    },
    {
      id: 5,
      title: "Clínica Odontológica",
      description: "Site profissional para clínica odontológica com agendamento online e informações dos tratamentos.",
      image: "/images/portfolio/clinica-real.svg",
      tags: ["Saúde", "Agendamento", "Profissional"],
      details: "Portal completo para a Clínica Dr. Sorriso, com informações sobre tratamentos, agendamento online, galeria de antes/depois e área do paciente."
    },
    {
      id: 6,
      title: "Loja de Materiais",
      description: "E-commerce para loja de materiais de construção com catálogo completo e orçamentos online.",
      image: "/images/portfolio/materiais-real.svg",
      tags: ["E-commerce", "Construção", "B2B"],
      details: "Sistema completo para a Casa de Materiais Central, incluindo catálogo extenso, calculadora de materiais, sistema de orçamentos e área para construtores."
    }
  ];

  // Sistema de depoimentos expandido com clientes do interior
  const [testimonials, setTestimonials] = useState([
    {
      name: "João Silva",
      company: "Padaria do João",
      city: "Campinas - SP",
      text: "Excelente trabalho! O site da minha padaria ficou lindo e já estou recebendo mais pedidos online. O pessoal da Doce-Code256 entendeu perfeitamente o que eu precisava.",
      rating: 5,
      date: "2024-11-20",
      projectType: "Site com E-commerce",
      verified: true,
      recent: true,
      recommendToFriends: true
    },
    {
      name: "Maria Fernanda",
      company: "Farmácia Popular",
      city: "Jundiaí - SP",
      text: "Site muito profissional e fácil de usar. Nossos clientes adoraram poder consultar os medicamentos online e ver nossos horários de plantão. Recomendo!",
      rating: 5,
      date: "2024-11-18",
      projectType: "Site Institucional",
      verified: true,
      recent: true,
      recommendToFriends: true
    },
    {
      name: "Carlos Santos",
      company: "Oficina do Carlos",
      city: "Piracicaba - SP",
      text: "Muito satisfeito com o resultado. O site ficou moderno e agora consigo mostrar meus serviços de forma profissional. O atendimento foi excelente!",
      rating: 5,
      date: "2024-11-15",
      projectType: "Site Profissional",
      verified: true,
      recent: false,
      recommendToFriends: true
    },
    {
      name: "Ana Paula",
      company: "Moda Feminina Ana",
      city: "Limeira - SP",
      text: "A loja virtual superou minhas expectativas! Vendas online aumentaram 200% no primeiro mês. Site lindo e muito fácil de gerenciar.",
      rating: 5,
      date: "2024-11-10",
      projectType: "Loja Online",
      verified: true,
      recent: false,
      recommendToFriends: true
    },
    {
      name: "Roberto Lima",
      company: "Restaurante da Vila",
      city: "Americana - SP",
      text: "Ótimo investimento! O site com cardápio digital e sistema de reservas facilitou muito nosso trabalho. Clientes elogiam sempre a praticidade.",
      rating: 4,
      date: "2024-11-05",
      projectType: "Site para Restaurante",
      verified: true,
      recent: false,
      recommendToFriends: true
    },
    {
      name: "Dra. Patricia",
      company: "Clínica Odonto Sorriso",
      city: "Valinhos - SP",
      text: "Site profissional que transmite confiança aos pacientes. O sistema de agendamento online otimizou nossa agenda. Muito satisfeita!",
      rating: 5,
      date: "2024-10-28",
      projectType: "Site Profissional",
      verified: true,
      recent: false,
      recommendToFriends: true
    }
  ]);

  const addTestimonial = (newTestimonial) => {
    setTestimonials([newTestimonial, ...testimonials]);
  };

  const services = [
    {
      icon: "🌐",
      title: "Sites Profissionais",
      description: "Sites institucionais para apresentar seu negócio de forma profissional e atrair mais clientes.",
      price: "A partir de R$ 899",
      features: ["Design Responsivo", "Otimização SEO", "Integração WhatsApp", "Suporte 3 meses"]
    },
    {
      icon: "🛒", 
      title: "Lojas Virtuais",
      description: "E-commerce completo para vender online com segurança e praticidade.",
      price: "A partir de R$ 1.499",
      features: ["Carrinho de Compras", "Pagamento Online", "Gestão de Estoque", "Relatórios de Vendas"]
    },
    {
      icon: "📱",
      title: "Landing Pages",
      description: "Páginas de conversão para promover produtos ou serviços específicos.",
      price: "A partir de R$ 599",
      features: ["Alta Conversão", "Formulários Inteligentes", "Analytics Integrado", "Entrega Rápida"]
    },
    {
      icon: "🎨",
      title: "Portfólios",
      description: "Showcase profissional para destacar seu trabalho e conquistar novos clientes.",
      price: "A partir de R$ 799",
      features: ["Galeria Interativa", "Área de Contato", "Certificados SSL", "Backup Automático"]
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <span className="logo-text">Doce-Code256</span>
            <span className="logo-emoji">💻</span>
          </div>
          <ul className="nav-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#avaliacoes">Avaliações</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Sites Profissionais para <span className="highlight">Pequenos Negócios</span>
          </h1>
          <p className="hero-subtitle">
            Especializados em criar sites para comércios e prestadores de serviços do interior. 
            Aumentamos sua presença digital e ajudamos a conquistar mais clientes.
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>Entrega Rápida</span>
            </div>
            <div className="feature">
              <span className="feature-icon">💰</span>
              <span>Preços Justos</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>Foco no Interior</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📞</span>
              <span>Suporte Local</span>
            </div>
          </div>
          <div className="hero-cta">
            <a 
              href="https://wa.me/5521964949427?text=Olá! Gostaria de solicitar um orçamento para criação de site." 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              💬 Solicitar Orçamento
            </a>
            <a href="#portfolio" className="cta-button secondary">
              📁 Ver Portfólio
            </a>
          </div>
        </div>
      </section>

      {/* Benefícios para Pequenos Negócios */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Por que seu negócio precisa de um site?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🔍</div>
              <h3>Seja Encontrado</h3>
              <p>Apareça no Google quando clientes procuram por seus serviços na região</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏰</div>
              <h3>Disponível 24/7</h3>
              <p>Seus clientes podem conhecer seus produtos e serviços a qualquer hora</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Mais Vendas</h3>
              <p>Aumente suas vendas com presença online profissional e vendas pela internet</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Credibilidade</h3>
              <p>Transmita confiança e profissionalismo para seus clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções digitais pensadas especialmente para pequenos negócios do interior
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-price">{service.price}</div>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✅ {feature}</li>
                  ))}
                </ul>
                <a 
                  href="https://wa.me/5521964949427?text=Gostaria de saber mais sobre este serviço." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="service-button"
                >
                  Solicitar Orçamento
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Projetos para Negócios do Interior</h2>
          <p className="section-subtitle">
            Conheça alguns dos sites que desenvolvemos para pequenos comércios e prestadores de serviços
          </p>
          <PortfolioGallery projects={portfolioProjects} />
        </div>
      </section>

      {/* Advanced Testimonials Section */}
      <section id="avaliacoes" className="testimonials">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">
            Avaliações reais de pequenos empresários que transformaram seus negócios conosco
          </p>
          <AdvancedTestimonialSystem 
            testimonials={testimonials} 
            onAddTestimonial={addTestimonial}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact">
        <div className="container">
          <h2 className="section-title">Vamos conversar sobre seu projeto?</h2>
          <p className="section-subtitle">
            Atendemos pequenos negócios em todo o Brasil, com especialização no interior de SP e RJ
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>WhatsApp</h4>
                  <p>(21) 96494-9427</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>marciopaivagil@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📸</span>
                <div>
                  <h4>Instagram</h4>
                  <p>
                    <a 
                      href="https://www.instagram.com/docecodigo.tech256?igsh=Z3U0bnJod3hhMTc=" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{color: 'inherit', textDecoration: 'none'}}
                    >
                      @docecodigo.tech256
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 8h às 18h<br/>Sábado: 8h às 12h</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🎯</span>
                <div>
                  <h4>Área de Atendimento</h4>
                  <p>Todo o Brasil<br/>Especialista no Interior de SP e RJ</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo</label>
                  <input type="text" id="nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone/WhatsApp</label>
                  <input type="tel" id="telefone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Nome da empresa/negócio</label>
                  <input type="text" id="empresa" />
                </div>
                <div className="form-group">
                  <label htmlFor="servico">Tipo de site</label>
                  <select id="servico" required>
                    <option value="">Selecione...</option>
                    <option value="institucional">Site Institucional</option>
                    <option value="ecommerce">Loja Virtual</option>
                    <option value="landing">Landing Page</option>
                    <option value="portfolio">Portfólio</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Conte sobre seu projeto</label>
                  <textarea id="mensagem" rows="4" placeholder="Descreva seu negócio e o que você gostaria no site..."></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Enviar Mensagem 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">Doce-Code256</span>
                <span className="logo-emoji">💻</span>
              </div>
              <p>Criando sites profissionais para pequenos negócios do interior há mais de 3 anos.</p>
            </div>
            <div className="footer-links">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#servicos">Sites Profissionais</a></li>
                <li><a href="#servicos">Lojas Virtuais</a></li>
                <li><a href="#servicos">Landing Pages</a></li>
                <li><a href="#servicos">Portfólios</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contato</h4>
              <p>📱 (21) 96494-9427</p>
              <p>✉️ marciopaivagil@gmail.com</p>
              <p>📸 <a 
                href="https://www.instagram.com/docecodigo.tech256?igsh=Z3U0bnJod3hhMTc=" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: 'inherit', textDecoration: 'none'}}
              >
                @docecodigo.tech256
              </a></p>
              <p>🎯 Todo o Brasil - RJ/SP</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Doce-Code256. Todos os direitos reservados.</p>
            <p>Sites profissionais para pequenos negócios do interior</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;