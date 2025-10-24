import React, { useState } from 'react';
import './pizzaria.css';

function Pizzaria() {
  const [selectedCategory, setSelectedCategory] = useState('pizzas');
  const [carrinho, setCarrinho] = useState([]);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState({});

  const tamanhos = {
    'P': { nome: 'Pequena (4 fatias)', multiplicador: 1 },
    'M': { nome: 'Média (6 fatias)', multiplicador: 1.4 },
    'G': { nome: 'Grande (8 fatias)', multiplicador: 1.8 },
    'GG': { nome: 'Gigante (12 fatias)', multiplicador: 2.3 }
  };

  const pizzas = [
    {
      id: 1,
      nome: "Margherita",
      precoBase: 35.90,
      categoria: "pizzas",
      emoji: "🍕",
      descricao: "Molho de tomate, muçarela e manjericão fresco",
      ingredientes: ["Molho de tomate", "Muçarela", "Manjericão", "Azeite"]
    },
    {
      id: 2,
      nome: "Calabresa",
      precoBase: 38.90,
      categoria: "pizzas",
      emoji: "🍕",
      descricao: "Molho de tomate, muçarela, calabresa e cebola",
      ingredientes: ["Molho de tomate", "Muçarela", "Calabresa", "Cebola"]
    },
    {
      id: 3,
      nome: "Portuguesa",
      precoBase: 42.90,
      categoria: "pizzas",
      emoji: "🍕",
      descricao: "Molho de tomate, muçarela, presunto, ovos, cebola e azeitonas",
      ingredientes: ["Molho de tomate", "Muçarela", "Presunto", "Ovos", "Cebola", "Azeitonas"]
    },
    {
      id: 4,
      nome: "Frango c/ Catupiry",
      precoBase: 45.90,
      categoria: "pizzas",
      emoji: "🍕",
      descricao: "Molho de tomate, muçarela, frango desfiado e catupiry",
      ingredientes: ["Molho de tomate", "Muçarela", "Frango desfiado", "Catupiry"]
    },
    {
      id: 5,
      nome: "Quatro Queijos",
      precoBase: 48.90,
      categoria: "pizzas",
      emoji: "🍕",
      descricao: "Molho de tomate, muçarela, gorgonzola, provolone e parmesão",
      ingredientes: ["Molho de tomate", "Muçarela", "Gorgonzola", "Provolone", "Parmesão"]
    },
    {
      id: 6,
      nome: "Chocolate c/ Morango",
      precoBase: 39.90,
      categoria: "doces",
      emoji: "🍓",
      descricao: "Chocolate ao leite, morangos frescos e leite condensado",
      ingredientes: ["Chocolate ao leite", "Morangos", "Leite condensado"]
    },
    {
      id: 7,
      nome: "Coca-Cola 2L",
      precoBase: 8.90,
      categoria: "bebidas",
      emoji: "🥤",
      descricao: "Refrigerante Coca-Cola 2 litros gelado",
      ingredientes: ["Coca-Cola 2L"]
    },
    {
      id: 8,
      nome: "Suco Natural 1L",
      precoBase: 12.90,
      categoria: "bebidas",
      emoji: "🧃",
      descricao: "Suco natural de laranja, uva ou maracujá",
      ingredientes: ["Fruta natural 1L"]
    }
  ];

  const categorias = [
    { id: 'pizzas', nome: 'Pizzas Salgadas', emoji: '🍕' },
    { id: 'doces', nome: 'Pizzas Doces', emoji: '🍓' },
    { id: 'bebidas', nome: 'Bebidas', emoji: '🥤' }
  ];

  const produtosFiltrados = pizzas.filter(pizza => pizza.categoria === selectedCategory);

  const calcularPreco = (produto, tamanho = 'M') => {
    if (produto.categoria === 'pizzas' || produto.categoria === 'doces') {
      return produto.precoBase * tamanhos[tamanho].multiplicador;
    }
    return produto.precoBase;
  };

  const adicionarCarrinho = (produto, tamanho = 'M') => {
    const item = {
      ...produto,
      tamanho: produto.categoria === 'pizzas' || produto.categoria === 'doces' ? tamanho : null,
      preco: calcularPreco(produto, tamanho),
      id: Date.now() // ID único para o carrinho
    };
    setCarrinho([...carrinho, item]);
    alert(`${produto.nome} ${item.tamanho ? `(${tamanhos[tamanho].nome})` : ''} adicionada ao carrinho!`);
  };

  const totalCarrinho = carrinho.reduce((total, item) => total + item.preco, 0);

  const enviarPedido = () => {
    if (carrinho.length === 0) {
      alert('Adicione pizzas ao carrinho primeiro!');
      return;
    }
    
    let mensagem = "🍕 *PEDIDO - Pizzaria Bella Napoli*\n\n";
    carrinho.forEach((item, index) => {
      mensagem += `${index + 1}. ${item.nome}`;
      if (item.tamanho) {
        mensagem += ` (${tamanhos[item.tamanho].nome})`;
      }
      mensagem += ` - R$ ${item.preco.toFixed(2)}\n`;
    });
    mensagem += `\n💰 *Total: R$ ${totalCarrinho.toFixed(2)}*\n\n`;
    mensagem += "🏠 Favor informar endereço completo para entrega ou confirmar retirada na pizzaria.";
    
    const numeroWhatsApp = "5511555544444";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div className="pizzaria">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🍕</span>
            <h1>Pizzaria Bella Napoli</h1>
          </div>
          
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="carrinho-info">
            <span className="carrinho-icon">🛒</span>
            <span className="carrinho-count">{carrinho.length}</span>
            <span className="carrinho-total">R$ {totalCarrinho.toFixed(2)}</span>
            {carrinho.length > 0 && (
              <button className="btn-finalizar-header" onClick={enviarPedido}>
                Finalizar
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h2>Autêntica Pizza Italiana</h2>
          <p>Desde 1995 preparando pizzas com a tradicional receita italiana, massa artesanal e ingredientes frescos importados</p>
          <div className="hero-features">
            <div className="feature">
              <span>🇮🇹</span>
              <p>Receita<br/>Italiana</p>
            </div>
            <div className="feature">
              <span>🔥</span>
              <p>Forno<br/>a Lenha</p>
            </div>
            <div className="feature">
              <span>🧀</span>
              <p>Queijos<br/>Importados</p>
            </div>
            <div className="feature">
              <span>🚚</span>
              <p>Entrega<br/>45min</p>
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
                  <div className="produto-badge">Artesanal</div>
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="descricao">{produto.descricao}</p>
                  <div className="ingredientes">
                    <strong>Ingredientes:</strong>
                    <div className="ingredientes-list">
                      {produto.ingredientes.map((ingrediente, index) => (
                        <span key={index} className="ingrediente">{ingrediente}</span>
                      ))}
                    </div>
                  </div>
                  
                  {(produto.categoria === 'pizzas' || produto.categoria === 'doces') ? (
                    <div className="tamanhos-secao">
                      <strong>Escolha o tamanho:</strong>
                      <div className="tamanhos-grid">
                        {Object.entries(tamanhos).map(([tamanho, info]) => (
                          <div key={tamanho} className="tamanho-opcao">
                            <div className="tamanho-info">
                              <span className="tamanho-nome">{tamanho}</span>
                              <span className="tamanho-desc">{info.nome}</span>
                              <span className="tamanho-preco">R$ {calcularPreco(produto, tamanho).toFixed(2)}</span>
                            </div>
                            <button 
                              className="btn-adicionar-tamanho"
                              onClick={() => adicionarCarrinho(produto, tamanho)}
                            >
                              Adicionar
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="produto-footer">
                      <div className="preco">R$ {produto.precoBase.toFixed(2)}</div>
                      <button 
                        className="btn-adicionar"
                        onClick={() => adicionarCarrinho(produto)}
                      >
                        <span>🛒</span>
                        Adicionar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tradição */}
      <section className="tradicao">
        <div className="container">
          <h2>Tradição Italiana Desde 1995</h2>
          <div className="tradicao-grid">
            <div className="tradicao-item">
              <span className="icon">👨‍🍳</span>
              <h3>Família Italiana</h3>
              <p>Fundada pelo Nono Giuseppe, trazendo receitas tradicionais diretamente da Itália para sua mesa.</p>
            </div>
            <div className="tradicao-item">
              <span className="icon">🔥</span>
              <h3>Forno a Lenha Original</h3>
              <p>Nosso forno a lenha de 1995 garante o sabor autêntico e a textura perfeita em cada pizza.</p>
            </div>
            <div className="tradicao-item">
              <span className="icon">🌾</span>
              <h3>Massa Artesanal</h3>
              <p>Massa preparada diariamente com fermentação natural de 24 horas, como manda a tradição.</p>
            </div>
            <div className="tradicao-item">
              <span className="icon">🧀</span>
              <h3>Ingredientes Importados</h3>
              <p>Queijos, molhos e temperos selecionados e importados diretamente da Itália.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <h2>Nossa História</h2>
              <p>Em 1995, Giuseppe Rossi chegou ao Brasil trazendo na bagagem o sonho de compartilhar o autêntico sabor da pizza italiana. Com uma receita passada de geração em geração na família, ele abriu a Pizzaria Bella Napoli.</p>
              <p>Hoje, quase 30 anos depois, continuamos fiéis às tradições: massa artesanal, fermentação natural, forno a lenha e ingredientes da mais alta qualidade. Nossa pizza não é apenas comida, é uma experiência cultural italiana.</p>
              <p><em>"Ogni pizza è fatta con amore"</em> - Giuseppe Rossi</p>
              <div className="certificacoes">
                <div className="certificacao">
                  <span>🏆</span>
                  <div>
                    <strong>Certificado Authentic Italian</strong>
                    <p>Reconhecimento oficial da Associação Italiana</p>
                  </div>
                </div>
                <div className="certificacao">
                  <span>⭐</span>
                  <div>
                    <strong>5 Estrelas no TripAdvisor</strong>
                    <p>Avaliação dos nossos clientes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="giuseppe-foto">
              <div className="foto-container">
                <span>👨‍🍳</span>
                <p><strong>Giuseppe Rossi</strong><br/>
                Fundador e Pizzaiolo Master<br/>
                <em>"La tradizione continua"</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos">
        <div className="container">
          <h2>Depoimentos dos Nossos Clientes</h2>
          <div className="depoimentos-grid">
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"A melhor pizza da cidade! Massa fininha, ingredientes frescos e sabor autêntico. É como estar na Itália!"</p>
              <div className="cliente">
                <span className="avatar">👨</span>
                <div>
                  <strong>Marco Silva</strong>
                  <span>Cliente há 8 anos</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Tradição familiar que se mantém. A pizza quattro formaggi é divina! Ambiente acolhedor e atendimento perfeito."</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Lucia Martins</strong>
                  <span>Cliente há 12 anos</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Depois de viajar pela Itália, posso dizer que aqui tem o sabor mais próximo do original. Parabéns!"</p>
              <div className="cliente">
                <span className="avatar">👨‍💼</span>
                <div>
                  <strong>Carlos Roberto</strong>
                  <span>Cliente há 6 anos</span>
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
                <span>Terça a Quinta:</span>
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
              <div className="horario-item">
                <span>Segunda:</span>
                <span>Fechado</span>
              </div>
              <p className="destaque">🍕 Massas preparadas fresh daily!</p>
            </div>
            
            <div className="entrega">
              <h3>🚚 Delivery & Retirada</h3>
              <div className="entrega-item">
                <span>📍 Área de Entrega:</span>
                <span>Raio de 5km</span>
              </div>
              <div className="entrega-item">
                <span>💰 Taxa de Entrega:</span>
                <span>R$ 5,00</span>
              </div>
              <div className="entrega-item">
                <span>⏱️ Tempo de Entrega:</span>
                <span>30-45 minutos</span>
              </div>
              <div className="entrega-item">
                <span>🍕 Pedido Mínimo:</span>
                <span>R$ 25,00</span>
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
                  <strong>WhatsApp</strong>
                  <p>(11) 9 5555-4444</p>
                  <small>Pedidos rápidos pelo WhatsApp!</small>
                </div>
              </div>
              <div className="info-item">
                <span>📞</span>
                <div>
                  <strong>Telefone</strong>
                  <p>(11) 1111-9999</p>
                  <small>Atendimento direto da pizzaria</small>
                </div>
              </div>
              <div className="info-item">
                <span>🏪</span>
                <div>
                  <strong>Balcão</strong>
                  <p>Via Roma, 456 - Centro</p>
                  <small>Venha experimentar no local!</small>
                </div>
              </div>
            </div>
            
            <div className="contato-form">
              <h3>Nossa Localização</h3>
              <div className="endereco-completo">
                <p><strong>📍 Endereço:</strong></p>
                <p>Via Roma, 456<br/>
                Centro - São Paulo/SP<br/>
                CEP: 01234-567</p>
                
                <p><strong>🚇 Como Chegar:</strong></p>
                <p>• Metrô: Estação Centro (200m)<br/>
                • Ônibus: Linhas 150, 250, 350<br/>
                • Referência: Próximo à Praça Itália</p>
                
                <div className="pagamento">
                  <p><strong>💳 Formas de Pagamento:</strong></p>
                  <div className="pagamento-opcoes">
                    <span>💵 Dinheiro</span>
                    <span>💳 Cartão de Crédito</span>
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
              <h4>🍕 Pizzaria Bella Napoli</h4>
              <p>Tradição italiana desde 1995. Cada pizza é preparada com amor e os melhores ingredientes da Itália.</p>
              <div className="social-links">
                <a href="#" aria-label="WhatsApp">💬</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="TripAdvisor">✈️</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Pizzas Favoritas</h4>
              <ul>
                <li><a href="#cardapio">🍕 Margherita</a></li>
                <li><a href="#cardapio">🍕 Quattro Formaggi</a></li>
                <li><a href="#cardapio">🍕 Calabresa</a></li>
                <li><a href="#cardapio">🍓 Doces Especiais</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Atendimento</h4>
              <ul>
                <li><a href="#contato">Fazer Pedido</a></li>
                <li><a href="#">Área de Entrega</a></li>
                <li><a href="#">Cardápio Completo</a></li>
                <li><a href="#">Reserva de Mesa</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contato</h4>
              <p>📱 (11) 9 5555-4444</p>
              <p>📞 (11) 1111-9999</p>
              <p>📍 Via Roma, 456 - Centro</p>
              <p>🕐 Ter-Dom: 18h-23h</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Pizzaria Bella Napoli. Tutti i diritti riservati.</p>
            <p>Desenvolvido com ❤️ pela Fábrica de Sites</p>
          </div>
        </div>
      </footer>

      {/* Carrinho Resumo */}
      {carrinho.length > 0 && (
        <div className="carrinho-resumo">
          <div className="carrinho-header">
            <h4>Seu Pedido ({carrinho.length} itens)</h4>
            <button onClick={() => setCarrinho([])} className="limpar-carrinho">🗑️</button>
          </div>
          <div className="carrinho-itens">
            {carrinho.slice(-3).map((item, index) => (
              <div key={index} className="carrinho-item">
                <span>{item.emoji} {item.nome}</span>
                {item.tamanho && <span className="item-tamanho">({item.tamanho})</span>}
                <span>R$ {item.preco.toFixed(2)}</span>
              </div>
            ))}
            {carrinho.length > 3 && (
              <div className="mais-itens">
                + {carrinho.length - 3} itens...
              </div>
            )}
          </div>
          <div className="carrinho-total-box">
            <strong>Total: R$ {totalCarrinho.toFixed(2)}</strong>
          </div>
          <button className="finalizar-pedido" onClick={enviarPedido}>
            Finalizar Pedido via WhatsApp
          </button>
        </div>
      )}

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5511555544444" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <span>💬</span>
        <span className="whatsapp-text">Pedir</span>
      </a>
    </div>
  );
}

export default Pizzaria;