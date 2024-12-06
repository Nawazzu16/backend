import React from 'react';
import './TourPackagePage.css';
import { FaTrain, FaTicketAlt, FaCoffee, FaWalking, FaLandmark, FaPhoneAlt, FaConciergeBell } from 'react-icons/fa';
import WhatsAppLink from '../components/WhatsAppLink';
import TrainPricing from '../components/TrainPricing';

const timeline = [
  {
    id: 1,
    title: "Train Departure",
    description: "Your Taj Mahal Tour by Gatimaan Express train will start with a pick-up from your hotel in Delhi. You can choose the pick-up time between 6:30 AM to 7 AM to start your tour. After pick-up from the hotel in Delhi, our driver will drop you at the railway station and he will help you find your train coach and seats. Your train will leave from Delhi at 8:10 AM and it will take 90 minutes to arrive in Agra."
  },
  {
    id: 2,
    title: "Arrival at Agra",
    description: "At 9:50 AM, your train will arrive in Agra and you will meet your tour guide, right in front of your coach waiting for you. Then get seated in your car and proceed to visit the Taj Mahal."
  },
  {
    id: 3,
    title: "Visit to Taj Mahal",
    description: " Explore the stunning beauty and history of the Taj Mahal with the help of an expert guide , You can visit this monument for up to 3 hours"
  },
  {
    id: 5,
    title: "Lunch Break",
    description: "Then after visiting the Taj Mahal you will proceed for a lunch break at 5 Star Hotel. Enjoy the delicious cuisine and revive your taste buds with the unique flavors of India."
  },
  {
    id: 6,
    title: "Visit Agra Fort and Baby Taj",
    description: "After lunch break continue with your Taj Mahal Tour by fast train and proceed to visit Agra Fort. Visit this Giant Red Stone building built in the 15th century. You can spend up to 1 hour at this building. Then in the end you will visit Itimad-Ud-Daulah also known as Baby Taj. Then in the end drive back to Agra Railway Station. We will drop you at the station by 5:30 PM."
  },
  {
    id: 7,
    title: "Return Train Journey",
    description: "Your train will leave from Agra at 5:50 PM and your train will arrive in Delhi by 7:30 PM. Upon arrival in Delhi, you will meet the same driver in front of your coach. Then departure to hotel/airport in Delhi. Your Delhi to Agra By Gatimaan Express train travel will come to an end."
  },
];

const facilities = [
  {
    id: 1,
    icon: <FaTrain size={60} />,
    title: "Comfortable Train Journey",
    description: "Enjoy a hassle-free train ride with reserved seating and onboard amenities."
  },
  {
    id: 2,
    icon: <FaTicketAlt size={60} />,
    title: "Pre-Booked Tickets",
    description: "All train tickets are pre-arranged for a smooth and worry-free journey."
  },
  {
    id: 3,
    icon: <FaCoffee size={60} />,
    title: "Onboard Refreshments",
    description: "Relax and enjoy complimentary snacks and beverages during your train ride."
  },
  {
    id: 4,
    icon: <FaConciergeBell size={60} />,
    title: "24/7 Assistance",
    description: "Our team provides constant support to ensure a seamless experience."
  },
  {
    id: 5,
    icon: <FaWalking size={60} />,
    title: "Expert Guide",
    description: "Explore the Taj Mahal and Agra Fort with the guidance of a knowledgeable local expert."
  },
  {
    id: 6,
    icon: <FaLandmark size={60} />,
    title: "Historical Insights",
    description: "Learn fascinating stories and facts about iconic landmarks."
  },
];

const TourPackagePage = () => {
  return (
    <>
    <div className="tour-package-page">
      {/* Image Section */}
      <div className="image-container">
        <img src="/images/x64.jpg" alt="Taj Mahal Tour by Train" className="tour-image" />
        <div className="title-overlay">
          <h1 className="tour-title">Taj Mahal Tour by Train</h1>
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
                    <FaTrain size={30} />
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
    <TrainPricing/>
<WhatsAppLink/>
    </>
  );
};

export default TourPackagePage;
