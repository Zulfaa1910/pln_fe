import React, { useState } from 'react';
import './register.css';
import Logo from '../../imgs/logo.png';
import { UilUser, UilLock } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log(formData);
  };

  return (
    <div className="register-container">
      <img src={Logo} alt="logo" className="register-logo" />
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <UilUser />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <UilLock />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <UilLock />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <UilLock />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
        <div className="link-container">
          Sudah punya akun? <Link to="/login">Masuk</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
