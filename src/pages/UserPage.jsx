// UserPage.jsx
import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const UserPage = ({ user }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>

      {/* Toggle Dropdown Button */}
      <button onClick={toggleDropdown}>User Information</button>

      {/* Dropdown Content */}
      {isDropdownOpen && <Sidebar user={user} />}
    </div>
  );
};

export default UserPage;
