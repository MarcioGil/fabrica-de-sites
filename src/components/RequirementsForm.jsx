import React, { useState } from 'react';

const RequirementsForm = ({ onClose, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informações básicas
    nomeCliente: '',
    empresa: '',
    email: '',
    telefone: '',
    
    // Tipo de projeto
    tipoSite: '',
    prazo: '',
    orcamento: '',
    
    // Funcionalidades
    funcionalidades: [],
    designPreferencias: [],
    cores: '',
    
    // Conteúdo
    temConteudo: '',
    precisaTextos: false,
    precisaImagens: false,
    
    // Técnico
    temDominio: '',
    temHosting: '',
    integrações: [],
    
    // Objetivos
    objetivos: [],
    publicoAlvo: '',
    
    // Observações
    observações: ''
  });

  const tiposSite = [
    { id: 'institucional', label: 'Site Institucional', desc: 'Apresentação da empresa' },
    { id: 'ecommerce', label: 'E-commerce', desc: 'Loja virtual para vendas online' },
    { id: 'blog', label: 'Blog/Portal', desc: 'Conteúdo e artigos' },
    { id: 'landing', label: 'Landing Page', desc: 'Página de conversão específica' },
    { id: 'portfolio', label: 'Portfólio', desc: 'Showcase de trabalhos' },
    { id: 'app', label: 'Aplicação Web', desc: 'Sistema personalizado' }
  ];

  const funcionalidadesList = [
    'Formulário de Contato',
    'WhatsApp Integration',
    'Instagram Integration',
    'Newsletter',
    'Galeria de Fotos',
    'Depoimentos',
    'Blog/Notícias',
    'Mapa Interativo',
    'Carrinho de Compras',
    'Sistema de Pagamento',
    'Área do Cliente',
    'Agendamento Online',
    'Chat Online',
    'Integração Redes Sociais',
    'SEO Avançado',
    'Google Analytics',
    'Sistema de Buscas',
    'Múltiplos Idiomas',
    'Versão Mobile App'
  ];

  const designOptions = [
    'Moderno e Minimalista',
    'Clássico e Elegante',
    'Jovem e Vibrante',
    'Corporativo e Sério',
    'Criativo e Artístico',
    'Tecnológico e Futurista'
  ];

  const integracoesList = [
    'Google Maps',
    'Facebook Pixel',
    'Google Analytics',
    'Mailchimp',
    'Stripe/PayPal',
    'WhatsApp Business',
    'Instagram Feed',
    'Instagram Stories',
    'YouTube',
    'TikTok',
    'CRM (Hubspot, RD Station)',
    'ERP',
    'Estoque',
    'Correios (Frete)'
  ];

  const objetivosList = [
    'Aumentar Vendas',
    'Gerar Leads',
    'Fortalecer Marca',
    'Melhorar Atendimento',
    'Expandir Mercado',
    'Automatizar Processos',
    'Reduzir Custos',
    'Melhorar Comunicação'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    alert('Questionário enviado com sucesso! Entraremos em contato em breve.');
    onClose();
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="form-step">
            <h3>📋 Informações Básicas</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Nome Completo *</label>
                <input 
                  type="text" 
                  value={formData.nomeCliente}
                  onChange={(e) => handleInputChange('nomeCliente', e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Empresa/Organização *</label>
                <input 
                  type="text" 
                  value={formData.empresa}
                  onChange={(e) => handleInputChange('empresa', e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label>E-mail *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Telefone/WhatsApp *</label>
                <input 
                  type="tel" 
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                  required 
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-step">
            <h3>🎯 Tipo de Projeto</h3>
            <div className="radio-grid">
              {tiposSite.map(tipo => (
                <label key={tipo.id} className={`radio-card ${formData.tipoSite === tipo.id ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="tipoSite" 
                    value={tipo.id}
                    onChange={(e) => handleInputChange('tipoSite', e.target.value)}
                  />
                  <div className="radio-content">
                    <strong>{tipo.label}</strong>
                    <p>{tipo.desc}</p>
                  </div>
                </label>
              ))}
            </div>
            
            <div className="form-grid mt-30">
              <div className="form-group">
                <label>Prazo Desejado</label>
                <select value={formData.prazo} onChange={(e) => handleInputChange('prazo', e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="urgente">Urgente (1-2 semanas)</option>
                  <option value="rapido">Rápido (3-4 semanas)</option>
                  <option value="normal">Normal (1-2 meses)</option>
                  <option value="flexivel">Flexível (2+ meses)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Orçamento Estimado</label>
                <select value={formData.orcamento} onChange={(e) => handleInputChange('orcamento', e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="ate2k">Até R$ 2.000</option>
                  <option value="2k-5k">R$ 2.000 - R$ 5.000</option>
                  <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                  <option value="10k-20k">R$ 10.000 - R$ 20.000</option>
                  <option value="acima20k">Acima de R$ 20.000</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-step">
            <h3>⚙️ Funcionalidades Desejadas</h3>
            <p className="step-desc">Selecione todas as funcionalidades que gostaria no seu site:</p>
            <div className="checkbox-grid">
              {funcionalidadesList.map(func => (
                <label key={func} className={`checkbox-card ${formData.funcionalidades.includes(func) ? 'selected' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={formData.funcionalidades.includes(func)}
                    onChange={() => handleMultiSelect('funcionalidades', func)}
                  />
                  <span>{func}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="form-step">
            <h3>🎨 Design e Identidade Visual</h3>
            
            <div className="form-group">
              <label>Estilo de Design Preferido</label>
              <div className="checkbox-grid">
                {designOptions.map(design => (
                  <label key={design} className={`checkbox-card ${formData.designPreferencias.includes(design) ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={formData.designPreferencias.includes(design)}
                      onChange={() => handleMultiSelect('designPreferencias', design)}
                    />
                    <span>{design}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Cores Preferenciais</label>
              <input 
                type="text" 
                value={formData.cores}
                onChange={(e) => handleInputChange('cores', e.target.value)}
                placeholder="Ex: Azul e branco, tons terrosos, cores vibrantes..."
              />
            </div>

            <div className="form-group">
              <label>Você já tem conteúdo pronto? (textos, imagens)</label>
              <div className="radio-inline">
                <label>
                  <input 
                    type="radio" 
                    name="temConteudo" 
                    value="sim"
                    onChange={(e) => handleInputChange('temConteudo', e.target.value)}
                  />
                  Sim, tenho tudo
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="temConteudo" 
                    value="parcial"
                    onChange={(e) => handleInputChange('temConteudo', e.target.value)}
                  />
                  Tenho parte
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="temConteudo" 
                    value="nao"
                    onChange={(e) => handleInputChange('temConteudo', e.target.value)}
                  />
                  Não tenho
                </label>
              </div>
            </div>

            {(formData.temConteudo === 'parcial' || formData.temConteudo === 'nao') && (
              <div className="form-group">
                <label>Precisará de ajuda com:</label>
                <div className="checkbox-inline">
                  <label>
                    <input 
                      type="checkbox" 
                      checked={formData.precisaTextos}
                      onChange={(e) => handleInputChange('precisaTextos', e.target.checked)}
                    />
                    Criação de textos
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      checked={formData.precisaImagens}
                      onChange={(e) => handleInputChange('precisaImagens', e.target.checked)}
                    />
                    Imagens e fotografias
                  </label>
                </div>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="form-step">
            <h3>🔧 Aspectos Técnicos</h3>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Você já tem domínio?</label>
                <div className="radio-inline">
                  <label>
                    <input 
                      type="radio" 
                      name="temDominio" 
                      value="sim"
                      onChange={(e) => handleInputChange('temDominio', e.target.value)}
                    />
                    Sim
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="temDominio" 
                      value="nao"
                      onChange={(e) => handleInputChange('temDominio', e.target.value)}
                    />
                    Não
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="temDominio" 
                      value="preciso"
                      onChange={(e) => handleInputChange('temDominio', e.target.value)}
                    />
                    Preciso de ajuda
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Você já tem hospedagem?</label>
                <div className="radio-inline">
                  <label>
                    <input 
                      type="radio" 
                      name="temHosting" 
                      value="sim"
                      onChange={(e) => handleInputChange('temHosting', e.target.value)}
                    />
                    Sim
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="temHosting" 
                      value="nao"
                      onChange={(e) => handleInputChange('temHosting', e.target.value)}
                    />
                    Não
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="temHosting" 
                      value="preciso"
                      onChange={(e) => handleInputChange('temHosting', e.target.value)}
                    />
                    Preciso de ajuda
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Integrações Necessárias</label>
              <div className="checkbox-grid">
                {integracoesList.map(integracao => (
                  <label key={integracao} className={`checkbox-card ${formData.integrações.includes(integracao) ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={formData.integrações.includes(integracao)}
                      onChange={() => handleMultiSelect('integrações', integracao)}
                    />
                    <span>{integracao}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="form-step">
            <h3>🎯 Objetivos e Público</h3>
            
            <div className="form-group">
              <label>Principais Objetivos com o Site</label>
              <div className="checkbox-grid">
                {objetivosList.map(objetivo => (
                  <label key={objetivo} className={`checkbox-card ${formData.objetivos.includes(objetivo) ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={formData.objetivos.includes(objetivo)}
                      onChange={() => handleMultiSelect('objetivos', objetivo)}
                    />
                    <span>{objetivo}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Descreva seu Público-Alvo</label>
              <textarea 
                value={formData.publicoAlvo}
                onChange={(e) => handleInputChange('publicoAlvo', e.target.value)}
                placeholder="Ex: Empresários de 30-50 anos, famílias de classe média, jovens interessados em tecnologia..."
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Observações Adicionais</label>
              <textarea 
                value={formData.observações}
                onChange={(e) => handleInputChange('observações', e.target.value)}
                placeholder="Qualquer informação adicional que considere importante para o projeto..."
                rows="4"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="requirements-modal">
      <div className="requirements-container">
        <div className="requirements-header">
          <div className="logo-section">
            <div className="heart-logo">
              <svg width="32" height="32" viewBox="0 0 64 64">
                <rect x="12" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="16" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="20" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="36" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="40" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="44" y="8" width="4" height="4" fill="#e53e3e"/>
                <rect x="8" y="12" width="4" height="4" fill="#e53e3e"/>
                <rect x="12" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="16" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="12" width="4" height="4" fill="#e53e3e"/>
                <rect x="32" y="12" width="4" height="4" fill="#e53e3e"/>
                <rect x="36" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="12" width="4" height="4" fill="#fc8181"/>
                <rect x="48" y="12" width="4" height="4" fill="#e53e3e"/>
                <rect x="4" y="16" width="4" height="4" fill="#e53e3e"/>
                <rect x="8" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="12" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="16" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="16" width="4" height="4" fill="#e53e3e"/>
                <rect x="32" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="48" y="16" width="4" height="4" fill="#fc8181"/>
                <rect x="52" y="16" width="4" height="4" fill="#e53e3e"/>
                <rect x="4" y="20" width="4" height="4" fill="#e53e3e"/>
                <rect x="8" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="12" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="16" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="48" y="20" width="4" height="4" fill="#fc8181"/>
                <rect x="52" y="20" width="4" height="4" fill="#e53e3e"/>
                <rect x="8" y="24" width="4" height="4" fill="#e53e3e"/>
                <rect x="12" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="16" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="24" width="4" height="4" fill="#fc8181"/>
                <rect x="48" y="24" width="4" height="4" fill="#e53e3e"/>
                <rect x="12" y="28" width="4" height="4" fill="#e53e3e"/>
                <rect x="16" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="20" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="28" width="4" height="4" fill="#fc8181"/>
                <rect x="44" y="28" width="4" height="4" fill="#e53e3e"/>
                <rect x="16" y="32" width="4" height="4" fill="#e53e3e"/>
                <rect x="20" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="24" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="32" width="4" height="4" fill="#fc8181"/>
                <rect x="40" y="32" width="4" height="4" fill="#e53e3e"/>
                <rect x="20" y="36" width="4" height="4" fill="#e53e3e"/>
                <rect x="24" y="36" width="4" height="4" fill="#fc8181"/>
                <rect x="28" y="36" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="36" width="4" height="4" fill="#fc8181"/>
                <rect x="36" y="36" width="4" height="4" fill="#e53e3e"/>
                <rect x="24" y="40" width="4" height="4" fill="#e53e3e"/>
                <rect x="28" y="40" width="4" height="4" fill="#fc8181"/>
                <rect x="32" y="40" width="4" height="4" fill="#e53e3e"/>
                <rect x="28" y="44" width="4" height="4" fill="#e53e3e"/>
              </svg>
            </div>
            <div>
              <h2>Questionário de Requisitos</h2>
              <p>Vamos entender suas necessidades para criar o site perfeito!</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(currentStep / 6) * 100}%` }}></div>
        </div>

        <div className="step-indicator">
          Etapa {currentStep} de 6
        </div>

        <form onSubmit={handleSubmit}>
          {renderStep()}

          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" className="btn-secondary" onClick={prevStep}>
                ← Anterior
              </button>
            )}
            
            {currentStep < 6 ? (
              <button type="button" className="btn-primary" onClick={nextStep}>
                Próximo →
              </button>
            ) : (
              <button type="submit" className="btn-primary">
                Enviar Questionário
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequirementsForm;