import React from "react";
import { Link } from "react-router-dom"; // Import Link for client-side navigation
import "../styles/header.css"; // Import the CSS for the header

// Placeholder for social icons (you can use actual icon components later)
const SocialIcon = ({ platform }: { platform: string }) => (
  <span style={{ margin: "0 5px", cursor: "pointer" }}>
    {platform[0].toUpperCase()}
  </span>
);

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Billey.
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link> {/* Example: update path as needed */}
        </li>
        <li>
          <Link to="/elements">Elements</Link>{" "}
          {/* Example: update path as needed */}
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>{" "}
          {/* Assuming a /portfolio route */}
        </li>
        <li>
          <Link to="/blog">Blog</Link> {/* Example: update path as needed */}
        </li>
        <li>
          <Link to="/shop">Shop</Link> {/* Example: update path as needed */}
        </li>
      </ul>
      <div>
        <SocialIcon platform="Facebook" />
        <SocialIcon platform="Instagram" />
        <SocialIcon platform="Twitter" />
        <Link
          to="/hire-us" // Example: update path or make it a mailto link etc.
          className="hire-us-button"
          style={{ marginLeft: "20px" }}
        >
          HIRE US NOW
        </Link>
      </div>
    </nav>
  );
};

export default Header;
