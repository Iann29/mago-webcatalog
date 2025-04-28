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
  
  // Propriedades para o texto "A MAIOR DO BRASIL"
  textTopDesktop?: string | number;
  textTopTablet?: string | number;
  textTopMobile?: string | number;
  textRightDesktop?: string | number;
  textRightTablet?: string | number;
  textRightMobile?: string | number;
  textSizeDesktop?: string | number;
  textSizeTablet?: string | number;
  textSizeMobile?: string | number;
  brasilTextSizeDesktop?: string | number;
  brasilTextSizeTablet?: string | number;
  brasilTextSizeMobile?: string | number;
  
  // Propriedades para o efeito de blur por trás do texto
  blurOpacityDesktop?: number;
  blurOpacityTablet?: number;
  blurOpacityMobile?: number;
  blurIntensityDesktop?: number;
  blurIntensityTablet?: number;
  blurIntensityMobile?: number;
  
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
  
  // Valores padrão para o texto "A MAIOR DO BRASIL" - desktop
  textTopDesktop = '35px',
  textRightDesktop = '120px',
  textSizeDesktop = '2.5rem',
  brasilTextSizeDesktop = '3.2rem',
  
  // Valores padrão para o texto "A MAIOR DO BRASIL" - tablet
  textTopTablet = '25px',
  textRightTablet = '100px',
  textSizeTablet = '2rem',
  brasilTextSizeTablet = '2.6rem',
  
  // Valores padrão para o texto "A MAIOR DO BRASIL" - mobile
  textTopMobile = '145px',
  textRightMobile = '50px',
  textSizeMobile = '2rem',
  brasilTextSizeMobile = '2rem',
  
  // Valores padrão para o efeito de blur - desktop
  blurOpacityDesktop = 0.7,
  blurIntensityDesktop = 10,
  
  // Valores padrão para o efeito de blur - tablet
  blurOpacityTablet = 0.7,
  blurIntensityTablet = 8,
  
  // Valores padrão para o efeito de blur - mobile
  blurOpacityMobile = 1,
  blurIntensityMobile = 11,  
  
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
        {/* Efeito de blur atrás do texto */}
        <div
          style={{
            position: 'absolute',
            top: isDesktop ? textTopDesktop : (isTablet ? textTopTablet : textTopMobile),
            right: isDesktop ? textRightDesktop : (isTablet ? textRightTablet : textRightMobile),
            zIndex: 2,
            backgroundColor: 'white',
            padding: '20px',
            paddingTop: '15px',
            paddingBottom: '15px',
            borderRadius: '30px',
            opacity: isDesktop ? blurOpacityDesktop : (isTablet ? blurOpacityTablet : blurOpacityMobile),
            filter: `blur(${isDesktop ? blurIntensityDesktop : (isTablet ? blurIntensityTablet : blurIntensityMobile)}px)`,
            width: '200px',
            height: '80px'
          }}
        ></div>
        
        {/* Texto "A MAIOR DO BRASIL" */}
        <div
          style={{
            position: 'absolute',
            top: isDesktop ? textTopDesktop : (isTablet ? textTopTablet : textTopMobile),
            right: isDesktop ? textRightDesktop : (isTablet ? textRightTablet : textRightMobile),
            zIndex: 3, // Aumentei o z-index para ficar acima do blur
            textAlign: 'left',
            fontFamily: '"Gasoek One", sans-serif',
            fontWeight: 400,
            lineHeight: 1
          }}
        >
          <div 
            style={{ 
              fontSize: isDesktop ? textSizeDesktop : (isTablet ? textSizeTablet : textSizeMobile),
              color: '#6F278B',
              marginBottom: '0.1em'
            }}
          >
            A MAIOR DO
          </div>
          <div 
            style={{
              fontSize: isDesktop ? brasilTextSizeDesktop : (isTablet ? brasilTextSizeTablet : brasilTextSizeMobile),
              background: 'linear-gradient(90deg, #47BCFF 0%, #2BC94E 50%, #FFEC25 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 'bold'
            }}
          >
            BRASIL
          </div>
        </div>
        
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
