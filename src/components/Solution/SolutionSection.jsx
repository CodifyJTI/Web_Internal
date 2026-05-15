import React from 'react';
import { useTranslation } from 'react-i18next';
import SolutionCard from './SolutionCard';
import './Solution.css';

function SolutionsSection() {
  const { t } = useTranslation();

  const solutions = [
    {
      id: 1,
      title: t('solutions.simplify.title'),
      description: t('solutions.simplify.description'),
      icon: "/simplify.png",
      link: "/services/simplify"
    },
    {
      id: 2,
      title: t('solutions.integrate.title'),
      description: t('solutions.integrate.description'),
      icon: "/integrate.png",
      link: "/services/integrate"
    },
    {
      id: 3,
      title: t('solutions.automate.title'),
      description: t('solutions.automate.description'),
      icon: "/automate.png",
      link: "/services/automate"
    }
  ];

  return (
    <section className="solutions-section">
      <h2 className="main-heading">{t('solutions.heading')}</h2>
      <p className="sub-heading">{t('solutions.subheading')}</p>
      <div className="solution-grid">
        {solutions.map(solution => (
          <SolutionCard
            key={solution.id}
            title={solution.title}
            description={solution.description}
            icon={solution.icon}
            link={solution.link}
          />
        ))}
      </div>
    </section>
  );
}

export default SolutionsSection;
