import React, { useState } from "react";
import "./styles/login.css";

function Login({ setLoggedInName }) {
  // State for form inputs and error messages
  const [name, setName] = useState("");
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control popup visibility

  // Regex for validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const mobileRegex = /^[0-9]{10}$/;

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    // Reset error states
    setNameError(false);
    setEmailError(false);

    // Validate name
    if (!name.trim()) {
      setNameError(true);
      isValid = false;
    }

    // Validate email or mobile number
    if (!emailRegex.test(emailOrMobile.trim()) && !mobileRegex.test(emailOrMobile.trim())) {
      setEmailError(true);
      isValid = false;
    }

    // If valid, show success popup and update the logged-in name
    if (isValid) {
      setLoggedInName(name); // Update the parent's state with the logged-in name
      setShowSuccessPopup(true);

      // Automatically close the popup after 3 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
    }
  };

  return (
    <div>
    <h1 className="signin-title">Little Lemon Login</h1>
    
      <div className="signin-container">
        <h5 className="input-label">Your name</h5>
        <input
          type="text"
          id="name"
          placeholder="First and last name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && (
          <span id="name-error" className="error-message">
            Name cannot be empty.
          </span>
        )}

        <h5 className="input-label">Mobile number or Email</h5>
        <input
          type="text"
          id="emailOrMobile"
          placeholder="Enter email or mobile number"
          value={emailOrMobile}
          onChange={(e) => setEmailOrMobile(e.target.value)}
        />
        {emailError && (
          <span id="email-error" className="error-message">
            Please enter a valid email or mobile number.
          </span>
        )}

        <button id="signUpButton" onClick={handleSubmit}>
          Login
        </button>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Logged in successfully!</h2>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="popup-close-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
