import React from "react";
import { Link } from "react-router-dom";
import FadeInSection from "../utils/FadeInSection";
import { getFeaturedProjects } from "../data/projects";
import "../styles/portfolio.css";

const Portfolio = () => {
  const projects = getFeaturedProjects();

  const getProjectThumbnail = (project: any) => {
    if (project.thumbnails && project.thumbnails.length > 0) {
      return project.thumbnails[0];
    }

    const firstVideo = project.videos[0];
    if (firstVideo) {
      return `https://vz-${firstVideo.bunnyLibraryId}.b-cdn.net/${firstVideo.bunnyVideoId}/thumbnail.jpg`;
    }

    return "/images/placeholder.jpg";
  };

  return (
    <section className="section featured-productions" id="portfolio">
      <FadeInSection>
        <h2 className="featured-productions-title">Featured Productions</h2>
      </FadeInSection>
      <div className="image-grid">
        {projects.map((project) => (
          <FadeInSection key={project.id} className="image-grid-item">
            <Link to={`/project/${project.slug}`} className="project-link">
              <div className="image-wrapper">
                <img
                  src={getProjectThumbnail(project)}
                  alt={`${project.title} production`}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <span className="view-project">View Project</span>
                </div>
              </div>
              <h3 className="portfolio-project-title">{project.title}</h3>
            </Link>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
