import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Mascot from './Mascot';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-mascot">
            <Mascot className="header-mascot" shouldPresentBubbleAndMenu={false} />
          </div>
          <span className="logo-text">VibeCode</span>
        </div>

        <div className="nav-links-desktop">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          {/* <a href="#about" className="nav-link">About</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact</a> */}
        </div>

        <a href="#contact" className="nav-link">Get in Touch</a>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#services" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
        <a href="#about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#portfolio" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
        <a href="#contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        <button className="contact-button mobile">Get in Touch</button>
      </div>
    </nav>
  );
};

export default NavBar; 