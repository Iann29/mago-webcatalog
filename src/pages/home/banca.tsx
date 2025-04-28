import React from 'react';
import useResponsive from '../../hooks/useResponsive';

interface BancaProps {
  // Propriedades para posicionamento da banca no desktop
  marginTopDesktop?: number | string;
  widthDesktop?: number | string;
  marginRightDesktop?: number | string;
  // Propriedades para posicionamento da banca no tablet
  marginTopTablet?: number | string;
  widthTablet?: number | string;
  marginRightTablet?: number | string;
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
  // Valores padrão para tablet
  marginTopTablet = '180px',
  widthTablet = '60%',
  marginRightTablet = '0px',
  // Valores padrão para mobile
  marginTopMobile = '35px',
  widthMobile = '65%',
  marginRightMobile = '-100px'
}) => {
  const { isTablet, isDesktop } = useResponsive();
  
  return (
    <div 
      className="fade-in"
      style={{ 
        marginTop: isDesktop ? marginTopDesktop : (isTablet ? marginTopTablet : marginTopMobile),
        marginRight: isDesktop ? marginRightDesktop : (isTablet ? marginRightTablet : marginRightMobile),
        width: '100%',
        display: 'flex',
        justifyContent: isDesktop ? 'flex-end' : (isTablet ? 'center' : 'center'),
        animation: 'fadeIn 0.8s ease-in-out forwards',
        opacity: 0
      }}
    >
      <img 
        src="/banca.png" 
        alt="Banca de Produtos" 
        style={{
          width: isDesktop ? widthDesktop : (isTablet ? widthTablet : widthMobile),
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
