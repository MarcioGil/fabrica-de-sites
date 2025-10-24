import React, { useState } from 'react';

const ImageModal = ({ isOpen, onClose, imageSrc, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-image-container">
          <img 
            src={imageSrc} 
            alt={title} 
            className="modal-image"
            onError={(e) => {
              e.target.style.backgroundColor = '#f8f9fa';
              e.target.style.border = '2px dashed #dee2e6';
              e.target.style.display = 'flex';
              e.target.style.alignItems = 'center';
              e.target.style.justifyContent = 'center';
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzZjNzU3ZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VtIG7Do28gZW5jb250cmFkYTwvdGV4dD4KPHN2Zz4K';
            }}
          />
        </div>
        <div className="modal-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const PortfolioGallery = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="portfolio-gallery">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="portfolio-card"
            onClick={() => openModal(project)}
          >
            <div className="portfolio-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="portfolio-image"
                onError={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.border = '2px dashed #dee2e6';
                  e.target.style.display = 'flex';
                  e.target.style.alignItems = 'center';
                  e.target.style.justifyContent = 'center';
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNmM3NTdkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZW08L3RleHQ+Cjwvc3ZnPgo=';
                }}
              />
              <div className="portfolio-overlay">
                <div className="portfolio-overlay-content">
                  <h4>{project.title}</h4>
                  <p>{project.category}</p>
                  <span className="view-project">Ver Projeto 👁️</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card-info">
              <h3>{project.title}</h3>
              <p className="portfolio-category">{project.category}</p>
              <p className="portfolio-description">{project.shortDescription}</p>
              <div className="portfolio-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="portfolio-tag">{tag}</span>
                ))}
              </div>
              <div className="portfolio-results">
                <strong>Resultado:</strong> {project.result}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        imageSrc={selectedProject?.image}
        title={selectedProject?.title}
        description={selectedProject?.fullDescription}
      />
    </>
  );
};

export default PortfolioGallery;