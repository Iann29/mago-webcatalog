import { useState, useEffect } from 'react';

// Definição dos breakpoints
export const breakpoints = {
  mobile: 767,   // até 767px
  tablet: 1023,  // de 768px até 1023px
  desktop: 1024, // 1024px ou mais
};

/**
 * Hook que retorna o tipo de dispositivo atual com base na largura da tela
 * @returns Um objeto com booleanos para cada tipo de dispositivo
 */
export function useResponsive() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Verificar largura inicial
    handleResize();

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Remover listener ao desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile: windowWidth <= breakpoints.mobile,
    isTablet: windowWidth > breakpoints.mobile && windowWidth <= breakpoints.tablet,
    isDesktop: windowWidth > breakpoints.tablet,
    // Agrupamentos úteis
    isSmallScreen: windowWidth <= breakpoints.tablet, // Mobile + Tablet
    windowWidth, // Disponibilizando a largura exata também
  };
}

export default useResponsive;
