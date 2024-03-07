import { useEffect, useState } from "react";
import axios from "axios";




function BookListPage(){

    const API_URL = "http://localhost:5005";

    const [booklist, setBoolist] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/booklist`)
        .then((response)=> setBoolist(response.data))
        .catch((error)=> console.log(error))
    }, []);



    return (
        <div>
          <h2>Books Recommendation Web</h2>
          {booklist &&
            booklist.map((recommend) => (
              <div key={recommend.id}>
                <div>
                  <div>
                    <img
                      src={recommend.image_url}
                      alt="card-image"
                    />
                  </div>
                  <div>
                    <div>
                      <p>{recommend.title}</p>
                      <p>{recommend.author}</p>
                    </div>
                    <p>{recommend.description}</p>
                  </div>
                  <p>{recommend.year}</p>
                  <p>{recommend.ratings}</p>
                  <div>
                  <div>
                    <p>{recommend.image_placeholder}</p>
                  </div>
                    <Link to={`/booklist/${booklist.id}`}>
                      <button>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
}

export default BookListPage;