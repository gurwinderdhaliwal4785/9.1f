import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Navigation from './Navigation';
import LoginSuccess from './LoginSuccess';
import SignSuccess from './SignSuccess';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/success' element={<LoginSuccess />} />
      <Route path='/signsuccess' element={<SignSuccess />} />
    </Routes>
  );
}

export default App;
