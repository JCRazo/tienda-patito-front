import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token); // Usar jwtDecode aquí
      // Guardar el nombre del cliente en el estado o contexto si es necesario
      navigate('/registrar-pedido');
    } catch (error) {
      console.error("Error during login", error);
      // Manejar errores de autenticación
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;