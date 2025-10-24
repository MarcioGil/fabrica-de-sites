import React, { useState, useEffect } from 'react';
import './angubaiana.css';

const AnguBaiana = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  // Pratos do Angu à Baiana
  const pratos = [
    // Pratos Principais
    {
      id: 1,
      nome: "Angu Completo da Bahia",
      categoria: "principais",
      preco: 18.90,
      porcao: "Porção individual",
      descricao: "Angu cremoso com linguiça calabresa, bacon, ovo frito e couve refogada",
      ingredientes: ["Fubá", "Linguiça calabresa", "Bacon", "Ovo", "Couve", "Cebola", "Alho"],
      emoji: "🍲",
      tradicional: true,
      popular: true
    },
    {
      id: 2,
      nome: "Angu de Camarão",
      categoria: "principais",
      preco: 32.90,
      porcao: "Porção individual",
      descricao: "Angu temperado com dendê, camarão seco e coentro fresco",
      ingredientes: ["Fubá", "Camarão seco", "Dendê", "Coentro", "Cebola", "Pimenta-de-cheiro"],
      emoji: "🦐",
      tradicional: true,
      popular: true
    },
    {
      id: 3,
      nome: "Caruru Tradicional",
      categoria: "principais",
      preco: 24.90,
      porcao: "Porção individual",
      descricao: "Quiabo refogado com camarão seco, dendê e amendoim",
      ingredientes: ["Quiabo", "Camarão seco", "Dendê", "Amendoim", "Gengibre", "Pimenta"],
      emoji: "🫛",
      tradicional: true,
      popular: false
    },
    {
      id: 4,
      nome: "Vatapá da Casa",
      categoria: "principais",
      preco: 28.50,
      porcao: "Porção individual",
      descricao: "Vatapá cremoso com camarão, castanha e leite de coco",
      ingredientes: ["Pão", "Camarão", "Castanha", "Leite de coco", "Dendê", "Gengibre"],
      emoji: "🥥",
      tradicional: true,
      popular: true
    },
    {
      id: 5,
      nome: "Xinxim de Galinha",
      categoria: "principais",
      preco: 26.90,
      porcao: "Porção individual",
      descricao: "Galinha cozida no leite de coco com amendoim e dendê",
      ingredientes: ["Galinha", "Leite de coco", "Amendoim", "Dendê", "Gengibre", "Pimenta"],
      emoji: "🐔",
      tradicional: true,
      popular: false
    },
    {
      id: 6,
      nome: "Moqueca de Peixe",
      categoria: "principais",
      preco: 35.90,
      porcao: "Porção individual",
      descricao: "Peixe fresco no leite de coco com tomates e pimentões",
      ingredientes: ["Peixe", "Leite de coco", "Tomate", "Pimentão", "Dendê", "Coentro"],
      emoji: "🐟",
      tradicional: true,
      popular: true
    },

    // Acompanhamentos
    {
      id: 7,
      nome: "Farofa de Dendê",
      categoria: "acompanhamentos",
      preco: 8.90,
      porcao: "Porção pequena",
      descricao: "Farofa tradicional temperada com dendê e cebola",
      ingredientes: ["Farinha de mandioca", "Dendê", "Cebola", "Sal"],
      emoji: "🌾",
      tradicional: true,
      popular: true
    },
    {
      id: 8,
      nome: "Pirão de Peixe",
      categoria: "acompanhamentos",
      preco: 12.50,
      porcao: "Porção pequena",
      descricao: "Pirão cremoso feito com caldo de peixe",
      ingredientes: ["Farinha de mandioca", "Caldo de peixe", "Cebola", "Tomate"],
      emoji: "🍲",
      tradicional: true,
      popular: false
    },
    {
      id: 9,
      nome: "Acarajé",
      categoria: "acompanhamentos",
      preco: 6.50,
      porcao: "2 unidades",
      descricao: "Bolinho de feijão fradinho frito no dendê",
      ingredientes: ["Feijão fradinho", "Dendê", "Cebola", "Sal"],
      emoji: "🟡",
      tradicional: true,
      popular: true
    },
    {
      id: 10,
      nome: "Abará",
      categoria: "acompanhamentos",
      preco: 7.90,
      porcao: "2 unidades",
      descricao: "Acarajé cozido na folha de bananeira",
      ingredientes: ["Feijão fradinho", "Dendê", "Camarão seco", "Folha de bananeira"],
      emoji: "🌿",
      tradicional: true,
      popular: false
    },
    {
      id: 11,
      nome: "Couve Mineira",
      categoria: "acompanhamentos",
      preco: 5.90,
      porcao: "Porção pequena",
      descricao: "Couve refogada com alho e bacon",
      ingredientes: ["Couve", "Bacon", "Alho", "Azeite"],
      emoji: "🥬",
      tradicional: false,
      popular: true
    },
    {
      id: 12,
      nome: "Mandioca Cozida",
      categoria: "acompanhamentos",
      preco: 4.50,
      porcao: "Porção pequena",
      descricao: "Mandioca cozida com sal grosso",
      ingredientes: ["Mandioca", "Sal grosso"],
      emoji: "🍠",
      tradicional: true,
      popular: false
    },

    // Bebidas
    {
      id: 13,
      nome: "Caipirinha de Cachaça",
      categoria: "bebidas",
      preco: 12.90,
      porcao: "Dose individual",
      descricao: "Caipirinha tradicional com cachaça artesanal",
      ingredientes: ["Cachaça", "Limão", "Açúcar", "Gelo"],
      emoji: "🍹",
      tradicional: true,
      popular: true
    },
    {
      id: 14,
      nome: "Batida de Coco",
      categoria: "bebidas",
      preco: 14.50,
      porcao: "Dose individual",
      descricao: "Batida cremosa com leite de coco e cachaça",
      ingredientes: ["Cachaça", "Leite de coco", "Açúcar", "Gelo"],
      emoji: "🥥",
      tradicional: true,
      popular: true
    },
    {
      id: 15,
      nome: "Água de Coco Gelada",
      categoria: "bebidas",
      preco: 8.90,
      porcao: "Copo grande",
      descricao: "Água de coco natural bem gelada",
      ingredientes: ["Água de coco natural"],
      emoji: "🥥",
      tradicional: true,
      popular: true
    },
    {
      id: 16,
      nome: "Suco de Cajá",
      categoria: "bebidas",
      preco: 7.50,
      porcao: "Copo grande",
      descricao: "Suco natural de cajá nordestino",
      ingredientes: ["Cajá", "Açúcar", "Água", "Gelo"],
      emoji: "🟡",
      tradicional: true,
      popular: false
    },
    {
      id: 17,
      nome: "Cerveja Gelada",
      categoria: "bebidas",
      preco: 5.90,
      porcao: "Long neck",
      descricao: "Cerveja pilsen bem gelada",
      ingredientes: ["Cerveja pilsen"],
      emoji: "🍺",
      tradicional: false,
      popular: true
    },
    {
      id: 18,
      nome: "Guaraná Jesus",
      categoria: "bebidas",
      preco: 6.50,
      porcao: "Lata 350ml",
      descricao: "Refrigerante típico do Maranhão",
      ingredientes: ["Guaraná Jesus"],
      emoji: "🥤",
      tradicional: true,
      popular: false
    },

    // Sobremesas
    {
      id: 19,
      nome: "Cocada Baiana",
      categoria: "sobremesas",
      preco: 4.50,
      porcao: "Unidade",
      descricao: "Cocada tradicional feita com coco ralado",
      ingredientes: ["Coco ralado", "Açúcar", "Leite"],
      emoji: "🥥",
      tradicional: true,
      popular: true
    },
    {
      id: 20,
      nome: "Beijinho de Coco",
      categoria: "sobremesas",
      preco: 3.90,
      porcao: "Unidade",
      descricao: "Doce de coco com leite condensado",
      ingredientes: ["Coco ralado", "Leite condensado", "Açúcar"],
      emoji: "🤍",
      tradicional: true,
      popular: true
    },
    {
      id: 21,
      nome: "Quindim",
      categoria: "sobremesas",
      preco: 5.90,
      porcao: "Unidade",
      descricao: "Doce de gema com coco ralado",
      ingredientes: ["Gema de ovo", "Coco ralado", "Açúcar"],
      emoji: "🟡",
      tradicional: true,
      popular: false
    },
    {
      id: 22,
      nome: "Bolo de Fubá",
      categoria: "sobremesas",
      preco: 6.90,
      porcao: "Fatia",
      descricao: "Bolo caseiro de fubá com coco",
      ingredientes: ["Fubá", "Coco ralado", "Ovos", "Açúcar", "Leite"],
      emoji: "🍰",
      tradicional: true,
      popular: false
    },
    {
      id: 23,
      nome: "Doce de Leite",
      categoria: "sobremesas",
      preco: 4.90,
      porcao: "Porção pequena",
      descricao: "Doce de leite caseiro cremoso",
      ingredientes: ["Leite", "Açúcar"],
      emoji: "🍮",
      tradicional: true,
      popular: false
    },
    {
      id: 24,
      nome: "Rapadura",
      categoria: "sobremesas",
      preco: 2.50,
      porcao: "Unidade",
      descricao: "Rapadura artesanal nordestina",
      ingredientes: ["Cana-de-açúcar"],
      emoji: "🟤",
      tradicional: true,
      popular: false
    }
  ];

  // Filtros por categoria
  const filtros = [
    { id: 'todos', nome: 'Todos os Pratos', emoji: '🍲' },
    { id: 'principais', nome: 'Pratos Principais', emoji: '🍲' },
    { id: 'acompanhamentos', nome: 'Acompanhamentos', emoji: '🌾' },
    { id: 'bebidas', nome: 'Bebidas', emoji: '🍹' },
    { id: 'sobremesas', nome: 'Sobremesas', emoji: '🥥' }
  ];

  // Filtrar pratos
  const pratosFiltrados = filtroAtivo === 'todos' 
    ? pratos 
    : pratos.filter(prato => prato.categoria === filtroAtivo);

  // Adicionar ao carrinho
  const adicionarAoCarrinho = (prato) => {
    const itemExistente = carrinho.find(item => item.id === prato.id);
    
    if (itemExistente) {
      setCarrinho(carrinho.map(item => 
        item.id === prato.id 
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      setCarrinho([...carrinho, { ...prato, quantidade: 1 }]);
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

  // Finalizar pedido
  const finalizarPedido = () => {
    if (carrinho.length === 0) return;

    const total = calcularTotal();
    const itens = carrinho.map(item => 
      `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}`
    ).join('\n');

    const mensagem = `🍲 *Pedido - Angu à Baiana da Tia Conceição*

📋 *Pratos:*
${itens}

💰 *Total: R$ ${total.toFixed(2)}*

📍 *Endereço para entrega:*
_(Digite seu endereço aqui)_

🕐 *Horário preferencial:*
_(Digite o horário desejado)_

Obrigado por escolher o Angu à Baiana da Tia Conceição! 🍲
*"Tempero da Bahia, sabor de casa!"*`;

    const telefone = "5511999221133";
    const urlWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank');
  };

  // Limpar carrinho
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <div className="angu-baiana">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🍲</span>
            <h1>Angu à Baiana da Tia Conceição</h1>
          </div>
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#cardapio">Cardápio</a>
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
              Ver Pedido
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-content">
            <h2>Tempero da Bahia, sabor de casa!</h2>
            <p>Há 25 anos trazendo o autêntico sabor nordestino para São Paulo. Receitas tradicionais da família, temperos especiais e muito amor em cada prato!</p>
            
            <div className="hero-features">
              <div className="feature">
                <span>🏺</span>
                <p><strong>Receitas Ancestrais</strong><br/>25 anos de tradição</p>
              </div>
              <div className="feature">
                <span>🌶️</span>
                <p><strong>Temperos Especiais</strong><br/>Direto da Bahia</p>
              </div>
              <div className="feature">
                <span>🚚</span>
                <p><strong>Entrega Rápida</strong><br/>Quentinho em casa</p>
              </div>
              <div className="feature">
                <span>❤️</span>
                <p><strong>Feito com Amor</strong><br/>Como da vovó</p>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#cardapio" className="cta-button primary">Ver Cardápio</a>
              <a href="https://wa.me/5511999221133" className="cta-button secondary">Fazer Pedido</a>
            </div>
          </div>
        </div>
      </section>

      {/* Pratos Tradicionais */}
      <section className="pratos-tradicionais">
        <div className="container">
          <h2>Pratos Tradicionais da Casa</h2>
          <p className="pratos-desc">Os sabores autênticos da Bahia que conquistaram São Paulo!</p>
          
          <div className="tradicionais-grid">
            {pratos.filter(p => p.tradicional && p.popular).slice(0, 6).map(prato => (
              <div key={prato.id} className="tradicional-card">
                <div className="prato-header">
                  <span className="emoji-prato">{prato.emoji}</span>
                  <span className="prato-badge tradicional">Tradicional</span>
                </div>
                <div className="prato-info">
                  <h3>{prato.nome}</h3>
                  <p className="porcao">{prato.porcao}</p>
                  <p className="descricao">{prato.descricao}</p>
                  <div className="ingredientes">
                    <strong>Ingredientes:</strong>
                    <div className="ingredientes-list">
                      {prato.ingredientes.map((ingrediente, index) => (
                        <span key={index} className="ingrediente">{ingrediente}</span>
                      ))}
                    </div>
                  </div>
                  <div className="prato-footer">
                    <span className="preco">R$ {prato.preco.toFixed(2)}</span>
                    <button 
                      className="btn-adicionar"
                      onClick={() => adicionarAoCarrinho(prato)}
                    >
                      <span>🛒</span> Pedir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cardápio Completo */}
      <section className="cardapio" id="cardapio">
        <div className="container">
          <h2>Cardápio Completo</h2>
          
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

          <div className="pratos-grid">
            {pratosFiltrados.map(prato => (
              <div key={prato.id} className="prato-card">
                <div className="prato-header">
                  <span className="emoji-prato">{prato.emoji}</span>
                  {prato.tradicional && <span className="prato-badge tradicional">Tradicional</span>}
                  {prato.popular && <span className="prato-badge popular">Popular</span>}
                </div>
                <div className="prato-info">
                  <h3>{prato.nome}</h3>
                  <p className="porcao">{prato.porcao}</p>
                  <p className="descricao">{prato.descricao}</p>
                  <div className="ingredientes">
                    <strong>Ingredientes:</strong>
                    <div className="ingredientes-list">
                      {prato.ingredientes.map((ingrediente, index) => (
                        <span key={index} className="ingrediente">{ingrediente}</span>
                      ))}
                    </div>
                  </div>
                  <div className="prato-footer">
                    <span className="preco">R$ {prato.preco.toFixed(2)}</span>
                    <button 
                      className="btn-adicionar"
                      onClick={() => adicionarAoCarrinho(prato)}
                    >
                      <span>🛒</span> Pedir
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
              <h2>A História da Tia Conceição</h2>
              <p>
                Em <strong>1999</strong>, <em>Conceição Santos</em> deixou sua querida <em>Salvador</em> e veio para São Paulo com um sonho: <strong>compartilhar os sabores autênticos da Bahia</strong> com quem tinha saudade da terra natal.
              </p>
              <p>
                <em>"Minha avó me ensinou que comida feita com amor alimenta não só o corpo, mas também a alma"</em> - essas palavras guiam cada prato que preparamos até hoje.
              </p>
              <p>
                Com receitas passadas de geração em geração, temperos trazidos direto da Bahia e muito <em>axé na cozinha</em>, Tia Conceição conquistou o paladar paulistano e se tornou referência em culinária nordestina.
              </p>
              <p>
                Hoje, aos <strong>68 anos</strong>, ela continua supervisionando cada prato, garantindo que o <em>sabor da Bahia</em> chegue à mesa de cada cliente com toda a autenticidade e carinho de sempre.
              </p>

              <div className="especialidades">
                <div className="especialidade">
                  <span>🏺</span>
                  <div>
                    <strong>Receitas Ancestrais</strong>
                    <p>Guardadas há gerações na família Santos, direto do Recôncavo Baiano</p>
                  </div>
                </div>
                <div className="especialidade">
                  <span>🌶️</span>
                  <div>
                    <strong>Temperos Originais</strong>
                    <p>Dendê, pimenta-de-cheiro e ervas frescas vindas diretamente da Bahia</p>
                  </div>
                </div>
                <div className="especialidade">
                  <span>🙏</span>
                  <div>
                    <strong>Axé na Cozinha</strong>
                    <p>Cada prato é preparado com energia positiva e muito amor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="conceicao-foto">
              <div className="foto-container">
                <span>👩🏾‍🍳</span>
                <p>
                  <strong>Tia Conceição</strong><br/>
                  <em>"25 anos levando a Bahia para SP"</em><br/><br/>
                  🏝️ Nascida em Salvador/BA<br/>
                  👵🏾 68 anos de sabedoria<br/>
                  🍲 Especialista em culinária baiana<br/>
                  ❤️ Mãe de 4, avó de 8<br/>
                  ✨ Guardiã das tradições familiares
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
              <p>"Sou baiano de Salvador e posso garantir: o angu da Tia Conceição é igualzinho ao da minha avó! Tempero perfeito, dendê na medida certa. Mata a saudade de casa!"</p>
              <div className="cliente">
                <span className="avatar">👨🏾</span>
                <div>
                  <strong>Antônio Silva</strong>
                  <span>Baiano em SP há 15 anos</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Nunca tinha provado comida baiana de verdade. A Tia Conceição me fez descobrir sabores incríveis! O caruru é uma explosão de sabor, e o acarajé é perfeito!"</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Marina Costa</strong>
                  <span>Paulistana apaixonada</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Toda sexta peço o angu completo para a família. As crianças adoram! É comida de verdade, feita com carinho. Tia Conceição é um amor de pessoa!"</p>
              <div className="cliente">
                <span className="avatar">👩‍👧‍👦</span>
                <div>
                  <strong>Fernanda Oliveira</strong>
                  <span>Cliente fiel há 8 anos</span>
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
                <span>Terça a Sábado</span>
                <span>11h às 22h</span>
              </div>
              <div className="horario-item">
                <span>Domingo</span>
                <span>11h às 20h</span>
              </div>
              <div className="horario-item">
                <span>Segunda-feira</span>
                <span>FECHADO</span>
              </div>
              <div className="destaque">
                🙏 Segunda é dia da Tia Conceição descansar!
              </div>
            </div>
            
            <div className="entrega">
              <h3>🚚 Entrega e Retirada</h3>
              <div className="entrega-item">
                <span>Entrega grátis</span>
                <span>Acima de R$ 45,00</span>
              </div>
              <div className="entrega-item">
                <span>Taxa de entrega</span>
                <span>R$ 6,00</span>
              </div>
              <div className="entrega-item">
                <span>Tempo médio</span>
                <span>45 a 60 minutos</span>
              </div>
              <div className="destaque">
                🔥 Chegamos quentinho na sua casa!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="contato" id="contato">
        <div className="container">
          <h2>Vem Nos Visitar!</h2>
          
          <div className="contato-grid">
            <div className="contato-info">
              <h3>📞 Fale Conosco</h3>
              
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>(11) 99922-1133</p>
                  <small>Pedidos e informações</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📞</span>
                <div>
                  <strong>Telefone</strong>
                  <p>(11) 3567-8901</p>
                  <small>Reservas e eventos</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>⏰</span>
                <div>
                  <strong>Horário</strong>
                  <p>Terça a Sábado: 11h às 22h</p>
                  <p>Domingo: 11h às 20h</p>
                  <small>Segunda fechamos para descanso</small>
                </div>
              </div>
            </div>
            
            <div className="endereco-completo">
              <h3>📍 Nossa Casa</h3>
              <p><strong>Angu à Baiana da Tia Conceição</strong></p>
              <p>Rua dos Nordestinos, 789 - Liberdade</p>
              <p>São Paulo/SP - CEP: 01234-890</p>
              
              <div className="referencias">
                <p><strong>Como Chegar:</strong></p>
                <p>• Próximo ao Metrô Liberdade</p>
                <p>• Ao lado da Casa do Norte</p>
                <p>• Em frente à Praça da Liberdade</p>
                <p>• Na rua dos temperos e sabores</p>
              </div>
              
              <div className="tradicao">
                <p>🍲 <strong>"Aqui você encontra o verdadeiro sabor da Bahia, feito com amor e tradição!"</strong></p>
                <p><em>- Tia Conceição</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrinho Resumo */}
      {carrinho.length > 0 && (
        <div className="carrinho-resumo" style={{ display: mostrarCarrinho ? 'block' : 'none' }}>
          <div className="carrinho-header">
            <h4>🍲 Seu Pedido</h4>
            <button onClick={limparCarrinho} className="limpar-carrinho">🗑️</button>
          </div>
          
          <div className="carrinho-itens">
            {carrinho.slice(0, 3).map(item => (
              <div key={item.id} className="carrinho-item">
                <div>
                  <strong>{item.nome}</strong>
                  <span className="item-porcao"> - {item.porcao}</span>
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
              <div className="mais-itens">... e mais {carrinho.length - 3} pratos</div>
            )}
          </div>
          
          <div className="carrinho-total-box">
            <strong>Total: R$ {calcularTotal().toFixed(2)}</strong>
          </div>
          
          <button className="finalizar-pedido" onClick={finalizarPedido}>
            📱 Finalizar Pedido
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🍲 Angu à Baiana da Tia Conceição</h4>
              <p>25 anos trazendo o autêntico sabor da Bahia para São Paulo!</p>
              <p>Receitas tradicionais, temperos especiais e muito amor.</p>
            </div>
            
            <div className="footer-section">
              <h4>📞 Contato</h4>
              <ul>
                <li>📱 (11) 99922-1133</li>
                <li>📞 (11) 3567-8901</li>
                <li>📍 Rua dos Nordestinos, 789</li>
                <li>🕐 Terça a Sábado: 11h às 22h</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>🍽️ Especialidades</h4>
              <ul>
                <li>🍲 Angu completo da Bahia</li>
                <li>🦐 Angu de camarão</li>
                <li>🥥 Vatapá tradicional</li>
                <li>🟡 Acarajé autêntico</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>🏷️ Cardápio</h4>
              <ul>
                <li><a href="#cardapio">Pratos Principais</a></li>
                <li><a href="#cardapio">Acompanhamentos</a></li>
                <li><a href="#cardapio">Bebidas</a></li>
                <li><a href="#cardapio">Sobremesas</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Angu à Baiana da Tia Conceição. Feito com ❤️ e muito axé!</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/5511999221133" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span>💬</span>
        <span className="whatsapp-text">Fazer Pedido</span>
      </a>
    </div>
  );
};

export default AnguBaiana;