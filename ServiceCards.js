import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCards.css';

const ServiceCards = () => {
  return (
    <section className="service-cards-section">
      <div className="background-image"></div>
      <div className="container">
        <h2 className="section-title">Booking Services</h2>
        <div className="cards-container">
          <div className="card">
            <img src="/images/x12.jpg" alt="Service 1" className="card-image" />
            <h3 className="card-title">Guide Service</h3>
            <p className="card-description">
              We provide well-trained, disciplined, and experienced tourist guides with excellent communication skills.
            </p>
            <Link to="/BookNow" className="card-button">Book Now</Link>
          </div>
          <div className="card">
            <img src="/images/x10.jpg" alt="Service 2" className="card-image" />
            <h3 className="card-title">Cab Booking</h3>
            <p className="card-description">
              Cab booking can be done through our website. Get in touch with us for door-to-door service.
            </p>
            <Link to="/BookNow" className="card-button">Book Now</Link>
          </div>
          <div className="card">
            <img src="/images/x11.jpg" alt="Service 3" className="card-image" />
            <h3 className="card-title">Hotel Bookings</h3>
            <p className="card-description">
              We are in touch with the best hotels near the Taj. Book your stay with us for a memorable trip.
            </p>
            <Link to="/BookNow" className="card-button">Book Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
