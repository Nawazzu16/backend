import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Testim.css'; // Import custom styles

const Testim = () => {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">We value our clients' feedback immensely and strive to exceed their expectations</p>

            <div className="testimonial-cards">
                {/* First Testimonial */}
                <div className="testimonial-card">
                    <div className="client-image">
                        <img src="/images/x27.jpg" alt="Client 1" />
                    </div>
                    <div className="testimonial-content">
                        <div className="star-rating">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                        </div>
                        <p className="testimonial-text">
                        "TajMahal Journeys made my visit to the Taj Mahal an absolute dream! The guides were knowledgeable, and detail was handled with such professionalism. I highly recommend their services for visiting India!"

                        </p>
                        <h4 className="client-name">Dmitry Ivanov</h4>
                    </div>
                </div>

                {/* Second Testimonial */}
                <div className="testimonial-card">
                    <div className="client-image">
                        <img src="images/x29.jpg" alt="Client 2" />
                    </div>
                    <div className="testimonial-content">
                        <div className="star-rating">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStarHalfAlt className="star" />
                        </div>
                        <p className="testimonial-text">
                        "I booked my entire Agra trip with TajMahal Journeys, and it was an unforgettable experience. The team ensured everything from cab booking to hotel stays was seamless. Truly a first-class service!

                        </p>
                        <h4 className="client-name">Arjun Mehta</h4>
                    </div>
                </div>


                <div className="testimonial-card">
                    <div className="client-image">
                        <img src="images/x26.jpg" alt="Client 1" />
                    </div>
                    <div className="testimonial-content">
                        <div className="star-rating">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                        </div>
                        <p className="testimonial-text">
                        "Visiting the Taj Mahal was a once-in-a-lifetime experience, and this tour made it even better. The tour was well-organized, and I felt taken care of from start to finish. A fantastic service!"
                        </p>
                        <h4 className="client-name">Emily Thompson</h4>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testim;
