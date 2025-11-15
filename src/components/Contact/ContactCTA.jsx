import React, { useState } from 'react';
import './ContactCTA.css';

function ContactCTA() {
  // State untuk mengelola input formulir
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.acceptedTerms && formData.name && formData.email) {
      console.log('Formulir berhasil dikirim:', formData);
      // Di sini nanti kamu akan kirim data ke backend
      alert('Pesanmu telah terkirim! Cek console untuk data formulir.');
    } else {
      alert('Mohon isi semua kolom dan terima Syarat & Ketentuan.');
    }
  };

  return (
    <section className="contact-cta-section">
      {/* === PERBAIKAN DIMULAI DI SINI === */}
      <div className="contact-cta-container"> 
        
        <div className="cta-content">
          <h2>Start Your Digital Transformation Today</h2>
          {/* Mengganti <p className="subtitle"> menjadi <p> agar CSS-nya pas */}
          <p> 
            Unlock the potential of your business with our tailored solutions. Let's discuss your needs!
          </p>
          {/* Link "Learn More" dihapus agar sesuai desain */}
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="acceptedTerms" // Tambahkan ID agar label-nya bisa diklik
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
            />
            {/* 'htmlFor' harus sama dengan 'id' input */}
            <label htmlFor="acceptedTerms">I accept the Terms</label> 
          </div>
          
          <button type="submit" className="connect-button">Connect</button>
        </form>

      </div> 
      {/* === PERBAIKAN SELESAI DI SINI === */}
    </section>
  );
}

export default ContactCTA;