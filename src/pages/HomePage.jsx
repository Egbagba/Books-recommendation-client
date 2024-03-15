import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import React, { useState } from "react";
import FeaturedContent from "../components/FeaturedContent/FeaturedContent";
import UserPage from "../pages/UserPage"; // Import UserPage
import Footer from "../components/Footer";
import '../index.css'

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);
  const [isAddBookVisible, setAddBookVisible] = useState(false);
  const navigate = useNavigate();

  // Placeholder user data
  const user = {
    username: 'john_doe',
    email: 'john.doe@example.com',
  };

  const handleBooksRecommended = () => {
    if (isLoggedIn) {
      // User is authenticated, navigate to the Books Recommended page
      navigate("/booklistpage");
    } else {
      // User is not authenticated, navigate to the sign-up page
      navigate("/signup");
    }
  };

  const handleAddBookClick = () => {
    setAddBookVisible(!isAddBookVisible);
    navigate('/addbookpage'); // Replace '/add-book' with the actual path of your AddBookPage
  };

  return (
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
        <UserPage user={user} />
      </div>
      <div className="">
        <div>
          <FeaturedContent />
        </div>
        <div>
          <h2 className="text-3xl font-bold font-serif m-60 mt-20 text-stone-400">Discover Your Next Favorite Read with Our Book Recommendations.</h2>
        </div>
        <div className="break-all">
          <p className="text-xl font-semibold font-mono m-20 text-purple-900">Immerse yourself in captivating stories and timeless classics with
            our curated book recommendations. 
            Whether you're a fan of romance,mystery, or historical fiction, our carefully selected list has something
            for every avid reader. Explore the literary world and embark on exciting
            journeys through the pages of our recommended books below.
          </p>
        </div>
        <div className="flex justify-center space-x-10">
          <button className="btn btn-outline btn-warning px-4 py-4 rounded-xl" onClick={handleBooksRecommended}>Recommended Books</button>
          <button className="btn btn-outline btn-info px-4 py-2 rounded-xl" onClick={handleAddBookClick}>{isAddBookVisible ? 'Hide' : 'Add +'}</button>
        </div>
        <Footer />
      </div>
    </div>
  );

}

export default HomePage;