import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo & Description */}
        <div className="footer-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/x48.png`}
            alt="Taj Mahal Journeys Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            TajMahal Journeys is your gateway to explore the enchanting beauty
            of the Taj Mahal and nearby attractions. We offer unforgettable
            tours tailored to your preferences with top-notch services.
          </p>
        </div>

        {/* Center Section: Pages */}
        <div className="footer-section">
        <h5 className="info-header">Pages</h5>

          <ul className="footer-list">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/BookNow" className="footer-link">
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Section: Packages */}
        <div className="footer-section">
        <h5 className="info-header">Packages</h5>

          <ul className="footer-list">
            <li>
              <Link to="/classic-tour" className="footer-link">
                Sunrise Tour
              </Link>
            </li>
            <li>
              <Link to="/TajMahalTourByCar" className="footer-link">
                Tour by Car
              </Link>
            </li>
            <li>
              <Link to="/TajMahalTourByTrain" className="footer-link">
                Tour by Train
              </Link>
            </li>
            <li>
              <Link to="/TajMahalOvernightTour" className="footer-link">
                Overnight Tour
              </Link>
            </li>
            <li>
              <Link to="/TajMahalLuxuryTour" className="footer-link">
                Luxury Tour
              </Link>
            </li>
          </ul>
        </div>

     {/* Right Section: Info */}
<div className="footer-section">
<h5 className="info-header">Info</h5>

  <p className="footer-contact">
    <FaPhone className="icon-yellow me-2" /> +91 8057666970
  </p>
  <p className="footer-contact">
    <FaEnvelope className="icon-yellow me-2" /> tajmahaljourneys1@gmail.com
  </p>
  <p className="footer-contact">
    <FaMapMarkerAlt className="icon-yellow me-2" /> Taj Nagari Phase-2, Agra, U.P. 282001
  </p>
</div>
</div>


      {/* Social Icons */}
      <div className="footer-socials">
        <a
          href="https://facebook.com/profile.php?id=61564811489796&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/india_caravan_tours?igsh=M2dqa2Z5dDUxdGRw"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://indiacaravantours.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGlobe />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
