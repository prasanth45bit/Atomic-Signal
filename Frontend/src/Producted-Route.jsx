// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth'; // Adjust path as needed

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  console.log('ProtectedRoute rendered', isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/Profile" />;
};

export default ProtectedRoute;
