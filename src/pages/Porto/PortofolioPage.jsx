import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import Komponen Global
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

// Import Data
import portfolioData from '../../data/portfolioData.js';

// Import CSS Khusus Halaman Ini
import './PortofolioPage.css';

function PortfolioPage() {
  const mainTabs = Object.keys(portfolioData);
  const [activeMainTab, setActiveMainTab] = useState(mainTabs[0]);
  const [activeSubTab, setActiveSubTab] = useState(portfolioData[mainTabs[0]].categories[0]);
  
  const carouselRef = useRef(null);

  // Reset Sub Tab when Main Tab changes
  useEffect(() => {
    setActiveSubTab(portfolioData[activeMainTab].categories[0]);
  }, [activeMainTab]);

  // Handle Main Tab Change
  const handleMainTabChange = (tab) => {
    setActiveMainTab(tab);
  };

  // Current Projects to Display
  const currentProjects = portfolioData[activeMainTab].projects[activeSubTab] || [];

  return (
    <div className="portfolio-page">
      <Header />

      <main>
        <section className="portfolio-hero">
          <div className="container">
            <h1>Portfolio</h1>
            <p className="hero-subtitle">Explore our best work in digitalizing and optimizing businesses.</p>
          </div>
        </section>

        <section className="portfolio-tabs-section">
          <div className="container">
            {/* Level 1: Main Tabs */}
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

            {/* Level 2: Sub Tabs */}
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
                  <p>No projects in this category yet.</p>
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
