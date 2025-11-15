import React from 'react';
import './AboutUsHero.css'; 

const AboutHero = () => {
  return (
    <section id="about-hero" className="about-hero">
      {/* Kontainer ini sekarang akan menengahkan konten secara otomatis */}
      <div className="about-hero-container">
        
        {/* Konten Teks dan Tombol */}
        <h1>Transforming Businesses Through Innovative Solutions</h1>
        <p>
          At our core, we empower Indonesian businesses to embrace digital
          transformation. Our mission is to simplify, integrate, and automate
          processes for sustainable growth.
        </p>
        <div className="about-hero-buttons">
          <a href="#learn-more" className="cta-button primary">Learn More</a>
          <a href="#contact" className="cta-button secondary">Contact</a>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;