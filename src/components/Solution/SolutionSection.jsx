import React from 'react';
import SolutionCard from './SolutionCard';
import './Solution.css';
import solutionsData from '../../data/content/solutions.json';

function SolutionsSection() {
  const { mainHeading, subHeading, solutions } = solutionsData;

  return (
    <section className="solutions-section">
      <h2 className="main-heading">{mainHeading}</h2>
      <p className="sub-heading">{subHeading}</p>
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