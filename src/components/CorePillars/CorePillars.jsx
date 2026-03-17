// CorePillars.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./CorePillars.css";

export default function SectionCorePillar() {
  const { t } = useTranslation();

  return (
    <>
      <section className="empowering-section">
        <div className="empowering-container">
          <div className="empowering-text-content">
            <div className="empowering-icon-circle">
              <span className="empowering-icon-text">12<br />36</span>
            </div>
            <h2>
              {t('aboutUs.corePillars.empowering.title')}
            </h2>
            <p>
              {t('aboutUs.corePillars.empowering.desc')}
            </p>
          </div>

          <div className="empowering-image-wrapper">
            <img
              src="/tes.png"
              alt="Digital transformation illustration"
              className="empowering-image-placeholder"
            />
          </div>
        </div>
      </section>

      <section className="core-pillars-section">
        <div className="core-pillars-container">
          <div className="core-pillars-text">
            <h2>
              {t('aboutUs.corePillars.harnessing.title')}
            </h2>
            <p>
              {t('aboutUs.corePillars.harnessing.desc')}
            </p>
            <div className="pillars-list">
              <div className="pillar-item">
                <img src="/tes.png" alt={t('aboutUs.corePillars.harnessing.items.1.title')} width={50} height={50} />
                <div>
                  <h3>{t('aboutUs.corePillars.harnessing.items.1.title')}</h3>
                  <p>
                    {t('aboutUs.corePillars.harnessing.items.1.desc')}
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <img src="/tes.png" alt={t('aboutUs.corePillars.harnessing.items.2.title')} width={50} height={50} />
                <div>
                  <h3>{t('aboutUs.corePillars.harnessing.items.2.title')}</h3>
                  <p>
                    {t('aboutUs.corePillars.harnessing.items.2.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="core-pillars-image">
            <div className="image-placeholder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}