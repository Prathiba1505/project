import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin, onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'prathi' && password === 'prathi.07') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-background-box">
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <p>Don't have an account?</p>
        <button onClick={onSignup} className="signup-button">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
