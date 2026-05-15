import React from 'react';
import { useTranslation } from 'react-i18next';
import './TeamSection.css';

export default function TeamSection() {
  const { t } = useTranslation();

  const teamMembers = [
    { name: t('team.jagad.name'), role: t('team.jagad.role'), initial: "J" },
    { name: t('team.fadil.name'), role: t('team.fadil.role'), initial: "R" },
    { name: t('team.yudistira.name'), role: t('team.yudistira.role'), initial: "M" },
  ];

  return (
    <section className="team-section">
      <div className="team-container">

        <h2 className="team-title">{t('team.title')}</h2>
        <p className="team-subtitle">{t('team.subtitle')}</p>

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
          <p className="hiring-text">{t('team.hiringText')}</p>
          <button className="hiring-button">{t('team.hiringButton')}</button>
        </div>

      </div>
    </section>
  );
}
