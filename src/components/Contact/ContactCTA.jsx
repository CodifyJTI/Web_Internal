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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.acceptedTerms && formData.name && formData.email) {
      const formspreeEndpoint = "https://formspree.io/f/mqaevepy"; 
      
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Terima kasih! Pesan Anda telah dikirim.');
          setFormData({ name: '', email: '', message: '', acceptedTerms: false });
        } else {
          alert('Maaf, terjadi kesalahan saat mengirim pesan.');
        }
      } catch (error) {
        alert('Terjadi kesalahan koneksi.');
      }
    } else {
      alert('Mohon lengkapi formulir dan setujui syarat.');
    }
  };

  return (
    <section className="contact-cta-section">
      <div className="contact-cta-container"> 
        
        <div className="cta-content">
          <h2>Start Your Digital Transformation Today</h2>
          <p> 
            Unlock the potential of your business with our tailored solutions. Let's discuss your needs!
          </p>
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
              id="acceptedTerms" 
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptedTerms">I accept the Terms</label> 
          </div>
          
          <button type="submit" className="connect-button">Connect</button>
        </form>

      </div> 
    </section>
  );
}

export default ContactCTA;
