import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (formData) => {
    try {
      // Replace with your Render backend URL
      const response = await fetch('https://backend-1-xy02.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.status === 200) {
        console.log('Form submitted successfully', result.message);
      } else {
        console.error('Error:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h3 className="contact-subtitle">Contact Info</h3>
          <p className="contact-description">We are here to help you with any questions or inquiries you may have.</p>
          <div className="contact-info-item">
            <span className="contact-text">+91-8057666970</span>
          </div>
          <div className="contact-info-item">
            <span className="contact-text">nadeem27690@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <span className="contact-text">Agra, Uttar Pradesh, India</span>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contact"
                placeholder="Your Contact"
                className="form-input"
                required
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-input"
                rows="4"
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          {responseMessage && (
            <div className="success-message">
              <p>{responseMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
