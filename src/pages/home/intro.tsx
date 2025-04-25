import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

const Intro: React.FC = () => {
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
        opacity: 0
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
    </div>
  );
};

export default Intro;
