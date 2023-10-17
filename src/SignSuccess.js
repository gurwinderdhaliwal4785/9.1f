
import React from 'react';
import './SignSuccess.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const SignSuccess = () => {
  return (
    <div className="signup-success-container">
      <div className="signup-success-content">
        <h1>Successful Signup</h1>
        <p>Your account has been created successfully.</p>
        <p>You can now log in and start using our services.</p>
        <Link to='/'>Home Page</Link>
      </div>
    </div>
  );
};

export default SignSuccess;
