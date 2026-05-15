import React from 'react';
import { useTranslation } from 'react-i18next';
import './Milestones.css';

function Milestones() {
  const { t } = useTranslation();

  const milestonesData = [
    {
      year: '2022',
      title: t('milestones.2022.title'),
      description: t('milestones.2022.description'),
    },
    {
      year: '2023',
      title: t('milestones.2023.title'),
      description: t('milestones.2023.description'),
    },
    {
      year: '2024',
      title: t('milestones.2024.title'),
      description: t('milestones.2024.description'),
    },
  ];

  return (
    <section className="milestones-section">
      <div className="milestones-container">

        <h2 className="section-title">{t('milestones.sectionTitle')}</h2>
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
          <h3>{t('milestones.futureVision.title')}</h3>
          <p>{t('milestones.futureVision.description')}</p>
          <div className="future-cta">
            <button className="cta-button">{t('milestones.futureVision.cta')}</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Milestones;
