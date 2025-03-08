import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './css/Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    }, []);

    return (
        <div className='full-width-section'> 
        <div className='container'>
            <section id="hero" ref={heroRef}>
            <div className="hero-content">
                <h1>Discover the Future with Intelion</h1>
                <p>Leading innovations at your fingertips.</p>
                <button id="hero-button" className="cta-button">Join Now</button>
            </div>
        </section>
        </div>
        </div>
    );
};

export default Hero;
