import React from 'react';
import './ServicesDetails.css';

function ServicesDetail({ id, subtitle, title, image, description, subServices }) {
  return (
    <section id={id} className="service-detail-section">
      
      {/* =========================================================
        == PASTIKAN 'div' PEMBUNGKUS INI ADA == 
        =========================================================
      */}
      <div className="service-detail-content"> 
        <span className="service-subtitle">{subtitle}</span>
        <h2 className="service-title">{title}</h2>
        <p className="service-description">{description}</p>
        
        {/* Grid 2x2 untuk Sub-Services */}
        <div className="sub-services-grid">
          {subServices.map((service, index) => (
            <div key={index} className="sub-service-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <a href="#" className="learn-more-link">
          Learn More about {subtitle}
        </a>
      </div>
      {/* =========================================================
        == BATAS AKHIR 'div' PEMBUNGKUS == 
        =========================================================
      */}

      {/* Kolom Kanan: Gambar */}
      <div className="service-detail-image">
        <img src={image} alt={`${subtitle} service illustration`} />
      </div>

    </section>
  );
}

export default ServicesDetail;