import React, { useEffect } from 'react';
import './css/Modal.css';

const Modal = () => {
    const handleClose = () => {
        document.getElementById('cta-modal').style.display = 'none';
    };

    useEffect(() => {
        const modal = document.getElementById('cta-modal');
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }, []);

    return (
        <div className='container'>
             <div id="cta-modal" className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={handleClose}>&times;</span>
                <h2>Join MyBrand Today!</h2>
                <form id="signup-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit" className="cta-button">Sign Up</button>
                </form>
            </div>
        </div>
        </div>
       
    );
};

export default Modal;
