import React from 'react';
import './TourPackagePage.css';
import { FaCar, FaGlassCheers, FaWalking, FaLandmark, FaUtensils, FaCrown, FaConciergeBell } from 'react-icons/fa';
import WhatsAppLink from '../components/WhatsAppLink';

const timeline = [
  {
    id: 1,
    title: "Luxury Pickup",
    description: "At 6:30 AM, Pick-Up from your hotel in Delhi / Gurgaon / Noida. Then drive straight to Agra in Premium Luxury Car - BMW / Audi / Mercedes etc.. It will take 3 hours drive to arrive in Agra. We will take shortest and fastest route (via Expressway) to Agra."
  },
  {
    id: 2,
    title: "Arrival at Taj Mahal",
    description: "Around at 9:30 AM, you will arrive in Agra, Upon arrival you will meet your Tour Guide. Proceed to visit Taj Mahal. You can spend upto 3 hours in Taj Mahal."
  },
  {
    id: 3,
    title: "Visit at Agra Fort",
    description: "After visiting Taj Mahal, proceed to Agra Fort. It was built in 1565 A.D. by Great Mughal Emperor Akbar. You can spend upto 1 hour at this monument."
  },
  {
    id: 4,
    title: "Fine Dining Lunch",
    description: "After the end of fort moving towards lunch, you will having lunch at 5 star hotel. Enjoy the delicous hygenic lunch and experience difference flavors of the city."
  },
  {
    id: 5,
    title: "Visit Mehtab Bagh",
    description: "This is an optional site to visit, if you are in hurry you can skip it. Exploring the back side of a Taj Mahal. Here people come to explore majestic view of Taj Mahal during sunset over the river Yamuna."
  },
  {
    id: 6,
    title: "Return Journey",
    description: "After exploring Taj Mahal, Agra Fort, Lunch and Mehtab Bagh our assistant will drive you back towards Delhi by car.After arriving Delhi, our assistance (driver) will drop you at the Hotel or Airport for your onwards journey or flight back to your sweet home."
  },
];

const facilities = [
  {
    id: 1,
    icon: <FaCar size={60} />,
    title: "Luxury Transportation",
    description: "Travel in a high-end car with plush interiors and top-class amenities."
  },
  {
    id: 2,
    icon: <FaGlassCheers size={60} />,
    title: "Welcome Drinks",
    description: "Start your journey with premium beverages and refreshments."
  },
  {
    id: 3,
    icon: <FaLandmark size={60} />,
    title: "Priority Access",
    description: "Skip the lines with exclusive entry to the Taj Mahal."
  },
  {
    id: 4,
    icon: <FaUtensils size={60} />,
    title: "Gourmet Dining",
    description: "Savor culinary delights at a 5-star restaurant."
  },
  {
    id: 5,
    icon: <FaWalking size={60} />,
    title: "Expert Guide",
    description: "Explore the Taj Mahal and Agra Fort with the guidance of a knowledgeable local expert."
  },
  {
    id: 6,
    icon: <FaConciergeBell size={60} />,
    title: "Personal Concierge",
    description: "Receive round-the-clock assistance for a seamless journey."
  },
];

const TourPackagePage = () => {
  return (
    <>
    <div className="tour-package-page">
      {/* Image Section */}
      <div className="image-container">
        <img src="/images/x14.jpg" alt="Taj Mahal Luxury Tour" className="tour-image" />
        <div className="title-overlay">
          <h1 className="tour-title">Taj Mahal Luxury Tour</h1>
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
                    <FaCrown size={30} />
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
