import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div
            className='bg-[url("https://images.pexels.com/photos/7034601/pexels-photo-7034601.jpeg?auto=compress&cs=tinysrgb&w=600")] bg-cover bg-center min-h-screen flex justify-center items-center'
        >
            <div className="bg-white rounded p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Welcome Back!</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
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
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold">Password:</label>
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
                    <div className="flex justify-between items-center mb-4">
                        <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                        <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700">Recover Password</Link>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;