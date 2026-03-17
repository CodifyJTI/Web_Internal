import React from 'react';
import { useTranslation } from 'react-i18next';

// --- PATH IMPOR SUDAH DIBENERIN ---
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SimplifyFAQ from '../../components/FAQ/SimplifyFAQ.jsx';

import './SimplifyPage.css';

function SimplifyPage() {
  const { t } = useTranslation();

  return (
    <div className="simplify-page">
      <Header />

      {/* Hero Section */}
      <section className="simplify-hero">
        <div className="simplify-hero-content">
          <span>{t('simplifyPage.hero.badge')}</span>
          <h1>{t('simplifyPage.hero.title')}</h1>
          <p>
            {t('simplifyPage.hero.desc')}
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">{t('common.learnMore')}</a>
            <a href="#" className="btn btn-secondary">{t('common.getStarted')}</a>
          </div>
        </div>
      </section>

      <main className="simplify-main-content">

        {/* Section 1 */}
        <section className="simplify-section layout-2col">
          <div className="simplify-text-content">
            <h2>
              {t('simplifyPage.section1.title')}
            </h2>
            <p>
              {t('simplifyPage.section1.desc')}
            </p>
          </div>

          <div className="simplify-image-content">
            <img src="/tes.png" alt="Streamline Operations" />
          </div>
        </section>

        {/* Section 2 */}
        <section className="simplify-section layout-2col layout-2col-reverse">
          <div className="simplify-text-content">
            <span className="section-dash">{t('simplifyPage.section2.badge')}</span>
            <h3>{t('simplifyPage.section2.title')}</h3>
            <p>
              {t('simplifyPage.section2.desc')}
            </p>

            <div className="success-subgrid">
              <div className="subgrid-item">
                <span className="subgrid-icon">📄</span>
                <h4>{t('simplifyPage.section2.sub1Title')}</h4>
                <p>{t('simplifyPage.section2.sub1Desc')}</p>
              </div>

              <div className="subgrid-item">
                <span className="subgrid-icon">💬</span>
                <h4>{t('simplifyPage.section2.sub2Title')}</h4>
                <p>{t('simplifyPage.section2.sub2Desc')}</p>
              </div>
            </div>

            <a href="#" className="text-link">{t('common.learnMore')}</a>
            <a href="#" className="text-link">{t('common.contact')}</a>
          </div>

          <div className="simplify-image-content">
            <img src="/gambar1.png" alt="Transforming Ideas" />
          </div>
        </section>

        {/* Section 3 */}
        <section className="simplify-section layout-2col">
          <div className="simplify-text-content">
            <h3>{t('simplifyPage.section3.title')}</h3>
            <p>
              {t('simplifyPage.section3.desc')}
            </p>

            <ul className="icon-list">
              <li>
                <span className="icon-list-icon">✓</span>
                <p>{t('simplifyPage.section3.list1')}</p>
              </li>
              <li>
                <span className="icon-list-icon">✓</span>
                <p>{t('simplifyPage.section3.list2')}</p>
              </li>
              <li>
                <span className="icon-list-icon">✓</span>
                <p>{t('simplifyPage.section3.list3')}</p>
              </li>
            </ul>
          </div>

          <div className="simplify-image-content">
            <img src="/gambar2.png" alt="Transform Your Ideas" />
          </div>
        </section>

        {/* Section 4 */}
        <section className="simplify-section layout-2col layout-2col-reverse">
          <div className="simplify-text-content">
            <h3>
              {t('simplifyPage.section4.title')}
            </h3>
            <p>
              {t('simplifyPage.section4.desc')}
            </p>
          </div>

          <div className="simplify-image-content">
            <img src="/gambar3.png" alt="Unlock Efficiency" />
          </div>
        </section>

      </main>

      {/* Bagian Bawah */}
      <SimplifyFAQ />

      <Footer />
    </div>
  );
}

export default SimplifyPage;
