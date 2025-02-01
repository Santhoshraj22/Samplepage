import React, { useState } from "react";
import "./Header.css"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header">
      <div className="container">
      
        <h1 className="logo">LOGO HERE</h1>


        <ul className="nav-links">
          <li><a href="#">Register</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Video Tutorials</a></li>
          <li><a href="#">Free Tools</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Knowledge Base</a></li>
        </ul>

       
        <div className="right-buttons">
          <a href="#">Pricing</a>
          <a href="#">Dashboard</a>
          <a href="#">Support</a>
          <button className="sign-in">Sign In</button>
        </div>

    
        <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>


      {isOpen && (
        <div className="mobile-dropdown">
          <a href="#">Register</a>
          <a href="#">Products</a>
          <a href="#">Features</a>
          <a href="#">Video Tutorials</a>
          <a href="#">Free Tools</a>
          <a href="#">FAQ</a>
          <a href="#">Knowledge Base</a>
          <a href="#">Pricing</a>
          <a href="#">Dashboard</a>
          <a href="#">Support</a>
          <button className="sign-in">Sign In</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
