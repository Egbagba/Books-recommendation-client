import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DeleteBookPage = () => {
    const API_URL = "http://localhost:5005";
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
            <h2>Delete Book</h2>

            {book && (
                <div>
                    <h3>Book Details</h3>
                    <p>Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>Description: {book.description}</p>
                    <p>Year: {book.year}</p>
                    <p>Ratings: {book.ratings}</p>
                    <img src={book.image_placeholder} alt={book.image} />
                </div>
            )}

            <button onClick={deleteBook}>Confirm Delete</button>
            {deleteStatus && <p>{deleteStatus}</p>}
            <Link to="/booklistpage"><button>&#9664; Back</button></Link>
            <Link to="/updatebookpage"><button>Update Book</button></Link> 
        </div>
    );
};

export default DeleteBookPage;
