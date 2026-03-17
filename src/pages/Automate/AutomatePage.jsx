import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './AutomatePage.css';

function AutomatePage() {
  const { t } = useTranslation();

  return (
    <div className="automate-page">
      <Header />

      {/* Hero Section */}
      <section className="automate-hero">
        <div className="automate-hero-content">
          <span>{t('automatePage.hero.badge')}</span>
          <h1>{t('automatePage.hero.title')}</h1>
          <p>
            {t('automatePage.hero.desc')}
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">{t('common.learnMore')}</a>
            <a href="#" className="btn btn-secondary">{t('common.signUp')}</a>
          </div>
        </div>
      </section>

      <main className="automate-main-content">

        {/* Section 1: Intelligent Process Automation */}
        <section className="automate-section layout-2col">
          <div className="automate-text-content">
            <h2>{t('automatePage.section1.title')}</h2>
            <p>
              {t('automatePage.section1.desc')}
            </p>

            <div className="automate-subgrid">
              <div className="subgrid-item">
                <span className="subgrid-icon">🤖</span>
                <h4>{t('automatePage.section1.sub1Title')}</h4>
                <p>{t('automatePage.section1.sub1Desc')}</p>
              </div>

              <div className="subgrid-item">
                <span className="subgrid-icon">🧠</span>
                <h4>{t('automatePage.section1.sub2Title')}</h4>
                <p>{t('automatePage.section1.sub2Desc')}</p>
              </div>
            </div>
          </div>

          <div className="automate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Intelligent Automation" />
          </div>
        </section>

        {/* Section 2: Success Story */}
        <section className="automate-section layout-2col layout-2col-reverse">
          <div className="automate-text-content">
            <span className="section-dash">{t('automatePage.section2.badge')}</span>
            <h3>{t('automatePage.section2.title')}</h3>
            <p>
              {t('automatePage.section2.desc')}
            </p>

            <div className="automate-subgrid">
              <div className="subgrid-item">
                <h4>{t('automatePage.section2.sub1Title')}</h4>
                <p>{t('automatePage.section2.sub1Desc')}</p>
              </div>

              <div className="subgrid-item">
                <h4>{t('automatePage.section2.sub2Title')}</h4>
                <p>
                  {t('automatePage.section2.sub2Desc')}
                </p>
              </div>
            </div>
          </div>

          <div className="automate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Automation Success Story" />
          </div>
        </section>

        {/* Section 3: Unlock Power of Automation */}
        <section className="automate-section layout-2col">
          <div className="automate-text-content">
            <h3>{t('automatePage.section3.title')}</h3>
            <p>
              {t('automatePage.section3.desc')}
            </p>

            <ul className="icon-list">
              <li>
                <span className="icon-list-icon">🚀</span>
                <div>
                  <strong>{t('automatePage.section3.list1Title')}</strong>
                  <p style={{ margin: 0 }}>{t('automatePage.section3.list1Desc')}</p>
                </div>
              </li>

              <li>
                <span className="icon-list-icon">🎯</span>
                <div>
                  <strong>{t('automatePage.section3.list2Title')}</strong>
                  <p style={{ margin: 0 }}>{t('automatePage.section3.list2Desc')}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="automate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Power of Automation" />
          </div>
        </section>

        {/* Section 4: 3 Column Grid */}
        <section className="automate-section automate-grid-section">

          <div className="automate-text-content"
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <span className="section-dash">{t('automatePage.section4.badge')}</span>
            <h2>{t('automatePage.section4.title')}</h2>
            <p>
              {t('automatePage.section4.desc')}
            </p>
          </div>

          <div className="automate-3col-grid">
            <div className="automate-grid-card">
              <div className="automate-card-icon">
                <span>☍</span>
              </div>
              <h4>{t('automatePage.section4.grid1Title')}</h4>
              <p>{t('automatePage.section4.grid1Desc')}</p>
            </div>

            <div className="automate-grid-card">
              <div className="automate-card-icon">
                <span>☖</span>
              </div>
              <h4>{t('automatePage.section4.grid2Title')}</h4>
              <p>{t('automatePage.section4.grid2Desc')}</p>
            </div>

            <div className="automate-grid-card">
              <div className="automate-card-icon">
                <span>☍</span>
              </div>
              <h4>{t('automatePage.section4.grid3Title')}</h4>
              <p>{t('automatePage.section4.grid3Desc')}</p>
            </div>
          </div>

          <div className="automate-grid-links">
            <a href="#" className="text-link">{t('common.learnMore')}</a>
            <a href="#" className="text-link">{t('common.signUp')}</a>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="automate-cta-section">
        <div className="automate-cta-container">
          <div className="automate-cta-text">
            <h2>{t('automatePage.cta.title')}</h2>
            <p>
              {t('automatePage.cta.desc')}
            </p>
          </div>

          <div className="automate-cta-buttons">
            <a href="#" className="btn btn-primary">{t('common.learnMore')}</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AutomatePage;
