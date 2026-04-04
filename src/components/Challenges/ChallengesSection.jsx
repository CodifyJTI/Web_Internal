import React from 'react';
import ChallengeCard from './ChallengeCard';
import './Challenges.css';

function ChallengesSection() {
  const challenges = [
    {
      id: 1,
      title: "Scattered Data",
      description: "Data across multiple spreadsheets and systems",
      icon: "/scattereddata.png"
    },
    {
      id: 2,
      title: "Manual Work",
      description: "From wasting hours on repetitive tasks?",
      icon: "/manualwork.png"
    },
    {
      id: 3,
      title: "Inefficient Processes",
      description: "Legacy systems slowing down your growth?",
      icon: "/inefficientprocesses.png"
    },
    {
      id: 4,
      title: "Lack of insights",
      description: "Struggling to get clear, actionable insights from your data?",
      icon: "/lackinsights.png"
    }
  ];

  return (
    <section className="challenges-section">
      <h2 className="section-heading">Is Your Business Facing These Challenges?</h2>
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
