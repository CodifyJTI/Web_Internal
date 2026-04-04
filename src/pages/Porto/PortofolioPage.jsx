import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Import Komponen Global
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

// Import CSS Khusus Halaman Ini
import './PortofolioPage.css';

// Dummy Data Terstruktur
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
        { id: 1, title: 'E-commerce Modern 2024', desc: 'Platform e-commerce skalabel dengan performa tinggi dan UX yang dioptimalkan.', embed: '/tes.png' },
        { id: 2, title: 'Corporate Portal XP', desc: 'Portal internal perusahaan untuk kolaborasi tim dan manajemen aset digital.', embed: '/tes.png' },
        { id: 3, title: 'SaaS Landing Page', desc: 'Desain landing page modern untuk startup teknologi dengan konversi tinggi.', embed: '/tes.png' }
      ],
      'App Development': [
        { id: 4, title: 'Fitness Tracker Pro', desc: 'Aplikasi mobile untuk memantau aktivitas kesehatan secara real-time.', embed: '/tes.png' },
        { id: 5, title: 'Fintech Wallet', desc: 'Solusi pembayaran digital aman dengan integrasi multi-gateway.', embed: '/tes.png' }
      ],
      'ERP System Development': [
        { id: 6, title: 'Supply Chain Manager', desc: 'Sistem ERP untuk mengelola inventaris dan logistik secara efisien.', embed: '/tes.png' }
      ],
      'Analytics Dashboard Development': [
        { id: 7, title: 'Sales Analytics Suite', desc: 'Visualisasi data penjualan kompleks untuk pengambilan keputusan cepat.', embed: '/tes.png' }
      ],
      'AI Model & Chatbot Development': [
        { id: 8, title: 'Customer Support AI', desc: 'Chatbot cerdas berbasis GPT untuk layanan pelanggan 24/7.', embed: '/tes.png' }
      ],
      'Custom Development': [
        { id: 9, title: 'Custom IoT Dashboard', desc: 'Panel kontrol khusus untuk monitoring perangkat IoT industri.', embed: '/tes.png' }
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
        { id: 10, title: 'Legacy Data Migrator', desc: 'Integrasi data dari sistem lama ke arsitektur cloud modern.', embed: '/tes.png' }
      ],
      'Custom API Development': [
        { id: 11, title: 'External Services API', desc: 'Pengembangan API kustom untuk menghubungkan berbagai platform pihak ketiga.', embed: '/tes.png' }
      ]
    }
  },
  'Codify Automate': {
    categories: [
      'Automation Workflow Services'
    ],
    projects: {
      'Automation Workflow Services': [
        { id: 12, title: 'Auto-Billing System', desc: 'Otomatisasi proses penagihan dan pengiriman invoice ke pelanggan.', embed: '/tes.png' },
        { id: 13, title: 'Marketing Workflow Bot', desc: 'Otomatisasi kampanye email dan posting media sosial.', embed: '/tes.png' }
      ]
    }
  }
};

function PortfolioPage() {
  const { t } = useTranslation();
  
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
            <p className="hero-subtitle">Eksplorasi karya terbaik kami dalam mendigitalisasi dan mengoptimalkan bisnis.</p>
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
                  <p>Belum ada proyek di kategori ini.</p>
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
