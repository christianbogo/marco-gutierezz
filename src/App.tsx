// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./comps/Header"; //
import Footer from "./comps/Footer"; //
import Home from "./pages/Home"; //
import ProjectDetail from "./pages/ProjectDetail";
// Other page imports

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {" "}
        {/* Optional: wrap routes in <main> for semantics */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          {/* Other routes like /about, /portfolio-detail/:id etc. */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
