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
      <Link to="/"><button>Home</button></Link>

      {isLoggedIn && (
        <>
          <Link to="/About"><button>About</button></Link>

          {/*   UPDATE   */}
          <button onClick={handleLogout}>Logout</button>
{/*           <span>{user.name}</span>
 */}        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
