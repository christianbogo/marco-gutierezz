import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // For consistency, though not strictly necessary for # links
import "./footer.css"; // Import the CSS for the footer

// Reusable component for sections that fade in
// Consider moving this to a shared utility file (e.g., src/utils/FadeInSection.tsx)
// if used by multiple components beyond Header and Footer.
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

const Footer = () => {
  return (
    <footer className="footer">
      <FadeInSection>
        <div className="footer-social-icons">
          {/* Using Link for consistency, but can be <a> if these are external or non-routed */}
          <Link to="#facebook">F</Link>
          <Link to="#twitter">T</Link>
          <Link to="#instagram">I</Link>
          <Link to="#pinterest">P</Link>
        </div>
        <p>© 2025 Billey Theme by ImagiDev. Inspired by ThemeMove.</p>
        <p>hello@billey.studio</p>
      </FadeInSection>
    </footer>
  );
};

export default Footer;
