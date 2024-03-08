import { Link, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

function HomePage() {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

  const handleBooksRecommended = () => {
    if (isLoggedIn) {
      // User is authenticated, navigate to the Books Recommended page
      navigate("/booklistpage");
    } else {
      // User is not authenticated, navigate to the sign-up page
      navigate("/signup");
    }
  };

    return (
        <div>
            <h2>Discover Your Next Favorite Read with Our Book Recommendations</h2>

            <p>Immerse yourself in captivating stories and timeless classics with
                our curated book recommendations. Whether you're a fan of romance,
                mystery, or historical fiction, our carefully selected list has something
                for every avid reader. Explore the literary world and embark on exciting
                journeys through the pages of our recommended books
            </p>

            <button onClick={handleBooksRecommended}>Books Recommended</button>            <div>
                {/* <Link to="/signup"><button>Signup</button></Link>
                <Link to="/login"><button>Login</button></Link> */}
            </div>
        </div>
    )
}

export default HomePage;