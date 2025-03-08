import React from 'react';
import './css/CTA.css';
const CTA = () => {
    const handleModalOpen = () => {
        document.getElementById('cta-modal').style.display = 'flex';
    };

    return (
        <div className='full-width-section'>
            <div className='container'>
            <section id="cta">
            <div className="cta-content">
                <h2>Ready to Elevate Your Experience?</h2>
                <button onClick={handleModalOpen} className="cta-button">Contact Us</button>
            </div>
        </section>
        </div>
        </div>
        
    );
};

export default CTA;
