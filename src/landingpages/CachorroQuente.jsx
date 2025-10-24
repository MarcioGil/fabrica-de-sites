import React, { useState, useEffect } from 'react';
import './cachorro.css';

const CachorroQuente = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [valorTotal, setValorTotal] = useState(0);

  const produtos = [
    {
      id: 1,
      nome: "Cachorro Simples",
      categoria: "tradicional",
      preco: 8.90,
      emoji: "🌭",
      descricao: "Cachorro quente tradicional com molhos",
      ingredientes: ["Pão de hot dog", "Salsicha", "Molho verde", "Molho vermelho", "Mostarda"],
      popular: true
    },
    {
      id: 2,
      nome: "Cachorro Completo",
      categoria: "tradicional",
      preco: 12.90,
      emoji: "🌭",
      descricao: "Com queijo, milho, ervilha e batata palha",
      ingredientes: ["Pão de hot dog", "Salsicha", "Queijo ralado", "Milho", "Ervilha", "Batata palha", "Molhos"],
      popular: true
    },
    {
      id: 3,
      nome: "Cachorro do Chefe",
      categoria: "especial",
      preco: 16.90,
      emoji: "👑",
      descricao: "O mais pedido! Com bacon e calabresa",
      ingredientes: ["Pão especial", "Salsicha grande", "Bacon", "Calabresa", "Queijo", "Cebola frita", "Molhos especiais"],
      chef: true
    },
    {
      id: 4,
      nome: "Cachorro Fit",
      categoria: "light",
      preco: 14.90,
      emoji: "🥗",
      descricao: "Versão saudável com salsicha de frango",
      ingredientes: ["Pão integral", "Salsicha de frango", "Queijo light", "Cenoura ralada", "Alface", "Molho natural"]
    },
    {
      id: 5,
      nome: "Misto Quente",
      categoria: "tradicional",
      preco: 7.90,
      emoji: "🥪",
      descricao: "Clássico misto quente na chapa",
      ingredientes: ["Pão de forma", "Presunto", "Queijo mussarela", "Manteiga"]
    },
    {
      id: 6,
      nome: "X-Salada Dog",
      categoria: "especial",
      preco: 15.90,
      emoji: "🥙",
      descricao: "Cachorro com hambúrguer e salada",
      ingredientes: ["Pão de hot dog", "Salsicha", "Hambúrguer", "Alface", "Tomate", "Queijo", "Molhos"]
    },
    {
      id: 7,
      nome: "Cachorro Mexicano",
      categoria: "especial",
      preco: 17.90,
      emoji: "🌶️",
      descricao: "Apimentado com pimenta jalapeño",
      ingredientes: ["Pão temperado", "Salsicha defumada", "Pimenta jalapeño", "Queijo cheddar", "Cebola roxa", "Molho picante"]
    },
    {
      id: 8,
      nome: "Batata Frita",
      categoria: "acompanhamento",
      preco: 8.90,
      emoji: "🍟",
      descricao: "Batata frita sequinha e crocante",
      ingredientes: ["Batata especial", "Óleo vegetal", "Sal"]
    },
    {
      id: 9,
      nome: "Refrigerante Lata",
      categoria: "bebida",
      preco: 4.50,
      emoji: "🥤",
      descricao: "Refrigerante gelado 350ml",
      ingredientes: ["Coca-Cola", "Guaraná", "Fanta"],
      sabores: ["Coca-Cola", "Guaraná Antarctica", "Fanta Laranja", "Sprite"]
    },
    {
      id: 10,
      nome: "Suco Natural",
      categoria: "bebida",
      preco: 6.90,
      emoji: "🧃",
      descricao: "Suco natural de frutas 400ml",
      ingredientes: ["Frutas frescas", "Água", "Açúcar"],
      sabores: ["Laranja", "Limão", "Maracujá", "Acerola"]
    },
    {
      id: 11,
      nome: "Vitamina",
      categoria: "bebida",
      preco: 8.90,
      emoji: "🥤",
      descricao: "Vitamina cremosa 500ml",
      ingredientes: ["Leite", "Frutas", "Açúcar"],
      sabores: ["Banana", "Morango", "Abacate", "Mamão"]
    },
    {
      id: 12,
      nome: "Pudim Caseiro",
      categoria: "sobremesa",
      preco: 6.90,
      emoji: "🍮",
      descricao: "Pudim de leite condensado da casa",
      ingredientes: ["Leite condensado", "Ovos", "Leite", "Açúcar caramelizado"]
    }
  ];

  const combos = [
    {
      id: 'combo1',
      nome: "Combo Tradicional",
      preco: 16.90,
      economia: 3.50,
      emoji: "🎯",
      itens: ["Cachorro Completo", "Batata Frita", "Refrigerante"],
      descricao: "O combo mais pedido!"
    },
    {
      id: 'combo2',
      nome: "Combo do Chefe",
      preco: 22.90,
      economia: 5.40,
      emoji: "👑",
      itens: ["Cachorro do Chefe", "Batata Frita", "Refrigerante"],
      descricao: "Para quem tem bom gosto!"
    },
    {
      id: 'combo3',
      nome: "Combo Duplo",
      preco: 29.90,
      economia: 8.80,
      emoji: "👥",
      itens: ["2 Cachorros Completos", "Batata Frita", "2 Refrigerantes"],
      descricao: "Ideal para compartilhar!"
    }
  ];

  const calcularTotal = () => {
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    setValorTotal(total);
  };

  useEffect(() => {
    calcularTotal();
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    const itemExistente = carrinho.find(item => item.id === produto.id);
    
    if (itemExistente) {
      setCarrinho(carrinho.map(item => 
        item.id === produto.id 
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      const itemCarrinho = {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1,
        emoji: produto.emoji
      };
      setCarrinho([...carrinho, itemCarrinho]);
    }
  };

  const adicionarCombo = (combo) => {
    const itemCarrinho = {
      id: combo.id,
      nome: combo.nome,
      preco: combo.preco,
      quantidade: 1,
      emoji: combo.emoji,
      isCombo: true
    };
    setCarrinho([...carrinho, itemCarrinho]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  const alterarQuantidade = (id, novaQuantidade) => {
    if (novaQuantidade === 0) {
      removerDoCarrinho(id);
    } else {
      setCarrinho(carrinho.map(item => 
        item.id === id 
          ? { ...item, quantidade: novaQuantidade }
          : item
      ));
    }
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const finalizarPedido = () => {
    if (carrinho.length === 0) {
      alert('Adicione itens ao carrinho primeiro!');
      return;
    }

    let mensagem = "🌭 *PEDIDO - CACHORRO DO ZÉ* 🌭\n\n";
    
    carrinho.forEach((item, index) => {
      mensagem += `${index + 1}. ${item.emoji} ${item.nome}\n`;
      mensagem += `   Quantidade: ${item.quantidade}\n`;
      mensagem += `   Preço unit: R$ ${item.preco.toFixed(2)}\n`;
      mensagem += `   Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}\n\n`;
    });
    
    mensagem += `💰 *TOTAL: R$ ${valorTotal.toFixed(2)}*\n\n`;
    mensagem += "📍 Favor informar localização para entrega\n";
    mensagem += "🕐 Tempo estimado: 20-30 min\n";
    mensagem += "💳 Aceitamos PIX, dinheiro e cartão";

    const telefone = "5511987654321";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const filtrarProdutos = () => {
    if (filtroAtivo === 'todos') return produtos;
    return produtos.filter(produto => produto.categoria === filtroAtivo);
  };

  return (
    <div className="cachorro">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🌭</span>
            <h1>Cachorro do Zé</h1>
          </div>
          <nav className="nav">
            <a href="#cardapio">Cardápio</a>
            <a href="#combos">Combos</a>
            <a href="#sobre">Nossa História</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="carrinho-info">
            <span className="carrinho-icon">🛒</span>
            <span className="carrinho-count">{carrinho.reduce((sum, item) => sum + item.quantidade, 0)}</span>
            <span className="carrinho-total">R$ {valorTotal.toFixed(2)}</span>
            <button className="btn-finalizar-header" onClick={finalizarPedido}>
              Pedir
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>O Melhor Cachorro Quente da Cidade! 🌭</h2>
            <p>Desde 1995 servindo o cachorro quente mais gostoso da região! Tradição e sabor que passam de geração em geração.</p>
            
            <div className="hero-features">
              <div className="feature">
                <span>🌭</span>
                <p><strong>Tradição</strong><br/>29 anos de experiência</p>
              </div>
              <div className="feature">
                <span>🔥</span>
                <p><strong>Sempre Quente</strong><br/>Feito na hora</p>
              </div>
              <div className="feature">
                <span>💰</span>
                <p><strong>Preço Justo</strong><br/>Cabe no seu bolso</p>
              </div>
              <div className="feature">
                <span>🚀</span>
                <p><strong>Entrega Rápida</strong><br/>20-30 minutos</p>
              </div>
            </div>

            <div className="hero-actions">
              <button className="cta-button primary" onClick={() => document.getElementById('cardapio').scrollIntoView()}>
                Ver Cardápio 🌭
              </button>
              <button className="cta-button secondary" onClick={() => document.getElementById('combos').scrollIntoView()}>
                Combos 🎯
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Combos */}
      <section id="combos" className="combos-destaque">
        <div className="container">
          <h2>Combos Especiais 🎯</h2>
          <p className="combos-desc">Economize com nossos combos deliciosos!</p>
          
          <div className="combos-grid">
            {combos.map(combo => (
              <div key={combo.id} className="combo-card">
                <div className="combo-header">
                  <span className="combo-emoji">{combo.emoji}</span>
                  <div className="economia-badge">
                    Economize R$ {combo.economia.toFixed(2)}
                  </div>
                </div>
                
                <div className="combo-info">
                  <h3>{combo.nome}</h3>
                  <p className="combo-desc">{combo.descricao}</p>
                  
                  <div className="combo-itens">
                    <strong>Inclui:</strong>
                    <ul>
                      {combo.itens.map((item, index) => (
                        <li key={index}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="combo-footer">
                    <div className="combo-preco">
                      <span className="preco-combo">R$ {combo.preco.toFixed(2)}</span>
                    </div>
                    <button 
                      className="btn-adicionar-combo"
                      onClick={() => adicionarCombo(combo)}
                    >
                      Quero Esse! 🛒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cardápio */}
      <section id="cardapio" className="cardapio">
        <div className="container">
          <h2>Nosso Cardápio 🌭</h2>
          
          <div className="filtros">
            <button 
              className={`filtro ${filtroAtivo === 'todos' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('todos')}
            >
              🌭 Todos
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'tradicional' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('tradicional')}
            >
              🏆 Tradicionais
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'especial' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('especial')}
            >
              ⭐ Especiais
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'light' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('light')}
            >
              🥗 Light
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'acompanhamento' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('acompanhamento')}
            >
              🍟 Acompanhamentos
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
              🍮 Sobremesas
            </button>
          </div>

          <div className="produtos-grid">
            {filtrarProdutos().map(produto => (
              <div key={produto.id} className="produto-card">
                <div className="produto-header">
                  <span className="emoji-produto">{produto.emoji}</span>
                  {produto.popular && <div className="produto-badge popular">MAIS PEDIDO</div>}
                  {produto.chef && <div className="produto-badge chef">DO CHEFE</div>}
                </div>
                
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="descricao">{produto.descricao}</p>
                  
                  <div className="ingredientes">
                    <strong>🥘 Ingredientes:</strong>
                    <div className="ingredientes-list">
                      {produto.ingredientes.map((ingrediente, index) => (
                        <span key={index} className="ingrediente">{ingrediente}</span>
                      ))}
                    </div>
                  </div>

                  {produto.sabores && (
                    <div className="sabores">
                      <strong>🎯 Sabores:</strong>
                      <div className="sabores-list">
                        {produto.sabores.map((sabor, index) => (
                          <span key={index} className="sabor">{sabor}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="produto-footer">
                    <div className="preco">R$ {produto.preco.toFixed(2)}</div>
                    <button 
                      className="btn-adicionar"
                      onClick={() => adicionarAoCarrinho(produto)}
                    >
                      Adicionar 🛒
                    </button>
                  </div>
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
              <h2>Nossa História 📖</h2>
              <p>
                O <em>Cachorro do Zé</em> começou em 1995, quando o <em>Seu José</em> resolveu 
                montar um carrinho na esquina da rua. Com receita da família e muito carinho, 
                rapidamente virou point do bairro.
              </p>
              <p>
                Hoje, quase 30 anos depois, continuamos na mesma esquina, servindo o melhor 
                cachorro quente da região. <em>A receita não mudou, o carinho também não!</em>
              </p>
              <p>
                Nossos molhos são preparados diariamente, a salsicha é selecionada e o 
                atendimento continua sendo <em>familiar e acolhedor</em>. Aqui todo mundo 
                é bem-vindo e sai satisfeito!
              </p>

              <div className="certificacoes">
                <div className="certificacao">
                  <span>🏆</span>
                  <div>
                    <strong>Tradição</strong>
                    <p>29 anos servindo a mesma qualidade</p>
                  </div>
                </div>
                
                <div className="certificacao">
                  <span>❤️</span>
                  <div>
                    <strong>Família</strong>
                    <p>Atendimento carinhoso e acolhedor</p>
                  </div>
                </div>
                
                <div className="certificacao">
                  <span>🌟</span>
                  <div>
                    <strong>Qualidade</strong>
                    <p>Ingredientes frescos todos os dias</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ze-foto">
              <div className="foto-container">
                <span>👨‍🍳</span>
                <p>
                  <strong>Seu José - O Zé</strong><br/>
                  <em>"Cada cachorro é feito com carinho"</em><br/><br/>
                  Fundador e proprietário há 29 anos. 
                  Especialista em fazer você se sentir em casa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos">
        <div className="container">
          <h2>O que falam do nosso cachorro 🗣️</h2>
          
          <div className="depoimentos-grid">
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Venho aqui desde criança! Seu Zé é uma figura e o cachorro é o melhor da cidade!"</p>
              <div className="cliente">
                <span className="avatar">👨</span>
                <div>
                  <strong>Roberto Silva</strong>
                  <span>Cliente há 20 anos</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Tradicional da esquina! Quando bate aquela fome, é o primeiro lugar que penso."</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Maria Santos</strong>
                  <span>Vizinha</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Melhor cachorro quente da região! Preço justo e sabor incomparável."</p>
              <div className="cliente">
                <span className="avatar">🚗</span>
                <div>
                  <strong>Carlos Motorista</strong>
                  <span>Cliente frequente</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Meus filhos adoram! É parada obrigatória quando passamos pela rua."</p>
              <div className="cliente">
                <span className="avatar">👨‍👩‍👧‍👦</span>
                <div>
                  <strong>Família Lima</strong>
                  <span>Clientes fiéis</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Atendimento familiar e cachorro quente delicioso. Recomendo a todos!"</p>
              <div className="cliente">
                <span className="avatar">👵</span>
                <div>
                  <strong>Dona Conceição</strong>
                  <span>Aposentada</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Trabalho na região e sempre almoço aqui. Nunca decepciona!"</p>
              <div className="cliente">
                <span className="avatar">👷</span>
                <div>
                  <strong>João Trabalhador</strong>
                  <span>Cliente do almoço</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horário e Localização */}
      <section className="horario-entrega">
        <div className="container">
          <div className="info-grid">
            <div className="horario">
              <h3>⏰ Funcionamento</h3>
              <div className="horario-item">
                <span>Segunda a Quinta</span>
                <span>16h às 23h</span>
              </div>
              <div className="horario-item">
                <span>Sexta e Sábado</span>
                <span>16h às 01h</span>
              </div>
              <div className="horario-item">
                <span>Domingo</span>
                <span>16h às 22h</span>
              </div>
              <div className="destaque">
                🌭 Funcionamos todos os dias! Sua fome não espera!
              </div>
            </div>
            
            <div className="entrega">
              <h3>📍 Localização e Entrega</h3>
              <div className="entrega-item">
                <span>Entrega grátis</span>
                <span>Raio de 2km</span>
              </div>
              <div className="entrega-item">
                <span>Taxa de entrega</span>
                <span>R$ 3,00</span>
              </div>
              <div className="entrega-item">
                <span>Tempo médio</span>
                <span>20-30 min</span>
              </div>
              <div className="entrega-item">
                <span>Carrinho fixo</span>
                <span>Esquina da rua</span>
              </div>
              <div className="destaque">
                🛵 Entregamos na Vila e bairros próximos!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contato">
        <div className="container">
          <h2>Fale com o Zé 📱</h2>
          
          <div className="contato-grid">
            <div className="contato-info">
              <h3>🌭 Cachorro do Zé</h3>
              
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>(11) 98765-4321</p>
                  <small>Pedidos e informações</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📍</span>
                <div>
                  <strong>Localização</strong>
                  <p>Esquina da Rua das Acácias</p>
                  <p>Com Rua dos Ipês</p>
                  <small>Vila Progresso - São Paulo/SP</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>🕐</span>
                <div>
                  <strong>Horário de Pico</strong>
                  <p>18h às 21h (mais movimento)</p>
                  <small>Para entrega mais rápida, peça fora desse horário</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>💰</span>
                <div>
                  <strong>Formas de Pagamento</strong>
                  <p>PIX, Dinheiro e Cartão</p>
                  <small>PIX: chave do telefone (11) 98765-4321</small>
                </div>
              </div>
            </div>
            
            <div className="contato-form">
              <h3>📍 Como Encontrar</h3>
              
              <div className="endereco-completo">
                <p><strong>🚌 Transporte:</strong></p>
                <p>• Ônibus: Linhas 456A, 789B</p>
                <p>• Ponto: Rua das Acácias (50m)</p>
                <p>• Metrô: Estação Vila Progresso (10 min a pé)</p>
                
                <p><strong>🚗 De Carro:</strong></p>
                <p>• Estacionamento na rua (gratuito)</p>
                <p>• Rua tranquila e segura</p>
                <p>• Fácil acesso e localização</p>
                
                <p><strong>🎯 Referências:</strong></p>
                <p>• Em frente à padaria São José</p>
                <p>• Próximo ao posto Shell</p>
                <p>• Carrinho verde e amarelo</p>
                
                <div className="tradição">
                  <p><strong>🏆 Tradicional da esquina há 29 anos!</strong></p>
                  <p>Todo mundo da região conhece o Cachorro do Zé. Se perder, é só perguntar!</p>
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
            <span>🛒 Pedido ({carrinho.reduce((sum, item) => sum + item.quantidade, 0)})</span>
            <button className="limpar-carrinho" onClick={limparCarrinho} title="Limpar carrinho">
              🗑️
            </button>
          </div>
          
          <div className="carrinho-itens">
            {carrinho.slice(0, 3).map(item => (
              <div key={item.id} className="carrinho-item">
                <div>
                  <span>{item.emoji} {item.nome}</span>
                  {item.isCombo && <span className="item-combo">(Combo)</span>}
                </div>
                <div className="item-controls">
                  <div className="quantidade-controls">
                    <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}>−</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}>+</button>
                  </div>
                  <span className="item-preco">R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                  <button onClick={() => removerDoCarrinho(item.id)} className="remover-item">❌</button>
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
            🌭 Fazer Pedido
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🌭 Cachorro do Zé</h4>
              <p>Tradição e sabor há 29 anos na mesma esquina!</p>
              <p>O melhor cachorro quente da Vila Progresso.</p>
            </div>
            
            <div className="footer-section">
              <h4>⏰ Funcionamento</h4>
              <ul>
                <li>Segunda a Quinta: 16h-23h</li>
                <li>Sexta e Sábado: 16h-01h</li>
                <li>Domingo: 16h-22h</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>📞 Contato</h4>
              <ul>
                <li><a href="#">(11) 98765-4321</a></li>
                <li>Esquina das Acácias c/ Ipês</li>
                <li>Vila Progresso - São Paulo/SP</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>🎯 Especialidades</h4>
              <ul>
                <li>Cachorro quente tradicional</li>
                <li>Molhos caseiros</li>
                <li>Atendimento familiar</li>
                <li>Preços populares</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Cachorro do Zé. Todos os direitos reservados.</p>
            <p>Tradição familiar desde 1995 | Desenvolvido por Fábrica de Sites</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/5511987654321" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span>💬</span>
        <span className="whatsapp-text">Fale com o Zé!</span>
      </a>
    </div>
  );
};

export default CachorroQuente;