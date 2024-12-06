import React from 'react';
import "../components/PriceInfo";
import './TourPackagePage.css';
import { FaPhoneAlt, FaUserTie, FaCoffee, FaShuttleVan, FaWifi, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
import WhatsAppLink from '../components/WhatsAppLink';

const timeline = [
  { id: 1, title: "Day 1 – 03:00 AM - Pick Up from Hotel / Airport in Delhi / Gurgaon / Noida", description: "Your tour will start early at 3 AM in the morning from your hotel or preferred location in Delhi. Then drive to Agra. The journey will take 3.5 to 4 hours Upon arrival in Agra." },
  { id: 2, title: "Arrival", description: " You will meet your tour guide. Then you will visit the Taj Mahal, the iconic mausoleum built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal." },
  { id: 3, title: "Explore the Architecture", description: "Explore the history and beauty of the Taj Mahal with our expert guide." },
  { id: 4, title: "Lunch Break", description: "After visiting Taj Mahal, you will have a breakfast at 5 Star Hotel in Agra. Enjoy the unlimited breakfast at Courtyard By Marriott in Agra." },
  { id: 5, title: "Explore Agra Fort", description: " After breakfast, you will visit the Agra Fort, a 16th century Mughal fortress. Here, you will be able to explore the courtyards, walls, and towers of the fort." },
  { id: 6, title: "Departure", description: " Around 11 AM, you will drive back to Delhi. Around 2-3 PM, arrive in Delhi and transfer to your hotel / airport in Delhi." },
];

const facilities = [
  { id: 2, icon: <FaUserTie size={60} />, title: "Expert Guide", description: "Knowledgeable guides for an unforgettable experience." },
  { id: 3, icon: <FaCoffee size={60} />, title: "Complimentary Breakfast", description: "Enjoy a delicious start to your day." },
  { id: 4, icon: <FaShuttleVan size={60} />, title: "Transportation", description: "Convenient pickup and drop-off services." },
  { id: 5, icon: <FaWifi size={60} />, title: "Free WiFi", description: "Stay connected with high-speed internet." },
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
        <img src="/images/x40.jpg" alt="Taj Mahal Sunrise Tour" className="tour-image" />
        <div className="title-overlay">
          <h1 className="tour-title">Taj Mahal Sunrise Tour</h1>
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
                    <FaCheckCircle size={30} />
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
    
<WhatsAppLink/>

    </>
  );
};

export default TourPackagePage;
