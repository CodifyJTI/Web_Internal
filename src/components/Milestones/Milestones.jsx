import React from 'react';
import { useTranslation } from 'react-i18next';
import './Milestones.css';

function Milestones() {
  const { t } = useTranslation();

  const milestonesData = [
    {
      year: '2022',
      title: t('aboutUs.milestones.items.1.title'),
      description: t('aboutUs.milestones.items.1.desc'),
    },
    {
      year: '2023',
      title: t('aboutUs.milestones.items.2.title'),
      description: t('aboutUs.milestones.items.2.desc'),
    },
    {
      year: '2024',
      title: t('aboutUs.milestones.items.3.title'),
      description: t('aboutUs.milestones.items.3.desc'),
    },
  ];

  return (
    <section className="milestones-section">
      <div className="milestones-container">
        
        <h2 className="section-title">{t('aboutUs.milestones.heading')}</h2>
        <div className="timeline-wrapper">
          {milestonesData.map((item, index) => (
            
            <div className="timeline-item" key={index}>
              <div className="timeline-year">{item.year}</div> 
              
              <div className="timeline-dot"></div>
              
              <div className="timeline-content">
                <h3 className="milestone-title">{item.title}</h3>
                <p className="milestone-description">{item.description}</p>
              </div>
            </div>

          ))}
        </div>

        <div className="future-vision-card">
          <h3>{t('aboutUs.milestones.future.title')}</h3>
          <p>
            {t('aboutUs.milestones.future.desc')}
          </p>
          <div className="future-cta">
            <button className="cta-button">{t('aboutUs.milestones.future.button')}</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Milestones;