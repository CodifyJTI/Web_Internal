import React, { useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './LegalPages.css';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Header />
      <main className="legal-container">
        <article className="legal-article">
          <h1>Syarat dan Ketentuan</h1>
          <span className="legal-last-updated">Terakhir Diperbarui: 2 Maret 2026</span>

          <p>
            Terima kasih telah mengunjungi Codify. Dengan mengakses dan menggunakan situs web kami, 
            Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat oleh syarat dan ketentuan berikut ini:
          </p>

          <h2>Layanan Kami</h2>
          <p>
            Codify menyediakan layanan konsultasi strategis, integrasi sistem, dan otomatisasi operasional 
            melalui berbagai solusi teknologi kustom. Segala informasi yang disajikan di situs ini 
            bertujuan memberikan gambaran umum mengenai kapasitas dan cakupan layanan kami.
          </p>

          <h2>Kekayaan Intelektual</h2>
          <p>
            Seluruh konten yang terdapat di situs web ini, termasuk namun tidak terbatas pada logo, 
            desain grafis, teks, ikon, dan kode sumber, adalah properti eksklusif dari <strong>Codify</strong> 
            dan dilindungi oleh undang-undang hak cipta Republik Indonesia serta hukum internasional. 
            Penggunaan, reproduksi, atau distribusi tanpa izin tertulis dari kami sangat dilarang.
          </p>

          <h2>Penggunaan Situs</h2>
          <p>
            Anda setuju untuk menggunakan situs ini hanya untuk tujuan yang sah secara hukum. 
            Anda dilarang keras melakukan tindakan yang dapat:
          </p>
          <ul>
            <li>Merusak, melumpuhkan, atau membebani server situs web kami.</li>
            <li>Mengganggu kenyamanan pengguna lain dalam mengakses layanan kami.</li>
            <li>Melakukan tindakan peretasan atau penyebaran konten berbahaya lainnya.</li>
          </ul>

          <h2>Batasan Tanggung Jawab</h2>
          <p>
            Codify tidak bertanggung jawab atas kerugian langsung, tidak langsung, atau konsekuensial 
            yang mungkin timbul dari penggunaan atau ketidakmampuan Anda dalam mengakses situs web ini. 
            Kami berupaya menjaga keakuratan data, namun tidak menjamin situs ini akan selalu bebas dari gangguan teknis.
          </p>

          <h2>Perubahan Ketentuan</h2>
          <p>
            Kami berhak untuk memperbarui atau mengubah syarat dan ketentuan ini sewaktu-waktu 
            tanpa pemberitahuan sebelumnya. Perubahan tersebut akan berlaku segera setelah diposting 
            di halaman ini. Kami menyarankan Anda untuk meninjau halaman ini secara berkala.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
