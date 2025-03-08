import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './css/Features.css';

const Features = () => {
  const featureRef = useRef([]);

  useEffect(() => {
    // GSAP animation for feature cards
    gsap.fromTo(
      featureRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );

    // Add 3D effect when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(featureRef.current, {
              rotationY: 360,
              duration: 1,
              ease: 'power3.out',
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(document.getElementById('features'));
  }, []);

  return (
    <div className='full-width-section'>
      <div className='container'>
        <section id="features">
          <h2>Features</h2>
          <div className="feature-cards">
            <div className="card" ref={(el) => featureRef.current[0] = el}>
              <i className="fas fa-bolt"></i>
              <h3>Lightning Fast</h3>
              <p>Experience the speed of modern technology.</p>
            </div>
            <div className="card" ref={(el) => featureRef.current[1] = el}>
              <i className="fas fa-shield-alt"></i>
              <h3>Secure</h3>
              <p>Your safety is our top priority.</p>
            </div>
            <div className="card" ref={(el) => featureRef.current[2] = el}>
              <i className="fas fa-cloud"></i>
              <h3>Cloud-Based</h3>
              <p>Access your data anytime, anywhere.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;