import React from 'react';
import './Expertise.css';

function ExpertiseCard({ title, description }) {
  return (
    <div className="expertise-card">
      <div className="expertise-image-placeholder">
      </div> 
      
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="learn-more-link">Learn More &gt;</a> 
    </div>
  );
}

export default ExpertiseCard;