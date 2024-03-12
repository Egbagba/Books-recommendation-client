import React from 'react';


const Sidebar = ({ user }) => {
  return (
    <div>
      {user && (
        <>
          {/* <p>Username: {user.username}</p>
          <p>Email: {user.email}</p> */}
        </>
      )}
    </div>
  );
};

export default Sidebar;
