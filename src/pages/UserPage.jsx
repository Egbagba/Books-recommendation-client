// UserPage.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Link } from 'react-router-dom';

const UserPage = () => {
    const { user, isLoggedIn, authenticateUser } = useContext(AuthContext);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        // Call authenticateUser method when the component mounts
        authenticateUser();
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            {isLoggedIn && (
                <>
                    <h3 className='font-bold'>Welcome</h3>
                    {/* Toggle Dropdown Button */}
                    <button className='btn btn-outline' onClick={toggleDropdown}>
                        User Information {user ? user.username : ''}
                    </button>
                    

                    {/* Dropdown Content */}
                    {isDropdownOpen && (
                        <div>
                            {user && (
                                <>
                                    <p className='font-semibold'>Username: {user.name}</p>
                                    <p className='font-semibold'>Email: {user.email}</p>
                                    <div className='mt-3 space-x-4'>
                                    <Link to="/signup"><button className="btn btn-sm btn-outline rounded-md">Sign-Up</button></Link>
                                    <Link to="/login"><button className="btn btn-sm btn-outline rounded-md">Log-In</button></Link>
                                    </div>

                                    
                                </>
                                
                            )}
                        </div>
                    )}
                    {isDropdownOpen && <Sidebar user={user} />}
                </>
            )}
        </div>
    );
};

export default UserPage;
