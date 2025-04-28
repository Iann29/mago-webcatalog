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
  beesRightMobile = 45,
  beesBottomMobile = -45,
  beeSizeMobile = '93px',
  
  // Valores padrão para a seta de rolagem
  arrowSizeDesktop = 80,
  arrowSizeMobile = 40,
  arrowBottomDesktop = -300,
  arrowBottomMobile = -110,
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
        marginLeft: isDesktop ? '-250px' : '75px',
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
          fontSize: isDesktop ? '2.5rem' : '1.1rem',
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
          fontSize: isDesktop ? '2.15rem' : '0.80rem',
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
          viewBox="0 0 27 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.2092 0.484314C16.8246 0.484314 20.1102 2.00568 22.4912 4.45531C24.8721 6.90494 26.3504 10.2847 26.3504 14.0027V26.3395C26.3504 30.0572 24.8721 33.4373 22.4912 35.887C20.1102 38.3366 16.8246 39.8576 13.2092 39.8576C9.59383 39.8576 6.30864 38.3366 3.92768 35.887C1.54671 33.4373 0.0681152 30.0572 0.0681152 26.3395V14.0027C0.0681152 10.2847 1.54671 6.90494 3.92768 4.45531C6.30864 2.00568 9.59383 0.484314 13.2092 0.484314ZM12.3124 26.7028V11.4534C12.3124 10.9437 12.7143 10.5305 13.2092 10.5305C13.7046 10.5305 14.1064 10.9437 14.1064 11.4534V26.7028L17.6483 23.3877C18.0144 23.0461 18.5795 23.0739 18.9134 23.4486C19.2451 23.8252 19.22 24.4065 18.854 24.7501L13.812 29.4701C13.4748 29.7878 12.951 29.7931 12.6064 29.4701L7.5645 24.7501C7.19846 24.4084 7.17186 23.8252 7.5054 23.4486C7.83747 23.072 8.40445 23.0442 8.7705 23.3877L12.3124 26.7028ZM21.2224 5.7583C19.1665 3.64308 16.3297 2.32867 13.2092 2.32867C10.0892 2.32867 7.25423 3.64308 5.1961 5.7583C3.14018 7.87391 1.86252 10.7941 1.86252 14.0027V26.3395C1.86252 29.5478 3.13833 32.4661 5.1961 34.5836C7.25239 36.6992 10.0892 38.0132 13.2092 38.0132C16.3297 38.0132 19.1646 36.6992 21.2224 34.5836C23.2787 32.468 24.5563 29.5478 24.5563 26.3395V14.0027C24.5563 10.7941 23.2805 7.87581 21.2224 5.7583Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Intro;
