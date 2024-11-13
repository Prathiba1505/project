//feedback.js
import React, { useState } from 'react';
import Axios from 'axios';

function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.feedback) {
            setError("All fields are required.");
            setMessage('');
            return;
        }
        
        if (!validateEmail(formData.email)) {
            setError("Please enter a valid email address.");
            setMessage('');
            return;
        }

        // Send POST request to the server
        Axios.post('http://localhost:3000/feedback ', formData)
            .then((response) => {
                setMessage("Feedback submitted successfully!");
                setError('');
                setFormData({ name: '', email: '', feedback: '' }); // Clear the form
            })
            .catch((err) => {
                setError("Error submitting feedback. Please try again later.");
                setMessage('');
            });
    };

    return (
        <div>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ marginBottom: '10px' }}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ marginBottom: '10px' }}
                    />
                </label>
                <label>
                    Feedback:
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                        style={{ marginBottom: '10px' }}
                    />
                </label>
                <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Submit</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default FeedbackForm;