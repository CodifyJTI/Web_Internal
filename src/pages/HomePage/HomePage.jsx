import React from 'react';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

import Header from '../../components/Header/Header.jsx';
import SEO from '../../components/SEO/SEO.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import SolutionSection from '../../components/Solution/SolutionSection.jsx';
import ChallengesSection from '../../components/Challenges/ChallengesSection.jsx';
import ExpertiseSection from '../../components/Expertise/ExpertiseSection.jsx';
import FAQSection from '../../components/FAQ/FAQSection.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <SEO
        title={t('homePage.seoTitle')}
        description={t('homePage.seoDescription')}
        path="/"
      />
      <Header />
      <HeroSection />
      <SolutionSection />
      <ChallengesSection />
      <ExpertiseSection />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default HomePage;
