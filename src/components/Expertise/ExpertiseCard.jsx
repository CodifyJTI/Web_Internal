import React from 'react';
import './Expertise.css';

function ExpertiseCard({ title, description }) {
  return (
    <div className="expertise-card">
      {/* Tambahkan placeholder gambar ini */}
      <div className="expertise-image-placeholder">
        {/* Kamu bisa menambahkan tag <img> di sini nanti */}
      </div> 
      
      {/* Konten kartu */}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="learn-more-link">Learn More &gt;</a> 
    </div>
  );
}

export default ExpertiseCard;