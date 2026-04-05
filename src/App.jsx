import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/HomePage/HomePage.jsx';
import AboutUsPage from './pages/AboutUs/AboutUsPage.jsx';
import ServicesPage from './pages/Services/ServicesPage.jsx';
import SimplifyPage from './pages/Simplify/SimplifyPage.jsx';
import IntegratePage from './pages/Integrate/IntegratePage.jsx';
import AutomatePage from './pages/Automate/AutomatePage.jsx';
import PortfolioPage from './pages/Porto/PortofolioPage.jsx';
import ProjectDetailPage from './pages/Porto/ProjectDetailPage.jsx';
import ContactPage from './pages/Contact/ContactPage.jsx';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy.jsx';
import TermsOfService from './pages/Legal/TermsOfService.jsx';
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/simplify" element={<SimplifyPage />} />
        <Route path="/services/integrate" element={<IntegratePage />} />
        <Route path="/services/automate" element={<AutomatePage />} />

        {/* Portfolio */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
