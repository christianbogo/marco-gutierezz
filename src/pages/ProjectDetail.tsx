import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import BunnyIframePlayer from "../comps/BunnyIframePlayer";
import FullscreenGallery from "../comps/FullscreenGallery";
import "../styles/project-detail.css";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>
              The project you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="portfolio-button">
              ← View All Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const selectedVideo = project.videos[selectedVideoIndex];

  const openGallery = (startIndex: number) => {
    setGalleryStartIndex(startIndex);
    setGalleryOpen(true);
  };

  return (
    <div className="project-detail">
      <div className="container">
        {/* Project Title */}
        <div className="project-hero">
          <h1 className="project-title">{project.title}</h1>
          {project.description && (
            <p className="project-description">{project.description}</p>
          )}
        </div>

        {/* Video Section - Now at the top! */}
        <section className="video-section">
          <div className="main-video">
            <BunnyIframePlayer
              videoId={selectedVideo.bunnyVideoId}
              libraryId={selectedVideo.bunnyLibraryId}
              className="project-video"
              height={600}
            />
          </div>

          {/* Video Info */}
          <div className="video-info">
            <h2 className="video-title">{selectedVideo.title}</h2>
            <div className="video-meta">
              <span className="duration">{selectedVideo.duration}</span>
              {project.videos.length > 1 && (
                <span className="video-count">
                  {selectedVideoIndex + 1} of {project.videos.length}
                </span>
              )}
            </div>
            <div className="video-credits-mobile">
              <span className="video-client">{project.client}</span>
              <span className="video-year">
                {/* Find year from credits */}
                {Object.values(selectedVideo.credits).find(
                  (credit) => credit.title.toLowerCase() === "year"
                )?.name || "2024"}
              </span>
            </div>
          </div>

          {/* Multiple Videos Selector */}
          {project.videos.length > 1 && (
            <div className="video-selector">
              <h3>Additional Videos</h3>
              <div className="video-thumbnails">
                {project.videos.map((video, index) => (
                  <button
                    key={video.id}
                    className={`video-thumbnail ${
                      index === selectedVideoIndex ? "active" : ""
                    }`}
                    onClick={() => setSelectedVideoIndex(index)}
                  >
                    <div className="thumbnail-placeholder">
                      <div className="play-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="thumbnail-info">
                      <span className="thumbnail-title">{video.title}</span>
                      <span className="thumbnail-duration">
                        {video.duration}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Content Grid - Credits and Gallery */}
        <div className="project-content">
          {/* Credits */}
          <div className="credits-section">
            <h3>Credits</h3>
            <div className="credits-list">
              {Object.keys(selectedVideo.credits)
                .sort((a, b) => Number(a) - Number(b))
                .map((key) => {
                  const credit = selectedVideo.credits[Number(key)];
                  return (
                    <div key={key} className="credit-item">
                      <span className="credit-role">{credit.title}</span>
                      <span className="credit-name">{credit.name}</span>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Gallery */}
          {project.thumbnails && project.thumbnails.length > 0 && (
            <div className="gallery-section">
              <h3>Gallery</h3>
              <div className="gallery-grid">
                {project.thumbnails.map((image: string, index: number) => (
                  <button
                    key={index}
                    className="gallery-item"
                    onClick={() => openGallery(index)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      loading="lazy"
                    />
                    <div className="gallery-overlay">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Portfolio Button */}
        <div className="mobile-navigation">
          <Link to="/" className="portfolio-button-mobile">
            View All Projects
          </Link>
        </div>
      </div>

      <FullscreenGallery
        images={project.thumbnails}
        initialIndex={galleryStartIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        projectTitle={project.title}
      />
    </div>
  );
};

export default ProjectDetail;
