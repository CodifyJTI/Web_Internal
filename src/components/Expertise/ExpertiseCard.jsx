import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Expertise.css';

const ExpertiseCard = ({ title, description }) => {
  const { t } = useTranslation();

  return (
    <div className="expertise-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/portfolio" className="learn-more-link">
        {t('expertise.learnMore')} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '0.85em' }}></i>
      </Link>
    </div>
  );
};

export default ExpertiseCard;
