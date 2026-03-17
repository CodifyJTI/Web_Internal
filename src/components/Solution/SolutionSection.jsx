import React from 'react';
import { useTranslation } from 'react-i18next';
import SolutionCard from './SolutionCard';
import './Solution.css';

function SolutionsSection() {
  const { t } = useTranslation();

  const solutions = [
    {
      id: 1,
      title: t('solutions.items.simplify.title'),
      description: t('solutions.items.simplify.desc'),
      icon: "/simplify.png",
      link: "/services/simplify"
    },
    {
      id: 2,
      title: t('solutions.items.integrate.title'),
      description: t('solutions.items.integrate.desc'),
      icon: "/integrate.png",
      link: "/services/integrate"
    },
    {
      id: 3,
      title: t('solutions.items.automate.title'),
      description: t('solutions.items.automate.desc'),
      icon: "/automate.png",
      link: "/services/automate"
    }
  ];

  return (
    <section className="solutions-section">
      <h2 className="main-heading">{t('solutions.mainHeading')}</h2>
      <p className="sub-heading">{t('solutions.subHeading')}</p>
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