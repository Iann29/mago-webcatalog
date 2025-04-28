import React from 'react';
import useResponsive from '../../hooks/useResponsive';

interface WhiteSectionProps {
  // Propriedades para a altura da seção
  heightDesktop?: string | number;
  heightTablet?: string | number;
  heightMobile?: string | number;
  
  // Propriedades para o border-radius das bordas superiores
  borderRadiusDesktop?: string | number;
  borderRadiusTablet?: string | number;
  borderRadiusMobile?: string | number;
  
  // Propriedades para o posicionamento
  marginTopDesktop?: string | number;
  marginTopTablet?: string | number;
  marginTopMobile?: string | number;
  
  // Propriedades para a imagem do Brasil
  brasilSizeDesktop?: string | number;
  brasilSizeTablet?: string | number;
  brasilSizeMobile?: string | number;
  brasilLeftDesktop?: string | number;
  brasilLeftTablet?: string | number;
  brasilLeftMobile?: string | number;
  brasilTopDesktop?: string | number;
  brasilTopTablet?: string | number;
  brasilTopMobile?: string | number;
  
  // Conteúdo do componente
  children?: React.ReactNode;
}

const WhiteSection: React.FC<WhiteSectionProps> = ({
  // Valores padrão para desktop
  heightDesktop = '500px',
  borderRadiusDesktop = '50px',
  marginTopDesktop = '100px',
  
  // Valores padrão para tablet
  heightTablet = '450px',
  borderRadiusTablet = '40px',
  marginTopTablet = '-20px',
  
  // Valores padrão para mobile
  heightMobile = '400px',
  borderRadiusMobile = '30px',
  marginTopMobile = '-68px',
  
  // Valores padrão para a imagem do Brasil - desktop
  brasilSizeDesktop = '180px',
  brasilLeftDesktop = '60px',
  brasilTopDesktop = '50px',
  
  // Valores padrão para a imagem do Brasil - tablet
  brasilSizeTablet = '140px',
  brasilLeftTablet = '40px',
  brasilTopTablet = '40px',
  
  // Valores padrão para a imagem do Brasil - mobile
  brasilSizeMobile = '200px',
  brasilLeftMobile = '50px',
  brasilTopMobile = '90px',  
  
  // Conteúdo do componente (children)
  children
}) => {
  const { isTablet, isDesktop } = useResponsive();
  
  return (
    <div 
      className="fade-in"
      style={{ 
        marginTop: isDesktop ? marginTopDesktop : (isTablet ? marginTopTablet : marginTopMobile),
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
          minHeight: isDesktop ? heightDesktop : (isTablet ? heightTablet : heightMobile),
          width: '100%',
          borderTopLeftRadius: isDesktop ? borderRadiusDesktop : (isTablet ? borderRadiusTablet : borderRadiusMobile),
          borderTopRightRadius: isDesktop ? borderRadiusDesktop : (isTablet ? borderRadiusTablet : borderRadiusMobile),
          // Deixamos as bordas inferiores retas
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          // Sombra sutil para dar profundidade
          boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.1)',
          // Certifique-se de que o texto será escuro contra o fundo branco
          color: '#333333',
          padding: isDesktop ? '40px' : (isTablet ? '30px' : '20px'),
          position: 'relative' // Para posicionamento absoluto da imagem do Brasil
        }}
      >
        {/* Imagem do Brasil */}
        <img 
          src="/brasil.png" 
          alt="Mapa do Brasil" 
          style={{
            position: 'absolute',
            top: isDesktop ? brasilTopDesktop : (isTablet ? brasilTopTablet : brasilTopMobile),
            left: isDesktop ? brasilLeftDesktop : (isTablet ? brasilLeftTablet : brasilLeftMobile),
            width: isDesktop ? brasilSizeDesktop : (isTablet ? brasilSizeTablet : brasilSizeMobile),
            height: 'auto',
            objectFit: 'contain',
            zIndex: 1,
            opacity: 0.8 // Um pouco de transparência para não se destacar demais
          }}
        />
        
        {/* Conteúdo principal */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default WhiteSection;
