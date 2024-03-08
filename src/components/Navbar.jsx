import React from 'react';
import logo from "../assets/image/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">
                    <img
                        src={logo}
                        alt="Your Books Recommendation"
                    />
                </Link>
            </div>
            <div>
                <div>
                    <Link to="/"><button>Home</button></Link>

                    <Link to="/about"><button>About</button></Link>

                    <Link to="/signup"><button>Signup</button> </Link>

                    <Link to="/addbookpage"><button>AddBookPage</button> </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
