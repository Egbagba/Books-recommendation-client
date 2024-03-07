import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

function HomePage() {


    return (
        <div>
            <h2>Discover Your Next Favorite Read with Our Book Recommendations</h2>

            <p>Immerse yourself in captivating stories and timeless classics with 
            our curated book recommendations. Whether you're a fan of romance, 
            mystery, or historical fiction, our carefully selected list has something 
            for every avid reader. Explore the literary world and embark on exciting 
            journeys through the pages of our recommended books
            </p>

            <div>
                <Link>
                <button>Books Recommendations</button>
                </Link>
            </div>
            </div>
    )
}

export default HomePage