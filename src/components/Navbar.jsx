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
    <nav className='mb-5 py-2 px-2 fixed top-0 left-0'>
      <div className='text-gray bg-ivory navbar space-x-4'>
      <Link to="/"><button className='btn btn-ghost text-l text-slate-600 font-bold'>Home</button></Link>

      {isLoggedIn && (
        <>
          <Link to="/About"><button className='text-gray font-bold btn btn-ghost text-l text-slate-600'>About</button></Link>

          {/*   UPDATE   */}
          <button className='text-gray font-bold btn btn-ghost text-l text-slate-600' onClick={handleLogout}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button className='text-gray font-bold btn btn-ghost text-l text-slate-600'>Sign Up</button> </Link>
          <Link to="/login"> <button className='text-gray font-bold btn btn-ghost text-l text-slate-600'>Login</button> </Link>
        </>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
