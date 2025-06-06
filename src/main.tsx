import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { preloadBackgroundImage } from './utils/imageLoader';

// Start by preloading the texture background
preloadBackgroundImage().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});