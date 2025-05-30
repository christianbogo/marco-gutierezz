import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const SCROLL_DOWN_THRESHOLD = 400;

type NavMode = "initial" | "fixedHidden" | "fixedVisible";

const Header: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [initialNavHeight, setInitialNavHeight] = useState(70);

  const [navMode, _setNavMode] = useState<NavMode>("initial");
  const navModeRef = useRef<NavMode>("initial");

  const [applyNoTransformTransition, setApplyNoTransformTransition] =
    useState(false);

  const setNavMode = (newMode: NavMode) => {
    const oldMode = navModeRef.current;

    if (
      oldMode === "initial" &&
      (newMode === "fixedHidden" || newMode === "fixedVisible")
    ) {
      setApplyNoTransformTransition(true);
    }

    navModeRef.current = newMode;
    _setNavMode(newMode);
  };

  useEffect(() => {
    if (navRef.current) {
      setInitialNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > SCROLL_DOWN_THRESHOLD) {
        setNavMode("fixedVisible");
      } else if (initialNavHeight > 0 && currentScrollY > initialNavHeight) {
        setNavMode("fixedHidden");
      } else {
        setNavMode("initial");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialNavHeight]);

  useEffect(() => {
    if (applyNoTransformTransition) {
      const rafId = requestAnimationFrame(() => {
        setApplyNoTransformTransition(false);
      });
      return () => cancelAnimationFrame(rafId);
    }
  }, [applyNoTransformTransition]);

  let navClassName = "navbar";
  if (navMode === "initial") {
    navClassName += " mode-initial";
  } else if (navMode === "fixedHidden") {
    navClassName += " mode-fixed mode-hidden";
  } else if (navMode === "fixedVisible") {
    navClassName += " mode-fixed mode-visible";
  }

  if (applyNoTransformTransition) {
    navClassName += " no-transform-transition";
  }

  return (
    <nav ref={navRef} className={navClassName}>
      <Link to="/" className="navbar-brand">
        <span className="brand-icon" aria-hidden="true"></span>
        <span className="brand-text-container">
          <span className="brand-text brand-text-marco">Marco </span>
          <span className="brand-text brand-text-gutierezz">Gutierezz </span>
          <span className="brand-text brand-text-visuals">Visuals</span>
        </span>
      </Link>
      <div className="navbar-actions">
        <a href="#portfolio" className="nav-link-item portfolio-link">
          Portfolio
        </a>
        <Link to="/hire-us" className="hire-us-button">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
