import React from 'react';
import './TourPackagePage.css';
import { FaBed, FaMapMarkedAlt, FaUtensils, FaClock, FaConciergeBell, FaLandmark, FaUserTie } from 'react-icons/fa';
import WhatsAppLink from '../components/WhatsAppLink';

const timeline = [
  {
    id: 1,
    title: "Day 1: Arrival in Agra",
    description: "Your Tour will start in the morning around 08:00 AM / 09:00 AM. Our Driver will come to pick you from the hotel / Airport in Delhi. Proceed to Agra. This will take around 3 hrs to reach Agra from New Yamuna Expressway."
  },
  {
    id: 2,
    title: "Day 1: Meet Your Tour Guide",
    description: "When you arrive Agra, check-in to the hotel. Your tour guide will meet you at the same time in the Hotel lobby waiting for you."
  },
  {
    id: 3,
    title: "Day 1: Visit Mehtab Bagh & Etimad-Ud-Daulah",
    description: " Later after having lunch Visit Agra Fort, Mehtab Bagh and Etimad-Ud-Daulah. After sightseeing come back to the hotel and spend evening in leisure. Overnight stay at the hotel."
  },
  {
    id: 4,
    title: "Day 2: Sunrise Visit to Taj Mahal",
    description: "At 6am or may be earlier during summers, you will be picked up from hotel to visit Taj Mahal during sunrise to see the ravishing beauty of India’s most renowned monument and come back to the hotel."
  },
  {
    id: 5,
    title: "Day 2: Breakfast & Visit Fatehpur Sikri",
    description: "After breakfast and check-out from hotel. Enjoy an excursion to Fatehpur Sikri, a perfectly preserved red stone, which was the estranged capital of Mughal emperor Akbar, built in 1569 A.D. It is also known as “Ghost City”"
  },
  {
    id: 6,
    title: "Day 2: Drive Back",
    description: "Later drive back to Delhi with a beautiful memory from Agra city. Drop back to your preferred location or airport in Delhi."
  },
  
];

const facilities = [
  {
    id: 1,
    icon: <FaBed size={60} />,
    title: "Luxury Accommodation",
    description: "Enjoy a relaxing stay in a 5-star hotel with world-class amenities."
  },
  {
    id: 2,
    icon: <FaUtensils size={60} />,
    title: "Fine Dining",
    description: "Relish gourmet meals at top-rated restaurants in Agra."
  },
  {
    id: 3,
    icon: <FaLandmark size={60} />,
    title: "Guided Sightseeing",
    description: "Explore Agra's landmarks with the insights of an expert guide."
  },
  {
    id: 4,
    icon: <FaClock size={60} />,
    title: "Flexible Schedule",
    description: "Customize your itinerary to match your preferences and pace."
  },
  {
    id: 5,
    icon: <FaMapMarkedAlt size={60} />,
    title: "Local Exploration",
    description: "Discover Agra's markets and artisan handicrafts with ease."
  },
  {
    id: 6,
    icon: <FaConciergeBell size={60} />,
    title: "24/7 Support",
    description: "Receive round-the-clock assistance to make your trip stress-free."
  },
];

const TourPackagePage = () => {
  return (
    <>
    <div className="tour-package-page">
      {/* Image Section */}
      <div className="image-container">
        <img src="/images/x44.jpg" alt="Taj Mahal Overnight Tour" className="tour-image" />
        <div className="title-overlay">
          <h1 className="tour-title">Taj Mahal Overnight Tour</h1>
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
                    <FaClock size={30} />
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
