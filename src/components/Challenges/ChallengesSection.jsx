import React from 'react';
import { useTranslation } from 'react-i18next';
import ChallengeCard from './ChallengeCard';
import './Challenges.css';

function ChallengesSection() {
  const { t } = useTranslation();
  
  const challenges = [
    {
      id: 1,
      title: t('challenges.items.1.title'),
      description: t('challenges.items.1.desc'),
      icon: "/scattereddata.png"
    },
    {
      id: 2,
      title: t('challenges.items.2.title'),
      description: t('challenges.items.2.desc'),
      icon: "/manualwork.png"
    },
    {
      id: 3,
      title: t('challenges.items.3.title'),
      description: t('challenges.items.3.desc'),
      icon: "/inefficientprocesses.png"
    },
    {
      id: 4,
      title: t('challenges.items.4.title'),
      description: t('challenges.items.4.desc'),
      icon: "/lackinsights.png"
    }
  ];

  return (
    <section className="challenges-section">
      <h2 className="section-heading">{t('challenges.heading')}</h2>
      <div className="challenges-grid">
        {challenges.map(challenge => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            icon={challenge.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default ChallengesSection;