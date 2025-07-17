import React, { useEffect, useState, useCallback } from "react";
import "../styles/fullscreen-gallery.css";

interface FullscreenGalleryProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

const FullscreenGallery: React.FC<FullscreenGalleryProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
  projectTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Update current index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goToNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      setCurrentIndex((prev) => (prev + 1) % images.length);
    },
    [images.length]
  );

  const goToPrevious = useCallback(
    (e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    [images.length]
  );

  const handleThumbnailClick = useCallback(
    (index: number, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex(index);
    },
    []
  );

  const handleCloseClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    },
    [onClose]
  );

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, goToNext, goToPrevious, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fullscreen-gallery-overlay" onClick={handleCloseClick}>
      <div className="fullscreen-gallery-container">
        {/* Close Button */}
        <button
          className="gallery-close-btn"
          onClick={handleCloseClick}
          aria-label="Close gallery"
        >
          ×
        </button>

        {/* Image Counter */}
        <div className="gallery-counter">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Main Image */}
        <div
          className="gallery-image-container"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`${projectTitle} ${currentIndex + 1}`}
            className="gallery-main-image"
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              className="gallery-nav-btn gallery-prev-btn"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="gallery-nav-btn gallery-next-btn"
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="gallery-thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`gallery-thumb ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={(e) => handleThumbnailClick(index, e)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FullscreenGallery;
