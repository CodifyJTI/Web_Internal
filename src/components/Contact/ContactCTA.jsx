import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactCTA.css';

function ContactCTA() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.acceptedTerms && formData.name && formData.email) {
      const formspreeEndpoint = "https://formspree.io/f/mqaevepy";

      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert(t('contactCTA.alerts.success'));
          setFormData({ name: '', email: '', message: '', acceptedTerms: false });
        } else {
          alert(t('contactCTA.alerts.error'));
        }
      } catch (error) {
        alert(t('contactCTA.alerts.connectionError'));
      }
    } else {
      alert(t('contactCTA.alerts.incomplete'));
    }
  };

  return (
    <section className="contact-cta-section">
      <div className="contact-cta-container">

        <div className="cta-content">
          <h2>{t('contactCTA.title')}</h2>
          <p>{t('contactCTA.description')}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-with-icon">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder={t('contactCTA.namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-with-icon">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder={t('contactCTA.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-with-icon textarea-icon">
            <i className="fa-solid fa-message"></i>
            <textarea
              name="message"
              placeholder={t('contactCTA.messagePlaceholder')}
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="acceptedTerms"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptedTerms">{t('contactCTA.acceptTerms')}</label>
          </div>

          <button type="submit" className="connect-button">
            <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i>
            {t('contactCTA.connectButton')}
          </button>
        </form>

      </div>
    </section>
  );
}

export default ContactCTA;
