import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesPageHero.css';

function ServicesPageHero() {
  const { t } = useTranslation();

  return (
    <section className="services-hero">
      <div className="hero-content">
        <span className="hero-subtitle">{t('servicesPage.hero.subtitle')}</span>
        <h1>{t('servicesPage.hero.title')}</h1> 
        <p>{t('servicesPage.hero.desc')}</p>
        <h2 className="section-title">{t('servicesPage.hero.sectionTitle')}</h2>
      </div>
    </section>
  );
}

export default ServicesPageHero;