import React from 'react';
import './Challenges.css';

function ChallengeCard({ title, description, icon, faIcon }) {
  return (
    <div className="challenge-card">
      {faIcon ? (
        <div className="challenge-fa-icon">
          <i className={faIcon}></i>
        </div>
      ) : (
        <img src={icon} alt={title} className="challenge-icon" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ChallengeCard;
