import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import './css/Testimonials.css';


const Testimonials = () => {
    const testimonialsRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(testimonialsRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    }, []);

    return (
        <div className='container'>
            <section id="testimonials" ref={testimonialsRef}>
            <h2>What Our Customers Say</h2>
            <div className="testimonials-container">
                <div className="testimonial">
                    <p>"MyBrand has transformed the way we do business. Their products are unmatched in quality and performance!"</p>
                    <h4>- Jane Austin, CEO of TechCorp Inc.</h4>
                </div>
                <div className="testimonial">
                    <p>"Excellent service and support. We couldn’t be happier with our experience."</p>
                    <h4>- Johncena, Founder of InnovateX LLC.</h4>
                </div>
                <div className="testimonial">
                    <p>"A game-changer in the industry. MyBrand is the future!"</p>
                    <h4>- Sarah Lee, Entrepreneur</h4>
                </div>
            </div>
        </section>
        </div>
        
    );
};

export default Testimonials;
