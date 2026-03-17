import React, { useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import FormField from '../../components/FormField/FormField.jsx';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ganti dengan ID Formspree Anda (buat di formspree.io)
    const formspreeEndpoint = "https://formspree.io/f/mqaevepy"; 
    
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const isFormValid = formData.name && formData.email && formData.message;

    if (isFormValid) {
      setIsSubmitting(true);
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Terima kasih! Pesan Anda telah dikirim ke tim Codify. Kami akan segera menghubungi Anda.');
          setFormData({ name: '', email: '', message: '' });
          setTouched({ name: false, email: false, message: false });
        } else {
          alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.');
        }
      } catch (error) {
        alert('Terjadi kesalahan koneksi. Silakan periksa jaringan Anda.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert('Silakan lengkapi semua bidang yang diperlukan.');
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Hubungi Kami</h1>
            <p>
              Kami siap membantu transformasi digital bisnis Anda. Silakan isi formulir di bawah ini 
              atau hubungi kami melalui informasi kontak yang tersedia.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Mari Berdiskusi</h2>
              <p>
                Apakah Anda memiliki pertanyaan tentang layanan kami, proposal proyek, atau sekadar 
                ingin menyapa, tim ahli kami siap merespons.
              </p>
              <div className="info-item">
                <strong>Email:</strong>
                <span>hello@codify.id</span>
              </div>
              <div className="info-item">
                <strong>Telepon:</strong>
                <span>+62 852-0063-4181</span>
              </div>
              <div className="info-item">
                <strong>Alamat:</strong>
                <span>Ruko Grand Galaxy City, Bekasi Selatan, Kota Bekasi</span>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <FormField
                  label="Nama"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Nama Lengkap Anda"
                  required
                  isTouched={touched.name}
                />
                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="alamat@email.com"
                  required
                  isTouched={touched.email}
                />
                <FormField
                  label="Pesan"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                  required
                  isTouched={touched.message}
                />
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
