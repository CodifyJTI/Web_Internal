import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header.jsx';
import SEO from '../../components/SEO/SEO.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './SimplifyPage.css';

function SimplifyPage() {
  const { t } = useTranslation();

  return (
    <div className="simplify-page">
      <SEO
        title={t('simplifyPage.seoTitle')}
        description={t('simplifyPage.seoDescription')}
        path="/services/simplify"
      />
      <Header />

      <section className="simplify-hero">
        <div className="simplify-hero-content">
          <span>{t('simplifyPage.heroLabel')}</span>
          <h1>{t('simplifyPage.heroTitle')}</h1>
          <p>{t('simplifyPage.heroDescription')}</p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">{t('common.learnMore')}</Link>
          </div>
        </div>
      </section>

      <main className="simplify-main-content">

        <section className="simplify-section layout-2col">
          <div className="simplify-text-content">
            <h2>{t('simplifyPage.section1Title')}</h2>
            <p>{t('simplifyPage.section1Description')}</p>
          </div>
          <div className="simplify-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Streamline Operations" />
          </div>
        </section>

        <section className="simplify-section layout-2col layout-2col-reverse">
          <div className="simplify-text-content">
            <span className="section-dash">{t('simplifyPage.section2Label')}</span>
            <h3>{t('simplifyPage.section2Title')}</h3>
            <p>{t('simplifyPage.section2Description')}</p>

            <div className="simplify-subgrid">
              <div className="subgrid-item">
                <h4>{t('simplifyPage.projectOverviewTitle')}</h4>
                <p>{t('simplifyPage.projectOverviewDescription')}</p>
              </div>
              <div className="subgrid-item">
                <h4>{t('simplifyPage.clientFeedbackTitle')}</h4>
                <p>{t('simplifyPage.clientFeedbackDescription')}</p>
              </div>
            </div>

            <div className="simplify-links">
              <Link to="/portfolio" className="text-link">{t('common.learnMore')} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '0.85em' }}></i></Link>
              <Link to="/contact" className="text-link">{t('common.contact')} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '0.85em' }}></i></Link>
            </div>
          </div>
          <div className="simplify-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Success Story" />
          </div>
        </section>

        <section className="simplify-section layout-2col">
          <div className="simplify-text-content">
            <h3>{t('simplifyPage.section3Title')}</h3>
            <p>{t('simplifyPage.section3Description')}</p>

            <ul className="icon-list">
              <li>
                <span className="icon-list-icon"><i className="fa-solid fa-check"></i></span>
                <p>{t('simplifyPage.agile')}</p>
              </li>
              <li>
                <span className="icon-list-icon"><i className="fa-solid fa-check"></i></span>
                <p>{t('simplifyPage.userCentered')}</p>
              </li>
              <li>
                <span className="icon-list-icon"><i className="fa-solid fa-check"></i></span>
                <p>{t('simplifyPage.ci')}</p>
              </li>
            </ul>
          </div>
          <div className="simplify-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Ideas into Reality" />
          </div>
        </section>

        <section className="simplify-section simplify-grid-section">
          <div className="simplify-text-content"
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>{t('simplifyPage.section4Title')}</h2>
            <p>{t('simplifyPage.section4Description')}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SimplifyPage;
