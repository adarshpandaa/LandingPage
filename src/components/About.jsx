import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './css/About.css';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(aboutRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.5 });
    }, []);

    return (
        <div className='full-width-section'>
            <div className='container'>
            <section id="about" ref={aboutRef}>
        <div className="about-content">
            <h2>About Us</h2>
            <p>Intelion, an IT company that will operate as a SaaS provider and IT solutions provider. Our mission is to drive progress and empower individuals through cutting-edge technology.</p>
        </div>
    </section>
        </div>
        </div>
        
    );
};

export default About;
