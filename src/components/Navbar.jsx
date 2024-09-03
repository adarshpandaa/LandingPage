import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <header>
            <div className='container'>
            <nav className="navbar">
                <div className="logo">MyBrand</div>
                <ul className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button id="cta-button" className="cta-button">Get Started</button>
            </nav>
            </div>
        </header>
    );
};

export default Navbar;
