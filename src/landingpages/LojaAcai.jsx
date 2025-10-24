import React, { useState, useEffect } from 'react';
import './acai.css';

const LojaAcai = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [valorTotal, setValorTotal] = useState(0);

  const produtos = [
    {
      id: 1,
      nome: "Açaí na Tigela Original",
      categoria: "tradicional",
      preco: 12.90,
      emoji: "🍇",
      descricao: "Açaí puro e cremoso batido na hora",
      ingredientes: ["Açaí orgânico", "Guaraná natural", "Banana"],
      tamanhos: [
        { nome: "300ml", preco: 12.90, desc: "Individual" },
        { nome: "500ml", preco: 18.90, desc: "Grande" },
        { nome: "700ml", preco: 24.90, desc: "Família" }
      ]
    },
    {
      id: 2,
      nome: "Açaí Protein",
      categoria: "fitness",
      preco: 16.90,
      emoji: "💪",
      descricao: "Açaí com whey protein e creatina",
      ingredientes: ["Açaí orgânico", "Whey protein", "Creatina", "Banana", "Aveia"],
      tamanhos: [
        { nome: "300ml", preco: 16.90, desc: "Individual" },
        { nome: "500ml", preco: 22.90, desc: "Grande" },
        { nome: "700ml", preco: 28.90, desc: "Família" }
      ]
    },
    {
      id: 3,
      nome: "Açaí Tropical",
      categoria: "especial",
      preco: 15.90,
      emoji: "🥥",
      descricao: "Açaí com coco, manga e maracujá",
      ingredientes: ["Açaí orgânico", "Leite de coco", "Manga", "Maracujá", "Chia"],
      tamanhos: [
        { nome: "300ml", preco: 15.90, desc: "Individual" },
        { nome: "500ml", preco: 21.90, desc: "Grande" },
        { nome: "700ml", preco: 27.90, desc: "Família" }
      ]
    },
    {
      id: 4,
      nome: "Açaí Detox",
      categoria: "saudavel",
      preco: 17.90,
      emoji: "🌿",
      descricao: "Açaí com spirulina e frutas vermelhas",
      ingredientes: ["Açaí orgânico", "Spirulina", "Morango", "Mirtilo", "Água de coco"],
      tamanhos: [
        { nome: "300ml", preco: 17.90, desc: "Individual" },
        { nome: "500ml", preco: 23.90, desc: "Grande" },
        { nome: "700ml", preco: 29.90, desc: "Família" }
      ]
    },
    {
      id: 5,
      nome: "Vitamina de Açaí",
      categoria: "bebida",
      preco: 8.90,
      emoji: "🥤",
      descricao: "Vitamina cremosa de açaí com leite",
      ingredientes: ["Açaí", "Leite integral", "Banana", "Mel"],
      tamanhos: [
        { nome: "300ml", preco: 8.90, desc: "Individual" },
        { nome: "500ml", preco: 12.90, desc: "Grande" }
      ]
    },
    {
      id: 6,
      nome: "Smoothie de Açaí",
      categoria: "bebida",
      preco: 9.90,
      emoji: "🍹",
      descricao: "Smoothie refrescante com frutas tropicais",
      ingredientes: ["Açaí", "Manga", "Abacaxi", "Água de coco", "Hortelã"],
      tamanhos: [
        { nome: "300ml", preco: 9.90, desc: "Individual" },
        { nome: "500ml", preco: 13.90, desc: "Grande" }
      ]
    },
    {
      id: 7,
      nome: "Picolé de Açaí",
      categoria: "sobremesa",
      preco: 5.90,
      emoji: "🍭",
      descricao: "Picolé cremoso de açaí com frutas",
      ingredientes: ["Açaí", "Leite condensado", "Morango", "Kiwi"],
      tamanhos: [
        { nome: "Unidade", preco: 5.90, desc: "80g" }
      ]
    },
    {
      id: 8,
      nome: "Sorvete de Açaí",
      categoria: "sobremesa",
      preco: 14.90,
      emoji: "🍦",
      descricao: "Sorvete artesanal de açaí",
      ingredientes: ["Açaí", "Creme de leite", "Açúcar orgânico", "Estabilizante natural"],
      tamanhos: [
        { nome: "300ml", preco: 14.90, desc: "Individual" },
        { nome: "500ml", preco: 19.90, desc: "Grande" }
      ]
    }
  ];

  const toppings = [
    { nome: "Granola", preco: 2.50, emoji: "🥣" },
    { nome: "Banana", preco: 1.50, emoji: "🍌" },
    { nome: "Morango", preco: 2.00, emoji: "🍓" },
    { nome: "Kiwi", preco: 2.50, emoji: "🥝" },
    { nome: "Coco Ralado", preco: 1.50, emoji: "🥥" },
    { nome: "Mel", preco: 1.00, emoji: "🍯" },
    { nome: "Leite Condensado", preco: 1.50, emoji: "🥛" },
    { nome: "Amendoim", preco: 2.00, emoji: "🥜" },
    { nome: "Castanha do Pará", preco: 3.00, emoji: "🌰" },
    { nome: "Chia", preco: 2.50, emoji: "⚫" },
    { nome: "Aveia", preco: 1.50, emoji: "🌾" },
    { nome: "Nutella", preco: 3.50, emoji: "🍫" }
  ];

  const calcularTotal = () => {
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    setValorTotal(total);
  };

  useEffect(() => {
    calcularTotal();
  }, [carrinho]);

  const adicionarAoCarrinho = (produto, tamanho) => {
    const itemCarrinho = {
      id: Date.now(),
      produtoId: produto.id,
      nome: produto.nome,
      tamanho: tamanho.nome,
      preco: tamanho.preco,
      quantidade: 1,
      emoji: produto.emoji
    };

    setCarrinho([...carrinho, itemCarrinho]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const finalizarPedido = () => {
    if (carrinho.length === 0) {
      alert('Adicione itens ao carrinho primeiro!');
      return;
    }

    let mensagem = "🍇 *PEDIDO - AÇAÍ TROPICAL BRASIL* 🍇\n\n";
    
    carrinho.forEach((item, index) => {
      mensagem += `${index + 1}. ${item.emoji} ${item.nome}\n`;
      mensagem += `   Tamanho: ${item.tamanho}\n`;
      mensagem += `   Preço: R$ ${item.preco.toFixed(2)}\n\n`;
    });
    
    mensagem += `💰 *TOTAL: R$ ${valorTotal.toFixed(2)}*\n\n`;
    mensagem += "📍 Favor informar endereço para entrega\n";
    mensagem += "🕐 Tempo estimado: 30-45 min\n";
    mensagem += "💳 Aceitamos PIX, cartão e dinheiro";

    const telefone = "5511999887766";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const filtrarProdutos = () => {
    if (filtroAtivo === 'todos') return produtos;
    return produtos.filter(produto => produto.categoria === filtroAtivo);
  };

  return (
    <div className="acai">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🍇</span>
            <h1>Açaí Tropical Brasil</h1>
          </div>
          <nav className="nav">
            <a href="#cardapio">Cardápio</a>
            <a href="#toppings">Toppings</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="carrinho-info">
            <span className="carrinho-icon">🛒</span>
            <span className="carrinho-count">{carrinho.length}</span>
            <span className="carrinho-total">R$ {valorTotal.toFixed(2)}</span>
            <button className="btn-finalizar-header" onClick={finalizarPedido}>
              Finalizar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>O Melhor Açaí do Brasil! 🍇</h2>
            <p>Açaí orgânico, cremoso e delicioso, direto da Amazônia para sua mesa. Sabor autêntico que você só encontra aqui!</p>
            
            <div className="hero-features">
              <div className="feature">
                <span>🌱</span>
                <p><strong>100% Orgânico</strong><br/>Açaí puro da Amazônia</p>
              </div>
              <div className="feature">
                <span>❄️</span>
                <p><strong>Sempre Fresco</strong><br/>Batido na hora para você</p>
              </div>
              <div className="feature">
                <span>🚚</span>
                <p><strong>Entrega Rápida</strong><br/>30-45 minutos</p>
              </div>
              <div className="feature">
                <span>🏆</span>
                <p><strong>Premiado</strong><br/>Melhor açaí da região</p>
              </div>
            </div>

            <button className="cta-button" onClick={() => document.getElementById('cardapio').scrollIntoView()}>
              Ver Cardápio 🍇
            </button>
          </div>
        </div>
      </section>

      {/* Cardápio */}
      <section id="cardapio" className="cardapio">
        <div className="container">
          <h2>Nosso Cardápio 🍇</h2>
          
          <div className="filtros">
            <button 
              className={`filtro ${filtroAtivo === 'todos' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('todos')}
            >
              🍇 Todos
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'tradicional' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('tradicional')}
            >
              🏆 Tradicionais
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'fitness' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('fitness')}
            >
              💪 Fitness
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'especial' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('especial')}
            >
              ⭐ Especiais
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'saudavel' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('saudavel')}
            >
              🌿 Saudáveis
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'bebida' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('bebida')}
            >
              🥤 Bebidas
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'sobremesa' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('sobremesa')}
            >
              🍦 Sobremesas
            </button>
          </div>

          <div className="produtos-grid">
            {filtrarProdutos().map(produto => (
              <div key={produto.id} className="produto-card">
                <div className="produto-header">
                  <span className="emoji-produto">{produto.emoji}</span>
                  {produto.categoria === 'fitness' && <div className="produto-badge">PROTEIN</div>}
                  {produto.categoria === 'saudavel' && <div className="produto-badge">DETOX</div>}
                  {produto.categoria === 'especial' && <div className="produto-badge">ESPECIAL</div>}
                </div>
                
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="descricao">{produto.descricao}</p>
                  
                  <div className="ingredientes">
                    <strong>🌿 Ingredientes:</strong>
                    <div className="ingredientes-list">
                      {produto.ingredientes.map((ingrediente, index) => (
                        <span key={index} className="ingrediente">{ingrediente}</span>
                      ))}
                    </div>
                  </div>

                  <div className="tamanhos-secao">
                    <strong>📏 Escolha seu tamanho:</strong>
                    <div className="tamanhos-grid">
                      {produto.tamanhos.map((tamanho, index) => (
                        <div key={index} className="tamanho-opcao">
                          <div className="tamanho-info">
                            <span className="tamanho-nome">{tamanho.nome}</span>
                            <span className="tamanho-desc">{tamanho.desc}</span>
                            <span className="tamanho-preco">R$ {tamanho.preco.toFixed(2)}</span>
                          </div>
                          <button 
                            className="btn-adicionar-tamanho"
                            onClick={() => adicionarAoCarrinho(produto, tamanho)}
                          >
                            Adicionar 🛒
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppings */}
      <section id="toppings" className="toppings">
        <div className="container">
          <h2>Toppings Especiais 🥣</h2>
          <p className="toppings-desc">Personalize seu açaí com nossos toppings fresquinhos!</p>
          
          <div className="toppings-grid">
            {toppings.map((topping, index) => (
              <div key={index} className="topping-card">
                <span className="topping-emoji">{topping.emoji}</span>
                <h4>{topping.nome}</h4>
                <p className="topping-preco">+ R$ {topping.preco.toFixed(2)}</p>
                <div className="topping-disponivel">✅ Disponível</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="beneficios">
        <div className="container">
          <h2>Benefícios do Açaí 💜</h2>
          
          <div className="beneficios-grid">
            <div className="beneficio-item">
              <span className="icon">⚡</span>
              <h3>Energia Natural</h3>
              <p>Rico em carboidratos e vitaminas do complexo B, o açaí fornece energia duradoura para seu dia.</p>
            </div>
            
            <div className="beneficio-item">
              <span className="icon">💪</span>
              <h3>Antioxidantes</h3>
              <p>Combate os radicais livres e ajuda no fortalecimento do sistema imunológico.</p>
            </div>
            
            <div className="beneficio-item">
              <span className="icon">❤️</span>
              <h3>Saúde do Coração</h3>
              <p>As antocianinas presentes no açaí ajudam na saúde cardiovascular.</p>
            </div>
            
            <div className="beneficio-item">
              <span className="icon">🧠</span>
              <h3>Função Cerebral</h3>
              <p>Ômega 3 e antioxidantes que contribuem para a saúde cerebral e memória.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <h2>Nossa História 🌳</h2>
              <p>
                Nascemos do amor pela <em>Amazônia</em> e pela tradição brasileira. Há mais de 10 anos, 
                trabalhamos diretamente com produtores familiares da região amazônica para trazer 
                o açaí mais puro e saboroso do Brasil.
              </p>
              <p>
                Nosso fundador, <em>João Ribeirinho</em>, cresceu no Pará e conhece os segredos do açaí 
                desde criança. Cada tigela que servimos carrega essa paixão e conhecimento ancestral.
              </p>
              <p>
                Utilizamos apenas <em>açaí orgânico</em>, sem conservantes ou aditivos químicos. 
                Do pé à tigela, mantemos a qualidade e o sabor que fazem do açaí brasileiro único no mundo.
              </p>

              <div className="certificacoes">
                <div className="certificacao">
                  <span>🌱</span>
                  <div>
                    <strong>Certificação Orgânica</strong>
                    <p>Produto certificado pelo IBD - Instituto Biodinâmico</p>
                  </div>
                </div>
                
                <div className="certificacao">
                  <span>🤝</span>
                  <div>
                    <strong>Comércio Justo</strong>
                    <p>Parceria direta com comunidades ribeirinhas</p>
                  </div>
                </div>
                
                <div className="certificacao">
                  <span>🌍</span>
                  <div>
                    <strong>Sustentabilidade</strong>
                    <p>Preservação da floresta amazônica</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="joao-foto">
              <div className="foto-container">
                <span>👨‍🌾</span>
                <p>
                  <strong>João Ribeirinho</strong><br/>
                  <em>"Cada açaí conta uma história da nossa terra"</em><br/><br/>
                  Fundador e especialista em açaí amazônico. 
                  Trabalha há 30 anos com comunidades ribeirinhas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos">
        <div className="container">
          <h2>O que dizem nossos clientes 💜</h2>
          
          <div className="depoimentos-grid">
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"O melhor açaí que já comi! Cremoso, saboroso e com toppings fresquinhos. Virei cliente fiel!"</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Ana Paula Silva</strong>
                  <span>Cliente há 2 anos</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Como atleta, preciso de energia de qualidade. O açaí protein daqui é perfeito para meus treinos!"</p>
              <div className="cliente">
                <span className="avatar">🏃‍♂️</span>
                <div>
                  <strong>Carlos Mendes</strong>
                  <span>Personal Trainer</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Entrega rápida e açaí sempre no ponto. A família toda adora, especialmente as crianças!"</p>
              <div className="cliente">
                <span className="avatar">👪</span>
                <div>
                  <strong>Família Santos</strong>
                  <span>Clientes VIP</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"O açaí detox me ajudou muito na dieta. Saboroso e saudável, recomendo para todos!"</p>
              <div className="cliente">
                <span className="avatar">🌟</span>
                <div>
                  <strong>Marina Costa</strong>
                  <span>Nutricionista</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Açaí de verdade! Lembra o que comia na minha infância no Norte. Sabor autêntico!"</p>
              <div className="cliente">
                <span className="avatar">👴</span>
                <div>
                  <strong>Sr. Antônio</strong>
                  <span>Paraense raiz</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Experimentei todos os sabores e todos são maravilhosos! Virei fã do açaí tropical!"</p>
              <div className="cliente">
                <span className="avatar">😋</span>
                <div>
                  <strong>Julia Fernandes</strong>
                  <span>Food blogger</span>
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
                <span>Segunda a Quinta</span>
                <span>10h às 22h</span>
              </div>
              <div className="horario-item">
                <span>Sexta e Sábado</span>
                <span>10h às 23h</span>
              </div>
              <div className="horario-item">
                <span>Domingo</span>
                <span>12h às 21h</span>
              </div>
              <div className="destaque">
                🌞 Horário de verão: funcionamos 1h a mais!
              </div>
            </div>
            
            <div className="entrega">
              <h3>🚚 Entrega e Retirada</h3>
              <div className="entrega-item">
                <span>Entrega grátis</span>
                <span>Acima de R$ 25</span>
              </div>
              <div className="entrega-item">
                <span>Taxa de entrega</span>
                <span>R$ 3,90</span>
              </div>
              <div className="entrega-item">
                <span>Tempo médio</span>
                <span>30-45 min</span>
              </div>
              <div className="entrega-item">
                <span>Retirada no local</span>
                <span>15-20 min</span>
              </div>
              <div className="destaque">
                💨 Entrega expressa disponível nos fins de semana!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contato">
        <div className="container">
          <h2>Entre em Contato 📱</h2>
          
          <div className="contato-grid">
            <div className="contato-info">
              <h3>🍇 Açaí Tropical Brasil</h3>
              
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp / Telefone</strong>
                  <p>(11) 99988-7766</p>
                  <small>Pedidos, dúvidas e sugestões</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📧</span>
                <div>
                  <strong>E-mail</strong>
                  <p>contato@acaitropicalbrasil.com.br</p>
                  <small>Parcerias e eventos</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📍</span>
                <div>
                  <strong>Endereço</strong>
                  <p>Rua das Palmeiras, 456</p>
                  <p>Vila Tropical - São Paulo/SP</p>
                  <small>CEP: 01234-567</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📷</span>
                <div>
                  <strong>Redes Sociais</strong>
                  <p>@acaitropicalbrasil</p>
                  <small>Instagram, Facebook e TikTok</small>
                </div>
              </div>
            </div>
            
            <div className="contato-form">
              <h3>📍 Como Chegar</h3>
              
              <div className="endereco-completo">
                <p><strong>🚇 Transporte Público:</strong></p>
                <p>• Metrô: Estação Vila Madalena (Linha 2-Verde)</p>
                <p>• Ônibus: Linhas 177M, 775A, 8012</p>
                <p>• Distância: 200m da estação</p>
                
                <p><strong>🚗 De Carro:</strong></p>
                <p>• Estacionamento gratuito na rua</p>
                <p>• Zona azul nos horários comerciais</p>
                <p>• Fácil acesso pela Rua Teodoro Sampaio</p>
                
                <div className="pagamento">
                  <p><strong>💳 Formas de Pagamento:</strong></p>
                  <div className="pagamento-opcoes">
                    <span>PIX</span>
                    <span>Cartão</span>
                    <span>Dinheiro</span>
                    <span>VR/VA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrinho Resumo */}
      {carrinho.length > 0 && (
        <div className="carrinho-resumo">
          <div className="carrinho-header">
            <span>🛒 Carrinho ({carrinho.length})</span>
            <button className="limpar-carrinho" onClick={limparCarrinho} title="Limpar carrinho">
              🗑️
            </button>
          </div>
          
          <div className="carrinho-itens">
            {carrinho.slice(0, 3).map(item => (
              <div key={item.id} className="carrinho-item">
                <div>
                  <span>{item.emoji} {item.nome}</span>
                  <span className="item-tamanho">({item.tamanho})</span>
                </div>
                <div>
                  <span>R$ {item.preco.toFixed(2)}</span>
                  <button onClick={() => removerDoCarrinho(item.id)}>❌</button>
                </div>
              </div>
            ))}
            {carrinho.length > 3 && (
              <div className="mais-itens">+ {carrinho.length - 3} itens...</div>
            )}
          </div>
          
          <div className="carrinho-total-box">
            <strong>Total: R$ {valorTotal.toFixed(2)}</strong>
          </div>
          
          <button className="finalizar-pedido" onClick={finalizarPedido}>
            🍇 Finalizar no WhatsApp
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🍇 Açaí Tropical Brasil</h4>
              <p>O melhor açaí da Amazônia, direto na sua casa!</p>
              <p>Qualidade, sabor e tradição brasileira.</p>
              <div className="social-links">
                <a href="#">📱</a>
                <a href="#">📷</a>
                <a href="#">🎵</a>
                <a href="#">👥</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>⏰ Horários</h4>
              <ul>
                <li>Segunda a Quinta: 10h-22h</li>
                <li>Sexta e Sábado: 10h-23h</li>
                <li>Domingo: 12h-21h</li>
                <li>Feriados: 12h-20h</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>📞 Contato</h4>
              <ul>
                <li><a href="#">(11) 99988-7766</a></li>
                <li><a href="#">contato@acaitropicalbrasil.com.br</a></li>
                <li>Rua das Palmeiras, 456</li>
                <li>Vila Tropical - São Paulo/SP</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>🌿 Sustentabilidade</h4>
              <ul>
                <li>Açaí 100% orgânico</li>
                <li>Comércio justo</li>
                <li>Preservação amazônica</li>
                <li>Embalagens eco-friendly</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Açaí Tropical Brasil. Todos os direitos reservados.</p>
            <p>CNPJ: 12.345.678/0001-90 | Desenvolvido com 💜 por Fábrica de Sites</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/5511999887766" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span>💬</span>
        <span className="whatsapp-text">Peça já seu açaí!</span>
      </a>
    </div>
  );
};

export default LojaAcai;