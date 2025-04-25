import React from 'react';
import TextureOverlay from './components/TextureOverlay';
import Title from './pages/home/title';
import Intro from './pages/home/intro';
import Banca from './pages/home/banca';
// Importar futuros componentes aqui
import './styles/globals.css';

function App() {
  return (
    <div className="app-container relative">
      {/* Componente de textura de fundo */}
      <TextureOverlay />
      
      {/* Container principal de conteúdo */}
      <div className="content-container w-full min-h-screen flex flex-col items-center fade-in" style={{ overflowX: 'hidden' }}>
        {/* Componentes da página home */}
        <Title/>
        <Intro />
        <Banca />
        {/* Adicionar futuros componentes aqui */}
      </div>
    </div>
  );
}

export default App;