import React, { useState } from 'react';
import { useAuth } from '../../../Auth';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './Login.css'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await login(username, password);
      navigate('/dashboard');
    };

  return (
    <Box className='Login-com'>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </Box>
  )
}

export default Login