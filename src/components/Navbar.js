import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/global.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="top-menu">
      <div className="menu-items">
        <Link to="/" className="menu-item">Home</Link>
        <div
          className="menu-item dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          Topics
          <div className={`dropdown-content ${isDropdownOpen ? "open" : ""}`}>
            <Link to="/chapter-1" className="dropdown-item">Main Flow Chart</Link>
            <Link to="/chapter-1" className="dropdown-item">Chapter 1</Link>
            <Link to="/chapter-1" className="dropdown-item">Chapter 2</Link>
            <Link to="/chapter-3" className="dropdown-item">Chapter 3</Link>
            <Link to="/chapter-4" className="dropdown-item">Chapter 4</Link>
            <Link to="/chapter-5" className="dropdown-item">Chapter 5</Link>
            <Link to="/chapter-6" className="dropdown-item">Chapter 6</Link>
            <Link to="/chapter-1" className="dropdown-item">Chapter 7</Link>
            <Link to="/chapter-1" className="dropdown-item">Chapter 8</Link>
            <Link to="/chapter-1" className="dropdown-item">Chapter 9</Link>
          </div>
        </div>
        <Link to="/examples" className="menu-item">Examples</Link>
        <Link to="/about" className="menu-item">About</Link>
        <Link to="/contact" className="menu-item">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
