import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Assuming you use axios for HTTP requests

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [resetStatus, setResetStatus] = useState(null);

  const API_URL = "http://localhost:5005";


  const handleResetPassword = async () => {
    try {
      // Send a request to your backend to reset the password
      const response = await axios.post(`${API_URL}/auth/reset-password/${token}`, {
        newPassword: newPassword,
      });

      // Handle the response from the backend
      setResetStatus(response.data.message);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error('Password reset failed:', error.message);
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
