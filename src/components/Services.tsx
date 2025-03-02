import React from 'react';
import './Services.css';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <button className="service-button">Learn More</button>
  </div>
);

const Services: React.FC = () => {
  const servicesList = [
    {
      icon: "🤖",
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs. We create intelligent systems that can automate tasks, analyze data, and enhance user experiences."
    },
    {
      icon: "🧠",
      title: "Agentic AI",
      description: "Specialized AI agents that can autonomously solve complex problems, generating purpose-driven code that meets your specific requirements."
    },
    {
      icon: "🔮",
      title: "Predictive Analytics",
      description: "Leverage the power of AI to predict trends, customer behaviors, and market changes, enabling data-driven business decisions."
    },
    {
      icon: "🚀",
      title: "Rapid Prototyping",
      description: "Transform your ideas into working prototypes in record time, using our AI-powered development process to iterate quickly."
    },
    {
      icon: "🔍",
      title: "AI Consultation",
      description: "Expert guidance on how to integrate AI into your existing systems and processes, maximizing efficiency and innovation."
    },
    {
      icon: "🌐",
      title: "AI-Powered Web Apps",
      description: "Beautiful, responsive web applications enhanced with AI capabilities, providing unique and engaging user experiences."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle">
            Cutting-edge AI solutions to transform your business
          </p>
        </div>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 