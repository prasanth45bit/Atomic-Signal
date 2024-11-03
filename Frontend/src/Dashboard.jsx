import React from 'react';
import { useAuth } from './Auth';
import PasswordInput from './Components/Inputs/Password';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Dashboard (Protected)</h2>
      <button onClick={logout}>Logout</button>
      <PasswordInput/>
    </div>
  );
};

export default Dashboard;
