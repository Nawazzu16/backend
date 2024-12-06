import React from 'react';
import './TourPackagePage.css';
import { FaCar, FaClock, FaConciergeBell, FaMap, FaPhoneAlt, FaHandsHelping, FaCheckCircle } from 'react-icons/fa'; // Import FaCheckCircle
import WhatsAppLink from '../components/WhatsAppLink';
import PriceInfo from '../components/PriceInfo';

const timeline = [
  {
    id: 1,
    title: "Day 1 – 06:30AM - Pick Up from Hotel / Airport in Delhi / Gurgaon / Noida",
    description: "The day begins early in the morning with pick up from your hotel in Delhi at 6:30 AM and drive to Agra. It takes around 3 hours to reach Agra."
  },
  {
    id: 2,
    title: "Arrival",
    description: " On arrival in Agra, you will meet your tour guide and then proceed to visit the Taj Mahal, the white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. The Taj Mahal is one of the most visited tourist attractions in India and is a symbol of love and beauty."
  },
  {
    id: 3,
    title: "Midway Refreshments",
    description: "Take a short break at a renowned midway stop to stretch, enjoy refreshments, and prepare for the rest of the journey."
  },
  {
    id: 4,
    title: "Visit Agra Fort",
    description: "After exploring the Taj Mahal, you will have lunch at a local restaurant before heading back to Delhi. Next you will visit the Agra Fort, a UNESCO World Heritage Site. Built by the Mughal Emperor Akbar, the fort is one of the best-preserved Mughal structures in India"
  },
  {
    id: 5,
    title: "Visit Baby Taj or Explore Local Markets",
    description: " If you are not in a hurry, then you can also visit Itimad-ud-Daulah (Baby Taj) , Or explore Local Markets."
  },
  {
    id: 6,
    title: "Drive Back",
    description: "Then around 3PM drive back to Delhi. Arrive back in Delhi by 7-8 PM and drop off to hotel / airport in Delhi."
  },
];

const facilities = [
  {
    id: 1,
    icon: <FaCar size={60} />,
    title: "Private Car",
    description: "Travel comfortably in a private, air-conditioned car with a skilled driver."
  },
  {
    id: 2,
    icon: <FaClock size={60} />,
    title: "Flexible Timing",
    description: "Plan your journey with flexible departure and return timings to suit your schedule."
  },
  {
    id: 3,
    icon: <FaConciergeBell size={60} />,
    title: "Concierge Assistance",
    description: "Get 24/7 support for any special requests or queries during your trip."
  },
  {
    id: 4,
    icon: <FaMap size={60} />,
    title: "Custom Itinerary",
    description: "Enjoy a personalized tour with stops at destinations of your choice."
  },
  {
    id: 5,
    icon: <FaPhoneAlt size={60} />,
    title: "Real-Time Support",
    description: "Stay connected with our support team for assistance during your journey."
  },
  {
    id: 6,
    icon: <FaHandsHelping size={60} />,
    title: "Experienced Chauffeur",
    description: "Travel safely with an experienced and courteous driver."
  },
];

const TourPackagePage = () => {
  return (
    <>
    <div className="tour-package-page">
      {/* Image Section */}
      <div className="image-container">
        <img src="/images/x51.jpg" alt="Taj Mahal Sunrise Tour" className="tour-image" />
        <div className="title-overlay">
          <h1 className="tour-title">Taj Mahal Tour By Car</h1>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="timeline-and-facilities">
          {/* Timeline Section */}
          <div className="timeline-section">
            <h2 className="section-title">Our Journey</h2>
            <div className="timeline">
              {timeline.map((item) => (
                <div className="timeline-item" key={item.id}>
                  <div className="timeline-icon">
                    <FaCar size={30} />
                  </div>
                  <div className="timeline-text">
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="vertical-divider"></div>

          {/* Facilities Section (Right side with 4 boxes) */}
          <div className="facilities-section-right">
            <h2 className="section-title">Our Facilities</h2>
            <div className="facilities-row">
              {facilities.map((facility) => (
                <div className="facility-card" key={facility.id}>
                  <div className="facility-icon">{facility.icon}</div>
                  <h4 className="facility-title">{facility.title}</h4>
                  <p className="facility-description">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    <PriceInfo/>
<WhatsAppLink/>
    </>
  );
};

export default TourPackagePage;
