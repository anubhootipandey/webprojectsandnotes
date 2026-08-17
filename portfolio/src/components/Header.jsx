import React from 'react';

const Header = () => {
  return (
    <header className="header">
        <Link to="/" className="logo">
          PORTFOLIO
        </Link>
        <div className="bx bx-menu" id="menu-icon"></div>
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/education" className="nav-link">
            Education
          </Link>
          <Link to="/skills" className="nav-link">
            Skills
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </header>
  )
}

export default Header