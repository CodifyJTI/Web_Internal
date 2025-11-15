import React from 'react';
import './TeamSection.css';

const teamMembers = [
  { name: "Jagad Nabil Tuah Imanda", role: "CEO & Product Development", initial: "J" },
  { name: "Raden Fadil Aji Saputra", role: "Product Management", initial: "R" },
  { name: "Muhammad Yudistira Mawadda", role: "Customer Management & Project Manager", initial: "M" },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-container">
        
        <h2 className="team-title">Our Team</h2>
        <p className="team-subtitle">Meet the experts driving digital transformation.</p>

        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-card">
              <div className="avatar">{member.initial}</div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="hiring-cta">
          <p className="hiring-text">We're always looking for talented experts to join our team!</p>
          <button className="hiring-button">View Open Positions</button>
        </div>

      </div>
    </section>
  );
}
