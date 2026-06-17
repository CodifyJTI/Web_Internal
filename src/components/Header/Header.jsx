import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = i18n.language?.startsWith('id') ? 'id' : 'en';

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">

        <div className="header-logo">
          <Link to="/">
            <img src="/Logo_Codify.png" alt="Codify Logo" width="150" height="150" loading="lazy" />
          </Link>
        </div>

        <div className="header-actions">
          <nav className="header-nav">
            <NavLink to="/aboutUs" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('header.aboutUs')}
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('header.services')}
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('header.portfolio')}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('header.contact')}
            </NavLink>
          </nav>
          <div className="lang-switcher">
            <button
              className={currentLang === 'en' ? 'active' : ''}
              onClick={() => i18n.changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={currentLang === 'id' ? 'active' : ''}
              onClick={() => i18n.changeLanguage('id')}
            >
              ID
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
