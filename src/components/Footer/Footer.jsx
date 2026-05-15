import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-top-section">

        <div className="contact-info-block">
          <Link to="/">
            <img
              src="/Logo_Codify.png"
              alt="Codify Logo"
              className="footer-logo"
              style={{ height: '50px' }}
              loading="lazy"
            />
          </Link>
          <p className="address-detail">
            <i className="fa-solid fa-location-dot" style={{ marginRight: '8px' }}></i>
            {t('footer.address')}
          </p>
          <p className="contact-detail">
            <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i>
            {t('footer.phone')}
          </p>
          <div className="social-media-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-links-block">
          <h4>{t('footer.ourServices')}</h4>
          <ul>
            <li><Link to="/services/simplify">Simplify</Link></li>
            <li><Link to="/services/automate">Automate</Link></li>
            <li><Link to="/services/integrate">Integrate</Link></li>
          </ul>
        </div>

        <div className="footer-links-block">
          <h4>{t('footer.quickLinks')}</h4>
          <ul>
            <li><Link to="/aboutUs">{t('footer.aboutUs')}</Link></li>
            <li><Link to="/contact">{t('footer.contact')}</Link></li>
            <li><a href="#faq">{t('footer.faqSection')}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-section">
        <p className="copyright-text">{t('footer.copyright')}</p>
        <div className="legal-links">
            <Link to="/privacy-policy">{t('footer.privacyPolicy')}</Link>
            <Link to="/terms-of-service">{t('footer.termsOfService')}</Link>
            <a href="#">{t('footer.cookiesSettings')}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
