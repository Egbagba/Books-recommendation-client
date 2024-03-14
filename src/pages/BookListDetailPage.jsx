import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserPage from "./UserPage";

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
                        <h3>Title: {books.title}</h3>
                        <img src={books.image_placeholder} alt={books.image} />
                        <p>Author: {books.author}</p>
                        <p>Description: {books.description}</p>
                        <p>Year: {books.year}</p>
                        <p>Ratings: {books.ratings}</p>
                        <div className="flex justify-center space-x-4">
                            <Link to="/booklistpage"><button className="btn btn-outline btn-accent px-4 py-2 rounded">&#9664; Back</button></Link>
                            <Link to={`/deletebookpage/${books._id}`}><button className="btn btn-outline btn-success">Delete Book</button></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}




export default BookListDetailPage;