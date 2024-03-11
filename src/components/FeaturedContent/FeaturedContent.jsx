// FeaturedContent.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeaturedContent.css';

const FeaturedContent = () => {
  const featuredBooks = [
    {
      id: '65e89355255818943abbe850',
      title: 'Gone with the Wind',
      description: 'Epic romance set against the backdrop of the American Civil War.',
      image: 'https://pictures.abebooks.com/inventory/30663736201.jpg', // Replace with actual image path
    },
    {
      id: '65eec75f246c01d7a7528cfc',
      title: 'Moongoose',
      description: 'Cross Origin Resource Sharing.',
      image: 'https://m.media-amazon.com/images/I/7160UerJ4kL._AC_UF1000,1000_QL80_.jpg', // Replace with actual image path
    },
    // Add more featured books as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjust the number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h2>Featured Content</h2>
      <Slider {...settings}>
        {featuredBooks.map((book) => (
          <div key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedContent;
