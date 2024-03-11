import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import React, { useState } from "react";
import FeaturedContent from "../components/FeaturedContent/FeaturedContent";
function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);
  const [isAddBookVisible, setAddBookVisible] = useState(false);
  const navigate = useNavigate();


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
    <div>
      <FeaturedContent />
      <h2>Discover Your Next Favorite Read with Our Book Recommendations</h2>

      <p>Immerse yourself in captivating stories and timeless classics with
        our curated book recommendations. Whether you're a fan of romance,
        mystery, or historical fiction, our carefully selected list has something
        for every avid reader. Explore the literary world and embark on exciting
        journeys through the pages of our recommended books
      </p>

      <button onClick={handleBooksRecommended}>Recommended Books</button>
      <button onClick={handleAddBookClick}>{isAddBookVisible ? 'Hide' : 'Add +'}</button>
    </div>
  )
}

export default HomePage;