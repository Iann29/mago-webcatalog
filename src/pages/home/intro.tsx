import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

interface IntroProps {
  // Propriedades para posicionar as abelhas no desktop
  beesRightDesktop?: number;
  beesTopDesktop?: number;
  beesBottomDesktop?: number | string;
  beeSizeDesktop?: number | string;
  // Propriedades para posicionar as abelhas no mobile
  beesTopMobile?: number | string;
  beesRightMobile?: number;
  beesBottomMobile?: number;
  beeSizeMobile?: number | string;
  
  // Propriedades para a seta de rolagem
  arrowSizeDesktop?: number;
  arrowSizeMobile?: number;
  arrowBottomDesktop?: number;
  arrowBottomMobile?: number;
  arrowLeftDesktop?: number | string;
  arrowLeftMobile?: number | string;
}

const Intro: React.FC<IntroProps> = ({
  // Valores padrão para o posicionamento das abelhas no desktop
  beesRightDesktop = -300,
  beesTopDesktop = 0,
  beesBottomDesktop = 'auto',
  beeSizeDesktop = '500px',
  // Valores padrão para o posicionamento das abelhas no mobile
  beesTopMobile = 'auto',
  beesRightMobile = 30,
  beesBottomMobile = -45,
  beeSizeMobile = '120px',
  
  // Valores padrão para a seta de rolagem
  arrowSizeDesktop = 80,
  arrowSizeMobile = 50,
  arrowBottomDesktop = -300,
  arrowBottomMobile = -250,
  arrowLeftDesktop = 'calc(50% - 410px)',
  arrowLeftMobile = 'calc(50% - 200px)'
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  return (
    <div 
      className="fade-in"
      style={{ 
        marginTop: '100px',
        textAlign: 'left',
        marginLeft: isDesktop ? '-250px' : '70px',
        maxWidth: '800px',
        width: '100%',
        fontFamily: '"Poppins", sans-serif',
        animation: 'fadeIn 0.8s ease-in-out forwards',
        animationDelay: '1.5s',
        opacity: 0,
        position: 'relative' // Adicionado para posicionamento absoluto da imagem
      }}
    >
      <h2 
        style={{ 
          fontSize: isDesktop ? '2.5rem' : '1.25rem',
          fontWeight: 'bold',
          color: '#FFFFFF',
          marginBottom: '-5px',
          textAlign: 'left'
        }}
      >
        Evolua sua fazenda!
      </h2>
      <p 
        style={{ 
          fontSize: isDesktop ? '2.15rem' : '1rem',
          color: '#CDCDCD',
          lineHeight: '1.5',
          textAlign: 'left'
        }}
      >
        Descubra todos os kits que sua<br />
        fazenda precisa para crescer.
      </p>

      {/* Imagem das abelhas - posicionamento diferente em desktop e mobile */}
      <img 
        src="/bees.png" 
        alt="Abelhas" 
        style={{
          position: 'absolute',
          right: isDesktop ? `${beesRightDesktop}px` : `${beesRightMobile}px`,
          top: isDesktop ? `${beesTopDesktop}px` : (beesTopMobile === 'auto' ? 'auto' : `${beesTopMobile}px`),
          bottom: isDesktop ? (beesBottomDesktop === 'auto' ? 'auto' : `${beesBottomDesktop}px`) : `${beesBottomMobile}px`,
          maxWidth: isDesktop ? beeSizeDesktop : beeSizeMobile,
          zIndex: 2,
          transition: 'all 0.3s ease-in-out',
          animation: 'fadeIn 0.8s ease-in-out forwards',
          animationDelay: '1.8s',
          opacity: 0
        }}
      />
      
      {/* Seta de rolagem SVG */}
      <div
        style={{
          position: 'absolute',
          bottom: isDesktop ? `${arrowBottomDesktop}px` : `${arrowBottomMobile}px`,
          left: isDesktop ? arrowLeftDesktop : arrowLeftMobile,
          width: isDesktop ? `${arrowSizeDesktop}px` : `${arrowSizeMobile}px`,
          height: isDesktop ? `${arrowSizeDesktop}px` : `${arrowSizeMobile}px`,
          zIndex: 3,
          animation: 'fadeIn 0.8s ease-in-out forwards, pulse 2s infinite',
          animationDelay: '2s',
          opacity: 0
        }}
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 60 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="58" height="58" rx="29" stroke="white" strokeWidth="2" />
          <path d="M30 20V40M30 40L20 30M30 40L40 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default Intro;
