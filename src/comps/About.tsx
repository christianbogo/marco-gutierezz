import React, { useState } from "react";
import FadeInSection from "../utils/FadeInSection";
import "../styles/about.css";

const About = () => {
  const userEmail = "marcogutierrezho@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(userEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = userEmail;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err2) {}
      document.body.removeChild(textarea);
    }
  };

  return (
    <section className="section about-section" id="about">
      <FadeInSection>
        <div className="about-intro-grid">
          <div className="about-intro-left">
            <p className="about-label">ABOUT MARCO</p>
            <h2 className="about-main-title">
              Professional Videographer & Content Creator
            </h2>
          </div>
          <div className="about-intro-right">
            <p className="about-description-text">
              <strong>
                I'm a Business Administration and Marketing graduate from
                Seattle Pacific University with 6+ years of video production and
                photography experience.
              </strong>
              <br />
              <br />
              My journey spans freelance work, weddings, and creative roles in
              the music industry. I manage projects from concept to
              post-production, focusing on collaboration, professionalism, and
              delivering compelling digital content.
            </p>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-item">
            <img
              src="/images/icons/video.svg"
              alt="Video Production Icon"
              className="service-icon-img"
            />
            <h3>Video Production</h3>
            <p>
              Handling all aspects of production to bring your vision to life
              with cinematic flair.
            </p>
          </div>
          <div className="service-item">
            <img
              src="/images/icons/film.svg"
              alt="Content Development Icon"
              className="service-icon-img"
            />
            <h3>Development & Strategy</h3>
            <p>
              Creative concepts and planning to craft content that fits your
              brand and goals.
            </p>
          </div>
          <div className="service-item">
            <img
              src="/images/icons/monitor.svg"
              alt="Post-Production Icon"
              className="service-icon-img"
            />
            <h3>Post-Production</h3>
            <p>
              Expert editing, color grading, and finishing touches to ensure a
              professional final product.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <h3>Ready to Bring Your Vision to Life?</h3>
          <p>
            Let's discuss your project and create something extraordinary
            together. I'm here to help you tell your story through compelling
            visual content.
          </p>
          <button className="about-cta-button" onClick={handleCopyEmail}>
            {copied ? "Email Copied!" : "Get in Touch"}
          </button>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
