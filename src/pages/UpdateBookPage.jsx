import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


function UpdateBookPage() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");
    const [url, setUrl] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const API_URL = "http://localhost:5005";


    const getBook = () => {
        axios.get(`${API_URL}/api/books/${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setDescription(response.data.description);
                setYear(response.data.year);
                setRating(response.data.rating);
                setUrl(response.data.url);
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        getBook(id);
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { title, author, description, year, rating, url };
        axios.put(`${API_URL}/api/books/${id}`, updatedBook)
            .then(() => {
                navigate("/booklistpage");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Author</label>
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Year</label>
                <input
                    type="text"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <label>Ratings</label>
                <input
                    type="text"
                    name="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <label>Image URL</label>
                <input
                    type="text"
                    name="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button type="submit">Update Book</button>
            </form>
            <button onClick="">Delete Book</button>
        </article>
    );
}
export default UpdateBookPage;












