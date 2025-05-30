import React from "react";
import FadeInSection from "../utils/FadeInSection";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;
