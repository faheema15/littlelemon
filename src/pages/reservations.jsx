import React, { useState, useEffect } from 'react';
import './styles/reservations.css';

const Reservation = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [availableDates, setAvailableDates] = useState([]);
  const [formData, setFormData] = useState({
    seating: '',
    date: '',
    occasion: '',
    diners: '',
    time: '',
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialRequests: "",
  });

  useEffect(() => {
    // Generate dates from today to 7 days later
    const generateDates = () => {
      const dates = [];
      const today = new Date();
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split('T')[0]); // Format YYYY-MM-DD
      }
      setAvailableDates(dates);
    };
    generateDates();
  }, []);

  const handleReserve = () => {
    // Validate form fields before showing success message
    if (
      formData.seating &&
      formData.date &&
      formData.occasion &&
      formData.diners &&
      formData.time &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber
    ) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hides popup after 3 seconds
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="reservation-container">
      <h1 className='resh1'>Reservations</h1>
      <div className="form-container">
      <div className="radio-buttons">
  <label>
    Indoor seating
    <input
      type="radio"
      name="seating"
      value="indoor"
      onChange={handleChange}
    />
  </label>
  <label>
  Outdoor seating<input
      type="radio"
      name="seating"
      value="outdoor"
      onChange={handleChange}
    />
  </label>
</div>


        <div className="dropdowns">
          <label>
             Date
            <select
              name="date"
              value={formData.date}
              onChange={handleChange}
            >
              <option value="">Select Date</option>
              {availableDates.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </label>

          <label>
            Occasion
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="">Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
            </select>
          </label>

          <label>
            Number of Diners
            <select
              name="diners"
              value={formData.diners}
              onChange={handleChange}
            >
              <option value="">No. of Diners</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <label>
            Time
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="">Select time</option>
              <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
              <option value="12:00 PM - 3:00 PM">12:00 PM - 3:00 PM</option>
              <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
              <option value="7:00 PM - 9:00 PM">7:00 PM - 9:00 PM</option>
            </select>
          </label>
            
          <label className='span1'>
             First Name
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>

          <label className='span1'>
             Last Name
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>

          <label className='span1'>
             Email
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
             Phone Number
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>


        </div>

        <button className="reserve-button" onClick={handleReserve}>
          Reserve a Table
        </button>

        {showPopup && (
          <div className="popup-message">
            Table Booked Successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservation;
