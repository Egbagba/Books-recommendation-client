import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import UserPage from './UserPage';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [resetStatus, setResetStatus] = useState(null);

  const API_URL = "http://localhost:5005";

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
        <label>New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleResetPassword}>Reset Password</button>

        {resetStatus && <p>{resetStatus}</p>}
      </div>
      </div>
    );
};

export default ResetPassword;
