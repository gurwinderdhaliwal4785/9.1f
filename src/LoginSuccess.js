import React from 'react';
import './LoginSuccess.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const LoginSuccess = () => {
  return (
    <div className="login-success-container">
      <div className="login-success-content">
        <h1>Successful Login</h1>
        <p>Welcome to your account. You are now logged in.</p>
        <Link to='/'>Home Page</Link>
      </div>
    </div>
  );
};

export default LoginSuccess;
