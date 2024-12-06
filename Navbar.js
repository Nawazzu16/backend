import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close dropdown and navbar when a link is clicked
  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: '#FFD700' }}>
          TajMahal Journeys
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={handleLinkClick}>
                Services
              </Link>
            </li>
            <li className="nav-item dropdown" style={{ position: 'relative' }}>
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                onClick={toggleDropdown}
                id="tourPackagesDropdown"
                role="button"
                aria-expanded={isDropdownOpen ? 'true' : 'false'}
              >
                Tour Packages
              </Link>
              <ul
                className={`dropdown-menu custom-dropdown ${
                  isDropdownOpen ? 'show' : ''
                }`}
                aria-labelledby="tourPackagesDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/classic-tour"
                    onClick={handleLinkClick}
                  >
                    Taj Mahal Sunrise Tour
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/TajMahalTourByCar"
                    onClick={handleLinkClick}
                  >
                    Taj Mahal Tour By Car
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/TajMahalTourByTrain"
                    onClick={handleLinkClick}
                  >
                    Taj Mahal Tour By Train
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/TajMahalOvernightTour"
                    onClick={handleLinkClick}
                  >
                    Taj Mahal Overnight Tour
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/TajMahalLuxuryTour"
                    onClick={handleLinkClick}
                  >
                    Taj Mahal Luxury Tour
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="ms-auto">
            <Link to="/booknow" className="book-now-btn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
