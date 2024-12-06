import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    contact: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponseMessage(data.message || 'Form submitted successfully!');
      setIsSubmitted(true); // Show success message

      if (response.ok) {
        setFormData({ name: '', email: '', country: '', contact: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Failed to submit the contact form. Please try again.');
    }
  };

  return (
    <div className="contact-section-container">
      {/* Left Side */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Feel free to ask us and submit your queries by filling out the contact form.</p>
        <div className="info-item">
          <FaPhoneAlt className="icon" />
          <p>+91 8057666970</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" />
          <p>tajmahaljourneys1@gmail.com</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <p>Agra, Uttar Pradesh, India</p>
        </div>
      </div>
      {/* Right Side */}
      <form onSubmit={handleContactSubmit} className="contact-form">
        <h2>Contact Form</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Enter your country"
            value={formData.country}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="contact"
            placeholder="Enter your contact number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
        {isSubmitted && <p className="success-message">{responseMessage}</p>}
      </form>
    </div>
  );
}

export default ContactSection;
