import React, { useState } from 'react';
import './lanchonete.css';

function Lanchonete() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [pedidoItems, setPedidoItems] = useState([]);

  const produtos = [
    {
      id: 1,
      nome: "X-Burger Clássico",
      preco: 18.90,
      categoria: "lanches",
      emoji: "🍔",
      descricao: "Hambúrguer, queijo, alface, tomate e molho especial",
      ingredientes: ["Pão de hambúrguer", "Carne 120g", "Queijo", "Alface", "Tomate", "Molho especial"]
    },
    {
      id: 2,
      nome: "X-Bacon Deluxe",
      preco: 24.90,
      categoria: "lanches",
      emoji: "🥓",
      descricao: "Hambúrguer com bacon crocante, queijo e vegetais",
      ingredientes: ["Pão brioche", "Carne 150g", "Bacon", "Queijo cheddar", "Alface", "Tomate", "Cebola roxa"]
    },
    {
      id: 3,
      nome: "Batata Frita Tradicional",
      preco: 12.90,
      categoria: "acompanhamentos",
      emoji: "🍟",
      descricao: "Batata frita crocante temperada na medida",
      ingredientes: ["Batata especial", "Sal grosso", "Tempero da casa"]
    },
    {
      id: 4,
      nome: "Refrigerante Lata",
      preco: 4.50,
      categoria: "bebidas",
      emoji: "🥤",
      descricao: "Coca-Cola, Guaraná ou Fanta - 350ml",
      ingredientes: ["Bebida gelada", "350ml"]
    },
    {
      id: 5,
      nome: "Misto Quente",
      preco: 8.90,
      categoria: "lanches",
      emoji: "🥪",
      descricao: "Pão de forma, presunto e queijo na chapa",
      ingredientes: ["Pão de forma", "Presunto", "Queijo", "Manteiga"]
    },
    {
      id: 6,
      nome: "Coxinha de Frango",
      preco: 6.50,
      categoria: "salgados",
      emoji: "🍗",
      descricao: "Coxinha tradicional com recheio generoso",
      ingredientes: ["Massa especial", "Frango desfiado", "Temperos"]
    },
    {
      id: 7,
      nome: "Açaí na Taça",
      preco: 15.90,
      categoria: "sobremesas",
      emoji: "🍇",
      descricao: "Açaí cremoso com frutas e granola",
      ingredientes: ["Açaí natural", "Banana", "Granola", "Mel"]
    },
    {
      id: 8,
      nome: "Suco Natural",
      preco: 7.50,
      categoria: "bebidas",
      emoji: "🥤",
      descricao: "Laranja, Acerola ou Maracujá - 500ml",
      ingredientes: ["Fruta fresca", "500ml"]
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos', emoji: '🍽️' },
    { id: 'lanches', nome: 'Lanches', emoji: '🍔' },
    { id: 'salgados', nome: 'Salgados', emoji: '🍗' },
    { id: 'acompanhamentos', nome: 'Acompanhamentos', emoji: '🍟' },
    { id: 'bebidas', nome: 'Bebidas', emoji: '🥤' },
    { id: 'sobremesas', nome: 'Sobremesas', emoji: '🍇' }
  ];

  const produtosFiltrados = selectedCategory === 'todos' 
    ? produtos 
    : produtos.filter(produto => produto.categoria === selectedCategory);

  const adicionarPedido = (produto) => {
    setPedidoItems([...pedidoItems, produto]);
    alert(`${produto.nome} adicionado ao pedido!`);
  };

  const totalPedido = pedidoItems.reduce((total, item) => total + item.preco, 0);

  const enviarPedido = () => {
    if (pedidoItems.length === 0) {
      alert('Adicione itens ao pedido primeiro!');
      return;
    }
    
    let mensagem = "🍔 *PEDIDO - Lanchonete do Zé*\n\n";
    pedidoItems.forEach((item, index) => {
      mensagem += `${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });
    mensagem += `\n💰 *Total: R$ ${totalPedido.toFixed(2)}*\n\n`;
    mensagem += "🏠 Favor informar endereço para entrega ou confirmar retirada na loja.";
    
    const numeroWhatsApp = "5511666655555";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div className="lanchonete">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🍔</span>
            <h1>Lanchonete do Zé</h1>
          </div>
          
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="pedido-info">
            <span className="pedido-icon">🛒</span>
            <span className="pedido-count">{pedidoItems.length}</span>
            <span className="pedido-total">R$ {totalPedido.toFixed(2)}</span>
            {pedidoItems.length > 0 && (
              <button className="btn-finalizar" onClick={enviarPedido}>
                Finalizar
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h2>O sabor que você já conhece!</h2>
          <p>Há mais de 20 anos servindo os melhores lanches da região com muito capricho e ingredientes frescos</p>
          <div className="hero-features">
            <div className="feature">
              <span>🚚</span>
              <p>Entrega<br/>rápida</p>
            </div>
            <div className="feature">
              <span>🍟</span>
              <p>Batata<br/>sequinha</p>
            </div>
            <div className="feature">
              <span>🥩</span>
              <p>Carne<br/>fresquinha</p>
            </div>
            <div className="feature">
              <span>💰</span>
              <p>Preço<br/>justo</p>
            </div>
          </div>
          <button className="cta-button" onClick={() => document.getElementById('cardapio').scrollIntoView()}>
            Ver Cardápio
          </button>
        </div>
      </section>

      {/* Cardápio */}
      <section id="cardapio" className="cardapio">
        <div className="container">
          <h2>Nosso Delicioso Cardápio</h2>
          
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
                <div className="produto-header">
                  <span className="emoji-produto">{produto.emoji}</span>
                  <div className="produto-badge">Delicioso</div>
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="descricao">{produto.descricao}</p>
                  <div className="ingredientes">
                    <strong>Ingredientes:</strong>
                    <ul>
                      {produto.ingredientes.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="produto-footer">
                    <div className="preco">R$ {produto.preco.toFixed(2)}</div>
                    <button 
                      className="btn-adicionar"
                      onClick={() => adicionarPedido(produto)}
                    >
                      <span>🛒</span>
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="diferencial">
        <div className="container">
          <h2>Por que escolher a Lanchonete do Zé?</h2>
          <div className="diferencial-grid">
            <div className="diferencial-item">
              <span className="icon">🥩</span>
              <h3>Ingredientes Frescos</h3>
              <p>Trabalhamos apenas com ingredientes selecionados e de primeira qualidade. Nossa carne é moída na hora!</p>
            </div>
            <div className="diferencial-item">
              <span className="icon">👨‍🍳</span>
              <h3>Receita da Família</h3>
              <p>Nossos molhos e temperos são preparados com receitas passadas de geração em geração na família do Zé.</p>
            </div>
            <div className="diferencial-item">
              <span className="icon">⚡</span>
              <h3>Preparo Rápido</h3>
              <p>Mesmo caprichando em cada detalhe, garantimos agilidade no preparo para você não ficar esperando.</p>
            </div>
            <div className="diferencial-item">
              <span className="icon">💝</span>
              <h3>Atendimento Familiar</h3>
              <p>Aqui você é tratado como da família! Conhecemos nossos clientes e seus gostos preferidos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <h2>A história do Zé</h2>
              <p>Tudo começou em 2004, quando o Zé decidiu transformar sua paixão por cozinhar em um negócio. Com uma chapinha pequena e muito amor pela comida, ele começou a fazer lanches para os amigos do bairro.</p>
              <p>20 anos depois, a Lanchonete do Zé se tornou referência na região. O segredo? Ingredientes frescos, tempero especial da família e muito carinho em cada lanche preparado.</p>
              <p>"Cada cliente que sai satisfeito daqui é uma vitória pra mim. Esse é meu combustível todos os dias!" - Zé</p>
              <div className="stats">
                <div className="stat">
                  <span className="numero">20+</span>
                  <span className="label">Anos Servindo</span>
                </div>
                <div className="stat">
                  <span className="numero">15mil+</span>
                  <span className="label">Lanches Vendidos</span>
                </div>
                <div className="stat">
                  <span className="numero">500+</span>
                  <span className="label">Clientes Fiéis</span>
                </div>
              </div>
            </div>
            <div className="ze-foto">
              <div className="foto-container">
                <span>👨‍🍳</span>
                <p><strong>Zé - Proprietário</strong><br/>
                "O rei da chapa desde 2004"</p>
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
              <p>"Melhor X-Bacon da vida! Como aqui desde que era criança. O Zé é uma figura e os lanches são perfeitos!"</p>
              <div className="cliente">
                <span className="avatar">👨</span>
                <div>
                  <strong>João Silva</strong>
                  <span>Cliente há 15 anos</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Entrega super rápida e o lanche chega quentinho! A batata é a melhor da região, sempre sequinha!"</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Maria Santos</strong>
                  <span>Cliente há 8 anos</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Preço justo, sabor incrível e atendimento nota 10! Virou nosso local preferido para lanchar em família."</p>
              <div className="cliente">
                <span className="avatar">👨‍👩‍👧‍👦</span>
                <div>
                  <strong>Família Costa</strong>
                  <span>Clientes há 5 anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horário e Entrega */}
      <section className="horario-entrega">
        <div className="container">
          <div className="info-grid">
            <div className="horario">
              <h3>🕐 Horário de Funcionamento</h3>
              <div className="horario-item">
                <span>Segunda a Quinta:</span>
                <span>18h às 23h</span>
              </div>
              <div className="horario-item">
                <span>Sexta e Sábado:</span>
                <span>18h às 00h</span>
              </div>
              <div className="horario-item">
                <span>Domingo:</span>
                <span>18h às 22h</span>
              </div>
              <p className="destaque">🍔 Sempre fresquinho e quentinho!</p>
            </div>
            
            <div className="entrega">
              <h3>🚚 Informações de Entrega</h3>
              <div className="entrega-item">
                <span>📍 Área de Entrega:</span>
                <span>Raio de 3km</span>
              </div>
              <div className="entrega-item">
                <span>💰 Taxa de Entrega:</span>
                <span>R$ 3,00</span>
              </div>
              <div className="entrega-item">
                <span>⏱️ Tempo Médio:</span>
                <span>30-45 minutos</span>
              </div>
              <div className="entrega-item">
                <span>📱 Pedido Mínimo:</span>
                <span>R$ 15,00</span>
              </div>
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
              <h3>Como Pedir</h3>
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp (Preferencial)</strong>
                  <p>(11) 9 6666-5555</p>
                  <small>Envie seu pedido direto pelo WhatsApp!</small>
                </div>
              </div>
              <div className="info-item">
                <span>📞</span>
                <div>
                  <strong>Telefone</strong>
                  <p>(11) 3333-2222</p>
                  <small>Ligue direto para a lanchonete</small>
                </div>
              </div>
              <div className="info-item">
                <span>🏪</span>
                <div>
                  <strong>Retirada no Local</strong>
                  <p>Rua do Sabor, 321 - Centro</p>
                  <small>Venha buscar e economize a taxa de entrega!</small>
                </div>
              </div>
            </div>
            
            <div className="contato-form">
              <h3>Localização</h3>
              <div className="endereco-completo">
                <p><strong>📍 Endereço Completo:</strong></p>
                <p>Rua do Sabor, 321<br/>
                Centro - São Paulo/SP<br/>
                CEP: 01234-567</p>
                
                <p><strong>🚌 Como Chegar:</strong></p>
                <p>• Ônibus: Linhas 100, 200, 300<br/>
                • Metrô: Estação Centro (500m)<br/>
                • Ponto de referência: Próximo ao Banco do Brasil</p>
                
                <div className="pagamento">
                  <p><strong>💳 Formas de Pagamento:</strong></p>
                  <div className="pagamento-opcoes">
                    <span>💵 Dinheiro</span>
                    <span>💳 Cartão</span>
                    <span>📱 PIX</span>
                    <span>🍔 Vale Refeição</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🍔 Lanchonete do Zé</h4>
              <p>Sabor de família há mais de 20 anos. Cada lanche é feito com muito carinho e os melhores ingredientes!</p>
              <div className="social-links">
                <a href="#" aria-label="WhatsApp">💬</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Mais Pedidos</h4>
              <ul>
                <li><a href="#cardapio">🍔 X-Burger Clássico</a></li>
                <li><a href="#cardapio">🥓 X-Bacon Deluxe</a></li>
                <li><a href="#cardapio">🍟 Batata Frita</a></li>
                <li><a href="#cardapio">🍗 Coxinha</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Atendimento</h4>
              <ul>
                <li><a href="#contato">Fazer Pedido</a></li>
                <li><a href="#">Área de Entrega</a></li>
                <li><a href="#">Formas de Pagamento</a></li>
                <li><a href="#">Dúvidas Frequentes</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contato</h4>
              <p>📱 (11) 9 6666-5555</p>
              <p>📞 (11) 3333-2222</p>
              <p>📍 Rua do Sabor, 321 - Centro</p>
              <p>🕐 18h às 23h (Seg-Qui)</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Lanchonete do Zé. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ pela Fábrica de Sites</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5511666655555" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <span>💬</span>
        <span className="whatsapp-text">Pedir</span>
      </a>

      {/* Resumo do Pedido Fixo */}
      {pedidoItems.length > 0 && (
        <div className="pedido-resumo">
          <div className="pedido-header">
            <h4>Seu Pedido ({pedidoItems.length} itens)</h4>
            <button onClick={() => setPedidoItems([])} className="limpar-pedido">🗑️</button>
          </div>
          <div className="pedido-itens">
            {pedidoItems.slice(-3).map((item, index) => (
              <div key={index} className="pedido-item">
                <span>{item.emoji} {item.nome}</span>
                <span>R$ {item.preco.toFixed(2)}</span>
              </div>
            ))}
            {pedidoItems.length > 3 && (
              <div className="mais-itens">
                + {pedidoItems.length - 3} itens...
              </div>
            )}
          </div>
          <div className="pedido-total-box">
            <strong>Total: R$ {totalPedido.toFixed(2)}</strong>
          </div>
          <button className="finalizar-pedido" onClick={enviarPedido}>
            Finalizar Pedido via WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}

export default Lanchonete;