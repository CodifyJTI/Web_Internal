import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <div className="header-logo">
          <Link to="/">
            <img src="/Logo_Codify.png" alt="Codify Logo" style={{ height: '40px' }} />
          </Link>
        </div>

        <nav className="header-nav">
          <Link to="/AboutUs">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;
