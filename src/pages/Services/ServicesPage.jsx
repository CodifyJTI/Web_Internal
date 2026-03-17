import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesPage.css';

// Import components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ServicesPageHero from '../../components/ServicesHero/ServicesPageHero.jsx';
import ServicesDetails from '../../components/ServicesDetails/ServicesDetails.jsx';
import FAQSection from '../../components/FAQ/FAQSection.jsx';
import ContactCTA from '../../components/Contact/ContactCTA.jsx';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';

function ServicesPage() {
  const { t } = useTranslation();

  // Memindahkan data ke dalam agar bisa menggunakan t() secara dinamis
  const servicesData = [
    {
      id: 'simplify',
      subtitle: t('servicesPage.items.simplify.subtitle'),
      title: t('servicesPage.items.simplify.title'),
      image: '/simplify.png',
      description: t('servicesPage.items.simplify.desc'),
      subServices: [
        { title: t('servicesPage.items.simplify.sub.1.title'), desc: t('servicesPage.items.simplify.sub.1.desc') },
        { title: t('servicesPage.items.simplify.sub.2.title'), desc: t('servicesPage.items.simplify.sub.2.desc') },
        { title: t('servicesPage.items.simplify.sub.3.title'), desc: t('servicesPage.items.simplify.sub.3.desc') },
        { title: t('servicesPage.items.simplify.sub.4.title'), desc: t('servicesPage.items.simplify.sub.4.desc') }
      ]
    },
    {
      id: 'integrate',
      subtitle: t('servicesPage.items.integrate.subtitle'),
      title: t('servicesPage.items.integrate.title'),
      image: '/integrate.png',
      description: t('servicesPage.items.integrate.desc'),
      subServices: [
        { title: t('servicesPage.items.integrate.sub.1.title'), desc: t('servicesPage.items.integrate.sub.1.desc') },
        { title: t('servicesPage.items.integrate.sub.2.title'), desc: t('servicesPage.items.integrate.sub.2.desc') },
        { title: t('servicesPage.items.integrate.sub.3.title'), desc: t('servicesPage.items.integrate.sub.3.desc') },
        { title: t('servicesPage.items.integrate.sub.4.title'), desc: t('servicesPage.items.integrate.sub.4.desc') }
      ]
    },
    {
      id: 'automate',
      subtitle: t('servicesPage.items.automate.subtitle'),
      title: t('servicesPage.items.automate.title'),
      image: '/automate.png',
      description: t('servicesPage.items.automate.desc'),
      subServices: [
        { title: t('servicesPage.items.automate.sub.1.title'), desc: t('servicesPage.items.automate.sub.1.desc') },
        { title: t('servicesPage.items.automate.sub.2.title'), desc: t('servicesPage.items.automate.sub.2.desc') },
        { title: t('servicesPage.items.automate.sub.3.title'), desc: t('servicesPage.items.automate.sub.3.desc') },
        { title: t('servicesPage.items.automate.sub.4.title'), desc: t('servicesPage.items.automate.sub.4.desc') }
      ]
    }
  ];

  return (
    <div className="services-page">
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
