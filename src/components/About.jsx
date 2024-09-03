import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './css/About.css';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(aboutRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.5 });
    }, []);

    return (
        <div className='container'>
            <section id="about" ref={aboutRef}>
        <div className="about-content">
            <h2>About Us</h2>
            <p>MyBrand is a leader in tech innovation, bringing the best products to consumers worldwide. Our mission is to drive progress and empower individuals through cutting-edge technology.</p>
        </div>
    </section>
        </div>
        
    );
};

export default About;
