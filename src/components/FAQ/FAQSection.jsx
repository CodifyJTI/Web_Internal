import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './FAQSection.css';

function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">{t('faq.title')}</h2>
        <p className="faq-subtitle">{t('faq.subtitle')}</p>

        <div className="faq-list">
          {faqKeys.map((key, index) => (
            <div className="faq-item" key={key}>
              <button
                className="faq-question"
                onClick={() => handleToggle(index)}
              >
                {t(`faq.${key}.question`)}
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  <i className={`fa-solid ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </span>
              </button>

              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{t(`faq.${key}.answer`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
