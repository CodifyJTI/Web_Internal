import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './AboutUsHero.css';

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section id="about-hero" className="about-hero">
      <div className="about-hero-container">

        <h1>{t('about.heroTitle')}</h1>
        <p>{t('about.heroSubtitle')}</p>
        <div className="about-hero-buttons">
          <Link to="/portfolio" className="btn btn-primary">{t('about.learnMore')}</Link>
          <Link to="/contact" className="btn btn-secondary-on-dark">{t('about.contact')}</Link>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
