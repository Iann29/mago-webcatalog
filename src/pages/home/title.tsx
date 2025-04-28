import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

interface TitleProps {
  hatSizeDesktop?: string | number;
  hatSizeMobile?: string | number;
}

const Title: React.FC<TitleProps> = ({ 
  hatSizeDesktop = '190px', 
  hatSizeMobile = '90px' 
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <div className="relative" style={{ marginTop: isDesktop ? '50px' : '40px' }}>
      <div className="relative inline-block">
        <h1 className="catalog-title md:text-[7.5rem]" style={{ fontSize: isDesktop ? '7.5rem' : '55px' }}>CATÁLOGO</h1>
        <img 
          src="/hat.png" 
          alt="Chapéu" 
          className="absolute" 
          style={{
            top: isDesktop ? '-80px' : '-36px',
            right: isDesktop ? '-53px' : '-25px',
            width: isDesktop ? hatSizeDesktop : hatSizeMobile,
            filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.5))',
            opacity: 0,
            animation: 'hatAppear 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards',
            animationDelay: '1.2s' // Espera que o título (0.8s) e o subtítulo (0.8s + 0.3s delay) apareçam primeiro
          }}
        />
      </div>
      <p className="subtitle-text absolute right-0 tracking-[0.02em]" style={{
        fontSize: isDesktop ? '73px' : '32px',
        bottom: isDesktop ? '-35px' : '-20px'
      }}>
        Mago do Hayday
      </p>
    </div>
  );
};

export default Title;
