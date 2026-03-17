import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Komponen Global
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

// Import CSS Khusus Halaman Ini
import './PortofolioPage.css';

function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <main>
        {/* === SECTION 1: HERO & PROJECTS === */}
        <section className="portfolio-hero-section">
          <div className="portfolio-container">
            <div className="portfolio-header">
              <h4 className="section-tag">{t('portfolioPage.hero.tag')}</h4>
              <h1>{t('portfolioPage.hero.title')}</h1>
              <p>{t('portfolioPage.hero.desc')}</p>
            </div>

            {/* Grid Project (2 Kolom) */}
            <div className="projects-grid">
              {/* Card 1 */}
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img src="/tes.png" alt="E-commerce Project" />
                </div>
                <div className="project-content">
                  <h3>{t('portfolioPage.projects.1.title')}</h3>
                  <p>{t('portfolioPage.projects.1.desc')}</p>
                  <div className="project-tags">
                    <span>{t('portfolioPage.projects.1.tag1')}</span>
                    <span>{t('portfolioPage.projects.1.tag2')}</span>
                  </div>
                  <a href="#" className="read-more-link">{t('portfolioPage.hero.viewProject')}</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img src="/tes.png" alt="Data Integration Project" />
                </div>
                <div className="project-content">
                  <h3>{t('portfolioPage.projects.2.title')}</h3>
                  <p>{t('portfolioPage.projects.2.desc')}</p>
                  <div className="project-tags">
                    <span>{t('portfolioPage.projects.2.tag1')}</span>
                    <span>{t('portfolioPage.projects.2.tag2')}</span>
                  </div>
                  <a href="#" className="read-more-link">{t('portfolioPage.hero.viewProject')}</a>
                </div>
              </div>
            </div>

            <div className="view-all-wrapper">
              <button className="view-all-btn">{t('portfolioPage.hero.viewAll')}</button>
            </div>
          </div>
        </section>

        {/* === SECTION 2: DIVERSE INDUSTRIES === */}
        <section className="industries-section">
          <div className="portfolio-container">
            <div className="industries-header">
              <h2>{t('portfolioPage.industries.title')}</h2>
              <p>
                {t('portfolioPage.industries.desc')}
              </p>
            </div>

            <div className="industries-grid">
              {/* Industry 1 */}
              <div className="industry-card">
                <img src="/tes.png" alt="Healthcare" className="industry-icon" />
                <h3>{t('portfolioPage.industries.items.1.title')}</h3>
                <p>{t('portfolioPage.industries.items.1.desc')}</p>
                <a href="#" className="learn-more-link">{t('common.learnMore')} &gt;</a>
              </div>

              {/* Industry 2 */}
              <div className="industry-card">
                <img src="/tes.png" alt="Finance" className="industry-icon" />
                <h3>{t('portfolioPage.industries.items.2.title')}</h3>
                <p>{t('portfolioPage.industries.items.2.desc')}</p>
                <a href="#" className="learn-more-link">{t('common.learnMore')} &gt;</a>
              </div>

              {/* Industry 3 */}
              <div className="industry-card">
                <img src="/tes.png" alt="Retail" className="industry-icon" />
                <h3>{t('portfolioPage.industries.items.3.title')}</h3>
                <p>{t('portfolioPage.industries.items.3.desc')}</p>
                <a href="#" className="learn-more-link">{t('common.learnMore')} &gt;</a>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 3: CASE STUDY HIGHLIGHT === */}
        <section className="case-study-section">
          <div className="portfolio-container case-study-layout">
            {/* Kiri: Teks */}
            <div className="case-study-text">
              <h4 className="section-tag">{t('portfolioPage.caseStudy.tag')}</h4>
              <h2>{t('portfolioPage.caseStudy.title')}</h2>
              <p className="case-study-intro">
                {t('portfolioPage.caseStudy.intro')}
              </p>

              <div className="case-details">
                <div className="detail-box">
                  <h4>{t('portfolioPage.caseStudy.challengeTitle')}</h4>
                  <p>{t('portfolioPage.caseStudy.challengeDesc')}</p>
                </div>
                <div className="detail-box">
                  <h4>{t('portfolioPage.caseStudy.solutionTitle')}</h4>
                  <p>{t('portfolioPage.caseStudy.solutionDesc')}</p>
                </div>
              </div>
            </div>

            {/* Kanan: Gambar */}
            <div className="case-study-image">
              <img src="/tes.png" alt="Case Study Illustration" />
            </div>
          </div>
        </section>
      </main>
      <ContactCTA />
      
      <Footer />
    </>
  );
}

export default PortfolioPage;