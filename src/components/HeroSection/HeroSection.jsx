import React from "react";
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
      </div>
    </section>
  );
}

export default HeroSection;
