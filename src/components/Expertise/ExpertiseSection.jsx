import React from 'react';
import ExpertiseCard from './ExpertiseCard';
import './Expertise.css';

function ExpertiseSection() {
  const services = [
    {
      id: 1,
      title: "Digital Platform & Application Development",
      description: "We have engineered and launched hundreds of digital assets from public facing corporate websites and e-commerce platforms to complex internal web applications and mobile apps. Our excellence ensures we build platforms that are not only visually compelling and user friendly but also secure, scalable, and tailored to your specific operational needs"
    },
    {
      id: 2,
      title: "Unified Data & Business Intelligence",
      description: "Many businesses struggle with data scattered across spreadsheets, marketplace portals, and internal software. We specialize in untangling this complexity. We have a proven history of integrating disparate data sources and channeling them into a single source of truth, often a custom built automated dashboard that provides clear, real-time insights for smarter decision making"
    },
    {
      id: 3,
      title: "Revenue & Operations Automation",
      description: "We have extensive experience in automating critical business processes, with a strong focus on sales and revenue generation. Whether it's deploying an intelligent AI Agent to handle customer inquiries and lead qualification or implementing a simple, cost-effective script to automate reporting, our focus is always on the result: increasing your team's efficiency, reducing manual error, and allowing you to scale your operations effortlessly"
    }
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-intro">
        <h2 className="section-heading">Our proven expertise</h2>
        <p className="philosophy">
          Our philosophy is built on execution. With a collective track record spanning hundreds of successfully delivered projects, our expertise is proven in the field.
          We have partnered with businesses across Indonesia to build the critical digital infrastructure they need to operate, grow, and lead in their respective industries. 
        </p>
      </div>
      
      <div className="services-list">
        {services.map(service => (
          <ExpertiseCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ExpertiseSection;