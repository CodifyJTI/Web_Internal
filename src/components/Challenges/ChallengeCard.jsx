import React from 'react';
import './Challenges.css';

function ChallengeCard({ title, description, icon }) {
  return (
    <div className="challenge-card">
      <img src={icon} alt={title} className="challenge-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ChallengeCard;