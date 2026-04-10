import React from 'react';
import './PortfolioCarousel.css';

function PortfolioCarousel() {
  const projects = [
    {
      id: 15,
      title: "Parking Management System CMS",
      desc: "Comprehensive central management system for parking operations and monitoring.",
      liveUrl: "http://parking-management-cms-m3rr.vercel.app/"
    },
    {
      id: 16,
      title: "Shareholder Reporting Dashboard",
      desc: "Interactive dashboard for shareholder reporting and financial data visualization.",
      liveUrl: "https://shareholder-reporting-dashboard.vercel.app/#/login"
    }
  ];

  return (
    <section className="portfolio-carousel-section">
      <div className="container">
        <h2 className="section-heading">Featured Portfolio</h2>
        <p className="section-subheading">Explore some of our live project deployments.</p>
        
        <div className="carousel-wrapper">
          <div className="portfolio-horizontal-carousel">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
                <div className="card-body">
                  <iframe 
                    src={project.liveUrl} 
                    title={project.title} 
                    loading="lazy" 
                    className="w-full h-[500px] rounded-xl project-iframe"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCarousel;
