import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            {/* Your logo or brand name goes here */}
            <h1>Books Recommendation Web</h1>
          </div>

          <div className="footer-links">
            {/* Your footer links go here */}
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>

          <div className="footer-contact">
            {/* Your contact information goes here */}
            <p>Email: info@mycompany.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 B R W. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
