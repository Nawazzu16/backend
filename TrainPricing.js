import React, { useState } from "react";
import "./TrainPricing.css";
import { useNavigate } from "react-router-dom";

const TrainPricing = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  const navigate = useNavigate();

  const calculateAdultPrice = (num) => {
    switch (selectedPackage) {
      case "Only Transport and Guide":
        return num > 2 ? 90 : num === 2 ? 95 : 100;
      case "Tour with 1AC Train Coach":
        return num > 2 ? 110 : num === 2 ? 115 : 120;
      case "Tour with 2AC Train Coach":
        return num > 1 ? 105 : 110;
      default:
        return 0;
    }
  };

  const calculateChildPrice = (num) => {
    switch (selectedPackage) {
      case "Only Transport and Guide":
        return num > 1 ? 75 : 80;
      case "Tour with 1AC Train Coach":
      case "Tour with 2AC Train Coach":
        return num > 1 ? 95 : 100;
      default:
        return 0;
    }
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
    <div className="train-pricing-container">
      <h1 className="main-title">Taj Mahal Tour By Train</h1>

      <h2 className="train-pricing-title">Price Info</h2>

      <form className="train-pricing-form">
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
            <option value="Only Transport and Guide">
              Only Transport and Guide
            </option>
            <option value="Tour with 1AC Train Coach">
              Tour with 1AC Train Coach
            </option>
            <option value="Tour with 2AC Train Coach">
              Tour with 2AC Train Coach
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

      <div className="calculation-details">
        <h3>Calculation Details:</h3>
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

export default TrainPricing;
