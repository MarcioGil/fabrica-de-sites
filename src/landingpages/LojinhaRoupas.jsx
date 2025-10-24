import React, { useState } from 'react';
import './roupas.css';

function LojinhaRoupas() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [cartItems, setCartItems] = useState(0);

  const produtos = [
    {
      id: 1,
      nome: "Vestido Floral Verão",
      preco: 89.90,
      categoria: "vestidos",
      imagem: "🌸",
      descricao: "Vestido leve e confortável para o verão"
    },
    {
      id: 2,
      nome: "Blusa Básica Cotton",
      preco: 45.90,
      categoria: "blusas",
      imagem: "👕",
      descricao: "Blusa básica 100% algodão"
    },
    {
      id: 3,
      nome: "Calça Jeans Skinny",
      preco: 129.90,
      categoria: "calcas",
      imagem: "👖",
      descricao: "Calça jeans modelagem skinny"
    },
    {
      id: 4,
      nome: "Saia Midi Plissada",
      preco: 79.90,
      categoria: "saias",
      imagem: "👗",
      descricao: "Saia midi plissada elegante"
    },
    {
      id: 5,
      nome: "Cropped Listrado",
      preco: 39.90,
      categoria: "blusas",
      imagem: "👚",
      descricao: "Cropped listrado moderno"
    },
    {
      id: 6,
      nome: "Vestido Longo Festa",
      preco: 199.90,
      categoria: "vestidos",
      imagem: "💃",
      descricao: "Vestido longo para ocasiões especiais"
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'vestidos', nome: 'Vestidos' },
    { id: 'blusas', nome: 'Blusas' },
    { id: 'calcas', nome: 'Calças' },
    { id: 'saias', nome: 'Saias' }
  ];

  const produtosFiltrados = selectedCategory === 'todos' 
    ? produtos 
    : produtos.filter(produto => produto.categoria === selectedCategory);

  const adicionarCarrinho = (produto) => {
    setCartItems(cartItems + 1);
    alert(`${produto.nome} adicionado ao carrinho!`);
  };

  return (
    <div className="lojinha-roupas">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">👗</span>
            <h1>Bella Moda</h1>
          </div>
          
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="cart">
            <span className="cart-icon">🛍️</span>
            <span className="cart-count">{cartItems}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h2>Moda Feminina com Estilo</h2>
          <p>Descubra as últimas tendências em roupas femininas com preços que cabem no seu bolso</p>
          <div className="hero-stats">
            <div className="stat">
              <span>📦</span>
              <p>Frete Grátis<br/>acima de R$ 150</p>
            </div>
            <div className="stat">
              <span>🔄</span>
              <p>Troca Garantida<br/>até 30 dias</p>
            </div>
            <div className="stat">
              <span>💳</span>
              <p>Parcelamento<br/>em até 6x</p>
            </div>
          </div>
          <button className="cta-button" onClick={() => document.getElementById('produtos').scrollIntoView()}>
            Ver Coleção
          </button>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="produtos">
        <div className="container">
          <h2>Nossa Coleção</h2>
          
          {/* Filtros */}
          <div className="filtros">
            {categorias.map(categoria => (
              <button
                key={categoria.id}
                className={`filtro ${selectedCategory === categoria.id ? 'ativo' : ''}`}
                onClick={() => setSelectedCategory(categoria.id)}
              >
                {categoria.nome}
              </button>
            ))}
          </div>

          {/* Grid de Produtos */}
          <div className="produtos-grid">
            {produtosFiltrados.map(produto => (
              <div key={produto.id} className="produto-card">
                <div className="produto-imagem">
                  <span className="emoji-produto">{produto.imagem}</span>
                  <div className="produto-overlay">
                    <button 
                      className="btn-comprar"
                      onClick={() => adicionarCarrinho(produto)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <div className="preco">R$ {produto.preco.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <h2>Sobre a Bella Moda</h2>
              <p>Há mais de 10 anos trazendo as melhores tendências da moda feminina com qualidade e preços justos. Nossa missão é fazer todas as mulheres se sentirem belas e confiantes.</p>
              <div className="sobre-stats">
                <div className="stat-item">
                  <span className="numero">10+</span>
                  <span className="label">Anos no Mercado</span>
                </div>
                <div className="stat-item">
                  <span className="numero">5000+</span>
                  <span className="label">Clientes Satisfeitas</span>
                </div>
                <div className="stat-item">
                  <span className="numero">500+</span>
                  <span className="label">Peças Diferentes</span>
                </div>
              </div>
            </div>
            <div className="sobre-imagem">
              <div className="placeholder-img">
                <span>👩‍💼</span>
                <p>Nossa Equipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos">
        <div className="container">
          <h2>O que nossas clientes dizem</h2>
          <div className="depoimentos-grid">
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Roupas de ótima qualidade e entrega super rápida! Virei cliente fiel."</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Ana Silva</strong>
                  <span>Cliente há 2 anos</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Preços justos e sempre na moda. Recomendo para todas as amigas!"</p>
              <div className="cliente">
                <span className="avatar">👱‍♀️</span>
                <div>
                  <strong>Maria Costa</strong>
                  <span>Cliente há 1 ano</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Atendimento excelente e peças que valorizam o corpo feminino."</p>
              <div className="cliente">
                <span className="avatar">🧑‍🦱</span>
                <div>
                  <strong>Carla Santos</strong>
                  <span>Cliente há 3 anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contato">
        <div className="container">
          <h2>Entre em Contato</h2>
          <div className="contato-grid">
            <div className="contato-info">
              <h3>Fale Conosco</h3>
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>(11) 9 9999-9999</p>
                </div>
              </div>
              <div className="info-item">
                <span>📍</span>
                <div>
                  <strong>Endereço</strong>
                  <p>Rua da Moda, 123<br/>Centro - São Paulo/SP</p>
                </div>
              </div>
              <div className="info-item">
                <span>🕐</span>
                <div>
                  <strong>Horário</strong>
                  <p>Seg-Sáb: 9h às 19h<br/>Dom: 10h às 16h</p>
                </div>
              </div>
            </div>
            
            <div className="contato-form">
              <h3>Envie uma Mensagem</h3>
              <form>
                <input type="text" placeholder="Seu nome" required />
                <input type="email" placeholder="Seu e-mail" required />
                <input type="tel" placeholder="Telefone" />
                <textarea placeholder="Sua mensagem..." rows="4"></textarea>
                <button type="submit" className="btn-enviar">Enviar Mensagem</button>
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
              <h4>👗 Bella Moda</h4>
              <p>Moda feminina com estilo e qualidade desde 2014.</p>
              <div className="social-links">
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="WhatsApp">💬</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Produtos</h4>
              <ul>
                <li><a href="#produtos">Vestidos</a></li>
                <li><a href="#produtos">Blusas</a></li>
                <li><a href="#produtos">Calças</a></li>
                <li><a href="#produtos">Saias</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Atendimento</h4>
              <ul>
                <li><a href="#contato">Fale Conosco</a></li>
                <li><a href="#">Trocas e Devoluções</a></li>
                <li><a href="#">Guia de Tamanhos</a></li>
                <li><a href="#">Formas de Pagamento</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contato</h4>
              <p>📱 (11) 9 9999-9999</p>
              <p>📧 contato@bellamoda.com</p>
              <p>📍 Rua da Moda, 123 - Centro</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Bella Moda. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ pela Fábrica de Sites</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5511999999999" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

export default LojinhaRoupas;