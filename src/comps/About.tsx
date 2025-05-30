import React, { useEffect, useRef } from "react";
import "./about.css"; // Import the CSS for the About section

// Reusable component for sections that fade in
// Consider moving this to a shared utility file (e.g., src/utils/FadeInSection.tsx)
// if used by multiple components.
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

const About = () => {
  return (
    <section className="section about-section" id="about">
      <FadeInSection>
        <p className="about-title">ABOUT MARCO</p>
        <h2 className="about-main-title">
          Marco Gutierrez: Content Producer & Videographer
        </h2>
        <p className="about-subtitle-text">
          A recent Business Administration and Marketing graduate from Seattle
          Pacific University, Marco brings over six years of dedicated
          experience in video production and photography. His journey through
          freelance projects, including graduate and wedding videography,
          evolved into a comprehensive Creative Production role, particularly
          within the music industry. This diverse experience has equipped him
          with a robust skill set in managing projects from initial concept and
          strategic planning through to directing and post-production,
          emphasizing collaboration, professional integrity, and effective time
          management. Marco is passionate about leveraging these skills to
          create compelling digital marketing and content.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <img
              src="https://picsum.photos/seed/videoprodicon/50/50?grayscale"
              alt="Video Production Icon"
            />
            <h3>Video Production</h3>
            <p>
              Specializing in high-quality video content, handling all aspects
              of production to bring your vision to life with cinematic flair.
            </p>
          </div>
          <div className="service-item">
            <img
              src="https://picsum.photos/seed/contentdevicon/50/50?grayscale"
              alt="Content Development Icon"
            />
            <h3>Content Development & Strategy</h3>
            <p>
              From idea generation to pre-production planning, developing
              engaging content strategies that align with your brand and
              marketing objectives.
            </p>
          </div>
          <div className="service-item">
            <img
              src="https://picsum.photos/seed/postprodicon/50/50?grayscale"
              alt="Post-Production Icon"
            />
            <h3>Post-Production & Retouching</h3>
            <p>
              Expert editing, color grading, photo retouching, and finishing
              touches to ensure a polished and professional final product.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
