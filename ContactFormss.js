import React from 'react';
import './ContactFormss.css'; // Custom CSS for the form

const ContactFormss = () => {
    return (
        <form className="contact-form">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-md-6 mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Contact" />
                </div>
                <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Country" />
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control" placeholder="No. of Days" />
                </div>
                <div className="col-md-6 mb-3">
                    <input type="date" className="form-control" placeholder="Arrival Date" />
                </div>
                <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="City" />
                </div>
                <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Car Preference" />
                </div>
                <div className="col-12 mb-3">
                    <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-warning">Send Message</button>
                </div>
            </div>
        </form>
    );
};

export default ContactFormss;
