import React from 'react';
import './HomePage.css';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import SolutionSection from '../../components/Solution/SolutionSection.jsx';
import ChallengesSection from '../../components/Challenges/ChallengesSection.jsx';
import ExpertiseSection from '../../components/Expertise/ExpertiseSection.jsx';
import PortfolioCarousel from '../../components/PortfolioCarousel/PortfolioCarousel.jsx';
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
      <PortfolioCarousel />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default HomePage;