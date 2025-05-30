// src/App.tsx
import React, { useEffect, useRef } from "react";
import "./styles.css"; // Import the new CSS file

// Placeholder for social icons (you can use actual icon components later)
const SocialIcon = ({ platform }: { platform: string }) => (
  <span style={{ margin: "0 5px", cursor: "pointer" }}>
    {platform[0].toUpperCase()}
  </span>
);

// Reusable component for sections that fade in
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

function App() {
  return (
    <div className="App">
      {/* --- Navbar --- */}
      <nav className="navbar">
        <a href="#home" className="navbar-brand">
          Billey.
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#pages">Pages</a>
          </li>
          <li>
            <a href="#elements">Elements</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
        </ul>
        <div>
          <SocialIcon platform="Facebook" />
          <SocialIcon platform="Instagram" />
          <SocialIcon platform="Twitter" />
          <a
            href="#hire"
            className="hire-us-button"
            style={{ marginLeft: "20px" }}
          >
            HIRE US NOW
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="hero-section" id="home">
        <div
          className="background-image-animate"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/heroImg/1920/1080')",
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

      {/* --- CTA Section ("Work with you") --- */}
      <section className="section cta-section">
        <FadeInSection>
          <h2 className="cta-title">
            WE CAN'T WAIT TO <span className="accent-text">Work with you.</span>
          </h2>
          <p className="cta-text">
            Let all your needs and requirements then make a request to help us
            understand your brand now.
          </p>
          <a href="#subscribe" className="subscribe-button">
            SUBSCRIBE FOR NEWSLETTERS
          </a>
        </FadeInSection>
      </section>

      {/* --- About Section --- */}
      <section className="section about-section" id="about">
        {" "}
        {/* Changed id to "about" for clarity */}
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
            with a robust skill set in managing projects from initial concept
            and strategic planning through to directing and post-production,
            emphasizing collaboration, professional integrity, and effective
            time management. Marco is passionate about leveraging these skills
            to create compelling digital marketing and content.
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

      {/* --- Featured Productions (Image Grid) --- */}
      <section className="section featured-productions" id="portfolio">
        <FadeInSection>
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

      {/* --- Testimonial Section --- */}
      <section className="section testimonial-section section-dark">
        <FadeInSection>
          <p className="testimonial-quote">
            "@Billey is my only recent assistant who's got everything into work
            in a few easy steps. Look further, you've already got what you need
            here in this one theme only."
          </p>
          <p className="testimonial-author">CREATIVE AGENT</p>
        </FadeInSection>
      </section>

      {/* --- Three Column Article Preview (from five.jpg) --- */}
      <section className="section article-preview-section">
        <FadeInSection>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "20px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div style={{ flex: 1, minWidth: "300px", textAlign: "left" }}>
              <h3>Is it Appropriate to Have a Personal Brand?</h3>
              <p style={{ color: "#aaa" }}>
                Rhoncus sed really great questions and this is...
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "300px", textAlign: "left" }}>
              <h3>How to Build Branded Photography Studio?</h3>
              <p style={{ color: "#aaa" }}>
                In this article we're going to cover the basics of...
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "300px", textAlign: "left" }}>
              <h3>The Call to Courage Netflix Special</h3>
              <p style={{ color: "#aaa" }}>
                When we first took Brene through the Brand Method...
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* --- Footer --- */}
      <footer className="footer">
        <FadeInSection>
          <div className="footer-social-icons">
            <a href="#facebook">F</a>
            <a href="#twitter">T</a>
            <a href="#instagram">I</a>
            <a href="#pinterest">P</a>
          </div>
          <p>© 2025 Billey Theme by ImagiDev. Inspired by ThemeMove.</p>
          <p>hello@billey.studio</p>
        </FadeInSection>
      </footer>
    </div>
  );
}

export default App;
