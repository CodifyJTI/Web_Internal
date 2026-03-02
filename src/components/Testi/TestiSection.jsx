import React from 'react';
import './TestiSection.css';

function TestiSection() {
  return (
    <section className="testi-section">
      <div className="testi-container">
        {/* Bintang 5 */}
        <div className="testi-stars">★★★★★</div>
        
        {/* Quote sesuai gambar */}
        <blockquote className="testi-quote">
          "The custom development work transformed our operations, making them more efficient and user-friendly. Their team truly understands our needs and delivers exceptional results."
        </blockquote>
        
        <div className="testi-author-block">
          {/* Placeholder untuk icon user bulat abu-abu */}
          <div className="author-avatar-placeholder">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="author-info">
            <span className="author-name">Rina Prasetya</span>
            <span className="author-title">CEO, Tech Innovations</span>
          </div>
          
          {/* Garis pemisah vertikal */}
          <div className="author-divider"></div>

          {/* Logo Codify */}
          <div className="client-logo-text">
             <img src="/Logo_Codify.png" alt="Codify Logo" style={{ height: '30px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestiSection;