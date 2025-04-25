import React from 'react';

const TextureOverlay: React.FC = () => {
  // Definindo os estilos diretamente no componente
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/texture.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.49,
    zIndex: -1,
    minHeight: '100vh'
  };

  return (
    <div style={overlayStyle}></div>
  );
};

export default TextureOverlay;
