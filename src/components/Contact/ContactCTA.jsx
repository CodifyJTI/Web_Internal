import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactCTA.css';

function ContactCTA() {
  const { t } = useTranslation();
  
  // State untuk mengelola input formulir
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.acceptedTerms && formData.name && formData.email) {
      console.log('Formulir berhasil dikirim:', formData);
      alert(t('contactCTA.form.button') + '...');
    } else {
      alert('Error');
    }
  };

  return (
    <section className="contact-cta-section">
      <div className="contact-cta-container"> 
        
        <div className="cta-content">
          <h2>{t('contactCTA.title')}</h2>
          <p> 
            {t('contactCTA.subtitle')}
          </p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t('contactCTA.form.name')}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('contactCTA.form.email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t('contactCTA.form.message')}
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="acceptedTerms" 
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptedTerms">{t('contactCTA.form.terms')}</label> 
          </div>
          
          <button type="submit" className="connect-button">{t('contactCTA.form.button')}</button>
        </form>

      </div> 
    </section>
  );
}

export default ContactCTA;
