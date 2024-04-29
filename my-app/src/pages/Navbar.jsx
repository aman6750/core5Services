import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaHome, FaInfoCircle, FaBriefcase, FaShieldAlt, FaBookOpen, FaUserTie, FaEnvelope,FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="data:image/jpeg;base64,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" alt="Core5 Logo" />
      </div>
      <div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><a href="#"><FaHome /> Home</a></li>
        <li>
          <a href="#"><FaInfoCircle /> About</a>
          <ul className="dropdown">
            <li><a href="#">Mission</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">Values</a></li>
          </ul>
        </li>
        <li>
          <a href="#"><FaBriefcase /> Services</a>
          <ul className="dropdown">
            <li><a href="#">Service 1</a></li>
            <li><a href="#">Service 2</a></li>
            <li><a href="#">Service 3</a></li>
          </ul>
        </li>
        <li>
          <a href="#"><FaShieldAlt /> Solutions</a>
          <ul className="dropdown">
            <li><a href="#">Solution 1</a></li>
            <li><a href="#">Solution 2</a></li>
            <li><a href="#">Solution 3</a></li>
          </ul>
        </li>
        <li><a href="#"><FaBookOpen /> Case Study</a></li>
        <li><a href="#"><FaBookOpen /> Blog</a></li>
        <li><a href="#"><FaUserTie /> Careers</a></li>
        <li><a href="#"><FaEnvelope /> Contact</a></li>
        <li className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><FaSearch /></button>
        </li>
      </ul>
      </div>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
