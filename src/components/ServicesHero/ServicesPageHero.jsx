import React from 'react';
import './ServicesPageHero.css';
// File gambar dari folder /public

// Data untuk 3 kolom
const coreServices = [
  {
    icon: '/gambar1.png', //
    title: 'Simplify: Custom System & Software Development',
    desc: 'We transform complex, outdated, or manual business procedures into simple and intuitive digital systems. Our expertise lies in building custom solutions from the ground up.',
    link: '#simplify'
  },
  {
    icon: '/gambar2.png', //
    title: 'Integrate: Unified System & Data Integration',
    desc: 'Data trapped in disconnected systems is a barrier to growth. We specialize in breaking down these silos. We design and build robust APIs and automated data pipelines...',
    link: '#integrate'
  },
  {
    icon: '/gambar3.png', //
    title: 'Automate: Intelligent Process Automation',
    desc: 'We identify and eliminate repetitive, time-consuming tasks to free up your team for high-value work. Leveraging AI models for forecasting, intelligent agents...',
    link: '#automate'
  }
];

function ServicesPageHero() {
  return (
    <section className="services-hero">
      <div className="hero-content">
        {/* --- Bagian Hero Awal --- */}
        <span className="hero-subtitle">Our Services: End-to-End Solutions for Your Business</span>
        <h1>Technology Solutions Designed for Business Growth</h1> 
        <p>We help Indonesian businesses navigate their digital transformation journey. Our services are structured as a clear pathway from simplifying complex processes to integrating scattered data and automating for ultimate efficiency.</p> 

        {/* --- Bagian 3 Kolom --- */}
        
        {/* Judul ini harus di atas grid */}
        <h2 className="section-title">Discover Our Core Services: Simplify, Integrate, and Automate for Success</h2>
        
        <div className="core-services-grid">
          {coreServices.map((service) => (
            <div key={service.title} className="core-service-card">
              
              <div className="service-icon">
                <img src={service.icon} alt={`${service.title} icon`} />
              </div>
              
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} className="service-link">Learn More &gt;</a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default ServicesPageHero;