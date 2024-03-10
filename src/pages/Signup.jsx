import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function Signup(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");


    // Initialize navigate
    const navigate = useNavigate ();

    const handleSignUpSubmit = (e) =>{
        // Prevent Default Actions of the Form -> refresh the page.
        e.preventDefault();

        const reqBody = {email, password, name};

        axios.post(`${API_URL}/auth/signup`, reqBody).then(()=>{
            navigate("/login");
        }).catch((error)=>{
           const errorDescription = error.data.message;
            setError(errorDescription); 
/*             console.log(error)
 */        })

    }

    return (
      <div>
        <form onSubmit={handleSignUpSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>Create account to access recommended books</p>
            <button type="submit">Sign In</button>

          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    );
}

export default Signup