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
          <p className="contact-subheading">We'd love to hear from you!</p>
          
          <p className="address-detail">
            **Alamat:** Ruko Grand Galaxy City, Jl. Boulevard Raya, Jaka Setia, Bekasi Selatan, Kota Bekasi
          </p>
          <p className="contact-detail">
            **Telepon:** +6285200634181
          </p>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f">F</i></a>
            <a href="#"><i className="fab fa-instagram">I</i></a>
            <a href="#"><i className="fab fa-twitter">X</i></a>
            <a href="#"><i className="fab fa-linkedin-in">L</i></a>
            <a href="#"><i className="fab fa-youtube">Y</i></a>
          </div>
        </div>

        {/* Kolom 2: Our Services */}
        <div className="footer-links-block">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Digital Platform & Application Development</a></li>
            <li><a href="#">Unified Data & Business Intelligence</a></li>
            <li><a href="#">Revenue & Operations Automation</a></li>
            {/* Tambahan dari Image 1 */}
            <li><a href="#">Case Studies</a></li> 
            <li><a href="#">Blog Posts</a></li>
          </ul>
        </div>
        
        {/* Kolom 3: Quick Links */}
        <div className="footer-links-block">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ Section</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Careers Page</a></li>
            <li><a href="#">Client Portal</a></li>
          </ul>
        </div>
      </div>

      {/* Bagian Bawah Footer (Copyright dan Legal Links) */}
      <div className="footer-bottom-section">
        <p className="copyright-text">©2025 Softwins Agency All rights reserved.</p>
        <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;