import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <Header />
      <main className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Halaman Tidak Ditemukan</h2>
        <p>
          Sepertinya Anda tersesat. Halaman yang Anda cari mungkin telah dipindahkan atau tidak pernah ada.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn-back-home">
            Back to Homepage
          </Link>
          <Link to="/portfolio" className="btn-back-portfolio">
            Back to Portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
