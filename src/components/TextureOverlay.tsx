import React, { useEffect, useState } from 'react';

const TextureOverlay: React.FC = () => {
  // Estado para armazenar a altura da página
  const [pageHeight, setPageHeight] = useState<string>('100vh');

  // Efeito para atualizar a altura quando a página mudar de tamanho
  useEffect(() => {
    const updateHeight = () => {
      // Pega a altura total do documento
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      setPageHeight(`${docHeight}px`);
    };

    // Atualiza a altura inicialmente
    updateHeight();

    // Adiciona listener para quando a janela mudar de tamanho
    window.addEventListener('resize', updateHeight);
    
    // Atualizar a altura quando o conteúdo mudar (com um pequeno atraso)
    const interval = setInterval(updateHeight, 1000);

    // Limpeza quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', updateHeight);
      clearInterval(interval);
    };
  }, []);

  // Definindo os estilos diretamente no componente
  const overlayStyle: React.CSSProperties = {
    position: 'absolute', // Mudamos para absolute para cobrir todo o conteúdo
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: pageHeight, // Usa a altura dinâmica calculada
    backgroundImage: 'url("/texture.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat-y', // Garante que a textura se repita verticalmente
    opacity: 0.49,
    zIndex: -1,
  };

  // Aplicamos um estilo ao corpo do documento para garantir a cor de fundo consistente
  useEffect(() => {
    document.body.style.minHeight = '100vh';
  }, []);

  return (
    <div style={overlayStyle}></div>
  );
};

export default TextureOverlay;
