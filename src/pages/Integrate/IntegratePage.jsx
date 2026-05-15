import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header.jsx';
import SEO from '../../components/SEO/SEO.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './IntegratePage.css';

function IntegratePage() {
  const { t } = useTranslation();

  return (
    <div className="integrate-page">
      <SEO
        title={t('integratePage.seoTitle')}
        description={t('integratePage.seoDescription')}
        path="/services/integrate"
      />
      <Header />

      <section className="integrate-hero">
        <div className="integrate-hero-content">
          <span>{t('integratePage.heroLabel')}</span>
          <h1>{t('integratePage.heroTitle')}</h1>
          <p>{t('integratePage.heroDescription')}</p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">{t('common.learnMore')}</Link>
            <Link to="/contact" className="btn btn-secondary">{t('common.contact')}</Link>
          </div>
        </div>
      </section>

      <main className="integrate-main-content">

        <section className="integrate-section layout-2col">
          <div className="integrate-text-content">
            <h2>{t('integratePage.section1Title')}</h2>
            <p>{t('integratePage.section1Description')}</p>

            <div className="integrate-subgrid">
              <div className="subgrid-item">
                <span className="subgrid-icon"><i className="fa-solid fa-link"></i></span>
                <h4>{t('integratePage.customApisTitle')}</h4>
                <p>{t('integratePage.customApisDescription')}</p>
              </div>
              <div className="subgrid-item">
                <span className="subgrid-icon"><i className="fa-solid fa-puzzle-piece"></i></span>
                <h4>{t('integratePage.middlewareTitle')}</h4>
                <p>{t('integratePage.middlewareDescription')}</p>
              </div>
            </div>
          </div>
          <div className="integrate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="System Integration" />
          </div>
        </section>

        <section className="integrate-section layout-2col layout-2col-reverse">
          <div className="integrate-text-content">
            <h2>{t('integratePage.section2Title')}</h2>
            <p>{t('integratePage.section2Description')}</p>
          </div>
          <div className="integrate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Data Performance" />
          </div>
        </section>

        <section className="integrate-section layout-2col">
          <div className="integrate-text-content">
            <span className="section-dash">{t('integratePage.section3Label')}</span>
            <h3>{t('integratePage.section3Title')}</h3>
            <p>{t('integratePage.section3Description')}</p>
            <Link to="/portfolio" className="text-link">{t('common.learnMore')} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '0.85em' }}></i></Link>
          </div>
          <div className="integrate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Success Story" />
          </div>
        </section>

        <section className="integrate-section integrate-grid-section">
          <div className="integrate-text-content"
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <span className="section-dash">{t('integratePage.section4Label')}</span>
            <h2>{t('integratePage.section4Title')}</h2>
            <p>{t('integratePage.section4Description')}</p>
          </div>

          <div className="integrate-3col-grid">
            <div className="integrate-grid-card">
              <div className="integrate-card-icon"><i className="fa-solid fa-folder-open"></i></div>
              <h4>{t('integratePage.accessDataTitle')}</h4>
              <p>{t('integratePage.accessDataDescription')}</p>
            </div>
            <div className="integrate-grid-card">
              <div className="integrate-card-icon"><i className="fa-solid fa-chart-line"></i></div>
              <h4>{t('integratePage.decideTitle')}</h4>
              <p>{t('integratePage.decideDescription')}</p>
            </div>
            <div className="integrate-grid-card">
              <div className="integrate-card-icon"><i className="fa-solid fa-bolt"></i></div>
              <h4>{t('integratePage.runLeanerTitle')}</h4>
              <p>{t('integratePage.runLeanerDescription')}</p>
            </div>
          </div>

          <div className="integrate-grid-links">
            <Link to="/portfolio" className="text-link">{t('common.learnMore')} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '0.85em' }}></i></Link>
            <Link to="/contact" className="text-link">{t('common.contact')} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '0.85em' }}></i></Link>
          </div>
        </section>
      </main>

      <section className="integrate-cta-section">
        <div className="integrate-cta-container">
          <div className="integrate-cta-text">
            <h2>{t('integratePage.ctaTitle')}</h2>
            <p>{t('integratePage.ctaDescription')}</p>
          </div>
          <div className="integrate-cta-buttons">
            <Link to="/contact" className="btn btn-primary">{t('integratePage.getStarted')}</Link>
            <Link to="/portfolio" className="btn btn-secondary">{t('common.learnMore')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default IntegratePage;
