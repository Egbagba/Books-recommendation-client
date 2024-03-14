import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"
import UserPage from "./UserPage";
const API_URL = "https://books-recommendation-server.onrender.com";
/* 
const API_URL = "http://localhost:5005"; */

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");


  // Initialize navigate
  const navigate = useNavigate();

  const handleSignUpSubmit = (e) => {
    // Prevent Default Actions of the Form -> refresh the page.
    e.preventDefault();

    const reqBody = { email, password, name };

    axios.post(`${API_URL}/auth/signup`, reqBody).then(() => {
      navigate("/login");
    }).catch((error) => {
      const errorDescription = error.data.message;
      setError(errorDescription);
/*             console.log(error)
 */        })

  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg dark:bg-gray-800 shadow-lg hover:shadow-xl'>
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
          <div className="px-6 py-4">
            <div className="flex justify-center mx-auto">
              <img className="mt-6 w-48 h-auto sm:w-64 sm:h-auto" src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=600" alt="book-image" />
            </div>
            <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400 text-center font-semibold">Sign up & create account</p>

            <form onSubmit={handleSignUpSubmit}>
              <div className="w-full mt-4">
                <label className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-bold">Email:
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    required
                  />
                </label>
              </div>
              <div className="w-full mt-4">
                <label className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-30 text-start font-bold">Password:
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    required
                  />
                </label>
              </div>
              <div className="w-full mt-4">
                <label className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-bold">Username:
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    required
                  />
                </label>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button type="submit" className="px-6 py-2 mt-4 text-sm font-medium tracking-wide text-gray capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Sign Up</button>
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <Footer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );


}

export default Signup;
