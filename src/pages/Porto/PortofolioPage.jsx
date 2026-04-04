import React, { useState, useEffect, useRef } from 'react';

// Import Komponen Global
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

// Import CSS Khusus Halaman Ini
import './PortofolioPage.css';

// Dummy Data Terstruktur - Fully English
const portfolioData = {
  'Codify Simplify': {
    categories: [
      'Web Development',
      'App Development',
      'ERP System Development',
      'Analytics Dashboard Development',
      'AI Model & Chatbot Development',
      'Custom Development'
    ],
    projects: {
      'Web Development': [
        { id: 1, title: 'Modern E-commerce 2024', desc: 'Scalable e-commerce platform with high performance and optimized UX.', embed: '/tes.png' },
        { id: 2, title: 'Corporate Portal XP', desc: 'Internal corporate portal for team collaboration and digital asset management.', embed: '/tes.png' },
        { id: 3, title: 'SaaS Landing Page', desc: 'Modern landing page design for tech startups with high conversion rates.', embed: '/tes.png' }
      ],
      'App Development': [
        { id: 4, title: 'Fitness Tracker Pro', desc: 'Mobile application for monitoring health activities in real-time.', embed: '/tes.png' },
        { id: 5, title: 'Fintech Wallet', desc: 'Secure digital payment solution with multi-gateway integration.', embed: '/tes.png' }
      ],
      'ERP System Development': [
        { id: 6, title: 'Supply Chain Manager', desc: 'ERP system to manage inventory and logistics efficiently.', embed: '/tes.png' }
      ],
      'Analytics Dashboard Development': [
        { id: 7, title: 'Sales Analytics Suite', desc: 'Visualization of complex sales data for quick decision making.', embed: '/tes.png' }
      ],
      'AI Model & Chatbot Development': [
        { id: 8, title: 'Customer Support AI', desc: 'Intelligent GPT-based chatbot for 24/7 customer service.', embed: '/tes.png' }
      ],
      'Custom Development': [
        { id: 9, title: 'Custom IoT Dashboard', desc: 'Custom control panel for monitoring industrial IoT devices.', embed: '/tes.png' }
      ]
    }
  },
  'Codify Integrate': {
    categories: [
      'Data Cleaning & Integration Services',
      'Custom API Development'
    ],
    projects: {
      'Data Cleaning & Integration Services': [
        { id: 10, title: 'Legacy Data Migrator', desc: 'Integrating data from legacy systems to modern cloud architecture.', embed: '/tes.png' }
      ],
      'Custom API Development': [
        { id: 11, title: 'External Services API', desc: 'Custom API development to connect various third-party platforms.', embed: '/tes.png' }
      ]
    }
  },
  'Codify Automate': {
    categories: [
      'Automation Workflow Services'
    ],
    projects: {
      'Automation Workflow Services': [
        { id: 12, title: 'Auto-Billing System', desc: 'Automating billing processes and sending invoices to customers.', embed: '/tes.png' },
        { id: 13, title: 'Marketing Workflow Bot', desc: 'Automating email campaigns and social media posting.', embed: '/tes.png' }
      ]
    }
  }
};

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
                        <img 
                          src={project.embed} 
                          alt={project.title} 
                          loading="lazy" 
                          className="project-thumbnail"
                        />
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
