// FeaturedContent.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./FeaturedContent.css"

const FeaturedContent = () => {
  const featuredBooks = [
    {
      id: '65e89355255818943abbe850',
      title: 'Gone with the Wind',
      description: 'Epic romance set against the backdrop of the American Civil War.',
      image: 'https://mockupcloud-themety.imgix.net/uploads/images/2022/04/08/01-book-soft-cover-mockup.jpg?auto=compress,format&fit=crop,max&h=780&w=1170', // Replace with actual image path
    },
    {
      id: '65eec75f246c01d7a7528cfc',
      title: 'Moongoose',
      description: 'Cross Origin Resource Sharing.',
      image: 'https://i.postimg.cc/qqH9KJsm/pexels-suzy-hazelwood-1130980.jpg', // Replace with actual image path
    },
    {
      id: '65eec75f246c01d7a7528cfc',
      title: 'Lost In the Beauty of Bad Weather',
      description: 'Cross Origin Resource Sharing.',
      image: 'https://i.postimg.cc/28ztNX2B/pexels-tara-winstead-8850748.jpg',
    }
    // Add more featured books as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjust the number of visible slides
    centerMode: true, // Enable center mode
    centerPadding: '50px', // Adjust the padding for centering
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='feature-slide-img'>
        <Slider {...settings}>
        {featuredBooks.map((book) => (
          <div key={book.id}>
            <img className='' src={book.image} alt={book.title} />
            <h3 className='font-bold font-serif font'>{book.title}</h3>
            <p  className='font-semibold font-mono'>{book.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedContent;
