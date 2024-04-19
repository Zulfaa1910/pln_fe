import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/users/UserDashboard';
import MitraDashboard from './components/Mitraa/MitraDashboard';
import TAKdashboard from './components/TAK/TAKdashboard';
import Login from './components/login/login';
import Register from './components/login/register';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/users" element={<UserDashboard />} />
            <Route path="/MITRA" element={<MitraDashboard />} />
            <Route path="/TAK" element={<TAKdashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
