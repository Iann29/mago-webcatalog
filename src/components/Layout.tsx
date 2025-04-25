import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Texture overlay with opacity */}
      <div className="texture-overlay"></div>
      
      {/* Main content container */}
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default Layout;