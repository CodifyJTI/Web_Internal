import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUsHero.css'; 

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section id="about-hero" className="about-hero">
      <div className="about-hero-container">
        
        <h1>{t('aboutUs.hero.title')}</h1>
        <p>
          {t('aboutUs.hero.subtitle')}
        </p>
        <div className="about-hero-buttons">
          <a href="#learn-more" className="btn btn-primary">{t('common.learnMore')}</a>
          <a href="#contact" className="btn btn-secondary-on-dark">{t('common.contact')}</a>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;