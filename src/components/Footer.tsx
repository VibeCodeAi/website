import React from 'react';
import './Footer.css';
import Mascot from './Mascot';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="logo-mascot">
              <Mascot className="footer-mascot" shouldPresentBubbleAndMenu={false} />
            </div>
            <span className="logo-text">VibeCode</span>
          </div>
          
          <div className="footer-menu">
            <div className="menu-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="menu-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#services">AI Development</a></li>
                <li><a href="#services">Agentic AI</a></li>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Consultation</a></li>
              </ul>
            </div>
            
            <div className="menu-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
            
            <div className="menu-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#github">GitHub</a></li>
                <li><a href="#discord">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} VibeCode. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      {/* Gradient background effect */}
      <div className="footer-gradient"></div>
    </footer>
  );
};

export default Footer; 