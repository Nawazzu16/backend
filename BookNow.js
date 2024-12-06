import React, { useState } from "react";
import "./BookNows.css";
import CountryDropdown from "../components/country";
import WhatsAppLink from "../components/WhatsAppLink";

const BookNow = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      contactNumber: `${e.target.country.value} ${e.target.contactNumber.value}`, // Concatenate country code and number
      country: e.target.country.value,
      message: e.target.message.value,
      package: e.target.package.value, // Include selected package
    };

    try {
      const response = await fetch('https://backend-1-xy02.onrender.com/api/booking',  {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Sends dynamic data
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.message || 'Booking form submitted successfully!');
        e.target.reset();
      } else {
        setResponseMessage('Error submitting booking form. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error submitting booking form. Please try again.');
      setIsError(true);
    }
  };

  return (
    <div className="book-now-page">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Book Your Dream Tour</h1>
          <p>Discover the Taj Mahal and beyond with our exclusive packages!</p>
        </div>
      </div>

      <div className="booking-form-section">
        <h2 className="form-heading">Fill Out Your Details</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-left">
            <input name="name" type="text" placeholder="Name" className="form-input" required />
            <input name="email" type="email" placeholder="Email" className="form-input" required />

            <div className="contact-number-wrapper">
              <CountryDropdown />
              <input
                name="contactNumber"
                type="text"
                placeholder="Contact Number"
                className="form-input contact-number-input"
                required
              />
            </div>

            <input name="country" type="text" placeholder="Country" className="form-input" required />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="form-textarea"
            ></textarea>
          </div>

          <div className="divider"></div>

          <div className="form-right">
            <label className="dropdown-label">Select Package</label>
            <select name="package" className="form-dropdown" required>
              <option value="" disabled selected hidden>
                Select your package
              </option>
              <option value="sunrise">Taj Mahal Sunrise Tour</option>
              <option value="car">Taj Mahal Tour by Car</option>
              <option value="train">Taj Mahal Tour by Train</option>
              <option value="overnight">Taj Mahal Overnight Tour</option>
              <option value="luxury">Taj Mahal Luxury Tour</option>
            </select>

            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </div>
        </form>

        {/* Success/Error Message */}
        {responseMessage && (
          <div className={`response-message ${isError ? "error-message" : "success-message"}`}>
            <p>{responseMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

<WhatsAppLink/>

export default BookNow;
