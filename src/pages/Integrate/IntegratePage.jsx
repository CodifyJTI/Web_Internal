import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './IntegratePage.css';

function IntegratePage() {
  return (
    <div className="integrate-page">
      <Header />

      {/* Hero Section */}
      <section className="integrate-hero">
        <div className="integrate-hero-content">
          <span>Integrate</span>
          <h1>Seamless Data Integration</h1>
          <p>
            Unlock the power of your data with our seamless system and data integration solutions.
          </p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-secondary">Contact</Link>
          </div>
        </div>
      </section>

      <main className="integrate-main-content">

        {/* Section 1: Seamless System Integration */}
        <section className="integrate-section layout-2col">
          <div className="integrate-text-content">
            <h2>Seamless System Integration for Your Business</h2>
            <p>
              Our agency specializes in creating custom APIs and middleware solutions. We ensure your systems communicate effectively for enhanced operational efficiency.
            </p>

            <div className="integrate-subgrid">
              <div className="subgrid-item">
                <span className="subgrid-icon">🔗</span>
                <h4>Custom APIs</h4>
                <p>Tailored APIs that meet your unique business requirements and enhance functionality.</p>
              </div>

              <div className="subgrid-item">
                <span className="subgrid-icon">🧩</span>
                <h4>Middleware Solutions</h4>
                <p>Robust middleware that connects disparate systems for a unified digital experience.</p>
              </div>
            </div>
          </div>

          <div className="integrate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="System Integration" />
          </div>
        </section>

        {/* Section 2: Unlock Performance */}
        <section className="integrate-section layout-2col layout-2col-reverse">
          <div className="integrate-text-content">
            <h2>Unlock Seamless Data Integration for Enhanced Business Performance</h2>
            <p>
              Our data integration strategies streamline your operations by optimizing data warehousing and ETL processes. Experience real-time data synchronization that empowers your decision-making and drives growth.
            </p>
          </div>

          <div className="integrate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Data Performance" />
          </div>
        </section>

        {/* Section 3: Success Story */}
        <section className="integrate-section layout-2col">
          <div className="integrate-text-content">
            <span className="section-dash">Success Stories</span>
            <h3>Seamless Data Integration for Business Success</h3>
            <p>
              Discover how we transformed a client's data management process through effective integration. Our tailored solution streamlined operations and enhanced data accessibility, driving significant business growth.
            </p>

            <Link to="/portfolio" className="text-link">Learn More</Link>
          </div>

          <div className="integrate-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Success Story" />
          </div>
        </section>

        {/* Section 4: 3 Column Grid */}
        <section className="integrate-section integrate-grid-section">

          <div className="integrate-text-content"
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <span className="section-dash">Integrate</span>
            <h2>Unlock the Power of Data Integration</h2>
            <p>
              Effective system and data integration enhances your business's ability to access and utilize data seamlessly. This leads to smarter decisions and streamlined operations.
            </p>
          </div>

          <div className="integrate-3col-grid">
            <div className="integrate-grid-card">
              <div className="integrate-card-icon">
                <span>📂</span>
              </div>
              <h4>Enhanced Data Accessibility for Your Business</h4>
              <p>Easily access critical data across platforms and systems.</p>
            </div>

            <div className="integrate-grid-card">
              <div className="integrate-card-icon">
                <span>📈</span>
              </div>
              <h4>Improved Decision-Making with Real-Time Insights</h4>
              <p>Make informed decisions quickly with up-to-date information.</p>
            </div>

            <div className="integrate-grid-card">
              <div className="integrate-card-icon">
                <span>⚙️</span>
              </div>
              <h4>Operational Efficiency Through Streamlined Processes</h4>
              <p>Optimize workflows and reduce operational costs effectively.</p>
            </div>
          </div>

          <div className="integrate-grid-links">
            <Link to="/portfolio" className="text-link">Learn More</Link>
            <Link to="/contact" className="text-link">Contact</Link>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="integrate-cta-section">
        <div className="integrate-cta-container">
          <div className="integrate-cta-text">
            <h2>Unlock Seamless Integration Solutions</h2>
            <p>Discover how integration can transform your business</p>
          </div>

          <div className="integrate-cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/portfolio" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default IntegratePage;
