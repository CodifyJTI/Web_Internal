import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header.jsx';
import SEO from '../../components/SEO/SEO.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './AutomatePage.css';

function AutomatePage() {
  const { t } = useTranslation();

  return (
    <div className="automate-page">
      <SEO
        title={t('automatePage.seoTitle')}
        description={t('automatePage.seoDescription')}
        path="/services/automate"
      />
      <Header />

      <section className="automate-hero">
        <div className="automate-hero-content">
          <span>{t('automatePage.heroLabel')}</span>
          <h1>{t('automatePage.heroTitle')}</h1>
          <p>{t('automatePage.heroDescription')}</p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">{t('common.learnMore')}</Link>
          </div>
        </div>
      </section>

      <main className="automate-main-content">

        <section className="automate-section layout-2col">
          <div className="automate-text-content">
            <h2>{t('automatePage.section1Title')}</h2>
            <p>{t('automatePage.section1Description')}</p>

            <div className="automate-subgrid">
              <div className="subgrid-item">
                <span className="subgrid-icon"><i className="fa-solid fa-robot"></i></span>
                <h4>{t('automatePage.taskAutomationTitle')}</h4>
                <p>{t('automatePage.taskAutomationDescription')}</p>
              </div>
              <div className="subgrid-item">
                <span className="subgrid-icon"><i className="fa-solid fa-brain"></i></span>
                <h4>{t('automatePage.aiIntegrationTitle')}</h4>
                <p>{t('automatePage.aiIntegrationDescription')}</p>
              </div>
            </div>
          </div>
          <div className="automate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Intelligent Automation" />
          </div>
        </section>

        <section className="automate-section layout-2col layout-2col-reverse">
          <div className="automate-text-content">
            <span className="section-dash">{t('automatePage.section2Label')}</span>
            <h3>{t('automatePage.section2Title')}</h3>
            <p>{t('automatePage.section2Description')}</p>

            <div className="automate-subgrid">
              <div className="subgrid-item">
                <h4>{t('automatePage.challengeTitle')}</h4>
                <p>{t('automatePage.challengeDescription')}</p>
              </div>
              <div className="subgrid-item">
                <h4>{t('automatePage.solutionTitle')}</h4>
                <p>{t('automatePage.solutionDescription')}</p>
              </div>
            </div>
          </div>
          <div className="automate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Automation Success Story" />
          </div>
        </section>

        <section className="automate-section layout-2col">
          <div className="automate-text-content">
            <h3>{t('automatePage.section3Title')}</h3>
            <p>{t('automatePage.section3Description')}</p>

            <ul className="icon-list">
              <li>
                <span className="icon-list-icon"><i className="fa-solid fa-rocket"></i></span>
                <div>
                  <strong>{t('automatePage.boostLabel')}</strong>
                  <p style={{ margin: 0 }}>{t('automatePage.boostDescription')}</p>
                </div>
              </li>
              <li>
                <span className="icon-list-icon"><i className="fa-solid fa-bullseye"></i></span>
                <div>
                  <strong>{t('automatePage.enhanceLabel')}</strong>
                  <p style={{ margin: 0 }}>{t('automatePage.enhanceDescription')}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="automate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Power of Automation" />
          </div>
        </section>

        <section className="automate-section automate-grid-section">
          <div className="automate-text-content"
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <span className="section-dash">{t('automatePage.section4Label')}</span>
            <h2>{t('automatePage.section4Title')}</h2>
            <p>{t('automatePage.section4Description')}</p>
          </div>

          <div className="automate-3col-grid">
            <div className="automate-grid-card">
              <div className="automate-card-icon"><i className="fa-solid fa-compass"></i></div>
              <h4>{t('automatePage.discoverTitle')}</h4>
              <p>{t('automatePage.discoverDescription')}</p>
            </div>
            <div className="automate-grid-card">
              <div className="automate-card-icon"><i className="fa-solid fa-pencil-ruler"></i></div>
              <h4>{t('automatePage.designTitle')}</h4>
              <p>{t('automatePage.designDescription')}</p>
            </div>
            <div className="automate-grid-card">
              <div className="automate-card-icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
              <h4>{t('automatePage.deployTitle')}</h4>
              <p>{t('automatePage.deployDescription')}</p>
            </div>
          </div>

          <div className="automate-grid-links">
            <Link to="/portfolio" className="text-link">{t('common.learnMore')} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '0.85em' }}></i></Link>
          </div>
        </section>
      </main>

      <section className="automate-cta-section">
        <div className="automate-cta-container">
          <div className="automate-cta-text">
            <h2>{t('automatePage.ctaTitle')}</h2>
            <p>{t('automatePage.ctaDescription')}</p>
          </div>
          <div className="automate-cta-buttons">
            <Link to="/portfolio" className="btn btn-primary">{t('common.learnMore')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AutomatePage;
