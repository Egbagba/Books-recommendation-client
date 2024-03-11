// Sidebar.jsx
import React from 'react';

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Add other user-related information or actions here */}
    </div>
  );
};

export default Sidebar;
