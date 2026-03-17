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
            <img 
              src="/Logo_Codify.png" 
              alt="Codify Logo" 
              className="footer-logo" 
              style={{ height: '50px' }} 
              loading="lazy" 
            />
          </Link>
          <p className="address-detail">
            Ruko Grand Galaxy City, Jl. Boulevard Raya, Jaka Setia, Bekasi Selatan, Kota Bekasi.
          </p>
          <p className="contact-detail">
            Telepon: +6285200634181
          </p>
          <div className="social-media-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
            </a>
          </div>
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
