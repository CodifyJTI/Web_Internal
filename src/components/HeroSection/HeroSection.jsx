import React from "react";
import "./HeroSection.css";
import heroData from "../../data/content/hero.json";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{heroData.title}</h1>
        <p>{heroData.subtitle}</p>
      </div>
    </section>
  );
}

export default HeroSection;
