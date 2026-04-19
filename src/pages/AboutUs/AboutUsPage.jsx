import React from 'react';

// Components
import Header from '../../components/Header/Header.jsx';
import SEO from '../../components/SEO/SEO.jsx';
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
      <SEO 
        title="About Us - Our Mission & Vision" 
        description="Learn about Codify's story, our core pillars, and the team driving digital transformation."
        path="/about"
      />
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