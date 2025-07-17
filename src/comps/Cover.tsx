import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "../utils/FadeInSection";
import { projects } from "../data/projects";
import "../styles/cover.css";

const SLIDESHOW_INTERVAL = 4000; // 4 seconds

const Cover = () => {
  const userEmail = "marcogutierrezho@gmail.com";
  const [randomProjects, setRandomProjects] = useState<
    Array<{ project: any; thumbnail: string }>
  >([]);

  // Slideshow state
  const [slideshowImages, setSlideshowImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Get all featured projects and their thumbnails for preview images
    const featuredProjects = projects.filter((p) => p.featured);
    const allThumbnails: Array<{ project: any; thumbnail: string }> = [];
    const allImages: string[] = [];

    featuredProjects.forEach((project) => {
      project.thumbnails.forEach((thumbnail) => {
        allThumbnails.push({ project, thumbnail });
        allImages.push(thumbnail);
      });
    });

    // Shuffle and take first 3 for preview
    const shuffled = allThumbnails.sort(() => 0.5 - Math.random());
    setRandomProjects(shuffled.slice(0, 3));

    // Shuffle all images for slideshow
    const shuffledImages = allImages.sort(() => 0.5 - Math.random());
    setSlideshowImages(shuffledImages);
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (slideshowImages.length < 2) return;
    intervalRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
        setFade(true);
      }, 400); // fade out duration
    }, SLIDESHOW_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slideshowImages]);

  const backgroundImage =
    slideshowImages.length > 0
      ? `url('${slideshowImages[currentSlide]}')`
      : "url('https://picsum.photos/seed/marcoOutdoorBg/1920/1080')";

  return (
    <section className="cover-section" id="home">
      <div
        className={`cover-background-image slideshow-bg${
          fade ? " fade-in" : " fade-out"
        }`}
        style={{ backgroundImage }}
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
