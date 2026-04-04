import React from 'react';
import { Link } from 'react-router-dom';
import './Expertise.css';

const ExpertiseCard = ({ title, description }) => {
  return (
    <div className="expertise-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/portfolio" className="learn-more-link">Learn More &gt;</Link>
    </div>
  );
};

export default ExpertiseCard;
