import React, { useEffect, useRef } from "react";
import "./quotes.css"; // Import the CSS for the Quotes section

// Reusable component for sections that fade in
// REMINDER: This should ideally be in a shared utility file like src/utils/FadeInSection.tsx
// and imported here, rather than redefined in each component.
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

const Quotes = () => {
  return (
    <section className="section testimonial-section section-dark">
      <FadeInSection>
        <p className="testimonial-quote">
          "@Billey is my only recent assistant who's got everything into work in
          a few easy steps. Look further, you've already got what you need here
          in this one theme only."
        </p>
        <p className="testimonial-author">CREATIVE AGENT</p>
      </FadeInSection>
    </section>
  );
};

export default Quotes;
