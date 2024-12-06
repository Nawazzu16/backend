import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap'; // Using Bootstrap's NavDropdown component

const ServicesDropdown = () => {
  return (
    <li className="nav-item dropdown">
      <NavDropdown title="Services" id="services-dropdown">
        <NavDropdown.Item as={Link} to="/book-guide">
          Book Your Guide
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/book-cab">
          Book Your Cab
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/book-hotel">
          Book Your Hotel
        </NavDropdown.Item>
      </NavDropdown>
    </li>
  );
};

export default ServicesDropdown;
