import React from 'react';
import './ServicesPage.css';

// Import components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ServicesPageHero from '../../components/ServicesHero/ServicesPageHero.jsx';
import ServicesDetails from '../../components/ServicesDetails/ServicesDetails.jsx';
import FAQSection from '../../components/FAQ/FAQSection.jsx';
import TestiSection from '../../components/Testi/TestiSection.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';

// Services data
const servicesData = [
  {
    id: 'simplify',
    subtitle: 'Simplify',
    title: 'Custom Software Development',
    image: '/simplify.png',
    description:
      "Every business has unique challenges that off-the-shelf software can't solve. We replace your complex, manual, or outdated workflows with intuitive, custom-built systems designed specifically for how you work.",
    subServices: [
      {
        title: 'Web & Mobile Application Development',
        desc: 'We develop software that aligns perfectly with your business objectives and user needs.'
      },
      {
        title: 'Content Management Systems (CMS)',
        desc: 'We create CMS solutions tailored to meet your business goals and enhance user experience.'
      },
      {
        title: 'Backend Servers & Databases',
        desc: 'We create backend servers and databases that seamlessly integrate with your business goals and user requirements.'
      },
      {
        title: 'Interactive Business Dashboards',
        desc: 'Our skilled team delivers top-notch, scalable interactive business dashboards that grow alongside your organization.'
      }
    ]
  },
  {
    id: 'integrate',
    subtitle: 'Integrate',
    title: 'Unified System & Data Integration',
    image: '/integrate.png',
    description:
      "Data trapped in disconnected systems is a barrier to growth. We specialize in breaking down these silos. We design and build robust APIs and automated data pipelines...",
    subServices: [
      { title: 'API Development & Management', desc: 'Connect disparate systems for a unified data experience...' },
      { title: 'Automated Data Pipelines (ETL)', desc: 'Transform data into actionable insights...' },
      { title: 'Centralized Data Warehousing', desc: 'Transform data to actionable insights...' },
      { title: 'Third-Party Software Integration', desc: 'Transform data into actionable insights...' }
    ]
  },
  {
    id: 'automate',
    subtitle: 'Automate',
    title: 'Intelligent Process Automation',
    image: '/automate.png',
    description:
      'Our Automate service leverages advanced AI technologies to streamline your operations and enhance efficiency. ...we implement automation that works 24/7, reducing errors...',
    subServices: [
      { title: 'AI Agent & Chatbot Development', desc: 'Connect systems for a unified data experience.' },
      { title: 'Robotic Process Automation (RPA)', desc: 'Transform data into actionable insights...' },
      { title: 'Automated Reporting & Alerts', desc: 'Transform data into actionable insights...' },
      { title: 'Web Scraping & Data Extraction', desc: 'Transform data into actionable insights...' }
    ]
  }
];

function ServicesPage() {
  return (
    <div className="services-page">
      <Header />
      <ServicesPageHero />

      <main className="services-content-wrapper">
        <div className="service-details-container">
          {servicesData.map(service => (
            <ServicesDetails
              key={service.id}
              id={service.id}
              subtitle={service.subtitle}
              title={service.title}
              image={service.image}
              description={service.description}
              subServices={service.subServices}
            />
          ))}
        </div>
      </main>

      <TestiSection />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default ServicesPage;
