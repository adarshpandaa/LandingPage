import React from 'react';
import './css/CTA.css';
const CTA = () => {
    const handleModalOpen = () => {
        document.getElementById('cta-modal').style.display = 'flex';
    };

    return (
        <div className='container'>
            <section id="cta">
            <div className="cta-content">
                <h2>Ready to Elevate Your Experience?</h2>
                <button onClick={handleModalOpen} className="cta-button">Get Started</button>
            </div>
        </section>
        </div>
        
    );
};

export default CTA;
