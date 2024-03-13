import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, authenticateUser, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    // Call the logOut function which includes the logout request
    await logOut();
  };

  return (
    <nav>
      <div className='navbar bg-base-100'>
      <Link to="/"><button className='btn btn-ghost text-l text-gray font-bold'>Home</button></Link>

      {isLoggedIn && (
        <>
          <Link to="/About"><button className='text-gray font-bold btn btn-ghost text-l'>About</button></Link>

          {/*   UPDATE   */}
          <button className='text-gray font-bold btn btn-ghost text-l' onClick={handleLogout}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
