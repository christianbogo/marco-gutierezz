import React, { useEffect, useRef } from "react";
import "./portfolio.css"; // Import the CSS for the Portfolio section

// Reusable component for sections that fade in
// STRONGLY RECOMMEND: Move this to a shared utility file (e.g., src/utils/FadeInSection.tsx)
// and import it here and in other components (About.tsx, Footer.tsx, etc.).
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

const Portfolio = () => {
  return (
    <section className="section featured-productions" id="portfolio">
      <FadeInSection>
        {/* Assuming .section-title is a general class still in styles.css or index.css */}
        {/* If not, you might need to define it or pass it as a prop if it varies */}
        <h2 className="section-title">Featured Productions</h2>
      </FadeInSection>
      <div className="image-grid">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <FadeInSection key={item} className="image-grid-item">
            <img
              src={`https://picsum.photos/seed/prod${item}/600/400`}
              alt={`Production ${item}`}
            />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
