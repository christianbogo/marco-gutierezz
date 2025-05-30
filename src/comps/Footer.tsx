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
          </div>
          <div className="footer-center footer-social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              F
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              T
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              I
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              D
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              P
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
