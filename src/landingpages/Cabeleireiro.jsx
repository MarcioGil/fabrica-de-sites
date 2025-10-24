import React, { useState } from 'react';
import './cabeleireiro.css';

function Cabeleireiro() {
  const [selectedService, setSelectedService] = useState('todos');
  const [agendamentoModal, setAgendamentoModal] = useState(false);

  const servicos = [
    {
      id: 1,
      nome: "Corte Feminino",
      preco: 45.00,
      duracao: "45 min",
      categoria: "cortes",
      emoji: "✂️",
      descricao: "Corte moderno adaptado ao seu rosto"
    },
    {
      id: 2,
      nome: "Escova Modeladora",
      preco: 30.00,
      duracao: "40 min",
      categoria: "escova",
      emoji: "💨",
      descricao: "Escova profissional com modelagem"
    },
    {
      id: 3,
      nome: "Coloração Completa",
      preco: 80.00,
      duracao: "2h",
      categoria: "coloracao",
      emoji: "🎨",
      descricao: "Mudança completa de cor com produtos premium"
    },
    {
      id: 4,
      nome: "Corte Masculino",
      preco: 25.00,
      duracao: "30 min",
      categoria: "cortes",
      emoji: "👨‍🦱",
      descricao: "Corte masculino moderno e estiloso"
    },
    {
      id: 5,
      nome: "Luzes/Mechas",
      preco: 120.00,
      duracao: "3h",
      categoria: "coloracao",
      emoji: "⭐",
      descricao: "Mechas e luzes para realçar sua beleza"
    },
    {
      id: 6,
      nome: "Hidratação",
      preco: 35.00,
      duracao: "50 min",
      categoria: "tratamentos",
      emoji: "💧",
      descricao: "Tratamento hidratante para cabelos ressecados"
    },
    {
      id: 7,
      nome: "Progressiva",
      preco: 150.00,
      duracao: "4h",
      categoria: "tratamentos",
      emoji: "✨",
      descricao: "Alisamento natural e duradouro"
    },
    {
      id: 8,
      nome: "Penteado Social",
      preco: 60.00,
      duracao: "1h",
      categoria: "penteados",
      emoji: "👑",
      descricao: "Penteado elegante para ocasiões especiais"
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos Serviços', emoji: '💇‍♀️' },
    { id: 'cortes', nome: 'Cortes', emoji: '✂️' },
    { id: 'coloracao', nome: 'Coloração', emoji: '🎨' },
    { id: 'tratamentos', nome: 'Tratamentos', emoji: '💧' },
    { id: 'escova', nome: 'Escova', emoji: '💨' },
    { id: 'penteados', nome: 'Penteados', emoji: '👑' }
  ];

  const servicosFiltrados = selectedService === 'todos' 
    ? servicos 
    : servicos.filter(servico => servico.categoria === selectedService);

  const abrirAgendamento = (servico) => {
    setAgendamentoModal(true);
    // Aqui você integraria com um sistema de agendamento
  };

  return (
    <div className="cabeleireiro">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">💇‍♀️</span>
            <h1>Studio Beleza</h1>
          </div>
          
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Galeria</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <button className="btn-agendar" onClick={() => setAgendamentoModal(true)}>
            Agendar Horário
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h2>Transforme seu visual conosco</h2>
          <p>Há mais de 15 anos cuidando da sua beleza com carinho, técnica e os melhores produtos do mercado</p>
          <div className="hero-stats">
            <div className="stat">
              <span>👩‍🎨</span>
              <p>Profissionais<br/>Qualificadas</p>
            </div>
            <div className="stat">
              <span>🏆</span>
              <p>Produtos<br/>Premium</p>
            </div>
            <div className="stat">
              <span>⏰</span>
              <p>Horário<br/>Flexível</p>
            </div>
            <div className="stat">
              <span>💯</span>
              <p>Satisfação<br/>Garantida</p>
            </div>
          </div>
          <button className="cta-button" onClick={() => setAgendamentoModal(true)}>
            Agendar Agora
          </button>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="servicos">
        <div className="container">
          <h2>Nossos Serviços</h2>
          
          {/* Filtros */}
          <div className="filtros">
            {categorias.map(categoria => (
              <button
                key={categoria.id}
                className={`filtro ${selectedService === categoria.id ? 'ativo' : ''}`}
                onClick={() => setSelectedService(categoria.id)}
              >
                <span>{categoria.emoji}</span>
                {categoria.nome}
              </button>
            ))}
          </div>

          {/* Grid de Serviços */}
          <div className="servicos-grid">
            {servicosFiltrados.map(servico => (
              <div key={servico.id} className="servico-card">
                <div className="servico-header">
                  <span className="emoji-servico">{servico.emoji}</span>
                  <div className="servico-info">
                    <h3>{servico.nome}</h3>
                    <p>{servico.descricao}</p>
                  </div>
                </div>
                <div className="servico-details">
                  <div className="preco-duracao">
                    <div className="preco">R$ {servico.preco.toFixed(2)}</div>
                    <div className="duracao">⏱️ {servico.duracao}</div>
                  </div>
                  <button 
                    className="btn-agendar-servico"
                    onClick={() => abrirAgendamento(servico)}
                  >
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="galeria">
        <div className="container">
          <h2>Nossos Trabalhos</h2>
          <div className="galeria-grid">
            <div className="trabalho">
              <div className="trabalho-img">💇‍♀️</div>
              <div className="trabalho-info">
                <h4>Corte Moderno</h4>
                <p>Transformação completa com corte e coloração</p>
              </div>
            </div>
            <div className="trabalho">
              <div className="trabalho-img">🌈</div>
              <div className="trabalho-info">
                <h4>Coloração Vibrante</h4>
                <p>Mechas coloridas para um visual único</p>
              </div>
            </div>
            <div className="trabalho">
              <div className="trabalho-img">👑</div>
              <div className="trabalho-info">
                <h4>Penteado de Festa</h4>
                <p>Elegância para ocasiões especiais</p>
              </div>
            </div>
            <div className="trabalho">
              <div className="trabalho-img">✨</div>
              <div className="trabalho-info">
                <h4>Tratamento Capilar</h4>
                <p>Cabelos saudáveis e hidratados</p>
              </div>
            </div>
            <div className="trabalho">
              <div className="trabalho-img">💫</div>
              <div className="trabalho-info">
                <h4>Luzes Naturais</h4>
                <p>Iluminação sutil e natural</p>
              </div>
            </div>
            <div className="trabalho">
              <div className="trabalho-img">👨‍🦱</div>
              <div className="trabalho-info">
                <h4>Corte Masculino</h4>
                <p>Estilo moderno e bem delineado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <h2>Conheça nossa história</h2>
              <p>O Studio Beleza nasceu do sonho de transformar a autoestima das pessoas através da beleza. Há mais de 15 anos, nossa equipe de profissionais qualificadas trabalha com dedicação para oferecer os melhores serviços em um ambiente acolhedor e moderno.</p>
              <p>Utilizamos apenas produtos das melhores marcas do mercado e estamos sempre atualizadas com as últimas tendências e técnicas do mundo da beleza.</p>
              <div className="diferenciais">
                <div className="diferencial">
                  <span>🎓</span>
                  <div>
                    <strong>Equipe Qualificada</strong>
                    <p>Profissionais certificadas e em constante atualização</p>
                  </div>
                </div>
                <div className="diferencial">
                  <span>🏢</span>
                  <div>
                    <strong>Ambiente Moderno</strong>
                    <p>Espaço confortável e equipamentos de última geração</p>
                  </div>
                </div>
                <div className="diferencial">
                  <span>💎</span>
                  <div>
                    <strong>Produtos Premium</strong>
                    <p>Marcas reconhecidas mundialmente pela qualidade</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="equipe">
              <h3>Nossa Equipe</h3>
              <div className="profissionais">
                <div className="profissional">
                  <span className="avatar">👩‍🦰</span>
                  <div>
                    <strong>Ana Silva</strong>
                    <span>Proprietária e Hair Stylist</span>
                  </div>
                </div>
                <div className="profissional">
                  <span className="avatar">👩‍🦱</span>
                  <div>
                    <strong>Carla Santos</strong>
                    <span>Colorista Especializada</span>
                  </div>
                </div>
                <div className="profissional">
                  <span className="avatar">👩‍🦳</span>
                  <div>
                    <strong>Mariana Costa</strong>
                    <span>Especialista em Tratamentos</span>
                  </div>
                </div>
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
              <p>"Simplesmente perfeito! A Ana fez exatamente o que eu queria. Saí de lá me sentindo uma nova pessoa!"</p>
              <div className="cliente">
                <span className="avatar">👩</span>
                <div>
                  <strong>Juliana Oliveira</strong>
                  <span>Cliente há 3 anos</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Melhor salão da região! Profissionais competentes e um atendimento excepcional. Super recomendo!"</p>
              <div className="cliente">
                <span className="avatar">👱‍♀️</span>
                <div>
                  <strong>Patricia Lima</strong>
                  <span>Cliente há 5 anos</span>
                </div>
              </div>
            </div>
            <div className="depoimento">
              <div className="estrelas">⭐⭐⭐⭐⭐</div>
              <p>"Sempre saio satisfeita! O ambiente é super agradável e os preços são justos. Já virei cliente fiel!"</p>
              <div className="cliente">
                <span className="avatar">🧑‍🦱</span>
                <div>
                  <strong>Fernanda Rocha</strong>
                  <span>Cliente há 2 anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horários e Localização */}
      <section className="horario-local">
        <div className="container">
          <div className="info-grid">
            <div className="horario">
              <h3>🕐 Horário de Funcionamento</h3>
              <div className="horario-item">
                <span>Segunda:</span>
                <span>Fechado</span>
              </div>
              <div className="horario-item">
                <span>Terça a Sexta:</span>
                <span>9h às 19h</span>
              </div>
              <div className="horario-item">
                <span>Sábado:</span>
                <span>8h às 17h</span>
              </div>
              <div className="horario-item">
                <span>Domingo:</span>
                <span>9h às 15h</span>
              </div>
              <p className="destaque">⚠️ Atendimento por agendamento</p>
            </div>
            
            <div className="localizacao">
              <h3>📍 Como Chegar</h3>
              <p><strong>Endereço:</strong><br/>
              Rua da Beleza, 789<br/>
              Centro - São Paulo/SP</p>
              <p><strong>Referência:</strong><br/>
              Próximo ao Shopping Central</p>
              <p><strong>Estacionamento:</strong><br/>
              Conveniado no shopping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contato">
        <div className="container">
          <h2>Agende seu Horário</h2>
          <div className="contato-grid">
            <div className="contato-info">
              <h3>Formas de Agendamento</h3>
              <div className="info-item">
                <span>📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>(11) 9 7777-6666</p>
                  <small>Resposta rápida garantida!</small>
                </div>
              </div>
              <div className="info-item">
                <span>📞</span>
                <div>
                  <strong>Telefone</strong>
                  <p>(11) 2222-5555</p>
                  <small>Atendimento direto do salão</small>
                </div>
              </div>
              <div className="info-item">
                <span>💳</span>
                <div>
                  <strong>Formas de Pagamento</strong>
                  <p>Dinheiro, Cartão, PIX</p>
                  <small>Parcelamos em até 3x sem juros</small>
                </div>
              </div>
            </div>
            
            <div className="contato-form">
              <h3>Ou preencha o formulário</h3>
              <form>
                <input type="text" placeholder="Seu nome completo" required />
                <input type="tel" placeholder="Telefone com WhatsApp" required />
                <select required>
                  <option value="">Selecione o serviço desejado</option>
                  {servicos.map(servico => (
                    <option key={servico.id} value={servico.nome}>
                      {servico.nome} - R$ {servico.preco.toFixed(2)}
                    </option>
                  ))}
                </select>
                <input type="date" required />
                <select required>
                  <option value="">Horário preferido</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
                <textarea placeholder="Observações (opcional)..." rows="3"></textarea>
                <button type="submit" className="btn-enviar">Agendar Horário</button>
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
              <h4>💇‍♀️ Studio Beleza</h4>
              <p>Transformando vidas através da beleza há mais de 15 anos.</p>
              <div className="social-links">
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="WhatsApp">💬</a>
                <a href="#" aria-label="TikTok">🎵</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Serviços Populares</h4>
              <ul>
                <li><a href="#servicos">✂️ Cortes</a></li>
                <li><a href="#servicos">🎨 Coloração</a></li>
                <li><a href="#servicos">💧 Tratamentos</a></li>
                <li><a href="#servicos">👑 Penteados</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Atendimento</h4>
              <ul>
                <li><a href="#contato">Agendar Horário</a></li>
                <li><a href="#">Política de Cancelamento</a></li>
                <li><a href="#">Produtos Utilizados</a></li>
                <li><a href="#">Cuidados Pós-Procedimento</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contato</h4>
              <p>📱 (11) 9 7777-6666</p>
              <p>📞 (11) 2222-5555</p>
              <p>📍 Rua da Beleza, 789 - Centro</p>
              <p>🕐 Ter-Sex: 9h-19h | Sáb: 8h-17h</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Studio Beleza. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ pela Fábrica de Sites</p>
          </div>
        </div>
      </footer>

      {/* Modal de Agendamento */}
      {agendamentoModal && (
        <div className="modal-overlay" onClick={() => setAgendamentoModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Agendar Horário</h3>
              <button onClick={() => setAgendamentoModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <p>📱 <strong>WhatsApp:</strong> (11) 9 7777-6666</p>
              <p>📞 <strong>Telefone:</strong> (11) 2222-5555</p>
              <br/>
              <p>Entre em contato conosco pelos canais acima para agendar seu horário!</p>
              <br/>
              <div className="modal-buttons">
                <a 
                  href="https://wa.me/5511977776666" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  💬 Chamar no WhatsApp
                </a>
                <button onClick={() => setAgendamentoModal(false)} className="btn-fechar">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5511977776666" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <span>💬</span>
        <span className="whatsapp-text">Agendar</span>
      </a>
    </div>
  );
}

export default Cabeleireiro;