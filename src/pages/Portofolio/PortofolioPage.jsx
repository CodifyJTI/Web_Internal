import React from 'react';

// Import Komponen Global
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

// Import CSS Khusus Halaman Ini
import './PortfolioPage.css';

function PortfolioPage() {
  return (
    <>
      <Header />

      <main>
        {/* === SECTION 1: HERO & PROJECTS === */}
        <section className="portfolio-hero-section">
          <div className="portfolio-container">
            <div className="portfolio-header">
              <h4 className="section-tag">Portfolio</h4>
              <h1>Our Successful Projects</h1>
              <p>Explore our anonymized case studies showcasing excellence.</p>
            </div>

            {/* Grid Project (2 Kolom) */}
            <div className="projects-grid">
              {/* Card 1 */}
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img src="/tes.png" alt="E-commerce Project" />
                </div>
                <div className="project-content">
                  <h3>E-commerce Solution</h3>
                  <p>Revamped an online store, increasing sales by 40% in six months.</p>
                  <div className="project-tags">
                    <span>E-commerce Sales Growth</span>
                    <span>User Experience</span>
                  </div>
                  <a href="#" className="read-more-link">View project &gt;</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img src="/tes.png" alt="Data Integration Project" />
                </div>
                <div className="project-content">
                  <h3>Data Integration</h3>
                  <p>Streamlined data processes for a major logistics company, enhancing efficiency.</p>
                  <div className="project-tags">
                    <span>Data Strategy</span>
                    <span>Logistics Process Improvement</span>
                  </div>
                  <a href="#" className="read-more-link">View project &gt;</a>
                </div>
              </div>
            </div>

            <div className="view-all-wrapper">
              <button className="view-all-btn">View all</button>
            </div>
          </div>
        </section>

        {/* === SECTION 2: DIVERSE INDUSTRIES === */}
        <section className="industries-section">
          <div className="portfolio-container">
            <div className="industries-header">
              <h2>Explore Our Diverse Portfolio Across Multiple Industries</h2>
              <p>
                Our portfolio showcases a wide range of industries, from healthcare to finance. 
                We provide tailored solutions that meet the unique challenges of each sector.
              </p>
            </div>

            <div className="industries-grid">
              {/* Industry 1 */}
              <div className="industry-card">
                <img src="/tes.png" alt="Healthcare" className="industry-icon" />
                <h3>Transforming Healthcare with Data-Driven Solutions</h3>
                <p>Our healthcare solutions enhance patient care through streamlined processes and data integration.</p>
                <a href="#" className="learn-more-link">Learn More &gt;</a>
              </div>

              {/* Industry 2 */}
              <div className="industry-card">
                <img src="/tes.png" alt="Finance" className="industry-icon" />
                <h3>Empowering Finance with Advanced Automation</h3>
                <p>We help financial institutions optimize operations and enhance customer experiences through automation.</p>
                <a href="#" className="learn-more-link">Learn More &gt;</a>
              </div>

              {/* Industry 3 */}
              <div className="industry-card">
                <img src="/tes.png" alt="Retail" className="industry-icon" />
                <h3>Innovative Retail Solutions Driving Engagement</h3>
                <p>Our retail solutions leverage data insights to boost sales and improve customer loyalty.</p>
                <a href="#" className="learn-more-link">Learn More &gt;</a>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 3: CASE STUDY HIGHLIGHT === */}
        <section className="case-study-section">
          <div className="portfolio-container case-study-layout">
            {/* Kiri: Teks */}
            <div className="case-study-text">
              <h4 className="section-tag">Case Study</h4>
              <h2>Transforming Business Through Innovative Software Solutions</h2>
              <p className="case-study-intro">
                Discover how we helped a leading Indonesian company streamline their operations. 
                Our tailored solutions drove efficiency and growth.
              </p>

              <div className="case-details">
                <div className="detail-box">
                  <h4>The Challenge</h4>
                  <p>Faced with outdated systems, the client struggled with data silos and inefficiencies.</p>
                </div>
                <div className="detail-box">
                  <h4>Our Solution</h4>
                  <p>We implemented an integrated platform that automated processes and improved data accessibility.</p>
                </div>
              </div>
            </div>

            {/* Kanan: Gambar */}
            <div className="case-study-image">
              <img src="/tes.png" alt="Case Study Illustration" />
            </div>
          </div>
        </section>

        {/* === SECTION 4: TESTIMONIAL === */}
        <section className="testimonial-section">
          <div className="portfolio-container">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <blockquote>
                "The team at the software agency transformed our digital presence, 
                making our operations smoother and more efficient."
              </blockquote>
              <div className="author-info">
                <img src="/tes.png" alt="Rana Santoso" className="author-avatar" />
                <div>
                  <cite>Rana Santoso</cite>
                  <span className="author-role">CEO, Tech Solutions</span>
                </div>
              </div>
              <div className="platform-logo">Webflow</div>
            </div>
          </div>
        </section>

      </main>

      {/* Menggunakan Komponen ContactCTA yang sudah ada */}
      <ContactCTA />
      
      <Footer />
    </>
  );
}

export default PortfolioPage;