import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BookListPage() {
  const API_URL = "http://localhost:5005";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/books`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {books &&
        books.map((book) => (
          <div key={book._id} className="flex flex-row items-center">
            <div className="card w-80 mb-1 bg-neutral text-neutral-content">
              <h3 className="card-title font-semibold mt-3">{book.title}</h3>
            </div>
            <div className="card-actions justify-center">
              <Link to={`/books/${book._id}`}>
                <button className="btn btn-outline btn-success mb-3">See Book</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
  
}

export default BookListPage;
