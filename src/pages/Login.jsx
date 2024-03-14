import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import UserPage from "./UserPage";

const API_URL = "http://localhost:5005";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { saveToken, authenticateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const reqBody = { email, password };
        axios.post(`${API_URL}/auth/login`, reqBody)
            .then((response) => {
                saveToken(response.data.authToken);
                authenticateUser();
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                const errorDescription = error.data.message;
                setError(errorDescription);
            });
    };
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg dark:bg-gray-800 shadow-lg hover:shadow-xl p-6">
                <div className="px-6 py-4">
                    <img className="mt-6 w-48 h-auto sm:w-64 sm:h-auto mx-auto" src="https://images.pexels.com/photos/16689057/pexels-photo-16689057/free-photo-of-view-of-rows-of-bookshelves-in-a-college-library.jpeg?auto=compress&cs=tinysrgb&w=600" alt="book-image" />
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

                        <h2 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back!</h2>
                        <p className="mt-1 text-center text-gray-500 dark:text-gray-400 font-semibold">Log into your account</p>

                        <form onSubmit={handleLoginSubmit} className="mt-4">
                            <div className="w-full mt-4">
                                <label className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-bold">Email Address:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="w-full mt-4">
                                <label className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 font-bold text-start">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mt-8 md:flex md:items-center md:justify-between">
                                <button type="submit" className="w-full md:w-auto px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Login</button>
                                <Link to="/forgot-password" className="mt-4 md:mt-0 text-blue-500 hover:text-blue-700">Recover Password</Link>
                            </div>
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                        </form>
                        <Footer />
                    </div>
                    </div>
                </div>
            </div>
            );


}


            export default Login;
