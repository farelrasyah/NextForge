import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '../../components/useScrollPosition';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 50;
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you'd implement actual theme switching here
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6V12L16 14" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Nexora
        </a>

        <div className="flex items-center gap-4">
          <div className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
            <div className="theme-toggle-track">
              <div className="theme-toggle-thumb"></div>
            </div>
          </div>
          
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>Fitur</a>
          <a href="#demo" className="nav-link" onClick={() => setIsMenuOpen(false)}>Demo</a>
          <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimoni</a>
          <a href="#faq" className="nav-link" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          <a href="#login" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;