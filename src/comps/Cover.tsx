import React, { useState, useEffect, useRef } from "react";
import FadeInSection from "../utils/FadeInSection";
import "../styles/cover.css";

const SLIDESHOW_INTERVAL = 4000; // 4 seconds

// Only use these specific thumbnails for the slideshow
const SELECTED_THUMBNAILS = [
  "/images/projects/thumbnails/adrian-3.png",
  "/images/projects/thumbnails/adrian-4.png",
  "/images/projects/thumbnails/adrian-5.png",
  "/images/projects/thumbnails/brudi-brothers-4.png",
  "/images/projects/thumbnails/brudi-brothers-6.png",
  "/images/projects/thumbnails/filson-5.png",
  "/images/projects/thumbnails/filson-6.png",
  "/images/projects/thumbnails/filson-7.png",
  "/images/projects/thumbnails/filson-10.png",
  "/images/projects/thumbnails/filson-11.png",
  "/images/projects/thumbnails/filson-12.png",
  "/images/projects/thumbnails/realtree-3.png",
  "/images/projects/thumbnails/realtree-4.png",
  "/images/projects/thumbnails/thousand-men-1.png",
  "/images/projects/thumbnails/thousand-men-2.png",
  "/images/projects/thumbnails/thousand-men-3.png",
  "/images/projects/thumbnails/thousand-men-4.png",
];

const Cover = () => {
  const userEmail = "marcogutierrezho@gmail.com";

  // Slideshow state
  const [slideshowImages, setSlideshowImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Shuffle the selected thumbnails for the slideshow
    const shuffledImages = [...SELECTED_THUMBNAILS].sort(
      () => 0.5 - Math.random()
    );
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
