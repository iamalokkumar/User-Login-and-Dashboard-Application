import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Routers from './Routes/Routers';
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const userLogin = () => {
    localStorage.setItem('session', 'true');
    setLoggedIn(true);
  };
  const userLogout = () => {
    localStorage.removeItem('session');
    setLoggedIn(false);
  };
  useEffect(() => {
    if (localStorage.getItem('session')) {
      setLoggedIn(true);
    }
  }, []);
  return (
   
      <Router>
     <Routers isLoggedIn={isLoggedIn} handleLogin={userLogin} handleLogout={userLogout} />
     </Router>

  );
}

export default App;
