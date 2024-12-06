import React, { useState } from "react";
import "./PriceInfo.css";
import { useNavigate } from "react-router-dom";

const PriceInfo = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  const navigate = useNavigate();

  const calculateAdultPrice = (num) => {
    if (selectedPackage === "Guide and Transport Only") {
      return num > 1 ? 70 : 80;
    }
    if (num >= 3) return 80;
    if (num === 2) return 90;
    return 100;
  };

  const calculateChildPrice = (num) => {
    if (selectedPackage === "Guide and Transport Only") {
      return num > 1 ? 60 : 70;
    }
    return num >= 2 ? 80 : 90;
  };

  const adultPricePerPerson = calculateAdultPrice(numAdults);
  const childPricePerPerson = calculateChildPrice(numChildren);

  const totalAdultsPrice = numAdults * adultPricePerPerson;
  const totalChildrenPrice = numChildren * childPricePerPerson;

  const totalPrice = totalAdultsPrice + totalChildrenPrice;

  const handleBooking = () => {
    navigate("/BookNow");
  };

  return (
    <div className="price-info-container">

<h1 className="main-title">Taj Mahal Tour By Car</h1>

      <h2 className="price-info-title">Price Info</h2>

      {/* Form Section */}
      <form className="price-info-form">
        <div className="form-group-horizontal">
          <label htmlFor="package-select" className="form-label">
            Select Your Package <span className="required-asterisk">*</span>
          </label>
          <select
            id="package-select"
            className="form-input"
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose an option
            </option>
            <option value="All Inclusive Package">All Inclusive Package</option>
            <option value="Guide and Transport Only">
              Guide and Transport Only
            </option>
          </select>
        </div>

        <div className="form-group-horizontal">
          <label htmlFor="date-select" className="form-label">
            Select Your Date <span className="required-asterisk">*</span>
          </label>
          <input
            type="date"
            id="date-select"
            className="form-input"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group-horizontal">
          <label htmlFor="num-adults" className="form-label">
            No. of Adults <span className="required-asterisk">*</span>
          </label>
          <div className="adjust-input-group">
            <button
              type="button"
              className="adjust-button-left"
              onClick={() => setNumAdults(Math.max(0, numAdults - 1))}
            >
              -
            </button>
            <input
              type="number"
              id="num-adults"
              className="form-input small-input"
              value={numAdults}
              readOnly
            />
            <button
              type="button"
              className="adjust-button-right"
              onClick={() => setNumAdults(numAdults + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="form-group-horizontal">
          <label htmlFor="num-children" className="form-label">
            No. of Children <span className="required-asterisk">*</span>
          </label>
          <div className="adjust-input-group">
            <button
              type="button"
              className="adjust-button-left"
              onClick={() => setNumChildren(Math.max(0, numChildren - 1))}
            >
              -
            </button>
            <input
              type="number"
              id="num-children"
              className="form-input small-input"
              value={numChildren}
              readOnly
            />
            <button
              type="button"
              className="adjust-button-right"
              onClick={() => setNumChildren(numChildren + 1)}
            >
              +
            </button>
          </div>
        </div>
      </form>

      {/* Price Calculation */}
      <div className="calculation-details">
        <h3>Calculation Details : </h3>
        <p>
          Adults: {numAdults} x ${adultPricePerPerson.toFixed(2)} = $
          {totalAdultsPrice.toFixed(2)}
        </p>
        <p>
          Children: {numChildren} x ${childPricePerPerson.toFixed(2)} = $
          {totalChildrenPrice.toFixed(2)}
        </p>
        <p className="total-price">
          <strong>Total:</strong> ${totalPrice.toFixed(2)}
        </p>
      </div>

      {/* Booking Button */}
      <div className="book-now-container">
        <button
          className="book-now-button"
          onClick={(e) => {
            e.preventDefault();
            handleBooking();
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PriceInfo;
