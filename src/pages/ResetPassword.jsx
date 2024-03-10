import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [resetStatus, setResetStatus] = useState(null);

  const API_URL = "http://localhost:5005";

  const handleResetPassword = async () => {
    try {
      console.log("Reset token:", token); // Log reset token
      console.log("New password:", newPassword); // Log new password

      const response = await axios.post(`${API_URL}/auth/reset-password/${token}`, {
        newPassword: newPassword,
      });

      console.log("Backend response:", response.data); // Log backend response
      setResetStatus(response.data.message);
    } catch (error) {
      console.error('Password reset failed:', error.message); // Log error message
      if (error.response) {
        console.error('Server response:', error.response.data); // Log detailed server response
      }
      setResetStatus('Password reset failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>

      {resetStatus && <p>{resetStatus}</p>}
    </div>
  );
};

export default ResetPassword;
