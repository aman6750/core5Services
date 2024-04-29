import React from 'react'
import '../styles/Header.css'
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaMapMarker } from 'react-icons/fa'; // Import icons from React Icons


function Header() {
    
  return (
    <header>
      <div className="contact-info">
        <span><FaPhoneAlt />  9930419595</span>
        <span><FaEnvelope /> info@core5.co.in</span>
        <span><FaMapMarker /> Address: 123 Main St, City, Country</span>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com/company/core5-systems-and-services-private-limited/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </header>
  )
}

export default Header
