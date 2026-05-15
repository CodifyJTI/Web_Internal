import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import FormField from '../../components/FormField/FormField.jsx';
import './ContactPage.css';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeEndpoint = "https://formspree.io/f/mqaevepy";

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const isFormValid = formData.name && formData.email && formData.message;

    if (isFormValid) {
      setIsSubmitting(true);
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert(t('contactPage.alerts.success'));
          setFormData({ name: '', email: '', message: '' });
          setTouched({ name: false, email: false, message: false });
        } else {
          alert(t('contactPage.alerts.error'));
        }
      } catch (error) {
        alert(t('contactPage.alerts.connectionError'));
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert(t('contactPage.alerts.incomplete'));
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>{t('contactPage.heroTitle')}</h1>
            <p>{t('contactPage.heroDescription')}</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-info">
              <h2>{t('contactPage.discussTitle')}</h2>
              <p>{t('contactPage.discussDescription')}</p>
              <div className="info-item">
                <strong>{t('contactPage.emailLabel')}</strong>
                <span>hello@codify.id</span>
              </div>
              <div className="info-item">
                <strong>{t('contactPage.phoneLabel')}</strong>
                <span>+62 852-0063-4181</span>
              </div>
              <div className="info-item">
                <strong>{t('contactPage.addressLabel')}</strong>
                <span>Ruko Grand Galaxy City, Bekasi Selatan, Kota Bekasi</span>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>{t('contactPage.sendMessageTitle')}</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <FormField
                  label={t('contactPage.nameLabel')}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('contactPage.namePlaceholder')}
                  required
                  isTouched={touched.name}
                />
                <FormField
                  label={t('contactPage.emailFieldLabel')}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('contactPage.emailPlaceholder')}
                  required
                  isTouched={touched.email}
                />
                <FormField
                  label={t('contactPage.messageLabel')}
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('contactPage.messagePlaceholder')}
                  required
                  isTouched={touched.message}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contactPage.submitting') : t('contactPage.submitButton')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
