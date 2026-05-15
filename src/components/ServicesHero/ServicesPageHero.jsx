import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesPageHero.css';

function ServicesPageHero() {
  const { t } = useTranslation();

  return (
    <section className="services-hero">
      <div className="hero-content">
        <span className="hero-subtitle">{t('servicesHero.subtitle')}</span>
        <h1>{t('servicesHero.title')}</h1>
        <p>{t('servicesHero.description')}</p>
        <h2 className="section-title">{t('servicesHero.tagline')}</h2>
      </div>
    </section>
  );
}

export default ServicesPageHero;
