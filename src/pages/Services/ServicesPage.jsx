import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesPage.css';

import Header from '../../components/Header/Header.jsx';
import SEO from '../../components/SEO/SEO.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ServicesPageHero from '../../components/ServicesHero/ServicesPageHero.jsx';
import ServicesDetails from '../../components/ServicesDetails/ServicesDetails.jsx';
import FAQSection from '../../components/FAQ/FAQSection.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';

function ServicesPage() {
  const { t } = useTranslation();

  const servicesData = [
    {
      id: 'simplify',
      subtitle: t('servicesPage.simplify.subtitle'),
      title: t('servicesPage.simplify.title'),
      image: '/simplify.png',
      description: t('servicesPage.simplify.description'),
      subServices: [
        { title: t('servicesPage.simplify.s1.title'), desc: t('servicesPage.simplify.s1.desc') },
        { title: t('servicesPage.simplify.s2.title'), desc: t('servicesPage.simplify.s2.desc') },
        { title: t('servicesPage.simplify.s3.title'), desc: t('servicesPage.simplify.s3.desc') },
        { title: t('servicesPage.simplify.s4.title'), desc: t('servicesPage.simplify.s4.desc') }
      ]
    },
    {
      id: 'integrate',
      subtitle: t('servicesPage.integrate.subtitle'),
      title: t('servicesPage.integrate.title'),
      image: '/integrate.png',
      description: t('servicesPage.integrate.description'),
      subServices: [
        { title: t('servicesPage.integrate.s1.title'), desc: t('servicesPage.integrate.s1.desc') },
        { title: t('servicesPage.integrate.s2.title'), desc: t('servicesPage.integrate.s2.desc') },
        { title: t('servicesPage.integrate.s3.title'), desc: t('servicesPage.integrate.s3.desc') },
        { title: t('servicesPage.integrate.s4.title'), desc: t('servicesPage.integrate.s4.desc') }
      ]
    },
    {
      id: 'automate',
      subtitle: t('servicesPage.automate.subtitle'),
      title: t('servicesPage.automate.title'),
      image: '/automate.png',
      description: t('servicesPage.automate.description'),
      subServices: [
        { title: t('servicesPage.automate.s1.title'), desc: t('servicesPage.automate.s1.desc') },
        { title: t('servicesPage.automate.s2.title'), desc: t('servicesPage.automate.s2.desc') },
        { title: t('servicesPage.automate.s3.title'), desc: t('servicesPage.automate.s3.desc') },
        { title: t('servicesPage.automate.s4.title'), desc: t('servicesPage.automate.s4.desc') }
      ]
    }
  ];

  return (
    <div className="services-page">
      <SEO
        title={t('servicesPage.seoTitle')}
        description={t('servicesPage.seoDescription')}
        path="/services"
      />
      <Header />
      <ServicesPageHero />

      <main className="services-content-wrapper">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>
          <Breadcrumbs />
        </div>
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

      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default ServicesPage;
