import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

import portfolioData from '../../data/portfolioData.js';

import './PortofolioPage.css';

function PortfolioPage() {
  const { t } = useTranslation();
  const mainTabs = Object.keys(portfolioData);
  const [activeMainTab, setActiveMainTab] = useState(mainTabs[0]);
  const [activeSubTab, setActiveSubTab] = useState(portfolioData[mainTabs[0]].categories[0]);

  const carouselRef = useRef(null);

  useEffect(() => {
    setActiveSubTab(portfolioData[activeMainTab].categories[0]);
  }, [activeMainTab]);

  const handleMainTabChange = (tab) => {
    setActiveMainTab(tab);
  };

  const currentProjects = portfolioData[activeMainTab].projects[activeSubTab] || [];

  return (
    <div className="portfolio-page">
      <Header />

      <main>
        <section className="portfolio-hero">
          <div className="container">
            <h1>{t('portfolio.heading')}</h1>
            <p className="hero-subtitle">{t('portfolio.heroSubtitle')}</p>
          </div>
        </section>

        <section className="portfolio-tabs-section">
          <div className="container">
            <nav className="main-tabs-nav">
              {mainTabs.map((tab) => (
                <button
                  key={tab}
                  className={`tab-item main-tab ${activeMainTab === tab ? 'active' : ''}`}
                  onClick={() => handleMainTabChange(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>

            <nav className="sub-tabs-nav">
              {portfolioData[activeMainTab].categories.map((subTab) => (
                <button
                  key={subTab}
                  className={`tab-item sub-tab ${activeSubTab === subTab ? 'active' : ''}`}
                  onClick={() => setActiveSubTab(subTab)}
                >
                  {subTab}
                </button>
              ))}
            </nav>
          </div>
        </section>

        <section className="portfolio-display-section">
          <div className="container">
            <div className="carousel-container" ref={carouselRef}>
              {currentProjects.length > 0 ? (
                <div className="projects-carousel">
                  {currentProjects.map((project) => (
                    <div key={project.id} className="project-card-v2">
                      <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                      </div>
                      <div className="project-embed-container">
                        <iframe
                          src={project.liveUrl}
                          title={project.title}
                          loading="lazy"
                          className="project-iframe"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-projects">
                  <p>{t('portfolio.noProjects')}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <ContactCTA />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
