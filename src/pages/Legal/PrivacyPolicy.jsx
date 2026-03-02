import React, { useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './LegalPages.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Header />
      <main className="legal-container">
        <article className="legal-article">
          <h1>Kebijakan Privasi</h1>
          <span className="legal-last-updated">Terakhir Diperbarui: 2 Maret 2026</span>

          <p>
            Selamat datang di Codify. Kami menghargai privasi Anda dan berkomitmen untuk 
            melindungi data pribadi yang Anda bagikan saat mengunjungi situs web kami.
          </p>

          <h2>Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela melalui 
            formulir kontak kami, seperti nama, alamat email, dan detail pesan Anda.
          </p>

          <h2>Penggunaan Informasi</h2>
          <p>
            Data yang dikumpulkan digunakan secara eksklusif untuk merespons pertanyaan Anda, 
            mendiskusikan kebutuhan proyek, dan memberikan layanan konsultasi atau pengembangan 
            sistem yang relevan.
          </p>

          <h2>Berbagi Data</h2>
          <p>
            Codify tidak akan pernah menjual, menyewakan, atau menukar informasi pribadi Anda 
            kepada pihak ketiga mana pun.
          </p>

          <h2>Keamanan</h2>
          <p>
            Kami menerapkan standar keamanan yang wajar untuk melindungi informasi Anda dari akses 
            yang tidak sah, meskipun tidak ada transmisi data di internet yang 100% aman.
          </p>

          <h2>Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:
            <br />
            <strong>Email:</strong> hello@codify.id
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
