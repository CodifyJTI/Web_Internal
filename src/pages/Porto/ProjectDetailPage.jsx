import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import portfolioData from '../../data/portfolioData.js';
import './ProjectDetailPage.css';

function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the project by slug from all categories
  let project = null;
  let categoryName = '';
  
  for (const mainTab in portfolioData) {
    for (const subTab in portfolioData[mainTab].projects) {
      const found = portfolioData[mainTab].projects[subTab].find(p => p.slug === slug);
      if (found) {
        project = found;
        categoryName = `${mainTab} - ${subTab}`;
        break;
      }
    }
    if (project) break;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-detail-page">
        <Header />
        <main className="container error-container">
          <h1>Project Not Found</h1>
          <p>The project you are looking for does not exist or has been moved.</p>
          <Link to="/portfolio" className="btn-back">← Back to Portfolio</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <Header />
      
      <main className="container">
        <div className="detail-header">
          <Link to="/portfolio" className="btn-back">← Back to Portfolio</Link>
          <span className="project-category">{categoryName}</span>
          <h1>{project.title}</h1>
        </div>

        <div className="project-media-container">
          {project.embed.includes('youtube.com') || project.embed.includes('vimeo.com') ? (
            <iframe 
              src={project.embed} 
              title={project.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="media-content"
            ></iframe>
          ) : (
            <img 
              src={project.embed} 
              alt={project.title} 
              className="media-content image-media"
            />
          )}
        </div>

        <div className="project-content">
          <section className="description-section">
            <h2>Project Overview</h2>
            <p>{project.desc}</p>
            <p className="full-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetailPage;
