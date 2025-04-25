import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

interface IntroProps {
  // Propriedades para posicionar as abelhas no desktop
  beesRightDesktop?: number;
  beesTopDesktop?: number;
  beesBottomDesktop?: number | string;
  // Propriedades para posicionar as abelhas no mobile
  beesTopMobile?: number | string;
  beesRightMobile?: number;
  beesBottomMobile?: number;
}

const Intro: React.FC<IntroProps> = ({
  // Valores padrão para o posicionamento das abelhas no desktop
  beesRightDesktop = -300,
  beesTopDesktop = 0,
  beesBottomDesktop = 'auto',
  // Valores padrão para o posicionamento das abelhas no mobile
  beesTopMobile = 'auto',
  beesRightMobile = 30,
  beesBottomMobile = -180
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
          fontSize: isDesktop ? '2.15rem' : '1.20rem',
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
          maxWidth: isDesktop ? '500px' : '140px',
          zIndex: 2,
          transition: 'all 0.3s ease-in-out',
          animation: 'fadeIn 0.8s ease-in-out forwards',
          animationDelay: '1.8s',
          opacity: 0
        }}
      />
    </div>
  );
};

export default Intro;
