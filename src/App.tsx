import React from 'react';
import TextureOverlay from './components/TextureOverlay';
import Title from './pages/home/title';
import Intro from './pages/home/intro';
// Importar futuros componentes aqui
import './styles/globals.css';

function App() {
  return (
    <div className="app-container relative">
      {/* Componente de textura de fundo */}
      <TextureOverlay />
      
      {/* Container principal de conteúdo */}
      <div className="content-container w-full min-h-screen flex flex-col items-center fade-in">
        {/* Componentes da página home */}
        <Title/>
        <Intro />
        {/* Adicionar futuros componentes aqui */}
      </div>
    </div>
  );
}

export default App;