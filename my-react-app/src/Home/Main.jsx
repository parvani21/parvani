import React from 'react';


const Main = () => {
  return (
    <div className="form-box">
      <h2>• Registration Form •</h2>

      <h4>Name</h4>
      <input type="text" placeholder="Enter your name" />

      <h4>Email address</h4>
      <input type="email" placeholder="Enter your email" />

      <h4>Country</h4>
      <input type="text" placeholder="Enter your country" />

      <h4>Phone</h4>
      <input type="tel" placeholder="Enter your phone" />

      <h4>Password</h4>
      <input type="password" placeholder="Enter your password" />

      <div style={{ marginTop: "10px" }}>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms" style={{ fontSize: "12px" }}>
          Terms & Conditions
        </label>
      </div>

      <button type="submit" className="submit-btn">CREATE ACCOUNT</button>

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Already have an account? <a href="#">Sign in</a>
      </p>
    </div>
  );
};

export default Main;
