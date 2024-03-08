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
          <div key={book._id}>
            <div>
              {/* <div>
                <img
                  src="https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg"
                  alt="card-image"
                />
              </div> */}
              <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.description}</p>
                <p>{book.year}</p>
                <p>{book.ratings}</p>
                <p>{book.image_placeholder}</p>
              </div>
              <div>
                <Link to={`/books/${book._id}`}>
                  <button>See Book</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookListPage;
