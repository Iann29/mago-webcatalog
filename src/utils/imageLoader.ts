/**
 * Helper function to ensure the background texture is preloaded
 * before displaying the application to avoid flashes of unstyled content
 */
export const preloadBackgroundImage = (): Promise<void> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = '/texture.png';
    img.onload = () => {
      resolve();
    };
    img.onerror = () => {
      console.warn('Failed to preload background texture');
      resolve();
    };
  });
};

export default preloadBackgroundImage;