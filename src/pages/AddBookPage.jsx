import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import UserPage from "./UserPage";



function AddBookPage() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [ratings, setRatings] = useState("");
    const [image, setImage] = useState("");

    const API_URL = "https://books-recommendation-server.onrender.com";
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const book = { title, author, description, year, ratings, image };

        if (!title || !author || !description || !year || !ratings || !image) {
            alert("All the fields must be completed");
        } else {
            axios
                .post(`${API_URL}/api/book`, book, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
                .then(() => navigate("/"))
                .catch((error) => console.log(error));
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg dark:bg-gray-800 shadow-lg hover:shadow-xl">
                <div className="px-6 py-4">
                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Add New Book-Collection</h3>
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
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="w-full">
                                <label className="block px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-serif">
                                    Book Title:
                                    <input
                                        id="bookTitle"
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="block px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-sans">
                                    Author:
                                    <input
                                        id="bookAuthor"
                                        type="text"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="block px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-mono">
                                    Description:
                                    <textarea
                                        id="bookDescription"
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="block px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-serif">
                                    Year:
                                    <input
                                        id="bookYear"
                                        type="text"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="block px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-sans">
                                    Ratings:
                                    <input
                                        id="bookRatings"
                                        type="text"
                                        value={ratings}
                                        onChange={(e) => setRatings(e.target.value)}
                                        className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="w-full">
                                <label className="block px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 text-start font-mono">
                                    Book URL:
                                    <input
                                        id="bookImage"
                                        type="text"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        className="border border-gray-300 rounded w-full px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </label>
                            </div>
                            <button type="submit" className="px-6 py-2 mt-4 text-sm font-medium tracking-wide text-gray capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Add Book</button>
                        </form>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBookPage;
