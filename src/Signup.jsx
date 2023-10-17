import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createuserdocfromAuth } from './utils/firebase';

function Signup() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [contact, setcontact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = contact;
  

  async function handleClick(event) {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createuserdocfromAuth(user, { displayName });
      console.log(user);

      navigate('/login');
    } catch (error) {
      console.log('Error in creation', error.message);
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;

    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  }

  return (
    <div className="header">
      <Input
        name='displayName'
        type='text'
        placeholder='Name'
        onChange={handlepass}
      />
      <br></br>
      <Input
        name='email'
        type='email'
        placeholder='Email'
        onChange={handlepass}
      />
      <br></br>
      <Input
        name='password'
        type='password'
        placeholder='Password'
        onChange={handlepass}
      />
      <br></br>
      <Input
        name='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        onChange={handlepass}
      />
      <br></br>
      <button onClick={handleClick}>Signup</button>
      <br></br>
      <br></br>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Signup;
