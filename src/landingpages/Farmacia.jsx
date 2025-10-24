import React, { useState, useEffect } from 'react';
import './farmacia.css';

const Farmacia = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  // Produtos da farmácia
  const produtos = [
    // Medicamentos
    {
      id: 1,
      nome: "Dipirona 500mg",
      categoria: "medicamentos",
      preco: 8.90,
      marca: "Medley",
      quantidade: "20 comprimidos",
      descricao: "Analgésico e antitérmico",
      emoji: "💊",
      receita: false,
      popular: true
    },
    {
      id: 2,
      nome: "Paracetamol 750mg",
      categoria: "medicamentos",
      preco: 12.50,
      marca: "EMS",
      quantidade: "20 comprimidos",
      descricao: "Analgésico e antitérmico",
      emoji: "💊",
      receita: false,
      popular: true
    },
    {
      id: 3,
      nome: "Ibuprofeno 600mg",
      categoria: "medicamentos",
      preco: 15.80,
      marca: "Neo Química",
      quantidade: "30 comprimidos",
      descricao: "Anti-inflamatório",
      emoji: "💊",
      receita: false,
      popular: true
    },
    {
      id: 4,
      nome: "Omeprazol 20mg",
      categoria: "medicamentos",
      preco: 22.90,
      marca: "EMS",
      quantidade: "28 cápsulas",
      descricao: "Protetor gástrico",
      emoji: "💊",
      receita: false,
      popular: true
    },
    {
      id: 5,
      nome: "Losartana 50mg",
      categoria: "medicamentos",
      preco: 18.70,
      marca: "Eurofarma",
      quantidade: "30 comprimidos",
      descricao: "Anti-hipertensivo",
      emoji: "💊",
      receita: true,
      popular: false
    },
    {
      id: 6,
      nome: "Metformina 850mg",
      categoria: "medicamentos",
      preco: 25.40,
      marca: "Neo Química",
      quantidade: "30 comprimidos",
      descricao: "Antidiabético",
      emoji: "💊",
      receita: true,
      popular: false
    },

    // Higiene e Beleza
    {
      id: 7,
      nome: "Shampoo Anticaspa",
      categoria: "higiene",
      preco: 32.90,
      marca: "Head & Shoulders",
      volume: "400ml",
      descricao: "Combate a caspa e coceira",
      emoji: "🧴",
      receita: false,
      popular: true
    },
    {
      id: 8,
      nome: "Protetor Solar FPS 60",
      categoria: "higiene",
      preco: 45.90,
      marca: "Episol",
      volume: "120g",
      descricao: "Proteção solar facial",
      emoji: "☀️",
      receita: false,
      popular: true
    },
    {
      id: 9,
      nome: "Creme Hidratante",
      categoria: "higiene",
      preco: 28.50,
      marca: "Nivea",
      volume: "200ml",
      descricao: "Hidratante corporal",
      emoji: "🧴",
      receita: false,
      popular: false
    },
    {
      id: 10,
      nome: "Desodorante Roll-on",
      categoria: "higiene",
      preco: 16.90,
      marca: "Rexona",
      volume: "50ml",
      descricao: "Proteção 48h",
      emoji: "🧴",
      receita: false,
      popular: true
    },
    {
      id: 11,
      nome: "Pasta de Dente",
      categoria: "higiene",
      preco: 12.90,
      marca: "Oral-B",
      peso: "90g",
      descricao: "Proteção completa",
      emoji: "🦷",
      receita: false,
      popular: true
    },
    {
      id: 12,
      nome: "Enxaguante Bucal",
      categoria: "higiene",
      preco: 18.70,
      marca: "Listerine",
      volume: "500ml",
      descricao: "Proteção total",
      emoji: "🦷",
      receita: false,
      popular: false
    },

    // Vitaminas
    {
      id: 13,
      nome: "Vitamina C 1g",
      categoria: "vitaminas",
      preco: 35.90,
      marca: "Cimed",
      quantidade: "30 comprimidos",
      descricao: "Fortalece a imunidade",
      emoji: "🍊",
      receita: false,
      popular: true
    },
    {
      id: 14,
      nome: "Vitamina D 2000UI",
      categoria: "vitaminas",
      preco: 42.80,
      marca: "Eurofarma",
      quantidade: "60 cápsulas",
      descricao: "Saúde dos ossos",
      emoji: "☀️",
      receita: false,
      popular: true
    },
    {
      id: 15,
      nome: "Complexo B",
      categoria: "vitaminas",
      preco: 28.90,
      marca: "Centrum",
      quantidade: "30 comprimidos",
      descricao: "Energia e disposição",
      emoji: "💪",
      receita: false,
      popular: false
    },
    {
      id: 16,
      nome: "Ômega 3",
      categoria: "vitaminas",
      preco: 55.90,
      marca: "Vitafor",
      quantidade: "60 cápsulas",
      descricao: "Saúde cardiovascular",
      emoji: "🐟",
      receita: false,
      popular: true
    },
    {
      id: 17,
      nome: "Multivitamínico",
      categoria: "vitaminas",
      preco: 48.50,
      marca: "Centrum",
      quantidade: "30 comprimidos",
      descricao: "Vitaminas e minerais",
      emoji: "💊",
      receita: false,
      popular: false
    },
    {
      id: 18,
      nome: "Ferro + Vitamina C",
      categoria: "vitaminas",
      preco: 38.70,
      marca: "Eurofarma",
      quantidade: "30 comprimidos",
      descricao: "Combate a anemia",
      emoji: "🩸",
      receita: false,
      popular: false
    },

    // Primeiros Socorros
    {
      id: 19,
      nome: "Band-Aid Variado",
      categoria: "socorros",
      preco: 8.90,
      marca: "Johnson & Johnson",
      quantidade: "30 unidades",
      descricao: "Curativos adesivos",
      emoji: "🩹",
      receita: false,
      popular: true
    },
    {
      id: 20,
      nome: "Álcool 70%",
      categoria: "socorros",
      preco: 6.50,
      marca: "Rioquímica",
      volume: "500ml",
      descricao: "Antisséptico",
      emoji: "🧴",
      receita: false,
      popular: true
    },
    {
      id: 21,
      nome: "Água Oxigenada",
      categoria: "socorros",
      preco: 4.20,
      marca: "Rioquímica",
      volume: "100ml",
      descricao: "Antisséptico",
      emoji: "💧",
      receita: false,
      popular: true
    },
    {
      id: 22,
      nome: "Gaze Estéril",
      categoria: "socorros",
      preco: 5.80,
      marca: "Cremer",
      quantidade: "5 unidades",
      descricao: "Curativo estéril",
      emoji: "🩹",
      receita: false,
      popular: false
    },
    {
      id: 23,
      nome: "Esparadrapo",
      categoria: "socorros",
      preco: 7.90,
      marca: "3M",
      tamanho: "5cm x 4,5m",
      descricao: "Fita adesiva",
      emoji: "🩹",
      receita: false,
      popular: false
    },
    {
      id: 24,
      nome: "Termômetro Digital",
      categoria: "socorros",
      preco: 25.90,
      marca: "G-Tech",
      descricao: "Medição rápida",
      emoji: "🌡️",
      receita: false,
      popular: true
    },

    // Infantil
    {
      id: 25,
      nome: "Novalgina Gotas",
      categoria: "infantil",
      preco: 18.90,
      marca: "Sanofi",
      volume: "20ml",
      descricao: "Analgésico infantil",
      emoji: "👶",
      receita: false,
      popular: true
    },
    {
      id: 26,
      nome: "Tylenol Bebê",
      categoria: "infantil",
      preco: 22.50,
      marca: "Johnson & Johnson",
      volume: "15ml",
      descricao: "Paracetamol gotas",
      emoji: "👶",
      receita: false,
      popular: true
    },
    {
      id: 27,
      nome: "Soro Fisiológico",
      categoria: "infantil",
      preco: 12.90,
      marca: "Rioquímica",
      quantidade: "30 ampolas",
      descricao: "Higiene nasal",
      emoji: "💧",
      receita: false,
      popular: true
    },
    {
      id: 28,
      nome: "Pomada Assaduras",
      categoria: "infantil",
      preco: 16.80,
      marca: "Bepantol",
      peso: "30g",
      descricao: "Previne assaduras",
      emoji: "👶",
      receita: false,
      popular: false
    },
    {
      id: 29,
      nome: "Vitamina D Gotas",
      categoria: "infantil",
      preco: 28.90,
      marca: "Addera",
      volume: "20ml",
      descricao: "Vitamina D infantil",
      emoji: "☀️",
      receita: false,
      popular: false
    },
    {
      id: 30,
      nome: "Probiótico Infantil",
      categoria: "infantil",
      preco: 35.50,
      marca: "Floratil",
      quantidade: "10 sachês",
      descricao: "Saúde intestinal",
      emoji: "👶",
      receita: false,
      popular: false
    }
  ];

  // Filtros por categoria
  const filtros = [
    { id: 'todos', nome: 'Todos os Produtos', emoji: '💊' },
    { id: 'medicamentos', nome: 'Medicamentos', emoji: '💊' },
    { id: 'higiene', nome: 'Higiene e Beleza', emoji: '🧴' },
    { id: 'vitaminas', nome: 'Vitaminas', emoji: '🍊' },
    { id: 'socorros', nome: 'Primeiros Socorros', emoji: '🩹' },
    { id: 'infantil', nome: 'Infantil', emoji: '👶' }
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

    const possuiReceita = carrinho.some(item => item.receita);
    const observacaoReceita = possuiReceita ? '\n⚠️ *ATENÇÃO: Este pedido contém medicamentos que necessitam de receita médica. Tenha a receita em mãos para retirada.*' : '';

    const mensagem = `💊 *Pedido - Farmácia Vida & Saúde*

📋 *Itens:*
${itens}

💰 *Total: R$ ${total.toFixed(2)}*${observacaoReceita}

📍 *Endereço para entrega:*
_(Digite seu endereço aqui)_

🕐 *Horário preferencial:*
_(Digite o horário desejado)_

Obrigado por escolher a Farmácia Vida & Saúde! 💊`;

    const telefone = "5511999554433";
    const urlWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank');
  };

  // Limpar carrinho
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <div className="farmacia">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">💊</span>
            <h1>Farmácia Vida & Saúde</h1>
          </div>
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#servicos">Serviços</a>
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
            <h2>Sua saúde é nossa prioridade há 20 anos</h2>
            <p>Atendimento 24 horas, farmacêutico sempre presente e entrega rápida. Na Farmácia Vida & Saúde você encontra qualidade, confiança e cuidado!</p>
            
            <div className="hero-features">
              <div className="feature">
                <span>🕐</span>
                <p><strong>24 Horas</strong><br/>Aberto todos os dias</p>
              </div>
              <div className="feature">
                <span>👨‍⚕️</span>
                <p><strong>Farmacêutico</strong><br/>Sempre presente</p>
              </div>
              <div className="feature">
                <span>🚚</span>
                <p><strong>Entrega Express</strong><br/>30 minutos</p>
              </div>
              <div className="feature">
                <span>📱</span>
                <p><strong>Telemedicina</strong><br/>Consultas online</p>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#produtos" className="cta-button primary">Ver Produtos</a>
              <a href="https://wa.me/5511999554433" className="cta-button secondary">Emergência 24h</a>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Populares */}
      <section className="produtos-populares">
        <div className="container">
          <h2>Produtos Mais Procurados</h2>
          <p className="produtos-desc">Os medicamentos e produtos de higiene mais vendidos, sempre disponíveis!</p>
          
          <div className="populares-grid">
            {produtos.filter(p => p.popular).slice(0, 6).map(produto => (
              <div key={produto.id} className="popular-card">
                <div className="produto-header">
                  <span className="emoji-produto">{produto.emoji}</span>
                  <span className="produto-badge popular">Mais Vendido</span>
                  {produto.receita && <span className="receita-badge">Receita</span>}
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="marca">{produto.marca} - {produto.quantidade || produto.volume || produto.peso}</p>
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
                  {produto.receita && <span className="receita-badge">Receita</span>}
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="marca">{produto.marca}</p>
                  <p className="especificacao">{produto.quantidade || produto.volume || produto.peso || produto.tamanho}</p>
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

      {/* Serviços */}
      <section className="servicos" id="servicos">
        <div className="container">
          <h2>Nossos Serviços</h2>
          
          <div className="servicos-grid">
            <div className="servico">
              <span>💉</span>
              <h3>Aplicação de Injeções</h3>
              <p>Aplicação de injeções intramusculares e endovenosas com enfermeira qualificada.</p>
              <strong>R$ 15,00</strong>
            </div>
            
            <div className="servico">
              <span>🩺</span>
              <h3>Aferição de Pressão</h3>
              <p>Medição da pressão arterial gratuita todos os dias.</p>
              <strong>Gratuito</strong>
            </div>
            
            <div className="servico">
              <span>💧</span>
              <h3>Teste de Glicemia</h3>
              <p>Teste rápido de glicose no sangue com resultado imediato.</p>
              <strong>R$ 5,00</strong>
            </div>
            
            <div className="servico">
              <span>💊</span>
              <h3>Manipulação</h3>
              <p>Medicamentos manipulados sob encomenda com farmacêutico responsável.</p>
              <strong>Sob consulta</strong>
            </div>
            
            <div className="servico">
              <span>📱</span>
              <h3>Telemedicina</h3>
              <p>Consultas médicas online com médicos credenciados.</p>
              <strong>R$ 45,00</strong>
            </div>
            
            <div className="servico">
              <span>🚚</span>
              <h3>Entrega 24h</h3>
              <p>Entrega de medicamentos em casa 24 horas por dia.</p>
              <strong>R$ 5,00</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="sobre" id="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <h2>Dr. Ricardo e Dra. Ana</h2>
              <p>
                Há <strong>20 anos</strong> atrás, <em>Dr. Ricardo Silva</em> e <em>Dra. Ana Paula</em> abriram a Farmácia Vida & Saúde com o sonho de oferecer atendimento farmacêutico de qualidade para toda a comunidade.
              </p>
              <p>
                <em>"Cuidar da saúde das pessoas é nossa missão"</em> - essa sempre foi a filosofia que guia nosso trabalho. Com atendimento 24 horas e farmacêutico sempre presente, nos tornamos referência em saúde e bem-estar no bairro.
              </p>
              <p>
                Hoje, junto com nossa equipe de <em>8 profissionais especializados</em>, mantemos o compromisso de oferecer produtos de qualidade, orientação farmacêutica responsável e atendimento humanizado.
              </p>

              <div className="certificacoes">
                <div className="certificacao">
                  <span>🏆</span>
                  <div>
                    <strong>CRF Ativo</strong>
                    <p>Farmacêuticos com registro ativo no Conselho Regional de Farmácia</p>
                  </div>
                </div>
                <div className="certificacao">
                  <span>🛡️</span>
                  <div>
                    <strong>ANVISA Certificada</strong>
                    <p>Licença sanitária renovada e em conformidade com a ANVISA</p>
                  </div>
                </div>
                <div className="certificacao">
                  <span>❄️</span>
                  <div>
                    <strong>Rede de Frio</strong>
                    <p>Sistema de refrigeração monitorado 24h para vacinas e medicamentos especiais</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="farmaceuticos-foto">
              <div className="foto-container">
                <span>👨‍⚕️</span>
                <p>
                  <strong>Dr. Ricardo & Dra. Ana</strong><br/>
                  <em>"20 anos cuidando da sua saúde"</em><br/><br/>
                  💊 Farmacêuticos responsáveis<br/>
                  🎓 Pós-graduados em Farmácia Clínica<br/>
                  🏥 Especialistas em Atenção Farmacêutica<br/>
                  ❤️ Dedicados ao bem-estar da comunidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos">
        <div className="container">
          <h2>O Que Nossos Pacientes Dizem</h2>
          
          <div className="depoimentos-grid">
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Sempre que preciso de medicamentos urgentes, sei que posso contar com a Farmácia Vida & Saúde. Atendimento 24h e os farmacêuticos sempre me orientam direitinho!"</p>
              <div className="cliente">
                <span className="avatar">👩‍🦳</span>
                <div>
                  <strong>Dona Marta</strong>
                  <span>Cliente há 15 anos</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Dr. Ricardo e Dra. Ana são excelentes! Sempre me explicam como tomar os remédios e se preocupam com meu bem-estar. Farmácia de confiança!"</p>
              <div className="cliente">
                <span className="avatar">👨</span>
                <div>
                  <strong>João Carlos</strong>
                  <span>Diabético em tratamento</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"A entrega é super rápida e os preços são justos. Quando meu filho teve febre alta de madrugada, eles entregaram o medicamento em 20 minutos!"</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Patricia Lima</strong>
                  <span>Mãe de família</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horário e Plantão */}
      <section className="horario-plantao">
        <div className="container">
          <div className="info-grid">
            <div className="horario">
              <h3>🕐 Funcionamento</h3>
              <div className="horario-item">
                <span>Segunda a Domingo</span>
                <span>24 HORAS</span>
              </div>
              <div className="horario-item">
                <span>Farmacêutico</span>
                <span>Sempre presente</span>
              </div>
              <div className="destaque">
                🚨 PLANTÃO 24H TODOS OS DIAS!
              </div>
            </div>
            
            <div className="entrega">
              <h3>🚚 Entrega</h3>
              <div className="entrega-item">
                <span>Entrega expressa</span>
                <span>30 minutos</span>
              </div>
              <div className="entrega-item">
                <span>Taxa de entrega</span>
                <span>R$ 5,00</span>
              </div>
              <div className="entrega-item">
                <span>Entrega gratuita</span>
                <span>Acima de R$ 80,00</span>
              </div>
              <div className="destaque">
                🚨 EMERGÊNCIA: Entrega imediata!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="contato" id="contato">
        <div className="container">
          <h2>Entre em Contato</h2>
          
          <div className="contato-grid">
            <div className="contato-info">
              <h3>📞 Atendimento 24h</h3>
              
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp 24h</strong>
                  <p>(11) 99955-4433</p>
                  <small>Pedidos e emergências</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📞</span>
                <div>
                  <strong>Telefone Fixo</strong>
                  <p>(11) 3789-4567</p>
                  <small>Informações gerais</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>🚨</span>
                <div>
                  <strong>Emergência</strong>
                  <p>24 horas por dia</p>
                  <small>Atendimento médico de urgência</small>
                </div>
              </div>
            </div>
            
            <div className="endereco-completo">
              <h3>📍 Nossa Localização</h3>
              <p><strong>Farmácia Vida & Saúde</strong></p>
              <p>Avenida da Saúde, 456 - Centro</p>
              <p>Bairro Vila Medicinal - São Paulo/SP</p>
              <p>CEP: 05678-901</p>
              
              <div className="referencias">
                <p><strong>Pontos de Referência:</strong></p>
                <p>• Em frente ao Hospital Municipal</p>
                <p>• Ao lado da UBS Central</p>
                <p>• Próximo ao Laboratório São Paulo</p>
                <p>• Na avenida principal do centro</p>
              </div>
              
              <div className="tradicao">
                <p>💊 <strong>"20 anos cuidando da saúde da nossa comunidade com amor e dedicação!"</strong></p>
                <p><em>- Dr. Ricardo & Dra. Ana</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrinho Resumo */}
      {carrinho.length > 0 && (
        <div className="carrinho-resumo" style={{ display: mostrarCarrinho ? 'block' : 'none' }}>
          <div className="carrinho-header">
            <h4>💊 Seu Pedido</h4>
            <button onClick={limparCarrinho} className="limpar-carrinho">🗑️</button>
          </div>
          
          <div className="carrinho-itens">
            {carrinho.slice(0, 3).map(item => (
              <div key={item.id} className="carrinho-item">
                <div>
                  <strong>{item.nome}</strong>
                  <span className="item-marca"> - {item.marca}</span>
                  {item.receita && <span className="item-receita">📋</span>}
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
            📱 Enviar Pedido via WhatsApp
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>💊 Farmácia Vida & Saúde</h4>
              <p>Sua saúde é nossa prioridade há 20 anos!</p>
              <p>Atendimento farmacêutico 24h com qualidade e confiança.</p>
            </div>
            
            <div className="footer-section">
              <h4>📞 Contato 24h</h4>
              <ul>
                <li>📱 (11) 99955-4433</li>
                <li>📞 (11) 3789-4567</li>
                <li>📍 Av. da Saúde, 456</li>
                <li>🕐 24 horas por dia</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>💊 Nossos Serviços</h4>
              <ul>
                <li>🚚 Entrega 24h (30 min)</li>
                <li>👨‍⚕️ Farmacêutico sempre presente</li>
                <li>💉 Aplicação de injeções</li>
                <li>📱 Telemedicina</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>🏷️ Categorias</h4>
              <ul>
                <li><a href="#produtos">Medicamentos</a></li>
                <li><a href="#produtos">Higiene e Beleza</a></li>
                <li><a href="#produtos">Vitaminas</a></li>
                <li><a href="#produtos">Primeiros Socorros</a></li>
                <li><a href="#produtos">Infantil</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Farmácia Vida & Saúde. Feito com ❤️ para cuidar da sua saúde.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/5511999554433" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span>💬</span>
        <span className="whatsapp-text">Emergência 24h</span>
      </a>
    </div>
  );
};

export default Farmacia;