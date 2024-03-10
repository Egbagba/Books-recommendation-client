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

    const {saveToken, authenticateUser} = useContext(AuthContext);

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
            <div>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                        <Link to="/forgot-password">Recover Password</Link>
                    </div>
                    {error && <p>{error}</p>}
                </form>
            </div>
    )
}

export default Login;