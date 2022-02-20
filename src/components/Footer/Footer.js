import React from 'react';
import './footer.scss';


const Footer = () => {
    return (
        <>
            <div className="Footer">
                <p>BookStore © {new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </>
    );
}

export default Footer;
