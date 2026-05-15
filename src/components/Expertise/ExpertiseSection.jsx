import React from 'react';
import { useTranslation } from 'react-i18next';
import ExpertiseCard from './ExpertiseCard';
import './Expertise.css';

function ExpertiseSection() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('expertise.digitalPlatform.title'),
      description: t('expertise.digitalPlatform.description')
    },
    {
      id: 2,
      title: t('expertise.unifiedData.title'),
      description: t('expertise.unifiedData.description')
    },
    {
      id: 3,
      title: t('expertise.revenueOps.title'),
      description: t('expertise.revenueOps.description')
    }
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-intro">
        <h2 className="section-heading">{t('expertise.heading')}</h2>
        <p className="philosophy">{t('expertise.philosophy')}</p>
      </div>

      <div className="services-list">
        {services.map(service => (
          <ExpertiseCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ExpertiseSection;
