import React, { useState } from 'react';

const AdvancedTestimonialSystem = ({ testimonials, onAddTestimonial }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    text: '',
    rating: 5,
    city: '',
    recommendToFriends: true,
    allowContact: false
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showForm, setShowForm] = useState(false);

  // Filtrar depoimentos
  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filter === 'all') return true;
    if (filter === '5stars') return testimonial.rating === 5;
    if (filter === '4stars') return testimonial.rating === 4;
    if (filter === 'recent') return testimonial.recent;
    return true;
  });

  // Ordenar depoimentos
  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.text.trim()) {
      const newTestimonial = {
        ...formData,
        date: new Date().toISOString(),
        recent: true,
        verified: false // Será verificado pelo administrador
      };
      onAddTestimonial(newTestimonial);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        text: '',
        rating: 5,
        city: '',
        recommendToFriends: true,
        allowContact: false
      });
      setShowForm(false);
      alert('Obrigado pelo seu depoimento! Ele será analisado e publicado em breve. 🙏');
    }
  };

  const Star = ({ filled, onClick, onHover, onLeave }) => (
    <span 
      className={`star ${filled ? 'filled' : 'empty'}`}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ cursor: 'pointer' }}
    >
      ★
    </span>
  );

  const getAverageRating = () => {
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
    return (total / testimonials.length).toFixed(1);
  };

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0];
    testimonials.forEach(t => {
      distribution[t.rating - 1]++;
    });
    return distribution.reverse();
  };

  return (
    <div className="advanced-testimonial-system">
      {/* Resumo das Avaliações */}
      <div className="testimonial-summary">
        <div className="rating-overview">
          <div className="average-rating">
            <span className="rating-number">{getAverageRating()}</span>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < Math.round(getAverageRating())} />
              ))}
            </div>
            <span className="total-reviews">({testimonials.length} avaliações)</span>
          </div>
          
          <div className="rating-distribution">
            {getRatingDistribution().map((count, index) => (
              <div key={index} className="rating-bar">
                <span>{5 - index} ★</span>
                <div className="bar">
                  <div 
                    className="bar-fill" 
                    style={{ width: `${(count / testimonials.length) * 100}%` }}
                  ></div>
                </div>
                <span>{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="satisfaction-metrics">
          <div className="metric">
            <span className="metric-number">97%</span>
            <span className="metric-label">Recomendam nossos serviços</span>
          </div>
          <div className="metric">
            <span className="metric-number">100%</span>
            <span className="metric-label">Projetos entregues no prazo</span>
          </div>
          <div className="metric">
            <span className="metric-number">24h</span>
            <span className="metric-label">Tempo médio de resposta</span>
          </div>
        </div>
      </div>

      {/* Filtros e Ordenação */}
      <div className="testimonial-controls">
        <div className="filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            Todas
          </button>
          <button 
            className={filter === '5stars' ? 'active' : ''} 
            onClick={() => setFilter('5stars')}
          >
            5 Estrelas
          </button>
          <button 
            className={filter === 'recent' ? 'active' : ''} 
            onClick={() => setFilter('recent')}
          >
            Recentes
          </button>
        </div>

        <div className="sort-options">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Mais Recentes</option>
            <option value="rating">Maior Nota</option>
            <option value="name">Nome A-Z</option>
          </select>
        </div>

        <button 
          className="add-testimonial-btn"
          onClick={() => setShowForm(!showForm)}
        >
          ✍️ Deixar Avaliação
        </button>
      </div>

      {/* Lista de Depoimentos */}
      <div className="testimonials-grid">
        {sortedTestimonials.map((testimonial, idx) => (
          <div key={idx} className={`testimonial-card-advanced ${testimonial.verified ? 'verified' : ''}`}>
            <div className="testimonial-header">
              <div className="customer-info">
                <strong className="customer-name">{testimonial.name}</strong>
                {testimonial.company && (
                  <span className="customer-company">{testimonial.company}</span>
                )}
                {testimonial.city && (
                  <span className="customer-location">📍 {testimonial.city}</span>
                )}
                {testimonial.verified && (
                  <span className="verified-badge">✅ Verificado</span>
                )}
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < testimonial.rating} />
                ))}
              </div>
            </div>
            
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.text}"</p>
              {testimonial.projectType && (
                <span className="project-type">Projeto: {testimonial.projectType}</span>
              )}
            </div>
            
            <div className="testimonial-footer">
              <span className="testimonial-date">
                {new Date(testimonial.date).toLocaleDateString('pt-BR')}
              </span>
              {testimonial.recommendToFriends && (
                <span className="recommendation">👍 Recomendaria para amigos</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Formulário de Avaliação Expandido */}
      {showForm && (
        <div className="testimonial-form-overlay">
          <div className="testimonial-form-advanced">
            <div className="form-header">
              <h3>✍️ Deixe sua Avaliação</h3>
              <button 
                className="close-form" 
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome completo *</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa/Negócio</label>
                  <input
                    id="company"
                    type="text"
                    className="form-control"
                    placeholder="Ex: Padaria do João"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    className="form-control"
                    placeholder="Ex: Campinas - SP"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Tipo de projeto</label>
                <select
                  id="projectType"
                  className="form-control"
                  value={formData.projectType}
                  onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="">Selecione...</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Site Institucional">Site Institucional</option>
                  <option value="Loja Online">Loja Online</option>
                  <option value="Portfólio">Portfólio</option>
                  <option value="Blog">Blog</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="testimonial">Sua avaliação *</label>
                <textarea
                  id="testimonial"
                  className="form-control"
                  placeholder="Conte sua experiência conosco... Como foi o atendimento? O resultado atendeu suas expectativas? Recomendaria nossos serviços?"
                  value={formData.text}
                  onChange={e => setFormData({ ...formData, text: e.target.value })}
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label>Sua nota geral:</label>
                <div className="rating-input">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      filled={star <= (hoverRating || formData.rating)}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onHover={() => setHoverRating(star)}
                      onLeave={() => setHoverRating(0)}
                    />
                  ))}
                  <span className="rating-text">
                    {hoverRating || formData.rating} estrela{(hoverRating || formData.rating) !== 1 ? 's' : ''} - {
                      (hoverRating || formData.rating) === 5 ? 'Excelente!' :
                      (hoverRating || formData.rating) === 4 ? 'Muito Bom!' :
                      (hoverRating || formData.rating) === 3 ? 'Bom' :
                      (hoverRating || formData.rating) === 2 ? 'Regular' : 'Ruim'
                    }
                  </span>
                </div>
              </div>

              <div className="form-checkboxes">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.recommendToFriends}
                    onChange={e => setFormData({ ...formData, recommendToFriends: e.target.checked })}
                  />
                  <span>Recomendaria nossos serviços para amigos</span>
                </label>
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.allowContact}
                    onChange={e => setFormData({ ...formData, allowContact: e.target.checked })}
                  />
                  <span>Permito contato para casos de estudo ou referências</span>
                </label>
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Enviar Avaliação
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedTestimonialSystem;