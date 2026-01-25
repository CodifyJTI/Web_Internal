import React from 'react';

// Components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';
import AboutUsHero from '../../components/AboutUsHero/AboutUsHero.jsx';
import CorePillars from '../../components/CorePillars/CorePillars.jsx';
import TeamSection from '../../components/Team/TeamSection.jsx';
import Milestones from '../../components/Milestones/Milestones.jsx';
import FAQSection from '../../components/FAQ/FAQSection.jsx';

// Styles


function AboutUsPage() {
  return (
    <> 
      <Header />
      <main>
        <AboutUsHero />
        <CorePillars />
        <TeamSection />
        <Milestones />
        <FAQSection />
      </main>
      <ContactCTA />
      <Footer />
    </>
  );
}

export default AboutUsPage;