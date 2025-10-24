import React, { useEffect, useState } from 'react';

const ImageDebugger = () => {
  const [imageStatus, setImageStatus] = useState({});

  const images = [
    "/images/portfolio/padaria-interior.svg",
    "/images/portfolio/farmacia-interior.svg", 
    "/images/portfolio/loja-roupas-interior.svg",
    "/images/portfolio/restaurant-landing.svg",
    "/images/portfolio/site-institucional-consultoria.svg",
    "/images/portfolio/landing-page-ecommerce.svg"
  ];

  const checkImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ src, status: 'loaded', error: null });
      img.onerror = (e) => resolve({ src, status: 'error', error: e.type });
      img.src = src;
    });
  };

  useEffect(() => {
    const checkAllImages = async () => {
      const results = await Promise.all(images.map(checkImage));
      const statusMap = {};
      results.forEach(result => {
        statusMap[result.src] = result;
      });
      setImageStatus(statusMap);
    };

    checkAllImages();
  }, []);

  if (Object.keys(imageStatus).length === 0) {
    return <div>Carregando debug de imagens...</div>;
  }

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'white', 
      border: '1px solid #ccc', 
      padding: '10px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <h4>Debug de Imagens</h4>
      {Object.entries(imageStatus).map(([src, status]) => (
        <div key={src} style={{ 
          margin: '5px 0',
          color: status.status === 'loaded' ? 'green' : 'red'
        }}>
          {status.status === 'loaded' ? '✅' : '❌'} {src.split('/').pop()}
          {status.error && <div style={{ fontSize: '10px' }}>Erro: {status.error}</div>}
        </div>
      ))}
    </div>
  );
};

export default ImageDebugger;