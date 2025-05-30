import React from "react";
// Assuming FadeInSection is now centralized as per previous recommendations
import FadeInSection from "../utils/FadeInSection"; // Adjust path if your utils folder is elsewhere
import "./reel.css"; // Import the CSS for the Reel (CTA) section

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
        {/* The href here might navigate to a contact page or a specific section */}
        <a href="#subscribe" className="subscribe-button">
          SUBSCRIBE FOR NEWSLETTERS
        </a>
      </FadeInSection>
    </section>
  );
};

export default Reel;
