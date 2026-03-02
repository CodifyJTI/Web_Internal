import React from 'react';
import './HomePage.css'; // Path ke CSS

// --- SEMUA PATH KOMPONEN BERUBAH ---
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import SolutionSection from '../../components/Solution/SolutionSection.jsx';
import ChallengesSection from '../../components/Challenges/ChallengesSection.jsx';
import ExpertiseSection from '../../components/Expertise/ExpertiseSection.jsx';
import TestiSection from '../../components/Testi/TestiSection.jsx';
import FAQSection from '../../components/FAQ/FAQSection.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <SolutionSection />
      <ChallengesSection />
      <ExpertiseSection />
      <div className="expertise-links">
        <div className="expertise-card portfolio">
          <img src="/tes.png" alt="Portfolio" />
          <h3>Portfolio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#">View Portfolio</a>
        </div>
        <div className="expertise-card case-studies">
          <img src="/tes.png" alt="Case Studies" />
          <h3>Case Studies</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <a href="#">View Case Studies</a>
        </div>
        <div className="expertise-card blog">
          <img src="/tes.png" alt="Blog" />
          <h3>Blog</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
          <a href="#">Read Blog</a>
        </div>
      </div>
      <TestiSection />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default HomePage;