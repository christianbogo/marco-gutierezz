import React from "react";
import FadeInSection from "../utils/FadeInSection"; // Assuming this path is correct
import "../styles/cover.css";

const Cover = () => {
  // Placeholder email and social links - update as needed
  const userEmail = "marcogutierrezho@gmail.com"; // Example email for Marco
  const socialLinks = [
    { name: "F", url: "#facebook", label: "Facebook" },
    { name: "I", url: "#instagram", label: "Instagram" },
    { name: "T", url: "#twitter", label: "Twitter" },
  ];

  return (
    <section className="cover-section" id="home">
      <div
        className="cover-background-image"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/marcoOutdoorBg/1920/1080')", // Replace with Marco's actual background image
        }}
        title="Outdoor scenic background for Marco Visuals"
      ></div>
      <div className="cover-overlay-tint"></div>

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
            {/* Replace with actual client or partner logos */}
            <img
              src="https://picsum.photos/seed/clientlogo1/120/50?grayscale&invert=1"
              alt="Client Logo 1"
              className="client-logo"
            />
            <img
              src="https://picsum.photos/seed/clientlogo2/120/50?grayscale&invert=1"
              alt="Client Logo 2"
              className="client-logo"
            />
            <img
              src="https://picsum.photos/seed/clientlogo3/120/50?grayscale&invert=1"
              alt="Client Logo 3"
              className="client-logo"
            />
          </div>
        </FadeInSection>
      </div>

      <div className="cover-right-overlay">
        <div className="cover-social-icons">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cover;
