import React from "react";
import FadeInSection from "../utils/FadeInSection"; // Assuming this path is correct
import "../styles/about.css";

const About = () => {
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
                I’m a Business Administration and Marketing graduate from
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
              src="https://picsum.photos/seed/videoprodicon/50/50?grayscale"
              alt="Video Production Icon"
              className="service-icon"
            />
            <h3>Video Production</h3>
            <p>
              Handling all aspects of production to bring your vision to life
              with cinematic flair.
            </p>
          </div>
          <div className="service-item">
            <img
              src="https://picsum.photos/seed/contentdevicon/50/50?grayscale"
              alt="Content Development Icon"
              className="service-icon"
            />
            <h3>Development & Strategy</h3>
            <p>
              Creative concepts and planning to craft content that fits your
              brand and goals.
            </p>
          </div>
          <div className="service-item">
            <img
              src="https://picsum.photos/seed/postprodicon/50/50?grayscale"
              alt="Post-Production Icon"
              className="service-icon"
            />
            <h3>Post-Production</h3>
            <p>
              Expert editing, color grading, and finishing touches to ensure a
              professional final product.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
