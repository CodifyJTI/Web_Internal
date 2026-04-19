import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import SEO from '../../components/SEO/SEO.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './SimplifyPage.css';

function SimplifyPage() {
  return (
    <div className="simplify-page">
      <SEO 
        title="Simplify - Custom Software Development" 
        description="Replace complex manual workflows with intuitive, custom-built software tailored to your unique business needs."
        path="/services/simplify"
      />
      <Header />

      {/* Hero Section */}
      <section className="simplify-hero">
        <div className="simplify-hero-content">
          <span>Simplify</span>
          <h1>Custom Development Solutions</h1>
          <p>
            Transform your ideas into reality with tailored software solutions designed for your unique business needs.
          </p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      <main className="simplify-main-content">

        {/* Section 1: Streamline Operations */}
        <section className="simplify-section layout-2col">
          <div className="simplify-text-content">
            <h2>Streamline Your Operations with Tailored Software Solutions for Maximum Efficiency</h2>
            <p>
              In today's fast-paced business environment, simplifying processes is crucial for success. Our custom software development services empower you to eliminate inefficiencies and enhance productivity, allowing you to focus on what truly matters.
            </p>
          </div>

          <div className="simplify-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Streamline Operations" />
          </div>
        </section>

        {/* Section 2: Success Story */}
        <section className="simplify-section layout-2col layout-2col-reverse">
          <div className="simplify-text-content">
            <span className="section-dash">Success</span>
            <h3>Transforming Ideas into Custom Solutions</h3>
            <p>
              Our team successfully delivered a custom software solution that streamlined operations for a local client. This project exemplifies our commitment to simplifying complex challenges through tailored development.
            </p>

            <div className="simplify-subgrid">
              <div className="subgrid-item">
                <h4>Project Overview</h4>
                <p>A comprehensive software solution tailored for enhanced operational efficiency.</p>
              </div>

              <div className="subgrid-item">
                <h4>Client Feedback</h4>
                <p>The solution exceeded our expectations and transformed our workflow.</p>
              </div>
            </div>

            <div className="simplify-links">
              <Link to="/portfolio" className="text-link">Learn More</Link>
              <Link to="/contact" className="text-link">Contact</Link>
            </div>
          </div>

          <div className="simplify-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Success Story" />
          </div>
        </section>

        {/* Section 3: Ideas into Reality */}
        <section className="simplify-section layout-2col">
          <div className="simplify-text-content">
            <h3>Transform Your Ideas into Reality with Our Custom Development Solutions</h3>
            <p>
              Our team combines deep data insights with robust technical skills to create tailored software solutions. We focus on understanding your unique challenges to deliver exceptional results.
            </p>

            <ul className="icon-list">
              <li>
                <span className="icon-list-icon">✓</span>
                <p>Agile methodologies for rapid development and deployment.</p>
              </li>

              <li>
                <span className="icon-list-icon">✓</span>
                <p>User-centered design to enhance user experience.</p>
              </li>

              <li>
                <span className="icon-list-icon">✓</span>
                <p>Continuous integration for seamless updates and improvements.</p>
              </li>
            </ul>
          </div>

          <div className="simplify-image-content">
            <img src="https://via.placeholder.com/500x400" alt="Ideas into Reality" />
          </div>
        </section>

        {/* Section 4: 3 Column Grid (Optional/Placeholder) */}
        <section className="simplify-section simplify-grid-section">
          <div className="simplify-text-content"
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Unlock Efficiency: Transform Your Business by Simplifying Complex Processes</h2>
            <p>
              Simplifying your processes leads to significant improvements in efficiency and productivity. By reducing complexity, you can save costs and focus on what truly matters — growing your business.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SimplifyPage;
