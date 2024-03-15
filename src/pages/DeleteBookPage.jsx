import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserPage from './UserPage';
import Footer from '../components/Footer'

const DeleteBookPage = () => {
    const API_URL = "https://books-recommendation-server.onrender.com";
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [deleteStatus, setDeleteStatus] = useState(null);

    // Fetch book details function
    const fetchBookDetails = () => {
        axios
            .get(`${API_URL}/api/books/${bookId}`)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.error('Failed to fetch book details:', error.message);
            });
    };

    // useEffect to fetch book details when the component mounts
    useEffect(() => {
        fetchBookDetails();
    }, [bookId]);

    // Delete book function
    const deleteBook = () => {
        axios
            .delete(`${API_URL}/api/books/${bookId}`)
            .then((response) => {
                setDeleteStatus(response.data.message);
                navigate('/books');
            })
            .catch((error) => {
                console.error('Book deletion failed:', error.message);
                setDeleteStatus('Book deletion failed. Please try again.');
            });
    };

    return (
        <div>
            {book &&
                <article>
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
                            <div className="w-full max-w-sm overflow-hidden bg-gray rounded-lg shadow-lg dark:bg-gray-800">
                                <div>
                                    <div className="px-6 py-4 text-start mt-3">
                                        <h3 className="mx-3 mt-2 font-bold text-black mb-5 text-2xl">Book Detail-Informations</h3>
                                        <p className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Title: {book.title}</p>
                                        <p className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Author: {book.author}</p>
                                        <p className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Description: {book.description}</p>
                                        <p className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Year: {book.year}</p>
                                        <p className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Ratings: {book.ratings}</p>
                                        <img className="object-cover object-center w-full h-80" src={book.image_placeholder} alt={book.image} />
                                        <p className='font-semibold from-orange-50 mt-7'>Please click on the confirm to delete book or update <hr /> </p>
                                    </div>
                                    <div className='flex justify-center space-x-4 mt-10'>
                                        <button className="btn btn-active rounded-xl" onClick={deleteBook}>Confirm Delete</button>
                                        {deleteStatus && <p>{deleteStatus}</p>}
                                        <Link to="/booklistpage"><button className="btn btn-outline rounded-xl">&#9664; Back</button></Link>
                                        <Link to={`/updatebookpage/${book._id}`}><button className="btn btn-warning rounded-xl">Update Book</button></Link>
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>

                </article>
            }
        </div>


    );
};

export default DeleteBookPage;
