import React, { useState } from 'react';
import './css/Navbar.css';

const Navbar = () => {
  // State to track the current theme (default is 'light')
  const [theme, setTheme] = useState('light');

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Update the theme attribute on the root element
  };

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className='container'>
        <nav className="navbar">
          <div className="logo">INTELION</div>
          <ul className="nav-links">
            <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            {/* Theme Toggle Button */}
            <li>
              <button
                onClick={toggleTheme}
                className={`theme-toggle-button ${theme}`}
              >
                {theme === 'light' ? 'Dark' : 'Light'} {/* Show 'Dark' when theme is light, and vice versa */}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;