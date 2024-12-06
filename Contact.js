import React from "react";
import "./ContactUs.css";
import { FaPhoneAlt } from "react-icons/fa"; // Importing icons from react-icons
import IndiaMap from "../components/IndiaMap";
import ContactSection from "../components/ContactSection";
import WhatsAppLink from "../components/WhatsAppLink";

const ContactUs = () => {
  return (
    <>
      <div className="unique-hero-section">
        <div className="unique-hero-content">
          <h2 className="unique-hero-title">
            Contact Us
            <FaPhoneAlt className="unique-hero-icon" />
          </h2>
          <p className="unique-hero-description">
            We’d love to hear from you! Whether you have a question about tours,
            pricing, need assistance, or just want to say hello, our team is ready
            to answer all your questions.
          </p>
        </div>
      </div>
      <div className="unique-contact-section-wrapper">
        <ContactSection />
      </div>
      <WhatsAppLink />
      <div className="map-wrapper">
        <IndiaMap />
      </div>
    </>
  );
};

export default ContactUs;
