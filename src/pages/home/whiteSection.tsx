import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

interface WhiteSectionProps {
  // Propriedades para a altura da seção
  heightDesktop?: string | number;
  heightMobile?: string | number;
  
  // Propriedades para o border-radius das bordas superiores
  borderRadiusDesktop?: string | number;
  borderRadiusMobile?: string | number;
  
  // Propriedades para o posicionamento
  marginTopDesktop?: string | number;
  marginTopMobile?: string | number;
  
  // Conteúdo do componente
  children?: React.ReactNode;
}

const WhiteSection: React.FC<WhiteSectionProps> = ({
  // Valores padrão para desktop
  heightDesktop = '500px',
  borderRadiusDesktop = '50px',
  marginTopDesktop = '100px',
  
  // Valores padrão para mobile
  heightMobile = '400px',
  borderRadiusMobile = '30px',
  marginTopMobile = '-72px',
  
  // Conteúdo do componente (children)
  children
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  return (
    <div 
      className="fade-in"
      style={{ 
        marginTop: isDesktop ? marginTopDesktop : marginTopMobile,
        width: '100%',
        animation: 'fadeIn 0.8s ease-in-out forwards',
        opacity: 0,
        position: 'relative',
        zIndex: -1
      }}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          minHeight: isDesktop ? heightDesktop : heightMobile,
          width: '100%',
          borderTopLeftRadius: isDesktop ? borderRadiusDesktop : borderRadiusMobile,
          borderTopRightRadius: isDesktop ? borderRadiusDesktop : borderRadiusMobile,
          // Deixamos as bordas inferiores retas
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          // Sombra sutil para dar profundidade
          boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.1)',
          // Certifique-se de que o texto será escuro contra o fundo branco
          color: '#333333',
          padding: isDesktop ? '40px' : '20px'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default WhiteSection;
