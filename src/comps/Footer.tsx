import React from "react";
import "../styles/footer.css";
import FadeInSection from "../utils/FadeInSection";

const Footer = () => {
  return (
    <footer className="footer">
      <FadeInSection>
        <div className="footer-content">
          <div className="footer-left">
            <p>Seattle, Washington, United States</p>
            <p style={{ marginTop: "5px" }}>
              <a href="mailto:marcogutierrezho@gmail.com" className="footer-link">
                marcogutierrezho@gmail.com
              </a>
            </p>
          </div>
          <div className="footer-center footer-social-icons">
            <a
              href="https://www.instagram.com/marcotgutierrez/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="social-icon"
              />
            </a>
          </div>
          <div className="footer-right">
            <p>
              Site managed by{" "}
              <a
                href="https://gravatar.com/christianbcutter"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Christian Cutter
              </a>
            </p>
          </div>
        </div>
      </FadeInSection>
    </footer>
  );
};

export default Footer;
