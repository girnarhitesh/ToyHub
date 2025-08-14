import { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/"><img src="public/logo.png/Toyslogo.png" alt="" /></Link>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/products">products</a></li>
          <li><a href="/certifications">Certifications</a></li>
        </ul>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}
export default Navigation