import React, { useState } from 'react';
import './sacolao.css';

function Sacolao() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [cartItems, setCartItems] = useState([]);

  const produtos = [
    {
      id: 1,
      nome: "Banana Prata",
      preco: 4.99,
      unidade: "kg",
      categoria: "frutas",
      emoji: "🍌",
      descricao: "Banana prata fresca e doce"
    },
    {
      id: 2,
      nome: "Alface Americana",
      preco: 2.50,
      unidade: "unidade",
      categoria: "verduras",
      emoji: "🥬",
      descricao: "Alface crocante e fresquinha"
    },
    {
      id: 3,
      nome: "Tomate Salada",
      preco: 6.99,
      unidade: "kg",
      categoria: "legumes",
      emoji: "🍅",
      descricao: "Tomate vermelho e suculento"
    },
    {
      id: 4,
      nome: "Maçã Gala",
      preco: 7.99,
      unidade: "kg",
      categoria: "frutas",
      emoji: "🍎",
      descricao: "Maçã doce e crocante"
    },
    {
      id: 5,
      nome: "Cenoura",
      preco: 3.99,
      unidade: "kg",
      categoria: "legumes",
      emoji: "🥕",
      descricao: "Cenoura fresca e nutritiva"
    },
    {
      id: 6,
      nome: "Laranja Pêra",
      preco: 3.50,
      unidade: "kg",
      categoria: "frutas",
      emoji: "🍊",
      descricao: "Laranja suculenta para suco"
    },
    {
      id: 7,
      nome: "Couve Manteiga",
      preco: 1.99,
      unidade: "maço",
      categoria: "verduras",
      emoji: "🥬",
      descricao: "Couve fresca para refogados"
    },
    {
      id: 8,
      nome: "Batata Inglesa",
      preco: 4.50,
      unidade: "kg",
      categoria: "legumes",
      emoji: "🥔",
      descricao: "Batata lisa ideal para purê"
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos', emoji: '🛒' },
    { id: 'frutas', nome: 'Frutas', emoji: '🍎' },
    { id: 'verduras', nome: 'Verduras', emoji: '🥬' },
    { id: 'legumes', nome: 'Legumes', emoji: '🥕' }
  ];

  const produtosFiltrados = selectedCategory === 'todos' 
    ? produtos 
    : produtos.filter(produto => produto.categoria === selectedCategory);

  const adicionarCarrinho = (produto) => {
    setCartItems([...cartItems, produto]);
    alert(`${produto.nome} adicionado ao carrinho!`);
  };

  const totalCarrinho = cartItems.reduce((total, item) => total + item.preco, 0);

  return (
    <div className="sacolao">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🥕</span>
            <h1>Hortifrúti do João</h1>
          </div>
          
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartItems.length}</span>
            <span className="cart-total">R$ {totalCarrinho.toFixed(2)}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h2>Fresquinho como se fosse da sua horta</h2>
          <p>Os melhores produtos direto do produtor para sua mesa, sempre frescos e com o melhor preço da região</p>
          <div className="hero-features">
            <div className="feature">
              <span>🚚</span>
              <p>Entrega<br/>no mesmo dia</p>
            </div>
            <div className="feature">
              <span>🌱</span>
              <p>Produtos<br/>orgânicos</p>
            </div>
            <div className="feature">
              <span>💰</span>
              <p>Melhor preço<br/>da região</p>
            </div>
            <div className="feature">
              <span>🕐</span>
              <p>Aberto todos<br/>os dias</p>
            </div>
          </div>
          <button className="cta-button" onClick={() => document.getElementById('produtos').scrollIntoView()}>
            Ver Produtos Frescos
          </button>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="produtos">
        <div className="container">
          <h2>Nossos Produtos Fresquinhos</h2>
          
          {/* Filtros */}
          <div className="filtros">
            {categorias.map(categoria => (
              <button
                key={categoria.id}
                className={`filtro ${selectedCategory === categoria.id ? 'ativo' : ''}`}
                onClick={() => setSelectedCategory(categoria.id)}
              >
                <span>{categoria.emoji}</span>
                {categoria.nome}
              </button>
            ))}
          </div>

          {/* Grid de Produtos */}
          <div className="produtos-grid">
            {produtosFiltrados.map(produto => (
              <div key={produto.id} className="produto-card">
                <div className="produto-imagem">
                  <span className="emoji-produto">{produto.emoji}</span>
                  <div className="produto-badge">Fresco</div>
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <div className="preco-container">
                    <div className="preco">R$ {produto.preco.toFixed(2)}</div>
                    <div className="unidade">por {produto.unidade}</div>
                  </div>
                  <button 
                    className="btn-adicionar"
                    onClick={() => adicionarCarrinho(produto)}
                  >
                    <span>🛒</span>
                    Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualidade */}
      <section className="qualidade">
        <div className="container">
          <h2>Por que escolher o Hortifrúti do João?</h2>
          <div className="qualidade-grid">
            <div className="qualidade-item">
              <span className="icon">🌅</span>
              <h3>Colheita Diária</h3>
              <p>Nossos produtos são colhidos diariamente nas melhores fazendas da região, garantindo máximo frescor.</p>
            </div>
            <div className="qualidade-item">
              <span className="icon">👨‍🌾</span>
              <h3>Direto do Produtor</h3>
              <p>Trabalhamos diretamente com produtores locais, eliminando intermediários e oferecendo melhores preços.</p>
            </div>
            <div className="qualidade-item">
              <span className="icon">🏆</span>
              <h3>Qualidade Garantida</h3>
              <p>Todos os produtos passam por rigorosa seleção. Se não estiver satisfeito, trocamos ou devolvemos o dinheiro.</p>
            </div>
            <div className="qualidade-item">
              <span className="icon">🚀</span>
              <h3>Entrega Rápida</h3>
              <p>Entregamos no mesmo dia para pedidos até às 16h. Seus produtos frescos chegam rapidinho na sua casa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <h2>A história do João</h2>
              <p>Há mais de 30 anos o João trabalha com hortifrúti, sempre com o sonho de levar produtos frescos e de qualidade para as famílias da região. O que começou como uma pequena barraca na feira, hoje é o maior hortifrúti do bairro.</p>
              <p>"Meu compromisso é com a qualidade. Cada produto que sai daqui tem que estar perfeito para vocês", diz João com orgulho.</p>
              <div className="sobre-stats">
                <div className="stat">
                  <span className="numero">30+</span>
                  <span className="label">Anos de Experiência</span>
                </div>
                <div className="stat">
                  <span className="numero">50+</span>
                  <span className="label">Produtores Parceiros</span>
                </div>
                <div className="stat">
                  <span className="numero">1000+</span>
                  <span className="label">Famílias Atendidas</span>
                </div>
              </div>
            </div>
            <div className="sobre-imagem">
              <div className="joao-foto">
                <span>👨‍🌾</span>
                <p>João - Proprietário</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos">
        <div className="container">
          <h2>O que nossos clientes falam</h2>
          <div className="depoimentos-grid">
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Compro aqui há anos! Os produtos são sempre frescos e o atendimento é excelente. O João é uma pessoa incrível!"</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Maria das Dores</strong>
                  <span>Cliente há 10 anos</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Melhor hortifrúti da região! Preços justos e produtos de primeira qualidade. Recomendo para todo mundo!"</p>
              <div className="cliente">
                <span className="avatar">👨</span>
                <div>
                  <strong>Carlos Silva</strong>
                  <span>Cliente há 5 anos</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"A entrega é super rápida e os produtos chegam fresquinhos. Facilita muito a minha vida corrida!"</p>
              <div className="cliente">
                <span className="avatar">👩‍💼</span>
                <div>
                  <strong>Ana Paula</strong>
                  <span>Cliente há 2 anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horário e Localização */}
      <section className="horario-local">
        <div className="container">
          <div className="info-grid">
            <div className="horario">
              <h3>🕐 Horário de Funcionamento</h3>
              <div className="horario-item">
                <span>Segunda a Sábado:</span>
                <span>6h às 20h</span>
              </div>
              <div className="horario-item">
                <span>Domingos e Feriados:</span>
                <span>7h às 17h</span>
              </div>
              <p className="destaque">Entrega até 19h todos os dias!</p>
            </div>
            
            <div className="localizacao">
              <h3>📍 Como Chegar</h3>
              <p><strong>Endereço:</strong><br/>
              Rua das Flores, 456<br/>
              Centro - São Paulo/SP</p>
              <p><strong>Ponto de Referência:</strong><br/>
              Em frente à Padaria do Seu José</p>
              <p><strong>Estacionamento:</strong><br/>
              Disponível na rua</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contato">
        <div className="container">
          <h2>Faça seu Pedido</h2>
          <div className="contato-grid">
            <div className="contato-info">
              <h3>Formas de Pedido</h3>
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>(11) 9 8888-7777</p>
                  <small>Resposta rápida garantida!</small>
                </div>
              </div>
              <div className="info-item">
                <span>📞</span>
                <div>
                  <strong>Telefone</strong>
                  <p>(11) 3333-4444</p>
                  <small>Atendimento direto da loja</small>
                </div>
              </div>
              <div className="info-item">
                <span>🚚</span>
                <div>
                  <strong>Entrega</strong>
                  <p>Taxa: R$ 5,00</p>
                  <small>Grátis para compras acima de R$ 50</small>
                </div>
              </div>
            </div>
            
            <div className="contato-form">
              <h3>Ou Deixe sua Mensagem</h3>
              <form>
                <input type="text" placeholder="Seu nome" required />
                <input type="tel" placeholder="Telefone com WhatsApp" required />
                <select required>
                  <option value="">Selecione o tipo de pedido</option>
                  <option value="entrega">Entrega em casa</option>
                  <option value="retirada">Retirada na loja</option>
                  <option value="duvida">Dúvidas sobre produtos</option>
                </select>
                <textarea placeholder="Liste os produtos que deseja ou sua dúvida..." rows="4"></textarea>
                <button type="submit" className="btn-enviar">Enviar Pedido</button>
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
              <h4>🥕 Hortifrúti do João</h4>
              <p>Produtos frescos e de qualidade há mais de 30 anos. Sua família merece o melhor!</p>
              <div className="social-links">
                <a href="#" aria-label="WhatsApp">💬</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Categorias</h4>
              <ul>
                <li><a href="#produtos">🍎 Frutas</a></li>
                <li><a href="#produtos">🥬 Verduras</a></li>
                <li><a href="#produtos">🥕 Legumes</a></li>
                <li><a href="#produtos">🌶️ Temperos</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Atendimento</h4>
              <ul>
                <li><a href="#contato">Fazer Pedido</a></li>
                <li><a href="#">Política de Trocas</a></li>
                <li><a href="#">Área de Entrega</a></li>
                <li><a href="#">Produtos Orgânicos</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contato</h4>
              <p>📱 (11) 9 8888-7777</p>
              <p>📞 (11) 3333-4444</p>
              <p>📍 Rua das Flores, 456 - Centro</p>
              <p>🕐 6h às 20h (Seg-Sáb)</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Hortifrúti do João. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ pela Fábrica de Sites</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5511988887777" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <span>💬</span>
        <span className="whatsapp-text">Peça já!</span>
      </a>
    </div>
  );
}

export default Sacolao;