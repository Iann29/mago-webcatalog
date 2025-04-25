import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const Home: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <div className="w-full min-h-screen flex flex-col items-center fade-in">
      <div className="relative" style={{ marginTop: isDesktop ? '150px' : '70px' }}>
        <h1 className="catalog-title text-6xl md:text-[7.5rem]">CATÁLOGO</h1>
        <p className="subtitle-text absolute right-0 tracking-[0.02em]" style={{
          fontSize: isDesktop ? '73px' : '36px',
          bottom: isDesktop ? '-63px' : '-33px'
        }}>
          Mago do Hayday
        </p>
      </div>
      <div className="text-center p-8 slide-up">
        {/* Empty content for now - will be filled with catalog content later */}
      </div>
    </div>
  );
};

export default Home;