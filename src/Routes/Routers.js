import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../Components/Dashboard';
import LoginPage from '../Components/LoginPage';
import mockUserData from '../Utils/MockData';

const Routers = ({ isLoggedIn, handleLogin, handleLogout }) => {
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage handleLogin={handleLogin} />} />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard userData={mockUserData} handleLogout={handleLogout} /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default Routers;
