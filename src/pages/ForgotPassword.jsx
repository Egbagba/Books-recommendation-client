import React, { useState } from 'react';
import axios from 'axios';
import UserPage from './UserPage';

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
          <p>Password reset instructions sent to your email. Check your inbox!</p>
          {/* You might also want to provide a link to your login page */}
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-4">
      <div className="flex justify-center mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="w-full mt-4">
            <label className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-gray border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-bold">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                required
              />
            </label>
            <button type="submit">Reset Password</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default ForgotPassword;
