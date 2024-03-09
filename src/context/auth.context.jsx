import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const API_URL = "http://localhost:5005";

function AuthProviderWrapper(props) {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const saveToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setUser(response.data);
          setIsLoggedIn(true);
        })
        .catch(() => {
          setUser(null);
          setIsLoggedIn(false);
        });
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  // Use useNavigate for programmatic navigation
  const navigate = useNavigate();

  const logOut = () => {
    removeToken();
    setUser(null);
    setIsLoggedIn(false);
    // Use navigate function to navigate to the desired route
    navigate("/addbookpage");
  };

  useEffect(() => {
    // When the component mounts, authenticate the user if a token is present
    authenticateUser();
  }, []); // Empty dependency array means this effect runs once, equivalent to componentDidMount

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, saveToken, authenticateUser, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
