// PaymentPage.js
import React, { useState } from 'react';
import './PaymentPage.css';

function PaymentPage({ onBackToHome, clearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment processed successfully!');
    clearCart(); 
    onBackToHome();
  };

  return (
    <div className="payment-page">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h2>Payment Information</h2>
        <label>
          Name on Card:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            maxLength="16"
            placeholder="1234 5678 9012 3456"
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required
            placeholder="MM/YY"
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
            maxLength="3"
            placeholder="123"
          />
        </label>
        <button type="submit" className="confirm-button">
          Confirm Payment
        </button>
        <button type="button" onClick={onBackToHome} className="home-button">
          Back to Home
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
