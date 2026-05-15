import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import SEO from '../../components/SEO/SEO';
import Footer from '../../components/Footer/Footer';
import './NotFoundPage.css';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="not-found-page">
      <SEO
        title={t('notFound.seoTitle')}
        description={t('notFound.seoDescription')}
        path="/404"
      />
      <Header />
      <main className="not-found-content">
        <h1>{t('notFound.title')}</h1>
        <h2>{t('notFound.heading')}</h2>
        <p>{t('notFound.description')}</p>
        <div className="not-found-actions">
          <Link to="/" className="btn-back-home">
            <i className="fa-solid fa-house" style={{ marginRight: '8px' }}></i>
            {t('notFound.backHome')}
          </Link>
          <Link to="/portfolio" className="btn-back-portfolio">
            <i className="fa-solid fa-briefcase" style={{ marginRight: '8px' }}></i>
            {t('notFound.backPortfolio')}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
