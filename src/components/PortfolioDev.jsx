import React, { useState, useEffect } from 'react';
import '../styles/portfoliodev.css';

const PortfolioDev = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-commerce SaaS Platform",
      description: "Plataforma completa de e-commerce com React, Node.js e MongoDB. Sistema de pagamentos integrado, dashboard administrativo e análise de vendas em tempo real.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      github: "https://github.com/dev/ecommerce-saas",
      live: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management Mobile App",
      description: "Aplicativo mobile para gestão de tarefas com React Native. Sincronização offline, notificações push e colaboração em equipe.",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com/dev/task-manager",
      live: "https://taskapp-demo.netlify.app"
    },
    {
      id: 3,
      title: "AI Data Analytics Dashboard",
      description: "Dashboard de análise de dados com inteligência artificial. Visualizações interativas, relatórios automatizados e previsões usando Machine Learning.",
      tech: ["Python", "Flask", "TensorFlow", "D3.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/dev/ai-dashboard",
      live: "https://ai-analytics-demo.herokuapp.com"
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description: "Sistema de votação descentralizado usando blockchain. Smart contracts com Solidity, interface web3 e segurança avançada.",
      tech: ["Solidity", "Web3.js", "Ethereum", "React", "Metamask"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      github: "https://github.com/dev/blockchain-voting",
      live: "https://vote-chain.vercel.app"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "C#", "Express", "Django"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
    { category: "DevOps", items: ["Docker", "AWS", "Azure", "CI/CD", "Kubernetes", "Git"] },
    { category: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { category: "Blockchain", items: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"] }
  ];

  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      period: "2023 - Presente",
      description: "Lidero equipe de 5 desenvolvedores em projetos enterprise. Responsável por arquitetura de sistemas e mentoria técnica.",
      achievements: ["40% aumento na performance", "Reduziu bugs em 60%", "Implementou CI/CD"]
    },
    {
      company: "StartupTech",
      position: "Full Stack Developer",
      period: "2022 - 2023",
      description: "Desenvolvimento de MVP e escalonamento de aplicações. Trabalho direto com founders e product managers.",
      achievements: ["MVP entregue em 3 meses", "1M+ usuários ativos", "Captou R$ 5M investimento"]
    },
    {
      company: "Freelancer",
      position: "Desenvolvedor Autônomo",
      period: "2020 - 2022",
      description: "Desenvolvimento de soluções personalizadas para diversos clientes. Foco em e-commerce e sistemas web.",
      achievements: ["50+ projetos entregues", "100% satisfação cliente", "ROI médio de 300%"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  useEffect(() => {
    const timer = setTimeout(() => setSkillsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-dev">
      {/* Header/Hero Section */}
      <header className="dev-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="dev-name">
              <span className="typing-effect">Rafael Santos</span>
            </h1>
            <h2 className="dev-title">Full Stack Developer & Tech Lead</h2>
            <p className="dev-description">
              Transformo ideias em soluções digitais inovadoras. Especialista em React, Node.js e arquitetura de sistemas escaláveis.
              <strong> +5 anos de experiência</strong> criando produtos que impactam milhões de usuários.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projetos</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Clientes</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Anos</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <i className="fas fa-paper-plane"></i>
                Vamos Conversar
              </a>
              <a href="#projects" className="btn-secondary">
                <i className="fas fa-code"></i>
                Ver Projetos
              </a>
              <a href="https://github.com/rafaelsantos" target="_blank" rel="noopener noreferrer" className="btn-github">
                <i className="fab fa-github"></i>
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-animation">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="property">name:</span> <span className="string">"Rafael Santos"</span>,
              </div>
              <div className="code-line indent">
                <span className="property">skills:</span> [<span className="string">"React"</span>, <span className="string">"Node.js"</span>],
              </div>
              <div className="code-line indent">
                <span className="property">passion:</span> <span className="string">"Building Amazing Apps"</span>
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Tecnologias</h2>
          <p className="section-subtitle">Domínio completo do stack moderno de desenvolvimento</p>
          <div className={`skills-grid ${skillsVisible ? 'visible' : ''}`}>
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} className="skill-category" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="skill-category-title">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-subtitle">Soluções que transformaram negócios e vidas</p>
          
          <div className="featured-project">
            <div className="project-content">
              <div className="project-info">
                <span className="project-featured">🌟 Projeto Destaque</span>
                <h3 className="project-title">{projects[currentProject].title}</h3>
                <p className="project-description">{projects[currentProject].description}</p>
                <div className="project-tech">
                  {projects[currentProject].tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={projects[currentProject].live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                    Ver Demo
                  </a>
                  <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i>
                    Código
                  </a>
                </div>
              </div>
              <div className="project-visual">
                <img src={projects[currentProject].image} alt={projects[currentProject].title} />
                <div className="project-overlay">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-grid">
            {projects.slice(1).map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Experiência Profissional</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3 className="experience-position">{exp.position}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <span key={i} className="achievement-tag">✓ {achievement}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Vamos Trabalhar Juntos?</h2>
          <p className="section-subtitle">Sempre aberto para novos desafios e oportunidades</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Entre em Contato</h3>
              <div className="contact-methods">
                <a href="mailto:rafael@devportfolio.com" className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <span>rafael@devportfolio.com</span>
                </a>
                <a href="https://linkedin.com/in/rafaelsantos" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <i className="fab fa-linkedin"></i>
                  <span>linkedin.com/in/rafaelsantos</span>
                </a>
                <a href="https://github.com/rafaelsantos" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <i className="fab fa-github"></i>
                  <span>github.com/rafaelsantos</span>
                </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <i className="fab fa-whatsapp"></i>
                  <span>(11) 99999-9999</span>
                </a>
              </div>
            </div>
            
            <div className="contact-cta">
              <h3>Pronto para o próximo projeto?</h3>
              <p>Especialista em transformar ideias em realidade digital. Vamos criar algo incrível juntos!</p>
              <a href="https://wa.me/5511999999999?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn-primary">
                <i className="fab fa-whatsapp"></i>
                Iniciar Conversa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dev-footer">
        <div className="container">
          <p>&copy; 2025 Rafael Santos. Desenvolvido com ❤️ e muito ☕</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioDev;