import React from "react";
import FadeInSection from "../utils/FadeInSection";
import "../styles/quotes.css";

const Quotes = () => {
  return (
    <section className="section testimonial-section section-dark">
      <FadeInSection>
        <p className="testimonial-quote">
          "@Billey is my only recent assistant who's got everything into work in
          a few easy steps. Look further, you've already got what you need here
          in this one theme only."
        </p>
        <p className="testimonial-author">CREATIVE AGENT</p>
      </FadeInSection>
    </section>
  );
};

export default Quotes;
