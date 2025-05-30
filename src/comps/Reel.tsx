import React from "react";
import FadeInSection from "../utils/FadeInSection";
import "../styles/reel.css";

const Reel = () => {
  return (
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
  );
};

export default Reel;
