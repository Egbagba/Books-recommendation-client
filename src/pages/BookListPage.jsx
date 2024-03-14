import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserPage from "./UserPage";

function BookListPage() {
  const API_URL = "https://books-recommendation-server.onrender.com";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/books`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      {books &&
        books.map((book) => (
          <div key={book._id}>
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
              <div>
                <div className="card w-80 mb-1 bg-neutral text-neutral-content">
                  <h3 className="card-title font-semibold mt-3">{book.title}</h3>
                </div>
                <div className="card-actions justify-center">
                  <Link to={`/books/${book._id}`}>
                    <button className="btn btn-outline btn-success mb-3">See Book</button>
                  </Link>
                </div>
                <div className="">
                <Link to="/booklistpage"><button className="btn btn-outline rounded-xl">&#9664; Back</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );

}

export default BookListPage;
