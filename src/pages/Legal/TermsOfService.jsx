import React, { useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SEO from '../../components/SEO/SEO.jsx';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';
import './LegalPages.css';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <SEO 
        title="Terms of Service" 
        description="Read the terms and conditions for using Codify's internal portal and services." 
        path="/terms-of-service"
      />
      <Header />
      
      <div className="legal-hero">
        <div className="legal-hero-panel">
          <h1>Terms of Service</h1>
          <p>Read our rules and regulations to ensure a smooth collaboration.</p>
        </div>
      </div>

      <main className="legal-container">
        <div className="legal-breadcrumbs-wrapper">
          <Breadcrumbs />
        </div>
        
        <article className="legal-article">
          <span className="legal-last-updated">Last Updated: March 18, 2026</span>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the <strong>Codify</strong> portal ("Site"), you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service. If you do not agree with any part 
              of these terms, you must immediately discontinue use of our Site and services.
            </p>
          </section>

          <section>
            <h2>2. Scope of Services</h2>
            <p>
              Codify provides strategic consultancy, system integration, and operational automation 
              through custom technology solutions ("Services"). All information provided on this Site 
              is intended to give a general overview of our capabilities. Specific service agreements 
              will be governed by separate master service agreements (MSA) or statements of work (SOW).
            </p>
          </section>

          <section>
            <h2>3. Intellectual Property Rights</h2>
            <p>
              All content on this Site, including but not limited to logos, graphics, text, icons, images, 
              software code, and the "Simplify, Integrate, Automate" methodology, is the exclusive property 
              of <strong>Codify</strong> and is protected by international copyright, trademark, and 
              intellectual property laws.
            </p>
            <p>
              Users are strictly prohibited from reproducing, distributing, modifying, or creating derivative 
              works from any content found on this Site without explicit written consent from our management.
            </p>
          </section>

          <section>
            <h2>4. User Conduct</h2>
            <p>You agree to use the Site only for lawful purposes. Prohibited activities include:</p>
            <ul>
              <li>Attempting to interfere with the proper working of the Site or its servers.</li>
              <li>Using automated systems (bots, spiders) to scrape data without authorization.</li>
              <li>Uploading or transmitting viruses or any other type of malicious code.</li>
              <li>Engaging in any conduct that restricts or inhibits any other user from using the Site.</li>
            </ul>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Codify shall not be liable for any direct, indirect, 
              incidental, special, or consequential damages resulting from the use or the inability to 
              use the Site or Services. While we strive for 100% accuracy, we do not warrant that the 
              information on this Site is complete, reliable, or error-free.
            </p>
          </section>

          <section>
            <h2>6. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites or services that are not owned or controlled 
              by Codify. We have no control over, and assume no responsibility for, the content, privacy 
              policies, or practices of any third-party websites.
            </p>
          </section>

          <section>
            <h2>7. Termination</h2>
            <p>
              We reserve the right, in our sole discretion, to terminate or suspend your access to all or 
              part of the Site, without notice, for any conduct that we believe is in violation of these 
              Terms of Service or any applicable law.
            </p>
          </section>

          <section>
            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic 
              of Indonesia. Any dispute arising under these Terms shall be subject to the exclusive 
              jurisdiction of the courts located in Bekasi, West Java.
            </p>
          </section>

          <section>
            <h2>9. Changes to Terms</h2>
            <p>
              Codify reserves the right to revise these Terms at any time without prior notice. By using 
              this Site, you are agreeing to be bound by the then-current version of these Terms of Service.
            </p>
          </section>

          <section className="legal-contact-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <div className="contact-box-legal">
              <p><strong>Email:</strong> hello@codify.id</p>
              <p><strong>Office:</strong> Bekasi, Indonesia</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
