import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDetails.css';

function ServicesDetail({ id, subtitle, title, image, description, subServices }) {
  return (
    <section id={id} className="service-detail-section">
      <div className="service-detail-content"> 
        <span className="service-subtitle">{subtitle}</span>
        <h2 className="service-title">{title}</h2>
        <p className="service-description">{description}</p>

        <div className="sub-services-grid">
          {subServices.map((service, index) => (
            <div key={index} className="sub-service-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        
        <Link to={`/services/${id}`} className="learn-more-link">
          Learn More about {subtitle}
        </Link>

      </div>

      <div className="service-detail-image">
        <img src={image} alt={`${subtitle} service illustration`} />
      </div>
    </section>
  );
}

export default ServicesDetail;
