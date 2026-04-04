// CorePillars.jsx
import React from "react";
import "./CorePillars.css";

export default function SectionCorePillar() {
  return (
    <>
      <section className="empowering-section">
        <div className="empowering-container">
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

          <div className="empowering-image-wrapper">
            <img
              src="/tes.png"
              alt="Digital transformation illustration"
              className="empowering-image-placeholder"
            />
          </div>
        </div>
      </section>

      <section className="core-pillars-section">
        <div className="core-pillars-container">
          <div className="core-pillars-text">
            <h2>
              Harnessing Data Insights for Exceptional Software Solutions
            </h2>
            <p>
              Our agency uniquely blends data strategy with technical execution to drive digital transformation. This powerful combination enables us to create tailored solutions that meet the specific needs of Indonesian businesses.
            </p>
            <div className="pillars-list">
              <div className="pillar-item">
                <img src="/tes.png" alt="Data Strategy" width={50} height={50} />
                <div>
                  <h3>Data Strategy</h3>
                  <p>
                    Transforming raw data into actionable insights for informed decision making.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <img src="/tes.png" alt="Technical Execution" width={50} height={50} />
                <div>
                  <h3>Technical Execution</h3>
                  <p>
                    Delivering robust software solutions that integrate seamlessly with existing systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="core-pillars-image">
            <div className="image-placeholder">
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
