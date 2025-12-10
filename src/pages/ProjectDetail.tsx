import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BunnyIframePlayer from "../comps/BunnyIframePlayer";
import SwiperGallery from "../comps/SwiperGallery";
import CallToAction from "../comps/CallToAction";
import { client, urlFor } from "../lib/sanity";
import "../styles/project-detail.css";

interface ProjectData {
  title: string;
  description: string;
  client: string;
  thumbnails: any[];
  videos: {
    _key: string;
    title: string;
    bunnyVideoId: string;
    bunnyLibraryId: string;
    duration: string;
    credits: { role: string; name: string }[];
  }[];
}

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);

  // Fetch project data
  // Fetch project data
  useEffect(() => {
    setLoading(true);
    const query = `{
      "project": *[_type == "project" && slug.current == $slug][0],
      "settings": *[_type == "settings"][0]
    }`;
    (client as any)
      .fetch(query, { slug })
      .then((data: any) => {
        const { project, settings } = data;
        if (project) {
          // Fill in default library ID if missing
          if (project.videos && settings?.bunnyLibraryId) {
            project.videos.forEach((v: any) => {
              if (!v.bunnyLibraryId) {
                v.bunnyLibraryId = settings.bunnyLibraryId;
              }
            });
          }
          setProject(project);
        } else {
          setProject(null);
        }
        setLoading(false);
      })
      .catch((err: any) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="project-detail">
        <div className="container" style={{ padding: "100px", textAlign: "center" }}>
          <h2 style={{ color: "#fff" }}>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist or has been moved.</p>
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

  // Convert Sanity images to URLs for the gallery
  const galleryImageUrls =
    project.thumbnails?.map((img) => urlFor(img).url()) || [];

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
        {selectedVideo && (
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
                  {selectedVideo.credits?.find(
                    (credit) => credit.role.toLowerCase() === "year"
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
                      key={video._key || index}
                      className={`video-thumbnail ${index === selectedVideoIndex ? "active" : ""
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
        )}

        {/* Content Grid - Gallery Only */}
        <div className="project-content">
          {/* Gallery */}
          {galleryImageUrls.length > 0 && (
            <div className="gallery-section" style={{ width: "100%" }}>
              <h3>Gallery</h3>
              <div className="gallery-grid">
                {galleryImageUrls.map((imageUrl, index) => (
                  <button
                    key={index}
                    className="gallery-item"
                    onClick={() => openGallery(index)}
                  >
                    <img
                      src={urlFor(project.thumbnails[index]).width(600).url()}
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

        <div style={{ marginTop: "40px", paddingBottom: "120px" }}>
          <CallToAction />
        </div>

        {/* Mobile Portfolio Button */}
        <div className="mobile-navigation">
          <Link to="/" className="portfolio-button-mobile">
            View All Projects
          </Link>
        </div>
      </div>

      <SwiperGallery
        images={galleryImageUrls}
        initialIndex={galleryStartIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        projectTitle={project.title}
      />
    </div>
  );
};

export default ProjectDetail;
