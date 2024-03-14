import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import UserPage from './UserPage';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [resetStatus, setResetStatus] = useState(null);

  const API_URL = "https://books-recommendation-server.onrender.com";

  const generateResetToken = () => {
    // Use the uuid library to generate a unique token
    return uuidv4();
  };

  const handleResetPassword = async () => {
    try {
      // Generate frontend reset token
      const resetToken = generateResetToken();
      console.log("Frontend Reset Token:", resetToken);

      // Make the API request to reset the password with both frontend and backend tokens
      const response = await axios.post(`${API_URL}/auth/reset-password/${token}`, {
        newPassword: newPassword,
        frontendResetToken: resetToken,
      });

      // Log backend response and set reset status
      console.log("Backend response:", response.data);
      setResetStatus(response.data.message);
    } catch (error) {
      // Handle password reset failure
      console.error('Password reset failed:', error.message);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
      setResetStatus('Password reset failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 1,
            padding: '10px',
            background: 'white',
          }}
        >
          <UserPage />
        </div>
        <div className='px-6 py-4'>
        <div className='flex justify-center mx-auto'>
        <div className='w-full mt-4'>
              <label className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-gray border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-bold'>New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}/>
              <button className="btn btn-accent rounded-xl" onClick={handleResetPassword}>Reset Password</button>

              {resetStatus && <p>{resetStatus}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
