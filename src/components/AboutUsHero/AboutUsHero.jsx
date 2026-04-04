import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsHero.css'; 

const AboutHero = () => {
  return (
    <section id="about-hero" className="about-hero">
      <div className="about-hero-container">
        
        <h1>Transforming Businesses Through Innovative Solutions</h1>
        <p>
          At our core, we empower Indonesian businesses to embrace digital transformation. Our mission is to simplify, integrate, and automate processes for sustainable growth.
        </p>
        <div className="about-hero-buttons">
          <Link to="/portfolio" className="btn btn-primary">Learn More</Link>
          <Link to="/contact" className="btn btn-secondary-on-dark">Contact</Link>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
