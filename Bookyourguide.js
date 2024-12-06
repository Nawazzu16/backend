import React from "react";
import "./ContactUs.css"; // Link to the CSS file

const Bookyourguide = () => {
  return (
    <div className="contact-us-section container-fluid">
      <div className="contact-us-content">
        <img 
          src="/images/.jpg" // Ensure this image is in your public folder
          alt="Contact Background"
          className="contact-us-image"
        />
        <div className="contact-us-text-wrapper">
          <h2 className="contact-us-title">Contact Us</h2>
          <p className="contact-us-description">
            We’d love to hear from you! Whether you have a question about tours, 
            pricing, need assistance, or just want to say hello, our team is ready 
            to answer all your questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookyourguide;
