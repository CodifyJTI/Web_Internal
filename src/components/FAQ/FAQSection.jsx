import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './FAQSection.css';

function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: t('faq.items.1.q'),
      answer: t('faq.items.1.a')
    },
    {
      question: t('faq.items.2.q'),
      answer: t('faq.items.2.a')
    },
    {
      question: t('faq.items.3.q'),
      answer: t('faq.items.3.a')
    },
    {
      question: t('faq.items.4.q'),
      answer: t('faq.items.4.a')
    },
    {
      question: t('faq.items.5.q'),
      answer: t('faq.items.5.a')
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">{t('faq.heading')}</h2>
        <p className="faq-subtitle">
          {t('faq.subheading')}
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => handleToggle(index)}
              >
                {item.question}
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>+</span>
              </button>
              
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;