import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetRequested, setResetRequested] = useState(false);

  const API_URL = "http://localhost:5005";


  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the backend to initiate password reset
    axios.post(`${API_URL}/auth/forgot-password`, { email })
      .then(() => {
        // Handle the response, e.g., show success message
        setResetRequested(true);
      })
      .catch((error) => {
        // Handle errors, e.g., show error message
        console.error('Password reset request failed:', error.response.data.message);
      });
  };

  if (resetRequested) {
    return (
      <div>
        <p>Password reset instructions sent to your email. Check your inbox!</p>
        {/* You might also want to provide a link to your login page */}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPassword;
