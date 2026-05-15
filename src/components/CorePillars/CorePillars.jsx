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
            <h2>{t('corePillars.empowering.title')}</h2>
            <p>{t('corePillars.empowering.description')}</p>
          </div>

          <div className="empowering-image-wrapper">
            <img
              src="/tes.png"
              alt={t('corePillars.empowering.imageAlt')}
              className="empowering-image-placeholder"
            />
          </div>
        </div>
      </section>

      <section className="core-pillars-section">
        <div className="core-pillars-container">
          <div className="core-pillars-text">
            <h2>{t('corePillars.dataMeetsExecution.title')}</h2>
            <p>{t('corePillars.dataMeetsExecution.description')}</p>
            <div className="pillars-list">
              <div className="pillar-item">
                <div className="pillar-fa-icon">
                  <i className="fa-solid fa-chart-pie"></i>
                </div>
                <div>
                  <h3>{t('corePillars.dataMeetsExecution.dataStrategy.title')}</h3>
                  <p>{t('corePillars.dataMeetsExecution.dataStrategy.description')}</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-fa-icon">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div>
                  <h3>{t('corePillars.dataMeetsExecution.technicalExecution.title')}</h3>
                  <p>{t('corePillars.dataMeetsExecution.technicalExecution.description')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="core-pillars-image">
            <div className="image-placeholder">
              <i className="fa-solid fa-image" style={{ fontSize: '40px', color: 'currentColor' }}></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
