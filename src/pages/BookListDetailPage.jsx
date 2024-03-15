import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserPage from "./UserPage";
import Footer from "../components/Footer";

/* Import Axios */
import axios from "axios";

function BookListDetailPage() {

    const API_URL = "https://books-recommendation-server.onrender.com";



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
                                background: 'stone',
                            }}
                        >
                            <UserPage />
                        </div>
                        <div className="w-full max-w-sm overflow-hidden bg-gray rounded-lg shadow-lg dark:bg-gray-800">
                            <h3 className="mx-3 mt-2 font-bold text-black mb-5 text-2xl">Title: {books.title}</h3>
                            <img className="object-cover object-center w-full h-80" src={books.image_placeholder} alt={books.image} />
                            <div className="px-6 py-4 text-start mt-3">
                                <p className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Author: {books.author}</p>
                                <p className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Description: {books.description}</p>
                                <p className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Year: {books.year}</p>
                                <p className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Ratings: {books.ratings}</p>
                            </div>
                            <div className="flex justify-between mt-10 px-6">
                                <Link to="/booklistpage"><button className="btn btn-outline btn-accent px-4 py-2 rounded-xl">&#9664; Back</button></Link>
                                <Link to={`/deletebookpage/${books._id}`}><button className="btn btn-outline btn-success px-6 py-2 rounded-xl">Delete Book</button></Link>
                            </div>
                            <Footer />
                        </div>

                    </div>
                </div>

            )}
        </div>
    );
}




export default BookListDetailPage;