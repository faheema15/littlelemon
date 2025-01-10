import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../images/logo.svg';
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt='Little Lemon Logo' />
          <p>We are a family-owned Mediterranean restaurant, focused on serving traditional recipes with a modern twist.</p>
        </div>
        <div>
          <h3>Important links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/orderonline">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br /> 123 Towncity, USA</li>
            <li>Phone: <br /> +1 123 456 789</li>
            <li>Email: <br /> littlelemon@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
