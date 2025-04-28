import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

interface BancaProps {
  // Propriedades para posicionamento da banca no desktop
  marginTopDesktop?: number | string;
  widthDesktop?: number | string;
  marginRightDesktop?: number | string;
  // Propriedades para posicionamento da banca no mobile
  marginTopMobile?: number | string;
  widthMobile?: number | string;
  marginRightMobile?: number | string;
}

const Banca: React.FC<BancaProps> = ({
  // Valores padrão para desktop
  marginTopDesktop = '230px',
  widthDesktop = '50%',
  marginRightDesktop = '100px',
  // Valores padrão para mobile
  marginTopMobile = '35px',
  widthMobile = '65%',
  marginRightMobile = '-100px'
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  return (
    <div 
      className="fade-in"
      style={{ 
        marginTop: isDesktop ? marginTopDesktop : marginTopMobile,
        marginRight: isDesktop ? marginRightDesktop : marginRightMobile,
        width: '100%',
        display: 'flex',
        justifyContent: isDesktop ? 'flex-end' : 'center',
        animation: 'fadeIn 0.8s ease-in-out forwards',
        opacity: 0
      }}
    >
      <img 
        src="/banca.png" 
        alt="Banca de Produtos" 
        style={{
          width: isDesktop ? widthDesktop : widthMobile,
          maxWidth: '1200px',
          height: 'auto',
          objectFit: 'contain',
          filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))'
        }}
      />
    </div>
  );
};

export default Banca;
