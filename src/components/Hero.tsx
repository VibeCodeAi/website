import React from 'react';
import './Hero.css';
import Mascot from './Mascot';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">AI-Powered</span> Code<br />
            for the Future
          </h1>
          <p className="hero-description">
            VibeCode is an innovative AI startup house specializing in creating 
            powerful solutions through agentic AI technology. We turn your ideas 
            into reality with cutting-edge artificial intelligence.
          </p>
          <div className="hero-cta">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">AI Support</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="mascot-container">
            <Mascot className="hero-mascot" />
          </div>
          <div className="code-block">
            <pre className="code">
              <code>{`// VibeCode AI Demo
const createSolution = async (idea) => {
  const aiModel = await VibeCode.initialize();
  
  // Transform the idea into code
  const solution = await aiModel.generate({
    prompt: idea,
    quality: "exceptional",
    creativity: 0.8
  });
  
  return deployToProduction(solution);
};

// Success! Your AI solution is ready.`}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="wave-divider" style={{ transform: 'rotate(180deg)' }}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 