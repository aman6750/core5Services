import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-brand">core5 System and Services</a>
           <ul className="navbar-nav">
            <li className="nav-item"><a href="/courses" className="nav-link">Courses</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
           </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
