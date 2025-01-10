import React from "react";
import "./styles/header.css";
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
    return (
      <header className="header">
        <section>
        <div className="hero-section-container">
    <div className="section-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
        </p>
        <Link to="/reservations">
            <button className="btn">Reserve a Table</button>
        </Link>
    </div>
    <div className="section-right">
        <div className="image-box">
            <img src={bannerImg} alt="Delicious Mediterranean Food" />
        </div>
    </div>
</div>

        </section>
      </header>
    );
}



export default Header;


