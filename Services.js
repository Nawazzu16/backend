import React, { useState } from "react";
import './Servicepage.css';
import ContactForm from "../components/ContactForm";
import ServiceCards from "../components/ServiceCards";
import Services1 from "../components/Services1";
import WhatsAppLink from "../components/WhatsAppLink";

// Sample data for services
const servicesData = {
  GuidedTours: {
    title: "Guided Tours",
    description: "Experience the beauty of the world with our expert-guided tours.",
  },
  HotelBookings: {
    title: "Hotel Bookings",
    description: "Find the perfect accommodation for your stay.",
  },
  LuxuryAccommodations: {
    title: "Luxury Accommodations",
    description: "Stay in the finest hotels and resorts, ensuring comfort and style throughout your journey.",
  },
  
  CustomizedPackages: {
    title: "Customized Packages",
    description: "Tailor your travel experience with our customized packages.",
  },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("GuidedTours");
  const { title, description } = servicesData[activeTab];

  return (
    <>
      <section className="service-section">
        <div className="service-header text-center">
          <h2 className="service-title">Our Services</h2>
          <p className="service-subtitle">Explore the World with Us</p>
        </div>
        <div className="service-tabs">
          {Object.keys(servicesData).map((key) => (
            <button
              key={key}
              className={`service-tab ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {servicesData[key].title}
            </button>
          ))}
        </div>
        <div className="service-content">
          <h3 className="service-card-title">{title}</h3>
          <p className="service-card-text">{description}</p>
        </div>
      </section>
      <WhatsAppLink/>
      <Services1 />
      <ServiceCards />
    </>
  );
};

export default Services;
