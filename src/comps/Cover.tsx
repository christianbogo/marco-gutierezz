export {};
import React, { useEffect, useRef } from "react";
import "./cover.css"; // Import the CSS for the Cover section

// Reusable component for sections that fade in
// FINAL REMINDER: This component (FadeInSection) is critical to move to a shared utility file
// (e.g., src/utils/FadeInSection.tsx) and import it wherever needed.
// Keeping it duplicated in each component file (Cover, Quotes, Portfolio, About, Footer)
// goes against DRY principles and makes maintenance much harder.
const FadeInSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className || ""} fade-in-text ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {children}
    </div>
  );
};

const Cover = () => {
  return (
    <section className="hero-section" id="home">
      <div
        className="background-image-animate"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/heroImg/1920/1080')", //
        }}
        title="Creators INSPIRED - Background"
      ></div>
      <FadeInSection className="hero-content">
        <h1 className="hero-title">
          Creators <span className="accent-text">INSPIRED</span>
        </h1>
        <p className="hero-subtitle">FILM STUDIO SINCE 1977</p>
        <div className="hero-awards">
          {/* Placeholder for award images/icons */}
          <img
            src="https://picsum.photos/seed/award1/50/70?grayscale"
            alt="Award 1"
          />
          <img
            src="https://picsum.photos/seed/award2/50/70?grayscale"
            alt="Award 2"
          />
          <img
            src="https://picsum.photos/seed/award3/50/70?grayscale"
            alt="Award 3"
          />
        </div>
      </FadeInSection>
    </section>
  );
};

export default Cover;
