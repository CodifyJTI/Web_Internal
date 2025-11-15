// CorePillars.jsx
import React from "react";
import "./CorePillars.css";

export default function SectionCorePillar() {
  return (
    <>
      {/* Section Baru: Empowering Indonesian Businesses */}
      <section className="empowering-section">
        <div className="empowering-container">
          {/* Kiri: Blok Teks */}
          <div className="empowering-text-content">
            <div className="empowering-icon-circle">
              <span className="empowering-icon-text">12<br />36</span>
            </div>
            <h2>
              Empowering Indonesian Businesses Through Innovative Digital Transformation Solutions
            </h2>
            <p>
              At our software agency, we leverage our deep expertise in data strategy and technical execution to drive digital transformation. Our unique approach combines custom development, seamless integration, and intelligent automation to simplify your business processes.
            </p>
          </div>

          {/* Kanan: Gambar Placeholder */}
          <div className="empowering-image-wrapper">
            <img
              src="/tes.png"
              alt="Digital transformation illustration"
              className="empowering-image-placeholder"
            />
          </div>
        </div>
      </section>

      {/* Section Lama: Harnessing Data Insights for Exceptional Software Solutions */}
      <section className="core-pillars-section">
        <div className="core-pillars-container">
          {/* Kiri: Blok Teks */}
          <div className="core-pillars-text">
            <h2>
              Harnessing Data Insights for Exceptional Software Solutions
            </h2>
            <p>
              Our agency uniquely blends data strategy with technical execution to drive digital transformation.
              This powerful combination enables us to create tailored solutions that meet the specific needs of Indonesian
              businesses.
            </p>
            {/* Daftar Pilar Inti */}
            <div className="pillars-list">
              {/* Item Pilar 1: Strategi Data */}
              <div className="pillar-item">
                <img src="/tes.png" alt="Strategi Data" width={50} height={50} /> {/* Tambahkan width & height */}
                <div>
                  <h3>Strategi Data</h3>
                  <p>
                    Mengubah data mentah menjadi wawasan yang dapat ditindaklanjuti
                    untuk pengambilan keputusan yang terinformasi.
                  </p>
                </div>
              </div>

              {/* Item Pilar 2: Eksekusi Teknis */}
              <div className="pillar-item">
                <img src="/tes.png" alt="Eksekusi Teknis" width={50} height={50} /> {/* Tambahkan width & height */}
                <div>
                  <h3>Eksekusi Teknis</h3>
                  <p>
                    Menghadirkan solusi perangkat lunak yang tangguh dan terintegrasi
                    secara mulus dengan sistem yang ada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: Blok Gambar Placeholder */}
          <div className="core-pillars-image">
            <div className="image-placeholder">
              {/* Jika Anda ingin menggunakan gambar nyata di sini, ganti SVG dengan img tag */}
              {/* <img src="/placeholder-corepillar.png" alt="Core Pillar Illustration" className="actual-image-inside-placeholder" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}