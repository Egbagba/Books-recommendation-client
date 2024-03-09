import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddBook() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("")
    const [ratings, setRatings] = useState("")
    const [image_placeholder, setImage] = useState("");

    const API_URL = "http://localhost:5005";

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const book = { title, author, description, year, ratings, image_placeholder };

        if (!title || !author || !description || !year || !ratings || !image_placeholder) {
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
        <>
            <form onSubmit={handleSubmit} aria-label="Add Book Form">
                <label for="bookTitle" >Book Title :</label>
                <input
                    id="bookTitle"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    aria-required="true"
                />
                <label for="bookAuthor"> Author :</label>
                <input
                    id="bookAuthor"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    aria-required="true"
                />
                <label for="bookDescription">Book Description: </label>
                <input
                    id="bookDescription"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    aria-required="true"
                />
                <label for="bookYear">Book Year: </label>
                <input
                    id="bookYear"
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    aria-required="true"
                />
                <label for="bookRatings">Book Rating: </label>
                <input
                    id="bookRatings"
                    type="text"
                    value={ratings}
                    onChange={(e) => setRatings(e.target.value)}
                    aria-required="true"
                />
                <label for="bookImage">Book_url: </label>
                <input
                    id="bookImage"
                    type="text"
                    value={image_placeholder}
                    onChange={(e) => setImage(e.target.value)}
                    aria-required="true"
                />
                <button type="submit" aria-label="Submit Book Details">Add Book</button>
                <p>Login to add books</p>
            </form>
        </>
    )
}
export default AddBook;