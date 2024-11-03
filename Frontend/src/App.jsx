import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Auth.jsx';
import ProtectedRoute from './Producted-route.jsx';
import LoginPage from './Pages/Login/index.jsx';
import { Box } from '@mui/material';
import './App.css'
import ProfilePage from './Pages/Profile/Profile.jsx';

function App() {
  return (
    <Box className ='App'>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/Profile"
            element={
                <ProfilePage />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
    </Box>
  );
}

export default App;
