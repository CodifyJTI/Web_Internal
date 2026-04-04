import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDetails.css';

const ServicesDetails = ({ id, subtitle, title, image, description, subServices }) => {
  return (
    <section id={id} className="services-details-section">
      <div className="services-details-container">
        <div className="services-details-content">
          <div className="services-details-text">
            <span className="subtitle-badge">{subtitle}</span>
            <h2>{title}</h2>
            <p className="main-description">{description}</p>
          </div>
          <div className="services-details-image">
            <img src={image} alt={title} loading="lazy" />
          </div>
        </div>

        <div className="sub-services-grid">
          {subServices.map((sub, index) => (
            <div key={index} className="sub-service-card">
              <h3>{sub.title}</h3>
              <p>{sub.desc}</p>
            </div>
          ))}
        </div>

        <div className="services-details-cta">
          <Link to="/portfolio" className="btn btn-primary">
            Learn More about {subtitle}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetails;
