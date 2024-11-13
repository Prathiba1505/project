import React from 'react';
import './ContactPage.css'; 

const ContactPage = ({ onBackToHome }) => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <h2>We'd Love to Hear From You!</h2>
        <p>
          If you have any questions, suggestions, or feedback, please reach out to us.
        </p>
        <h3>Email:</h3>
        <p>support@supermarket.com</p>
        <h3>Phone:</h3>
        <p>9965*****</p>
        <h3>Address:</h3>
        <p>123 Supermarket St, Fresh City,Coimbatore</p>
      </div>
      <button onClick={onBackToHome} className="back-to-home-button">Back to Home</button>
    </div>
  );
};

export default ContactPage;
