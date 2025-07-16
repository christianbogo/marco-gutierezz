import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import BunnyVideoPlayer from "../comps/BunnyVideoPlayer";
import FullscreenGallery from "../comps/FullscreenGallery";
import "../styles/project-detail.css";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/" className="back-link">
            ← Back to Portfolio
          </Link>
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
        <div className="project-header">
          <Link to="/" className="back-link">
            ← Back to Portfolio
          </Link>
          <h1>{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-content">
          <div className="video-section">
            <div className="main-video">
              <BunnyVideoPlayer
                videoId={selectedVideo.bunnyVideoId}
                libraryId="468791"
                className="project-video"
              />
            </div>

            {project.videos.length > 1 && (
              <div className="video-selector">
                <h3>Videos ({project.videos.length})</h3>
                <div className="video-thumbnails">
                  {project.videos.map((video, index) => (
                    <button
                      key={video.id}
                      className={`video-thumbnail ${
                        index === selectedVideoIndex ? "active" : ""
                      }`}
                      onClick={() => setSelectedVideoIndex(index)}
                    >
                      <span className="video-title">{video.title}</span>
                      <span className="video-duration">{video.duration}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="info-section">
            <div className="video-info">
              <h2>{selectedVideo.title}</h2>
              <div className="video-meta">
                <span className="duration">{selectedVideo.duration}</span>
              </div>
            </div>

            <div className="credits-section">
              <h3>Credits</h3>
              <div className="credits-grid">
                {selectedVideo.credits.director && (
                  <div className="credit-item">
                    <span className="credit-role">Director</span>
                    <span className="credit-name">
                      {selectedVideo.credits.director}
                    </span>
                  </div>
                )}
                {selectedVideo.credits.dp && (
                  <div className="credit-item">
                    <span className="credit-role">DP</span>
                    <span className="credit-name">
                      {selectedVideo.credits.dp}
                    </span>
                  </div>
                )}
                {selectedVideo.credits.producer && (
                  <div className="credit-item">
                    <span className="credit-role">Producer</span>
                    <span className="credit-name">
                      {selectedVideo.credits.producer}
                    </span>
                  </div>
                )}
                {selectedVideo.credits.editor && (
                  <div className="credit-item">
                    <span className="credit-role">Editor</span>
                    <span className="credit-name">
                      {selectedVideo.credits.editor}
                    </span>
                  </div>
                )}
                {selectedVideo.credits.talent && (
                  <div className="credit-item">
                    <span className="credit-role">Talent</span>
                    <span className="credit-name">
                      {selectedVideo.credits.talent}
                    </span>
                  </div>
                )}
                {selectedVideo.credits.client && (
                  <div className="credit-item">
                    <span className="credit-role">Client</span>
                    <span className="credit-name">
                      {selectedVideo.credits.client}
                    </span>
                  </div>
                )}
                {selectedVideo.credits.agency && (
                  <div className="credit-item">
                    <span className="credit-role">Agency</span>
                    <span className="credit-name">
                      {selectedVideo.credits.agency}
                    </span>
                  </div>
                )}
                {selectedVideo.credits.year && (
                  <div className="credit-item">
                    <span className="credit-role">Year</span>
                    <span className="credit-name">
                      {selectedVideo.credits.year}
                    </span>
                  </div>
                )}
              </div>
            </div>

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
                      <img src={image} alt={`${project.title} ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
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
