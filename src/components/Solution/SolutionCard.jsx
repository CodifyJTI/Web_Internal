import React from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORT 'Link'
import './Solution.css';

// Menerima 'icon' dan 'link' sebagai properti baru
function SolutionCard({ title, description, icon, link }) {
  return (
    // Bungkus seluruh kartu dengan <Link>
    <Link to={link} className="solution-card-link">
      <div className="solution-card">
        <img src={icon} alt={title} className="solution-icon" loading="lazy" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default SolutionCard;