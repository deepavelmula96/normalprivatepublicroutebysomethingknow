import React from 'react'
import { logout } from '../helper';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate=useNavigate();

    const handleLogout = (e) =>{
        logout();
        navigate('/signin');
    }
  return (
    <div>Dashboard
<button type="button" onClick={handleLogout}>logout</button>

    </div>
  )
}

export default Dashboard