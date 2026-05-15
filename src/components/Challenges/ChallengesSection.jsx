import React from 'react';
import { useTranslation } from 'react-i18next';
import ChallengeCard from './ChallengeCard';
import './Challenges.css';

function ChallengesSection() {
  const { t } = useTranslation();

  const challenges = [
    {
      id: 1,
      title: t('challenges.scatteredData.title'),
      description: t('challenges.scatteredData.description'),
      icon: "/scattereddata.png",
      faIcon: "fa-solid fa-database"
    },
    {
      id: 2,
      title: t('challenges.manualWork.title'),
      description: t('challenges.manualWork.description'),
      icon: "/manualwork.png",
      faIcon: "fa-solid fa-hand"
    },
    {
      id: 3,
      title: t('challenges.inefficientProcesses.title'),
      description: t('challenges.inefficientProcesses.description'),
      icon: "/inefficientprocesses.png",
      faIcon: "fa-solid fa-gears"
    },
    {
      id: 4,
      title: t('challenges.lackOfInsights.title'),
      description: t('challenges.lackOfInsights.description'),
      icon: "/lackinsights.png",
      faIcon: "fa-solid fa-chart-simple"
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
            faIcon={challenge.faIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default ChallengesSection;
