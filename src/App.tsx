import React from 'react';
import TextureOverlay from './components/TextureOverlay';
import Title from './pages/home/title';
// Importar futuros componentes aqui
// import MidStart from './pages/home/midstart';
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
        {/* Adicionar futuros componentes aqui */}
        {/* <MidStart /> */}
      </div>
    </div>
  );
}

export default App;