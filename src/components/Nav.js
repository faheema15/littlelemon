import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './styles/nav.css'

const Nav = ({ loggedInName }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            {/* Logo */}
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>

            {/* Mobile menu toggle */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navigation items */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                    <Link to="/orderonline">Order Online</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>

            {/* Display logged-in user's name */}
            {loggedInName && (
                <div className="greeting">
                    Hi, {loggedInName}!
                </div>
            )}
        </nav>
    );
};

export default Nav;
