import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import SEO from '../../components/SEO/SEO.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './AutomatePage.css';

function AutomatePage() {
  return (
    <div className="automate-page">
      <SEO 
        title="Automate - Intelligent Process Automation" 
        description="Leverage AI and automation to streamline your business operations and reduce manual effort with Codify's Automate service."
        path="/services/automate"
      />
      <Header />

      {/* Hero Section */}
      <section className="automate-hero">
        <div className="automate-hero-content">
          <span>Automate</span>
          <h1>Empower Your Business</h1>
          <p>
            Unlock efficiency through AI-driven automation tailored to your unique business processes and goals.
          </p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      <main className="automate-main-content">

        {/* Section 1: Intelligent Process Automation */}
        <section className="automate-section layout-2col">
          <div className="automate-text-content">
            <h2>Transform Your Business with Intelligent Process Automation Solutions</h2>
            <p>
              Unlock efficiency and productivity by automating routine tasks. Our tailored solutions streamline operations, allowing your team to focus on what truly matters.
            </p>

            <div className="automate-subgrid">
              <div className="subgrid-item">
                <span className="subgrid-icon">🤖</span>
                <h4>Task Automation</h4>
                <p>Automate data entry, report generation, and customer follow-ups effortlessly.</p>
              </div>

              <div className="subgrid-item">
                <span className="subgrid-icon">🧠</span>
                <h4>AI Integration</h4>
                <p>Leverage AI for smarter decision-making and optimized workflows across your organization.</p>
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
            <span className="section-dash">Success Story</span>
            <h3>Transforming Businesses: A Success Story in Automation</h3>
            <p>
              Discover how we helped a local business streamline operations through automation. Our tailored solutions led to increased efficiency and significant cost savings.
            </p>

            <div className="automate-subgrid">
              <div className="subgrid-item">
                <h4>The Challenge</h4>
                <p>Identifying bottlenecks in the workflow that hindered productivity and growth.</p>
              </div>

              <div className="subgrid-item">
                <h4>The Solution</h4>
                <p>
                  Implementing an automated system that streamlined processes and improved efficiency.
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
            <h3>Unlock the Power of Automation for Your Business Success</h3>
            <p>
              Embrace automation to enhance your operational efficiency and drive growth. Experience significant improvements in productivity, accuracy, and cost savings.
            </p>

            <ul className="icon-list">
              <li>
                <span className="icon-list-icon">🚀</span>
                <div>
                  <strong>Boost</strong>
                  <p style={{ margin: 0 }}>Increase productivity with streamlined processes and workflows.</p>
                </div>
              </li>

              <li>
                <span className="icon-list-icon">🎯</span>
                <div>
                  <strong>Enhance</strong>
                  <p style={{ margin: 0 }}>Achieve higher accuracy through automated tasks.</p>
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
            <span className="section-dash">Automate</span>
            <h2>Streamline Your Processes with Automation</h2>
            <p>
              Our automation process transforms your business operations, enhancing efficiency and reducing manual effort. From consultation to implementation, we ensure a seamless transition to automated solutions.
            </p>
          </div>

          <div className="automate-3col-grid">
            <div className="automate-grid-card">
              <div className="automate-card-icon">
                <span>☍</span>
              </div>
              <h4>Understanding the Automation Journey</h4>
              <p>We guide you through every step of the process.</p>
            </div>

            <div className="automate-grid-card">
              <div className="automate-card-icon">
                <span>☖</span>
              </div>
              <h4>Initial Consultation: Identifying Your Needs</h4>
              <p>We start by understanding your unique business challenges.</p>
            </div>

            <div className="automate-grid-card">
              <div className="automate-card-icon">
                <span>☍</span>
              </div>
              <h4>Implementation: Bringing Your Vision to Life</h4>
              <p>Our team executes the automation strategy tailored for you.</p>
            </div>
          </div>

          <div className="automate-grid-links">
            <Link to="/portfolio" className="text-link">Learn More</Link>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="automate-cta-section">
        <div className="automate-cta-container">
          <div className="automate-cta-text">
            <h2>Transform Your Business Today</h2>
            <p>
              Ready to streamline your processes? Contact us for a consultation on automation solutions.
            </p>
          </div>

          <div className="automate-cta-buttons">
            <Link to="/portfolio" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AutomatePage;
