import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">

        <div className="header-logo">
          <Link to="/">
            <img src="/Logo_Codify.png" alt="Codify Logo" loading="lazy" />
          </Link>
        </div>

        <div className="header-actions">
          <nav className="header-nav">
            <NavLink to="/aboutUs" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('nav.services')}
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('nav.portfolio')}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('nav.contact')}
            </NavLink>
          </nav>

          <div className="lang-switcher">
            <button 
              className={i18n.language.startsWith('id') ? 'active' : ''} 
              onClick={() => changeLanguage('id')}
            >
              ID
            </button>
            <button 
              className={i18n.language.startsWith('en') ? 'active' : ''} 
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
