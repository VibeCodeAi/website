import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  // Colors for particles
  const colors = [
    'rgba(255, 166, 201, opacity)', // Pink
    'rgba(217, 166, 255, opacity)', // Purple
    'rgba(166, 196, 255, opacity)', // Light Blue
    'rgba(166, 255, 206, opacity)', // Mint
    'rgba(255, 236, 166, opacity)', // Light Yellow
  ];

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create initial particles
    createParticles();

    // Start animation
    animate();
  };

  const createParticles = () => {
    if (!canvasRef.current) return;

    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const particleCount = Math.floor((width * height) / 15000); // Adjust density here
    
    particles.current = [];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 1;
      const x = Math.random() * width;
      const y = Math.random() * height;
      const speedX = Math.random() * 1 - 0.5;
      const speedY = Math.random() * 1 - 0.5;
      const colorIndex = Math.floor(Math.random() * colors.length);
      const alpha = Math.random() * 0.5 + 0.1; // Random opacity
      const color = colors[colorIndex].replace('opacity', alpha.toString());

      particles.current.push({
        x,
        y,
        size,
        speedX,
        speedY,
        color,
        alpha
      });
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.current.forEach(particle => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });

    // Connect particles with lines if they're close enough
    connectParticles(ctx);

    // Continue animation
    animationRef.current = requestAnimationFrame(animate);
  };

  const connectParticles = (ctx: CanvasRenderingContext2D) => {
    const maxDistance = 100; // Max distance to draw connections
    const particleList = particles.current;
    
    for (let i = 0; i < particleList.length; i++) {
      for (let j = i + 1; j < particleList.length; j++) {
        const dx = particleList[i].x - particleList[j].x;
        const dy = particleList[i].y - particleList[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // The opacity decreases with distance
          const opacity = 1 - (distance / maxDistance);
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(166, 196, 255, ${opacity * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particleList[i].x, particleList[i].y);
          ctx.lineTo(particleList[j].x, particleList[j].y);
          ctx.stroke();
        }
      }
    }
  };

  // Handle resize
  const handleResize = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      createParticles();
    }
  };

  useEffect(() => {
    initCanvas();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" />;
};

export default ParticleBackground; 