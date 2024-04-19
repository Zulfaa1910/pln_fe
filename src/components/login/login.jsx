import React, { useState } from 'react';
import './login.css';
import Logo from '../../imgs/logo.png';
import { UilLock } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // Implement login logic here
    console.log(formData);
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="logo" className="login-logo" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <div className="link-container">
          Belum punya akun? <Link to="/register">Daftar sekarang</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
