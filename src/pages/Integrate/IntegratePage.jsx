import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './IntegratePage.css';

function IntegratePage() {
  const { t } = useTranslation();

  return (
    <div className="integrate-page">
      <Header />

      {/* Hero Section */}
      <section className="integrate-hero">
        <div className="integrate-hero-content">
          <span>{t('integratePage.hero.badge')}</span>
          <h1>{t('integratePage.hero.title')}</h1>
          <p>
            {t('integratePage.hero.desc')}
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">
              {t('common.learnMore')}
            </a>
            <a href="#" className="btn btn-secondary">
              {t('common.contact')}
            </a>
          </div>
        </div>
      </section>

      <main className="integrate-main-content">

        {/* Section 1 */}
        <section className="integrate-section layout-2col">
          <div className="integrate-text-content">
            <h2>{t('integratePage.section1.title')}</h2>
            <p>
              {t('integratePage.section1.desc')}
            </p>

            <div className="integrate-subgrid">
              <div className="subgrid-item">
                <span className="subgrid-icon">🔗</span>
                <h4>{t('integratePage.section1.sub1Title')}</h4>
                <p>
                  {t('integratePage.section1.sub1Desc')}
                </p>
              </div>

              <div className="subgrid-item">
                <span className="subgrid-icon">⚙️</span>
                <h4>{t('integratePage.section1.sub2Title')}</h4>
                <p>
                  {t('integratePage.section1.sub2Desc')}
                </p>
              </div>
            </div>
          </div>

          <div className="integrate-image-content">
            <img
              src="https://via.placeholder.com/500x400"
              alt="System Integration"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="integrate-section layout-2col layout-2col-reverse">
          <div className="integrate-text-content">
            <h2>{t('integratePage.section2.title')}</h2>
            <p>
              {t('integratePage.section2.desc')}
            </p>
          </div>

          <div className="integrate-image-content">
            <img
              src="https://via.placeholder.com/500x400"
              alt="Data Integration"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="integrate-section layout-2col">
          <div className="integrate-text-content">
            <span className="section-dash">{t('integratePage.section3.badge')}</span>
            <h3>{t('integratePage.section3.title')}</h3>
            <p>
              {t('integratePage.section3.desc')}
            </p>
            <a href="#" className="text-link">{t('common.learnMore')}</a>
          </div>

          <div className="integrate-image-content">
            <img
              src="https://via.placeholder.com/500x400"
              alt="Success Story"
            />
          </div>
        </section>

        {/* Section 4 (Grid) */}
        <section className="integrate-section integrate-grid-section">
          <div
            className="integrate-text-content"
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 60px auto'
            }}
          >
            <span className="section-dash">{t('integratePage.section4.badge')}</span>
            <h2>{t('integratePage.section4.title')}</h2>
            <p>
              {t('integratePage.section4.desc')}
            </p>
          </div>

          <div className="integrate-3col-grid">
            <div className="integrate-grid-card">
              <div className="integrate-card-image">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Data Accessibility"
                />
              </div>
              <h4>{t('integratePage.section4.grid1Title')}</h4>
              <p>{t('integratePage.section4.grid1Desc')}</p>
            </div>

            <div className="integrate-grid-card">
              <div className="integrate-card-image">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Decision Making"
                />
              </div>
              <h4>{t('integratePage.section4.grid2Title')}</h4>
              <p>{t('integratePage.section4.grid2Desc')}</p>
            </div>

            <div className="integrate-grid-card">
              <div className="integrate-card-image">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Operational Efficiency"
                />
              </div>
              <h4>{t('integratePage.section4.grid3Title')}</h4>
              <p>{t('integratePage.section4.grid3Desc')}</p>
            </div>
          </div>

          <div className="integrate-grid-links">
            <a href="#" className="text-link">{t('common.learnMore')}</a>
            <a href="#" className="text-link">{t('common.contact')}</a>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="integrate-cta-section">
        <div className="integrate-cta-container">
          <div className="integrate-cta-text">
            <h2>{t('integratePage.cta.title')}</h2>
            <p>{t('integratePage.cta.desc')}</p>
          </div>

          <div className="integrate-cta-buttons">
            <a href="#" className="btn btn-primary">{t('common.getStarted')}</a>
            <a href="#" className="btn btn-secondary">{t('common.learnMore')}</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default IntegratePage;
