import React from "react";

// Import the section components
import Cover from "../comps/Cover";
import About from "../comps/About";
import Portfolio from "../comps/Portfolio";

// Optional: If you create a specific CSS file for Home.tsx layout adjustments
// import './Home.css';

const Home = () => {
  return (
    <>
      <Cover />
      <Portfolio />
      <About />
      {/* Any other sections that belong on the homepage would go here */}
    </>
  );
};

export default Home;
