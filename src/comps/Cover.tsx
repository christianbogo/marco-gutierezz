import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "../utils/FadeInSection";
import { projects } from "../data/projects";
import "../styles/cover.css";

const Cover = () => {
  const userEmail = "marcogutierrezho@gmail.com";
  const [randomProjects, setRandomProjects] = useState<
    Array<{ project: any; thumbnail: string }>
  >([]);

  useEffect(() => {
    // Get all featured projects and their thumbnails
    const featuredProjects = projects.filter((p) => p.featured);
    const allThumbnails: Array<{ project: any; thumbnail: string }> = [];

    featuredProjects.forEach((project) => {
      project.thumbnails.forEach((thumbnail) => {
        allThumbnails.push({ project, thumbnail });
      });
    });

    // Shuffle and take first 3
    const shuffled = allThumbnails.sort(() => 0.5 - Math.random());
    setRandomProjects(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="cover-section" id="home">
      <div
        className="cover-background-image"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/marcoOutdoorBg/1920/1080')",
        }}
        title="Outdoor scenic background for Marco Visuals"
      ></div>
      <div className="cover-overlay-tint"></div>
      <div className="cover-gradient-transition"></div>

      <div className="cover-left-overlay">
        <a href={`mailto:${userEmail}`} className="cover-email-link">
          {userEmail}
        </a>
      </div>

      <div className="cover-center-overlay">
        <FadeInSection className="cover-content">
          <div className="cover-headline-secondary">Marco Gutierrez</div>
          <h1 className="cover-headline-primary">VISUALS</h1>
          <p className="cover-subtitle">Content Producer / Videographer</p>
          <div className="cover-logos">
            {randomProjects.map((item, index) => (
              <Link
                key={index}
                to={`/project/${item.project.slug}`}
                className="client-logo-link"
              >
                <img
                  src={item.thumbnail}
                  alt={`${item.project.title} project`}
                  className="client-logo"
                />
              </Link>
            ))}
          </div>
        </FadeInSection>
      </div>

      <div className="cover-right-overlay">
        <div className="cover-social-icons">
          <a
            href="https://www.instagram.com/marcotgutierrez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/images/icons/instagram.svg"
              alt="Instagram"
              className="social-icon-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cover;
