import React, { useState, useEffect } from 'react';
import './minimercado.css';

const MiniMercado = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  // Produtos do mini mercado
  const produtos = [
    // Produtos Básicos
    {
      id: 1,
      nome: "Arroz Branco",
      categoria: "basicos",
      preco: 5.99,
      marca: "Tio João",
      peso: "1kg",
      descricao: "Arroz tipo 1, grãos selecionados",
      emoji: "🍚",
      popular: true
    },
    {
      id: 2,
      nome: "Feijão Carioca",
      categoria: "basicos",
      preco: 8.90,
      marca: "Camil",
      peso: "1kg",
      descricao: "Feijão tipo 1, primeira qualidade",
      emoji: "🫘",
      popular: true
    },
    {
      id: 3,
      nome: "Açúcar Cristal",
      categoria: "basicos",
      preco: 4.50,
      marca: "União",
      peso: "1kg",
      descricao: "Açúcar cristal especial",
      emoji: "🧂",
      popular: true
    },
    {
      id: 4,
      nome: "Óleo de Soja",
      categoria: "basicos",
      preco: 7.89,
      marca: "Liza",
      volume: "900ml",
      descricao: "Óleo de soja refinado",
      emoji: "🫗",
      popular: true
    },
    {
      id: 5,
      nome: "Farinha de Trigo",
      categoria: "basicos",
      preco: 6.20,
      marca: "Dona Benta",
      peso: "1kg",
      descricao: "Farinha de trigo especial",
      emoji: "🌾",
      popular: false
    },
    {
      id: 6,
      nome: "Sal Refinado",
      categoria: "basicos",
      preco: 2.80,
      marca: "Cisne",
      peso: "1kg",
      descricao: "Sal refinado iodado",
      emoji: "🧂",
      popular: false
    },

    // Bebidas
    {
      id: 7,
      nome: "Coca-Cola",
      categoria: "bebidas",
      preco: 8.90,
      marca: "Coca-Cola",
      volume: "2L",
      descricao: "Refrigerante de cola gelado",
      emoji: "🥤",
      popular: true
    },
    {
      id: 8,
      nome: "Guaraná Antarctica",
      categoria: "bebidas",
      preco: 7.50,
      marca: "Antarctica",
      volume: "2L",
      descricao: "Refrigerante de guaraná",
      emoji: "🥤",
      popular: true
    },
    {
      id: 9,
      nome: "Cerveja Skol",
      categoria: "bebidas",
      preco: 3.50,
      marca: "Skol",
      volume: "350ml",
      descricao: "Cerveja pilsen gelada",
      emoji: "🍺",
      popular: true
    },
    {
      id: 10,
      nome: "Água Mineral",
      categoria: "bebidas",
      preco: 2.50,
      marca: "Crystal",
      volume: "1,5L",
      descricao: "Água mineral sem gás",
      emoji: "💧",
      popular: true
    },
    {
      id: 11,
      nome: "Suco Tang",
      categoria: "bebidas",
      preco: 1.90,
      marca: "Tang",
      peso: "25g",
      descricao: "Refresco em pó sabor laranja",
      emoji: "🧃",
      popular: false
    },
    {
      id: 12,
      nome: "Café Pilão",
      categoria: "bebidas",
      preco: 12.90,
      marca: "Pilão",
      peso: "500g",
      descricao: "Café torrado e moído",
      emoji: "☕",
      popular: true
    },

    // Higiene
    {
      id: 13,
      nome: "Papel Higiênico",
      categoria: "higiene",
      preco: 18.90,
      marca: "Personal",
      quantidade: "12 rolos",
      descricao: "Papel higiênico folha dupla",
      emoji: "🧻",
      popular: true
    },
    {
      id: 14,
      nome: "Sabonete Protex",
      categoria: "higiene",
      preco: 3.20,
      marca: "Protex",
      peso: "85g",
      descricao: "Sabonete antibacteriano",
      emoji: "🧼",
      popular: true
    },
    {
      id: 15,
      nome: "Shampoo Seda",
      categoria: "higiene",
      preco: 12.50,
      marca: "Seda",
      volume: "325ml",
      descricao: "Shampoo nutritivo",
      emoji: "🧴",
      popular: false
    },
    {
      id: 16,
      nome: "Pasta de Dente",
      categoria: "higiene",
      preco: 8.90,
      marca: "Colgate",
      peso: "90g",
      descricao: "Creme dental total 12",
      emoji: "🦷",
      popular: true
    },
    {
      id: 17,
      nome: "Detergente Ypê",
      categoria: "higiene",
      preco: 2.90,
      marca: "Ypê",
      volume: "500ml",
      descricao: "Detergente neutro",
      emoji: "🧽",
      popular: true
    },
    {
      id: 18,
      nome: "Desinfetante",
      categoria: "higiene",
      preco: 4.50,
      marca: "Pinho Sol",
      volume: "500ml",
      descricao: "Desinfetante perfumado",
      emoji: "🧴",
      popular: false
    },

    // Lanches
    {
      id: 19,
      nome: "Pão de Açúcar",
      categoria: "lanches",
      preco: 6.50,
      marca: "Wickbold",
      peso: "500g",
      descricao: "Pão de forma tradicional",
      emoji: "🍞",
      popular: true
    },
    {
      id: 20,
      nome: "Biscoito Maizena",
      categoria: "lanches",
      preco: 4.20,
      marca: "Fortaleza",
      peso: "400g",
      descricao: "Biscoito doce sabor maizena",
      emoji: "🍪",
      popular: true
    },
    {
      id: 21,
      nome: "Chocolate Bis",
      categoria: "lanches",
      preco: 3.90,
      marca: "Lacta",
      peso: "126g",
      descricao: "Chocolate com wafer",
      emoji: "🍫",
      popular: true
    },
    {
      id: 22,
      nome: "Bala Fini",
      categoria: "lanches",
      preco: 2.50,
      marca: "Fini",
      peso: "100g",
      descricao: "Bala de goma sortida",
      emoji: "🍬",
      popular: false
    },
    {
      id: 23,
      nome: "Pipoca de Micro",
      categoria: "lanches",
      preco: 4.80,
      marca: "Yoki",
      peso: "100g",
      descricao: "Pipoca para microondas",
      emoji: "🍿",
      popular: false
    },
    {
      id: 24,
      nome: "Salgadinho Cheetos",
      categoria: "lanches",
      preco: 6.90,
      marca: "Elma Chips",
      peso: "140g",
      descricao: "Salgadinho sabor queijo",
      emoji: "🧀",
      popular: true
    },

    // Perecíveis
    {
      id: 25,
      nome: "Leite Integral",
      categoria: "pereçiveis",
      preco: 5.20,
      marca: "Parmalat",
      volume: "1L",
      descricao: "Leite UHT integral",
      emoji: "🥛",
      popular: true
    },
    {
      id: 26,
      nome: "Ovos Brancos",
      categoria: "pereçiveis",
      preco: 9.90,
      marca: "Granja Rica",
      quantidade: "12 unid",
      descricao: "Ovos de galinha frescos",
      emoji: "🥚",
      popular: true
    },
    {
      id: 27,
      nome: "Margarina",
      categoria: "pereçiveis",
      preco: 6.80,
      marca: "Qualy",
      peso: "500g",
      descricao: "Margarina com sal",
      emoji: "🧈",
      popular: true
    },
    {
      id: 28,
      nome: "Presunto Sadia",
      categoria: "pereçiveis",
      preco: 12.90,
      marca: "Sadia",
      peso: "200g",
      descricao: "Presunto cozido fatiado",
      emoji: "🥓",
      popular: false
    },
    {
      id: 29,
      nome: "Queijo Minas",
      categoria: "pereçiveis",
      preco: 15.90,
      marca: "Tirolez",
      peso: "300g",
      descricao: "Queijo minas frescal",
      emoji: "🧀",
      popular: false
    },
    {
      id: 30,
      nome: "Iogurte Natural",
      categoria: "pereçiveis",
      preco: 4.50,
      marca: "Danone",
      volume: "170g",
      descricao: "Iogurte natural integral",
      emoji: "🥛",
      popular: false
    }
  ];

  // Filtros por categoria
  const filtros = [
    { id: 'todos', nome: 'Todos os Produtos', emoji: '🛒' },
    { id: 'basicos', nome: 'Produtos Básicos', emoji: '🌾' },
    { id: 'bebidas', nome: 'Bebidas', emoji: '🥤' },
    { id: 'higiene', nome: 'Higiene', emoji: '🧼' },
    { id: 'lanches', nome: 'Lanches', emoji: '🍪' },
    { id: 'pereçiveis', nome: 'Perecíveis', emoji: '🥛' }
  ];

  // Filtrar produtos
  const produtosFiltrados = filtroAtivo === 'todos' 
    ? produtos 
    : produtos.filter(produto => produto.categoria === filtroAtivo);

  // Adicionar ao carrinho
  const adicionarAoCarrinho = (produto) => {
    const itemExistente = carrinho.find(item => item.id === produto.id);
    
    if (itemExistente) {
      setCarrinho(carrinho.map(item => 
        item.id === produto.id 
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  // Remover do carrinho
  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  // Alterar quantidade
  const alterarQuantidade = (id, novaQuantidade) => {
    if (novaQuantidade <= 0) {
      removerDoCarrinho(id);
    } else {
      setCarrinho(carrinho.map(item => 
        item.id === id 
          ? { ...item, quantidade: novaQuantidade }
          : item
      ));
    }
  };

  // Calcular total
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  };

  // Finalizar compra
  const finalizarCompra = () => {
    if (carrinho.length === 0) return;

    const total = calcularTotal();
    const itens = carrinho.map(item => 
      `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}`
    ).join('\n');

    const mensagem = `🛒 *Pedido - Mini Mercado do Seu João*

📋 *Itens:*
${itens}

💰 *Total: R$ ${total.toFixed(2)}*

📍 *Endereço para entrega:*
_(Digite seu endereço aqui)_

🕐 *Horário preferencial:*
_(Digite o horário desejado)_

Obrigado por escolher o Mini Mercado do Seu João! 🏪`;

    const telefone = "5511999887766";
    const urlWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank');
  };

  // Limpar carrinho
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <div className="mini-mercado">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🏪</span>
            <h1>Mini Mercado do Seu João</h1>
          </div>
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Nossa História</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="carrinho-info">
            <span className="carrinho-icon">🛒</span>
            <span className="carrinho-count">{carrinho.reduce((total, item) => total + item.quantidade, 0)}</span>
            <span className="carrinho-total">R$ {calcularTotal().toFixed(2)}</span>
            <button 
              className="btn-finalizar-header"
              onClick={() => setMostrarCarrinho(!mostrarCarrinho)}
            >
              Ver Carrinho
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-content">
            <h2>O seu mercadinho de confiança há 15 anos</h2>
            <p>Produtos frescos, preços justos e atendimento familiar. No Mini Mercado do Seu João você encontra tudo o que precisa pertinho de casa!</p>
            
            <div className="hero-features">
              <div className="feature">
                <span>⏰</span>
                <p><strong>Aberto todos os dias</strong><br/>6h às 22h sem fechar</p>
              </div>
              <div className="feature">
                <span>🚚</span>
                <p><strong>Entrega grátis</strong><br/>Acima de R$ 50,00</p>
              </div>
              <div className="feature">
                <span>💳</span>
                <p><strong>Aceita cartão</strong><br/>Débito e crédito</p>
              </div>
              <div className="feature">
                <span>📱</span>
                <p><strong>Pix aceito</strong><br/>Pagamento instantâneo</p>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#produtos" className="cta-button primary">Ver Produtos</a>
              <a href="https://wa.me/5511999887766" className="cta-button secondary">Fazer Pedido</a>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="produtos-destaque">
        <div className="container">
          <h2>Produtos Mais Vendidos</h2>
          <p className="produtos-desc">Os preferidos da nossa clientela, sempre frescos e com o melhor preço!</p>
          
          <div className="destaque-grid">
            {produtos.filter(p => p.popular).slice(0, 6).map(produto => (
              <div key={produto.id} className="destaque-card">
                <div className="produto-header">
                  <span className="emoji-produto">{produto.emoji}</span>
                  <span className="produto-badge popular">Mais Vendido</span>
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="marca">{produto.marca} - {produto.peso || produto.volume || produto.quantidade}</p>
                  <p className="descricao">{produto.descricao}</p>
                  <div className="produto-footer">
                    <span className="preco">R$ {produto.preco.toFixed(2)}</span>
                    <button 
                      className="btn-adicionar"
                      onClick={() => adicionarAoCarrinho(produto)}
                    >
                      <span>🛒</span> Adicionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos Completos */}
      <section className="produtos" id="produtos">
        <div className="container">
          <h2>Todos os Nossos Produtos</h2>
          
          <div className="filtros">
            {filtros.map(filtro => (
              <button
                key={filtro.id}
                className={`filtro ${filtroAtivo === filtro.id ? 'ativo' : ''}`}
                onClick={() => setFiltroAtivo(filtro.id)}
              >
                <span>{filtro.emoji}</span>
                {filtro.nome}
              </button>
            ))}
          </div>

          <div className="produtos-grid">
            {produtosFiltrados.map(produto => (
              <div key={produto.id} className="produto-card">
                <div className="produto-header">
                  <span className="emoji-produto">{produto.emoji}</span>
                  {produto.popular && <span className="produto-badge popular">Popular</span>}
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="marca">{produto.marca}</p>
                  <p className="especificacao">{produto.peso || produto.volume || produto.quantidade}</p>
                  <p className="descricao">{produto.descricao}</p>
                  <div className="produto-footer">
                    <span className="preco">R$ {produto.preco.toFixed(2)}</span>
                    <button 
                      className="btn-adicionar"
                      onClick={() => adicionarAoCarrinho(produto)}
                    >
                      <span>🛒</span> Adicionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="sobre" id="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <h2>A História do Seu João</h2>
              <p>
                Há <strong>15 anos</strong> atrás, <em>João da Silva</em> abriu as portas do seu pequeno mercadinho na esquina da Rua das Flores. O que começou como um sonho de oferecer produtos de qualidade para a vizinhança, hoje é uma referência no bairro.
              </p>
              <p>
                <em>"Aqui você é tratado como família"</em> - essa sempre foi a filosofia do Seu João. Com produtos frescos, preços honestos e um sorriso no rosto, ele conquistou a confiança de toda a comunidade.
              </p>
              <p>
                Hoje, junto com sua esposa <em>Dona Maria</em> e o filho <em>João Filho</em>, eles mantêm viva a tradição de um atendimento personalizado e produtos de qualidade.
              </p>

              <div className="diferenciais">
                <div className="diferencial">
                  <span>📦</span>
                  <div>
                    <strong>Produtos Sempre Frescos</strong>
                    <p>Reposição diária dos produtos perecíveis e controle rigoroso da validade</p>
                  </div>
                </div>
                <div className="diferencial">
                  <span>💰</span>
                  <div>
                    <strong>Preços Justos</strong>
                    <p>Sem surpresas. Preços competitivos e transparentes para toda a família</p>
                  </div>
                </div>
                <div className="diferencial">
                  <span>🏠</span>
                  <div>
                    <strong>Ambiente Familiar</strong>
                    <p>Aqui você conhece quem te atende e é sempre bem recebido</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="joao-foto">
              <div className="foto-container">
                <span>👨‍💼</span>
                <p>
                  <strong>Seu João</strong><br/>
                  <em>"15 anos servindo o bairro"</em><br/><br/>
                  💝 Casado com Dona Maria<br/>
                  👨‍👩‍👦 Pai do João Filho<br/>
                  🏪 Proprietário e fundador<br/>
                  ❤️ Apaixonado pelo que faz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos">
        <div className="container">
          <h2>O Que Nossos Clientes Dizem</h2>
          
          <div className="depoimentos-grid">
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Moro aqui há 10 anos e sempre compro no mercadinho do Seu João. Produtos frescos, preço bom e sempre tem o que preciso. É como ter um amigo cuidando das suas compras!"</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Maria das Graças</strong>
                  <span>Cliente há 10 anos</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"O Seu João é uma pessoa incrível! Sempre me atende com carinho e quando preciso de algo urgente, ele até entrega em casa. Recomendo demais!"</p>
              <div className="cliente">
                <span className="avatar">👨</span>
                <div>
                  <strong>Carlos Silva</strong>
                  <span>Vizinho da esquina</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Adoro fazer compras aqui. Os preços são justos, tem variedade e o atendimento é excelente. Quando esqueço alguma coisa e só lembro na hora do jantar, sei que posso contar com eles!"</p>
              <div className="cliente">
                <span className="avatar">👵</span>
                <div>
                  <strong>Dona Conceição</strong>
                  <span>Cliente fiel</span>
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
              <h3>⏰ Horário de Funcionamento</h3>
              <div className="horario-item">
                <span>Segunda a Sábado</span>
                <span>6h00 às 22h00</span>
              </div>
              <div className="horario-item">
                <span>Domingo e Feriados</span>
                <span>7h00 às 20h00</span>
              </div>
              <div className="destaque">
                🎯 Aberto TODOS os dias do ano!
              </div>
            </div>
            
            <div className="entrega">
              <h3>🚚 Entrega</h3>
              <div className="entrega-item">
                <span>Entrega grátis</span>
                <span>Compras acima de R$ 50</span>
              </div>
              <div className="entrega-item">
                <span>Taxa de entrega</span>
                <span>R$ 3,00 (abaixo de R$ 50)</span>
              </div>
              <div className="entrega-item">
                <span>Tempo de entrega</span>
                <span>30 a 60 minutos</span>
              </div>
              <div className="destaque">
                📍 Atendemos todo o bairro!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="contato" id="contato">
        <div className="container">
          <h2>Como Nos Encontrar</h2>
          
          <div className="contato-grid">
            <div className="contato-info">
              <h3>📞 Entre em Contato</h3>
              
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>(11) 99988-7766</p>
                  <small>Faça seu pedido pelo WhatsApp</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📞</span>
                <div>
                  <strong>Telefone Fixo</strong>
                  <p>(11) 3456-7890</p>
                  <small>Para informações gerais</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>⏰</span>
                <div>
                  <strong>Horário de Atendimento</strong>
                  <p>Segunda a Sábado: 6h às 22h</p>
                  <p>Domingo: 7h às 20h</p>
                  <small>Estamos sempre aqui para você!</small>
                </div>
              </div>
            </div>
            
            <div className="endereco-completo">
              <h3>📍 Venha nos Visitar</h3>
              <p><strong>Mini Mercado do Seu João</strong></p>
              <p>Rua das Flores, 123 - Esquina com a Rua da Paz</p>
              <p>Bairro Vila Nova - São Paulo/SP</p>
              <p>CEP: 01234-567</p>
              
              <div className="referencias">
                <p><strong>Pontos de Referência:</strong></p>
                <p>• Ao lado da Padaria do Zé</p>
                <p>• Em frente ao Posto de Saúde</p>
                <p>• Próximo à Escola Municipal</p>
                <p>• Na esquina do ponto de ônibus</p>
              </div>
              
              <div className="tradicao">
                <p>🏪 <strong>"Há 15 anos servindo nossa comunidade com carinho e dedicação!"</strong></p>
                <p><em>- Família Silva</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrinho Resumo */}
      {carrinho.length > 0 && (
        <div className="carrinho-resumo" style={{ display: mostrarCarrinho ? 'block' : 'none' }}>
          <div className="carrinho-header">
            <h4>🛒 Seu Carrinho</h4>
            <button onClick={limparCarrinho} className="limpar-carrinho">🗑️</button>
          </div>
          
          <div className="carrinho-itens">
            {carrinho.slice(0, 3).map(item => (
              <div key={item.id} className="carrinho-item">
                <div>
                  <strong>{item.nome}</strong>
                  <span className="item-marca"> - {item.marca}</span>
                </div>
                <div className="item-controls">
                  <div className="quantidade-controls">
                    <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}>-</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}>+</button>
                  </div>
                  <span className="item-preco">R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                  <button onClick={() => removerDoCarrinho(item.id)} className="remover-item">🗑️</button>
                </div>
              </div>
            ))}
            {carrinho.length > 3 && (
              <div className="mais-itens">... e mais {carrinho.length - 3} itens</div>
            )}
          </div>
          
          <div className="carrinho-total-box">
            <strong>Total: R$ {calcularTotal().toFixed(2)}</strong>
          </div>
          
          <button className="finalizar-pedido" onClick={finalizarCompra}>
            📱 Finalizar Pedido via WhatsApp
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🏪 Mini Mercado do Seu João</h4>
              <p>Seu mercadinho de confiança há 15 anos!</p>
              <p>Produtos frescos, preços justos e atendimento familiar.</p>
            </div>
            
            <div className="footer-section">
              <h4>📞 Contato</h4>
              <ul>
                <li>📱 (11) 99988-7766</li>
                <li>📞 (11) 3456-7890</li>
                <li>📍 Rua das Flores, 123</li>
                <li>🕐 Segunda a Sábado: 6h às 22h</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>🛒 Nossos Serviços</h4>
              <ul>
                <li>🚚 Entrega grátis acima de R$ 50</li>
                <li>💳 Aceitamos cartão e Pix</li>
                <li>📦 Produtos sempre frescos</li>
                <li>⏰ Aberto todos os dias</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>🏷️ Categorias</h4>
              <ul>
                <li><a href="#produtos">Produtos Básicos</a></li>
                <li><a href="#produtos">Bebidas</a></li>
                <li><a href="#produtos">Higiene</a></li>
                <li><a href="#produtos">Lanches</a></li>
                <li><a href="#produtos">Perecíveis</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Mini Mercado do Seu João. Feito com ❤️ para nossa comunidade.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/5511999887766" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span>💬</span>
        <span className="whatsapp-text">Fazer Pedido</span>
      </a>
    </div>
  );
};

export default MiniMercado;