import React from "react";
import { Link } from "gatsby";
import  "../styles/global.css"

const Navbar = () => {
return(
    <div className="top-menu">
        <div className="menu-items">
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/topics" className="menu-item">Topics</Link>
            <Link to="/examples" className="menu-item">Examples</Link>
            <Link to="/about" className="menu-item">About</Link>
            <Link to="/contact" className="menu-item">Contact</Link>
        </div>
        <input type="text" className="search-bar" placeholder="Search topics..."/>
    </div>

);
};

export default Navbar;