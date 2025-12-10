// src/App.tsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./comps/Header";
import Footer from "./comps/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import TestPage from "./pages/TestPage";
import StudioPage from "./sanity/Studio";

function App() {
  const location = useLocation();
  const isStudio = location.pathname.startsWith("/studio");

  return (
    <div className="App">
      {!isStudio && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/studio/*" element={<StudioPage />} />
        </Routes>
      </main>
      {!isStudio && <Footer />}
    </div>
  );
}

export default App;
