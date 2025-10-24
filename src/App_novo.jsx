import React, { useState } from 'react';
import PortfolioGallery from './components/PortfolioGallery';

function App() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Padaria do Interior",
      description: "Site para padaria familiar com delivery local e produtos tradicionais.",
      image: "https://via.placeholder.com/400x250/6366f1/white?text=Padaria+Online",
      tags: ["E-commerce", "Delivery", "Responsivo"],
      details: "Site completo para padaria com catálogo de produtos, sistema de pedidos e integração WhatsApp."
    },
    {
      id: 2,
      title: "Farmácia Popular",
      description: "Site institucional para farmácia local com informações de medicamentos.",
      image: "https://via.placeholder.com/400x250/ec4899/white?text=Farmacia+24h",
      tags: ["Institucional", "Saúde", "Mobile"],
      details: "Site para farmácia com foco em acessibilidade, horários e plantão emergencial."
    },
    {
      id: 3,
      title: "Loja de Roupas",
      description: "E-commerce para loja de roupas femininas com catálogo online.",
      image: "https://via.placeholder.com/400x250/10b981/white?text=Moda+Fashion",
      tags: ["E-commerce", "Fashion", "SEO"],
      details: "Loja virtual completa com galeria de produtos, carrinho e redes sociais."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      business: "Padaria da Vovó",
      comment: "O site aumentou muito nossas vendas! Agora recebemos pedidos pelo WhatsApp direto do site.",
      rating: 5
    },
    {
      id: 2,
      name: "João Silva", 
      business: "Farmácia São José",
      comment: "Site profissional que trouxe mais credibilidade ao nosso negócio.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Costa",
      business: "Moda Feminina",
      comment: "Excelente trabalho! O e-commerce facilitou muito as vendas online.",
      rating: 5
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="container">
            <a href="#home" className="logo">🍰 Doce-Code256</a>
            <ul className="nav-links">
              <li><a href="#home">Início</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1 className="hero-title">Sites que Vendem, Negócios que Crescem</h1>
          <p className="hero-subtitle">
            Criamos sites profissionais para pequenos negócios do interior. 
            Transforme sua presença digital e aumente suas vendas!
          </p>
          <a 
            href="https://wa.me/5521964949427?text=Olá! Gostaria de um orçamento para meu site" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Solicitar Orçamento Grátis
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções digitais pensadas para pequenos negócios do interior
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Sites Profissionais</h3>
              <p>Sites institucionais para apresentar seu negócio de forma profissional.</p>
              <div className="service-price">A partir de R$ 899</div>
              <a 
                href="https://wa.me/5521964949427?text=Quero um orçamento para Site Profissional" 
                className="service-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h3>Lojas Virtuais</h3>
              <p>E-commerce completo para vender online com segurança e praticidade.</p>
              <div className="service-price">A partir de R$ 1.499</div>
              <a 
                href="https://wa.me/5521964949427?text=Quero um orçamento para Loja Virtual" 
                className="service-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">📄</div>
              <h3>Landing Pages</h3>
              <p>Páginas de conversão focadas em vendas e captação de leads.</p>
              <div className="service-price">A partir de R$ 599</div>
              <a 
                href="https://wa.me/5521964949427?text=Quero um orçamento para Landing Page" 
                className="service-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Nossos Projetos</h2>
          <p className="section-subtitle">
            Conheça sites que desenvolvemos para pequenos comércios
          </p>
          <PortfolioGallery projects={portfolioProjects} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avaliacoes" className="testimonials">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">
            Avaliações reais de pequenos empresários que transformaram seus negócios
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.comment}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span className="testimonial-business">{testimonial.business}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact">
        <div className="container">
          <h2 className="section-title">Vamos conversar sobre seu projeto?</h2>
          <p className="section-subtitle">
            Entre em contato e receba um orçamento personalizado
          </p>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Nossos Contatos</h3>
              <div className="contact-item">
                <span>📱</span>
                <a href="https://wa.me/5521964949427" target="_blank" rel="noopener noreferrer">
                  (21) 96494-9427
                </a>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <a href="mailto:marciopaivagil@gmail.com">
                  marciopaivagil@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span>📸</span>
                <a href="https://www.instagram.com/docecodigo.tech256" target="_blank" rel="noopener noreferrer">
                  @docecodigo.tech256
                </a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Solicitar Orçamento</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo</label>
                  <input type="text" id="nome" placeholder="Seu nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="seu@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">WhatsApp</label>
                  <input type="tel" id="telefone" placeholder="(11) 99999-9999" required />
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Conte sobre seu projeto</label>
                  <textarea 
                    id="mensagem" 
                    rows="4" 
                    placeholder="Descreva seu negócio e o que precisa..."
                  ></textarea>
                </div>
                <button type="submit" className="cta-button">
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
          <p>&copy; 2024 Doce-Code256 - Sites que vendem, negócios que crescem!</p>
          <p>📧 marciopaivagil@gmail.com | 📱 (21) 96494-9427 | 📸 @docecodigo.tech256</p>
        </div>
      </footer>
    </div>
  );
}

export default App;