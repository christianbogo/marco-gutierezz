import React from "react";
import FadeInSection from "../utils/FadeInSection";
import "../styles/cover.css";

const Cover = () => {
  return (
    <section className="hero-section" id="home">
      <div
        className="background-image-animate"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/heroImg/1920/1080')",
        }}
        title="Creators INSPIRED - Background"
      ></div>
      <FadeInSection className="hero-content fade-in-section">
        <h1 className="hero-title">
          Creators <span className="accent-text">INSPIRED</span>
        </h1>
        <p className="hero-subtitle">FILM STUDIO SINCE 1977</p>
        <div className="hero-awards">
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
