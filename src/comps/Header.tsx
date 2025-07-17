import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

const SCROLL_DOWN_THRESHOLD = 400;

type NavMode = "initial" | "fixedHidden" | "fixedVisible";

const Header: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [initialNavHeight, setInitialNavHeight] = useState(70);
  const location = useLocation();

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

  const handlePortfolioClick = (e: React.MouseEvent) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home and scroll to portfolio
      e.preventDefault();
      window.location.href = "/#portfolio";
    }
    // If on home page, let the default anchor behavior work
  };

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
        <img
          src="/logo-light.svg"
          alt="Marco Gutierezz Logo"
          className="brand-logo brand-logo-light"
        />
        <img
          src="/logo-dark.svg"
          alt="Marco Gutierezz Logo"
          className="brand-logo brand-logo-dark"
        />
        <span className="brand-text-container">
          <span className="brand-text brand-text-marco">Marco </span>
          <span className="brand-text brand-text-gutierezz">Gutierrez </span>
          <span className="brand-text brand-text-visuals">Visuals</span>
        </span>
      </Link>
      <div className="navbar-actions">
        <a
          href="#portfolio"
          className="nav-link-item portfolio-link"
          onClick={handlePortfolioClick}
        >
          Portfolio
        </a>
        <a href="/#about" className="hire-us-button">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
