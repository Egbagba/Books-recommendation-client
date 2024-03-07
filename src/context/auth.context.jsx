import React, { useState } from "react";
import axios from "axios";

// Initializing Context.
const AuthContext = React.createContext();


const API_URL = "http://localhost:5005";

function AuthProviderWrapper() {
    const [user, setUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /** Save the login's JWT Token in our Browsers storage */
    const saveToken = (token) => {
        localStorage.setItem('authToken', token);
    }


    /** Function that authenticates the USER --> verifies if the token is a valid one */
    const authenticatesUser = () => {
        const storedToken = localStorage.getItem("authToken");

        if (storedToken) {
            axios.get(`${API_URL}/auth/verify`, {
                headers: { Authorization: `Bearer ${storedToken}` }
            })
                .then((response) => {
                    setUser(response.data);
                    setIsLoggedIn(true);

                })
                .catch(()=>{
                    setUser(null);
                    setIsLoggedIn(false);
                })
        }
        else {
            setUser(null);
            setIsLoggedIn(false);
        }
    };

    const removeToken = () =>{
        localStorage.removeItem("authToken");
    }

    const logOut = () =>{
        removeToken();
        authenticatesUser();
    }

    return(
        <AuthContext.Provider value={{isLoggedIn, user, saveToken, authenticatesUser, logOut}}>
            {props.children}
        </AuthContext.Provider>
    )


}

export {AuthProviderWrapper, AuthContext};

    

