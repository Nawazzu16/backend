import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services1.css'; // Custom CSS for styling

const Services1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const services = [
    {
      title: 'Guided Tours',
      description: 'Join our Guided Tours to explore the Taj Mahal with expert guides fluent in multiple languages. Gain unique insights into its history and architecture while enjoying exclusive sunrise and sunset tours that showcase breathtaking views of this magnificent monument.',
      specialFeature: 'Exclusive sunrise and sunset tours for breathtaking views.',
    },
    {
      title: 'Private Luxury Tours',
      description: 'Experience the Taj Mahal in ultimate comfort with our Private Luxury Tours. Enjoy bespoke itineraries that include luxury transportation, gourmet dining, and VIP access to attractions, ensuring a personalized experience that minimizes waiting time while maximizing enjoyment of the stunning sights.',
    },
    {
      title: 'Photography Services',
      description: 'Our Photography Services capture the essence of your Taj Mahal visit. With professional photographers at your side, enjoy personalized photo sessions that focus on you against the iconic backdrop, ensuring that every moment is beautifully preserved for memories to last a lifetime.',
    },
    {
      title: 'Transportation',
      description: 'Ensure a hassle-free experience with our Transportation services. We offer reliable airport pickup and drop-off, cab booking, and intercity transport options. Travel comfortably and safely while exploring Agra’s rich heritage with dependable, safe, and convenient transportation tailored to tourists’ needs.',
    },
    {
      title: 'Hotel Booking',
      description: 'Enjoy exclusive discounts on luxurious accommodations with our Hotel Booking services. We partner with top-rated 4- and 5-star hotels near the Taj Mahal to provide you with comfort and convenience, ensuring your stay complements the beauty of your visit to Agra.',
    },
    {
      title: 'Ticket Booking Assistance',
      description: 'Avoid long lines with our Ticket Booking Assistance for the Taj Mahal. We handle the hassle of securing your entry tickets, offering fast-track access to ensure that you can fully enjoy the experience without the stress of waiting in queues.',
    },
    {
      title: 'Cultural Experience Packages',
      description: 'Enhance your visit with our Cultural Experience Packages, featuring additional tours to iconic sites like Agra Fort and Fatehpur Sikri. Discover local handicrafts and immerse yourself in Agra’s rich heritage, making your journey more enriching and memorable.',
    },
    {
      title: 'Food and Dining Packages',
      description: 'Savor authentic Mughal cuisine with our Food and Dining Packages. We offer curated dining experiences at renowned local restaurants, allowing you to indulge in traditional culinary tours that celebrate the rich flavors of Agra, enhancing your overall travel experience.',
    },
    {
      title: 'Group Tours',
      description: 'Take advantage of our Group Tours designed for families, friends, or corporate retreats. Enjoy personalized itineraries and group discounts that enhance the experience, making it an enjoyable and memorable adventure together as you explore the wonders of the Taj Mahal.',
    },
  ];

  return (
    <section className="services-section">
      <h2 className="text-center mb-4">Our Premium Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-item"
            data-aos="fade-up"
            key={index}
          >
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.specialFeature && <p><strong>Special Feature:</strong> {service.specialFeature}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services1;
