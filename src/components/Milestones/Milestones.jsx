import React from 'react';
import './Milestones.css';

function Milestones() {
  const milestonesData = [
    {
      year: '2022',
      title: 'Founding Year',
      description: 'Founded in 2022, our agency began with a vision to transform businesses through technology. We started with a small team of dedicated professionals.',
    },
    {
      year: '2023',
      title: 'First Major Client Acquisition',
      description: 'In 2023, we launched our first major project, showcasing our capabilities in custom software development. This project set the foundation for future successes.',
    },
    {
      year: '2024',
      title: 'Product Development Expansion',
      description: 'We expanded our services to include full-cycle product development, helping startups and enterprises build and scale their digital products from scratch.',
    },
  ];

  return (
    <section className="milestones-section">
      <div className="milestones-container">
        
        <h2 className="section-title">Our Journey: Key Milestones</h2>
        <div className="timeline-wrapper">
          {milestonesData.map((item, index) => (
            
            <div className="timeline-item" key={index}>
              <div className="timeline-year">{item.year}</div> 
              
              <div className="timeline-dot"></div>
              
              <div className="timeline-content">
                <h3 className="milestone-title">{item.title}</h3>
                <p className="milestone-description">{item.description}</p>
              </div>
            </div>

          ))}
        </div>

        <div className="future-vision-card">
          <h3>Our Vision for the Future</h3>
          <p>
            We envision a future where technology seamlessly integrates with business processes. Our mission is to lead this transformation with innovative solutions.
          </p>
          <div className="future-cta">
            <button className="cta-button">See Our Roadmap</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Milestones;
