import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

import portfolioData from '../../data/portfolioData.js';

import './PortofolioPage.css';

const getCategoriesAndProjects = (mainTab) => {
  if (mainTab === 'All') {
    const allCategories = [];
    const allProjects = {};

    Object.keys(portfolioData).forEach((tab) => {
      const data = portfolioData[tab];
      data.categories.forEach((cat) => {
        if (!allCategories.includes(cat)) {
          allCategories.push(cat);
        }
        if (data.projects[cat]) {
          if (!allProjects[cat]) {
            allProjects[cat] = [];
          }
          allProjects[cat] = [...allProjects[cat], ...data.projects[cat]];
        }
      });
    });

    return { categories: allCategories, projects: allProjects };
  }

  return portfolioData[mainTab] || { categories: [], projects: {} };
};

function PortfolioPage() {
  const { t } = useTranslation();

  // Main tabs list with 'All' first, excluding 'Codify Simplify'
  const mainTabs = [
    'All',
    ...Object.keys(portfolioData).filter((tab) => tab !== 'Codify Simplify')
  ];

  const [activeMainTab, setActiveMainTab] = useState(mainTabs[0] || 'All');
  
  const activeTabData = getCategoriesAndProjects(activeMainTab);

  const [activeSubTab, setActiveSubTab] = useState(() => {
    const initialData = getCategoriesAndProjects(mainTabs[0] || 'All');
    const activeCategories = initialData.categories.filter(
      (cat) => initialData.projects[cat] && initialData.projects[cat].length > 0
    );
    return activeCategories[0] || '';
  });

  const carouselRef = useRef(null);

  useEffect(() => {
    if (activeMainTab) {
      const data = getCategoriesAndProjects(activeMainTab);
      const activeCategories = data.categories.filter(
        (cat) => data.projects[cat] && data.projects[cat].length > 0
      );
      setActiveSubTab(activeCategories[0] || '');
    } else {
      setActiveSubTab('');
    }
  }, [activeMainTab]);

  const handleMainTabChange = (tab) => {
    setActiveMainTab(tab);
  };

  const currentProjects = (activeSubTab && activeTabData.projects[activeSubTab]) || [];

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
              {(activeTabData.categories || [])
                .filter((subTab) => activeTabData.projects[subTab] && activeTabData.projects[subTab].length > 0)
                .map((subTab) => (
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
              {currentProjects.length > 0 && (
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
