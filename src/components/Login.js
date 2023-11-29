import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    //   const response = await axios.post('https://django-rest-product.onrender.com/token/', formData);
      const response = await axios.post('https://django-rest-product.onrender.com/token/', formData);

      // Assuming the server responds with a JWT token in the 'token' field of the response
      const token = response.data.access;

      // Save the token to Axios defaults
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Save the token to local storage
      localStorage.setItem('token', token);
      let decoded = jwtDecode(token);
      
      // Handle successful login, e.g., redirect to a new page
      console.log('Login successful', response.data);
      alert('login succesful');
      navigate('/')

    } catch (error) {
      // Handle login error, e.g., display an error message
      console.error('Login failed', error.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
