import React from 'react';
import { FaHeadset, FaShieldAlt, FaPlane, FaDollarSign, FaSmile, FaMapMarkedAlt } from 'react-icons/fa'; 

const WhyChooseUs = () => {
    const cards = [
        { id: 1, icon: <FaHeadset size={60} />, title: "24 Hours Assistance", description: "We offer round-the-clock support for our customers." },
        { id: 2, icon: <FaShieldAlt size={60} />, title: "Safety Guarantee", description: "Your safety is our top priority. Feel Free to ask anything" },
        { id: 3, icon: <FaPlane size={60} />, title: "Easy Bookings", description: "We make booking fast, easy, and hassle-free." },
        { id: 4, icon: <FaDollarSign size={60} />, title: "Affordable Pricing", description: "Our packages are designed to fit any budget." },
        { id: 5, icon: <FaSmile size={60} />, title: "Customer Satisfaction", description: "We strive for the best experiences for our customers." },
        { id: 6, icon: <FaMapMarkedAlt size={60} />, title: "Expert Guidance", description: "Get expert advice on all your travel needs." },
    ];

    return (
        <section className="why-choose-us-section my-5">
            <div className="container text-center">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="grid-container">
                    {cards.map(card => (
                        <div className="choose-card" key={card.id}>
                            <div className="card-icon">{card.icon}</div>
                            <h4 className="choose-card-title">{card.title}</h4>
                            <p className="choose-card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
