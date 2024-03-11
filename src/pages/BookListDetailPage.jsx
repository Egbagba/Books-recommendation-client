import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* Import Axios */
import axios from "axios";

function BookListDetailPage() {

    const API_URL = "http://localhost:5005";



    const [books, setBooks] = useState({});
    const navigate = useNavigate();

    // Get my Route Params, so I can use them
    const { id } = useParams();
    const getBook = () => {
        axios.get(`${API_URL}/api/books/${id}`)
            .then((response) => {
                const getBook = response.data;
                setBooks(getBook);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getBook();
    }, [id]);

    return (
        <div>
            {books && (
                <div>
                    <h3>Title: {books.title}</h3>
                    <img src={books.image_placeholder} alt={books.image} />
                    <p>Author: {books.author}</p>
                    <p>Description: {books.description}</p>
                    <p>Year: {books.year}</p>
                    <p>Ratings: {books.ratings}</p>
                    <Link to="/booklistpage"><button>&#9664; Back</button></Link>
                    <Link to={`/deletebookpage/${books._id}`}><button>Delete Book</button></Link>
                </div>
            )}
        </div>
    );
}




export default BookListDetailPage;