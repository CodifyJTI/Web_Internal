import React from 'react';
import SolutionCard from './SolutionCard';
import './Solution.css';

function SolutionsSection() {
  const solutions = [
    {
      id: 1,
      title: "Simplify",
      description: "We build intuitive systems to replace your complex workflows",
      icon: "/simplify.png",
      link: "/services/simplify"
    },
    {
      id: 2,
      title: "Integrate",
      description: "We connect all your applications and data sources into a seamless ecosystem",
      icon: "/integrate.png",
      link: "/services/integrate"
    },
    {
      id: 3,
      title: "Automate",
      description: "We deploy intelligent automation to handle your repetitive task 24/7",
      icon: "/automate.png",
      link: "/services/automate"
    }
  ];

  return (
    <section className="solutions-section">
      <h2 className="main-heading">Well, you're in the right spot. Here at Codify, We Empower Your Business Through Innovation</h2>
      <p className="sub-heading">Our services are designed to elevate your business by simplifying processes, integrating systems, and automating tasks. Discover how we can help you achieve digital transformation.</p>
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
