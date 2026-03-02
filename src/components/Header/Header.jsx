import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <img src="/Logo_Codify.png" alt="Codify Logo" />
          </Link>
        </div>

        <nav className="header-nav">
          <NavLink to="/aboutUs" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;
