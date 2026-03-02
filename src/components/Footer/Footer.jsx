import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-section">
        
        {/* Kolom 1: Logo & Kontak */}
        <div className="contact-info-block">
          <Link to="/">
            <img src="/Logo_Codify.png" alt="Codify Logo" className="footer-logo" style={{ height: '50px' }} />
          </Link>
          <p className="address-detail">
            Ruko Grand Galaxy City, Jl. Boulevard Raya, Jaka Setia, Bekasi Selatan, Kota Bekasi.
          </p>
          <p className="contact-detail">
            Telepon: +6285200634181
          </p>
        </div>

        {/* Kolom 2: Our Services */}
        <div className="footer-links-block">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services/simplify">Simplify</Link></li>
            <li><Link to="/services/automate">Automate</Link></li>
            <li><Link to="/services/integrate">Integrate</Link></li>
          </ul>
        </div>
        
        {/* Kolom 3: Quick Links */}
        <div className="footer-links-block">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/aboutUs">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#faq">FAQ Section</a></li>
          </ul>
        </div>
      </div>

      {/* Bagian Bawah Footer (Copyright dan Legal Links) */}
      <div className="footer-bottom-section">
        <p className="copyright-text">©2025 Softwins Agency All rights reserved.</p>
        <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
