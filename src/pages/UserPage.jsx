// UserPage.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

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
                    <h3>Welcome, {user ? user.username : 'Guest'}!</h3>
                    {/* Toggle Dropdown Button */}
                    <button onClick={toggleDropdown}>
                        User Information {user ? user.username : ''}
                    </button>
                    

                    {/* Dropdown Content */}
                    {isDropdownOpen && (
                        <div>
                            {user && (
                                <>
                                    <p>Username: {user.name}</p>
                                    <p>Email: {user.email}</p>
                                    
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
