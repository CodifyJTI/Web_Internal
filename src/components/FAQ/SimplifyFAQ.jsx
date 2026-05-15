import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SimplifyFAQ.css';

function SimplifyFAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="simplify-faq-section">
      <div className="faq-header">
        <h2>{t('simplifyFAQ.title')}</h2>
        <p>{t('simplifyFAQ.subtitle')}</p>
      </div>

      <div className="faq-accordion">
        {faqKeys.map((key, index) => (
          <div
            key={key}
            className={`faq-accordion-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button className="accordion-toggle" onClick={() => toggleAccordion(index)}>
              <h3>{t(`simplifyFAQ.${key}.question`)}</h3>
              <span className="accordion-icon">
                <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-body">
                <p>{t(`simplifyFAQ.${key}.answer`)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-footer">
        <h3>{t('simplifyFAQ.footerTitle')}</h3>
        <p>{t('simplifyFAQ.footerSubtitle')}</p>
        <button className="contact-pill-button">
          <i className="fa-solid fa-envelope" style={{ marginRight: '6px' }}></i>
          {t('simplifyFAQ.contactButton')}
        </button>
      </div>
    </section>
  );
}

export default SimplifyFAQ;
