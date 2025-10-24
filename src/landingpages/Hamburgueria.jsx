import React, { useState, useEffect } from 'react';
import './hamburgueria.css';

const Hamburgueria = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [valorTotal, setValorTotal] = useState(0);

  const produtos = [
    {
      id: 1,
      nome: "X-Burguer Clássico",
      categoria: "hamburguer",
      preco: 18.90,
      emoji: "🍔",
      descricao: "Hambúrguer, queijo, alface, tomate e maionese",
      ingredientes: ["Pão brioche", "Hambúrguer 150g", "Queijo cheddar", "Alface", "Tomate", "Maionese da casa"],
      popular: true
    },
    {
      id: 2,
      nome: "X-Bacon Especial",
      categoria: "hamburguer",
      preco: 22.90,
      emoji: "🥓",
      descricao: "Hambúrguer com bacon crocante e molho especial",
      ingredientes: ["Pão brioche", "Hambúrguer 150g", "Bacon", "Queijo", "Alface", "Tomate", "Molho especial"],
      popular: true
    },
    {
      id: 3,
      nome: "X-Frango Grelhado",
      categoria: "hamburguer",
      preco: 19.90,
      emoji: "🐔",
      descricao: "Frango grelhado temperado com ervas",
      ingredientes: ["Pão integral", "Frango grelhado 120g", "Queijo branco", "Rúcula", "Tomate cereja", "Maionese light"]
    },
    {
      id: 4,
      nome: "X-Tudo da Casa",
      categoria: "premium",
      preco: 28.90,
      emoji: "👑",
      descricao: "O mais completo! Hambúrguer duplo com tudo",
      ingredientes: ["Pão especial", "2 Hambúrgueres 150g", "Bacon", "Ovo", "Queijo", "Presunto", "Salada completa"],
      premium: true
    },
    {
      id: 5,
      nome: "Vegetariano",
      categoria: "especial",
      preco: 17.90,
      emoji: "🌱",
      descricao: "Hambúrguer de grão-de-bico e quinoa",
      ingredientes: ["Pão integral", "Hambúrguer vegetal", "Queijo vegano", "Rúcula", "Tomate", "Cebola roxa", "Molho tahine"]
    },
    {
      id: 6,
      nome: "Batata Frita Grande",
      categoria: "acompanhamento",
      preco: 12.90,
      emoji: "🍟",
      descricao: "Batata rústica crocante temperada",
      ingredientes: ["Batata especial", "Tempero da casa", "Sal marinho"]
    },
    {
      id: 7,
      nome: "Onion Rings",
      categoria: "acompanhamento",
      preco: 14.90,
      emoji: "🧅",
      descricao: "Anéis de cebola empanados e dourados",
      ingredientes: ["Cebola doce", "Farinha especial", "Temperos", "Molho barbecue"]
    },
    {
      id: 8,
      nome: "Nuggets (10 unid)",
      categoria: "acompanhamento",
      preco: 16.90,
      emoji: "🍗",
      descricao: "Nuggets caseiros de frango",
      ingredientes: ["Peito de frango", "Empanamento caseiro", "Molho honey mustard"]
    },
    {
      id: 9,
      nome: "Coca-Cola 350ml",
      categoria: "bebida",
      preco: 5.90,
      emoji: "🥤",
      descricao: "Refrigerante gelado",
      ingredientes: ["Coca-Cola lata 350ml"]
    },
    {
      id: 10,
      nome: "Suco Natural 500ml",
      categoria: "bebida",
      preco: 7.90,
      emoji: "🧃",
      descricao: "Sucos naturais da fruta",
      ingredientes: ["Frutas frescas", "Água", "Açúcar opcional"],
      sabores: ["Laranja", "Acerola", "Maracujá", "Limão"]
    },
    {
      id: 11,
      nome: "Milkshake 400ml",
      categoria: "bebida",
      preco: 12.90,
      emoji: "🥤",
      descricao: "Milkshake cremoso artesanal",
      ingredientes: ["Sorvete premium", "Leite", "Calda especial"],
      sabores: ["Chocolate", "Morango", "Ovomaltine", "Doce de Leite"]
    },
    {
      id: 12,
      nome: "Sorvete 2 Bolas",
      categoria: "sobremesa",
      preco: 8.90,
      emoji: "🍦",
      descricao: "Sorvete artesanal com cobertura",
      ingredientes: ["Sorvete artesanal", "Cobertura", "Granulado"],
      sabores: ["Chocolate", "Baunilha", "Morango", "Flocos"]
    }
  ];

  const combos = [
    {
      id: 'combo1',
      nome: "Combo Clássico",
      preco: 24.90,
      economia: 4.80,
      emoji: "🎯",
      itens: ["X-Burguer Clássico", "Batata Frita", "Refrigerante"],
      descricao: "O combo mais pedido da casa!"
    },
    {
      id: 'combo2',
      nome: "Combo Bacon",
      preco: 29.90,
      economia: 5.90,
      emoji: "🥓",
      itens: ["X-Bacon Especial", "Batata Frita", "Refrigerante"],
      descricao: "Para quem ama bacon!"
    },
    {
      id: 'combo3',
      nome: "Combo Família",
      preco: 49.90,
      economia: 12.80,
      emoji: "👨‍👩‍👧‍👦",
      itens: ["2 X-Burguers", "2 Batatas Fritas", "2 Refrigerantes"],
      descricao: "Perfeito para compartilhar!"
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

    let mensagem = "🍔 *PEDIDO - BURGUER MANIA* 🍔\n\n";
    
    carrinho.forEach((item, index) => {
      mensagem += `${index + 1}. ${item.emoji} ${item.nome}\n`;
      mensagem += `   Quantidade: ${item.quantidade}\n`;
      mensagem += `   Preço unit: R$ ${item.preco.toFixed(2)}\n`;
      mensagem += `   Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}\n\n`;
    });
    
    mensagem += `💰 *TOTAL: R$ ${valorTotal.toFixed(2)}*\n\n`;
    mensagem += "📍 Favor informar endereço para entrega\n";
    mensagem += "🕐 Tempo estimado: 45-60 min\n";
    mensagem += "💳 Aceitamos PIX, cartão e dinheiro";

    const telefone = "5511998765432";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const filtrarProdutos = () => {
    if (filtroAtivo === 'todos') return produtos;
    return produtos.filter(produto => produto.categoria === filtroAtivo);
  };

  return (
    <div className="hamburgueria">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🍔</span>
            <h1>Burguer Mania</h1>
          </div>
          <nav className="nav">
            <a href="#cardapio">Cardápio</a>
            <a href="#combos">Combos</a>
            <a href="#sobre">Sobre</a>
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
            <h2>Os Melhores Hambúrgueres da Região! 🍔</h2>
            <p>Hambúrgueres artesanais feitos com ingredientes frescos e muito amor. Sabor que conquista desde a primeira mordida!</p>
            
            <div className="hero-features">
              <div className="feature">
                <span>🥩</span>
                <p><strong>Carne Premium</strong><br/>180g de pura suculência</p>
              </div>
              <div className="feature">
                <span>🔥</span>
                <p><strong>Grelhados na Hora</strong><br/>Sempre fresquinho</p>
              </div>
              <div className="feature">
                <span>🚚</span>
                <p><strong>Entrega Rápida</strong><br/>45-60 minutos</p>
              </div>
              <div className="feature">
                <span>💰</span>
                <p><strong>Preço Justo</strong><br/>Qualidade que cabe no bolso</p>
              </div>
            </div>

            <div className="hero-actions">
              <button className="cta-button primary" onClick={() => document.getElementById('cardapio').scrollIntoView()}>
                Ver Cardápio 🍔
              </button>
              <button className="cta-button secondary" onClick={() => document.getElementById('combos').scrollIntoView()}>
                Combos 🎯
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Combos em Destaque */}
      <section id="combos" className="combos-destaque">
        <div className="container">
          <h2>Combos Especiais 🎯</h2>
          <p className="combos-desc">Economize pedindo nossos combos!</p>
          
          <div className="combos-grid">
            {combos.map(combo => (
              <div key={combo.id} className="combo-card">
                <div className="combo-header">
                  <span className="combo-emoji">{combo.emoji}</span>
                  <div className="economia-badge">
                    Economia R$ {combo.economia.toFixed(2)}
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
                      Adicionar Combo 🛒
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
          <h2>Nosso Cardápio 🍔</h2>
          
          <div className="filtros">
            <button 
              className={`filtro ${filtroAtivo === 'todos' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('todos')}
            >
              🍔 Todos
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'hamburguer' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('hamburguer')}
            >
              🍔 Hambúrgueres
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'premium' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('premium')}
            >
              👑 Premium
            </button>
            <button 
              className={`filtro ${filtroAtivo === 'especial' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('especial')}
            >
              🌱 Especiais
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
              🍦 Sobremesas
            </button>
          </div>

          <div className="produtos-grid">
            {filtrarProdutos().map(produto => (
              <div key={produto.id} className="produto-card">
                <div className="produto-header">
                  <span className="emoji-produto">{produto.emoji}</span>
                  {produto.popular && <div className="produto-badge popular">MAIS PEDIDO</div>}
                  {produto.premium && <div className="produto-badge premium">PREMIUM</div>}
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
                      <strong>🎯 Sabores disponíveis:</strong>
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
              <h2>Nossa História 🏆</h2>
              <p>
                O <em>Burguer Mania</em> nasceu do sonho do <em>Seu Antônio</em> e da <em>Dona Maria</em> 
                em 2018. Começamos com uma simples chapa na garagem, servindo os vizinhos da 
                Vila Esperança.
              </p>
              <p>
                Hoje somos referência em hambúrgueres artesanais na região! Nosso segredo? 
                <em>Ingredientes frescos</em>, <em>receitas familiares</em> e muito <em>carinho</em> 
                em cada hambúrguer que fazemos.
              </p>
              <p>
                Cada carne é selecionada pessoalmente, cada pão é assado no dia e cada molho 
                é preparado com nossa receita secreta da família. <em>Aqui não tem frescura, 
                só sabor de verdade!</em>
              </p>

              <div className="certificacoes">
                <div className="certificacao">
                  <span>🥩</span>
                  <div>
                    <strong>Carne Premium</strong>
                    <p>Fornecedores selecionados com certificação</p>
                  </div>
                </div>
                
                <div className="certificacao">
                  <span>🧪</span>
                  <div>
                    <strong>Higiene Total</strong>
                    <p>Vigilância sanitária aprovada - Nota A</p>
                  </div>
                </div>
                
                <div className="certificacao">
                  <span>⭐</span>
                  <div>
                    <strong>5 Estrelas</strong>
                    <p>Avaliação média de 4.8 no Google</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="antonio-foto">
              <div className="foto-container">
                <span>👨‍🍳</span>
                <p>
                  <strong>Seu Antônio & Dona Maria</strong><br/>
                  <em>"Cada hambúrguer é feito com amor"</em><br/><br/>
                  Fundadores do Burguer Mania. 
                  Especialistas em sabor caseiro há mais de 20 anos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos">
        <div className="container">
          <h2>O que falam do nosso burguer 🗣️</h2>
          
          <div className="depoimentos-grid">
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Melhor hambúrguer da região! A carne é suculenta e o preço é justo. Virei cliente fiel!"</p>
              <div className="cliente">
                <span className="avatar">👨</span>
                <div>
                  <strong>João Silva</strong>
                  <span>Cliente há 3 anos</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Entrega rápida e o hambúrguer chega quentinho! Meus filhos adoram o X-Bacon."</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Ana Costa</strong>
                  <span>Mãe de família</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Trabalho no bairro e sempre peço aqui. Qualidade excelente e atendimento nota 10!"</p>
              <div className="cliente">
                <span className="avatar">🔧</span>
                <div>
                  <strong>Carlos Mecânico</strong>
                  <span>Trabalhador local</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Hambúrguer vegetariano delicioso! Difícil encontrar opção tão boa por esse preço."</p>
              <div className="cliente">
                <span className="avatar">🌱</span>
                <div>
                  <strong>Mariana Verde</strong>
                  <span>Vegetariana</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Atendimento familiar, ambiente acolhedor. Parece que estou comendo na casa da vó!"</p>
              <div className="cliente">
                <span className="avatar">👵</span>
                <div>
                  <strong>Dona Rosa</strong>
                  <span>Vizinha querida</span>
                </div>
              </div>
            </div>
            
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Melhor custo-benefício da cidade! Hambúrguer grande, saboroso e preço justo."</p>
              <div className="cliente">
                <span className="avatar">🎓</span>
                <div>
                  <strong>Pedro Estudante</strong>
                  <span>Universitário</span>
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
                <span>18h às 23h</span>
              </div>
              <div className="horario-item">
                <span>Sexta e Sábado</span>
                <span>18h às 00h</span>
              </div>
              <div className="horario-item">
                <span>Domingo</span>
                <span>18h às 22h</span>
              </div>
              <div className="destaque">
                🎉 Funcionamos todos os dias! Seu lanche não pode esperar!
              </div>
            </div>
            
            <div className="entrega">
              <h3>🚚 Entrega e Retirada</h3>
              <div className="entrega-item">
                <span>Entrega grátis</span>
                <span>Acima de R$ 30</span>
              </div>
              <div className="entrega-item">
                <span>Taxa de entrega</span>
                <span>R$ 4,50</span>
              </div>
              <div className="entrega-item">
                <span>Tempo médio</span>
                <span>45-60 min</span>
              </div>
              <div className="entrega-item">
                <span>Retirada no local</span>
                <span>20-30 min</span>
              </div>
              <div className="destaque">
                🏍️ Entregamos em toda Vila Esperança e bairros próximos!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contato">
        <div className="container">
          <h2>Fale Conosco 📱</h2>
          
          <div className="contato-grid">
            <div className="contato-info">
              <h3>🍔 Burguer Mania</h3>
              
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp / Telefone</strong>
                  <p>(11) 99876-5432</p>
                  <small>Pedidos e informações</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📧</span>
                <div>
                  <strong>E-mail</strong>
                  <p>contato@burguermania.com.br</p>
                  <small>Sugestões e parcerias</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📍</span>
                <div>
                  <strong>Endereço</strong>
                  <p>Rua das Flores, 123</p>
                  <p>Vila Esperança - São Paulo/SP</p>
                  <small>CEP: 02345-678</small>
                </div>
              </div>
              
              <div className="info-item">
                <span>📷</span>
                <div>
                  <strong>Redes Sociais</strong>
                  <p>@burguermania</p>
                  <small>Instagram e Facebook</small>
                </div>
              </div>
            </div>
            
            <div className="contato-form">
              <h3>📍 Como Chegar</h3>
              
              <div className="endereco-completo">
                <p><strong>🚌 Transporte Público:</strong></p>
                <p>• Ônibus: Linhas 372A, 673M</p>
                <p>• Ponto: Rua das Flores (em frente)</p>
                <p>• Metrô mais próximo: Vila Madalena (15 min de ônibus)</p>
                
                <p><strong>🚗 De Carro:</strong></p>
                <p>• Estacionamento na rua (gratuito)</p>
                <p>• Fácil acesso pela Marginal Tietê</p>
                <p>• Rua tranquila, fácil de estacionar</p>
                
                <div className="pagamento">
                  <p><strong>💳 Formas de Pagamento:</strong></p>
                  <div className="pagamento-opcoes">
                    <span>PIX</span>
                    <span>Dinheiro</span>
                    <span>Cartão</span>
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
            <span>🛒 Carrinho ({carrinho.reduce((sum, item) => sum + item.quantidade, 0)})</span>
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
            🍔 Finalizar Pedido
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🍔 Burguer Mania</h4>
              <p>Os melhores hambúrgueres artesanais da Vila Esperança!</p>
              <p>Tradição familiar desde 2018.</p>
              <div className="social-links">
                <a href="#">📱</a>
                <a href="#">📷</a>
                <a href="#">👥</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>⏰ Horários</h4>
              <ul>
                <li>Segunda a Quinta: 18h-23h</li>
                <li>Sexta e Sábado: 18h-00h</li>
                <li>Domingo: 18h-22h</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>📞 Contato</h4>
              <ul>
                <li><a href="#">(11) 99876-5432</a></li>
                <li><a href="#">contato@burguermania.com.br</a></li>
                <li>Rua das Flores, 123</li>
                <li>Vila Esperança - São Paulo/SP</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>🎯 Especialidades</h4>
              <ul>
                <li>Hambúrgueres artesanais</li>
                <li>Combos econômicos</li>
                <li>Entrega rápida</li>
                <li>Preço justo</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Burguer Mania. Todos os direitos reservados.</p>
            <p>CNPJ: 23.456.789/0001-90 | Desenvolvido por Fábrica de Sites</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/5511998765432" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span>💬</span>
        <span className="whatsapp-text">Peça seu burguer!</span>
      </a>
    </div>
  );
};

export default Hamburgueria;