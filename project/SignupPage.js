import React, { useState } from 'react';
import axios from 'axios';
import './SignupPage.css';

function SignupPage({ onSignup }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    if (username && email && password) {
      try {
        const response = await axios.post('http://localhost:3000/user', {
          username,
          email,
          password,
        });

        if (response.status === 201) {
          alert('Account created successfully');
          onSignup(); 
        } else {
          setErrorMessage('Signup failed. Please try again later.');
        }
      } catch (error) {
        console.error('Error during signup:', error);
        setErrorMessage('Signup failed. Please try again later.');
      }
    } else {
      setErrorMessage('Please fill out all fields');
    }
  };

  return (
    <div className="signup-background-box">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        /><br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button onClick={handleSignup} className="signup-button">
          Sign Up
        </button><br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>Already have an account?</p>
        <button onClick={onSignup} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
