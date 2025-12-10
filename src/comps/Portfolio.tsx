import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "../utils/FadeInSection";
import { client, urlFor } from "../lib/sanity";
import "../styles/portfolio.css";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnails: any[];
  videos: any[];
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch featured projects and settings
    const query = `{
      "projects": *[_type == "project" && featured == true]{
          _id,
          title,
          slug,
          thumbnails,
          videos
      },
      "settings": *[_type == "settings"][0]
    }`;

    (client as any)
      .fetch(query)
      .then((data: any) => {
        const { projects, settings } = data;

        // Enhance projects with default library ID
        if (projects && settings?.bunnyLibraryId) {
          projects.forEach((p: any) => {
            if (p.videos) {
              p.videos.forEach((v: any) => {
                if (!v.bunnyLibraryId) {
                  v.bunnyLibraryId = settings.bunnyLibraryId;
                }
              });
            }
          });
        }

        setProjects(projects || []);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const getProjectThumbnail = (project: Project) => {
    // 1. Try Sanity Image
    if (project.thumbnails && project.thumbnails.length > 0) {
      return urlFor(project.thumbnails[0]).width(400).url();
    }

    // 2. Try Bunny.net Video Thumbnail
    if (project.videos && project.videos.length > 0) {
      const firstVideo = project.videos[0];
      if (firstVideo.bunnyLibraryId && firstVideo.bunnyVideoId) {
        return `https://vz-${firstVideo.bunnyLibraryId}.b-cdn.net/${firstVideo.bunnyVideoId}/thumbnail.jpg`;
      }
    }

    return "/images/placeholder.jpg";
  };

  if (loading) {
    return (
      <section className="section featured-productions" id="portfolio">
        <div className="loading-container" style={{ padding: "100px", textAlign: "center", color: "#fff" }}>
          Loading projects...
        </div>
      </section>
    );
  }

  return (
    <section className="section featured-productions" id="portfolio">
      <FadeInSection>
        <h2 className="featured-productions-title">Featured Productions</h2>
      </FadeInSection>
      <div className="image-grid">
        {projects.map((project) => (
          <FadeInSection key={project._id} className="image-grid-item">
            <Link to={`/project/${project.slug.current}`} className="project-link">
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
