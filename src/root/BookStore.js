import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import MobileNavigation from '../components/NavBar/MobileNavigation';
import NavBar from '../components/NavBar/NavBar';
import PublicPage from '../components/PublicPage/PublicPage';

const BookStore = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <NavBar toggle={toggle} />
            <MobileNavigation isOpen={isOpen} toggle={toggle} />
            <PublicPage />
            <Footer />
        </>
    );
}

export default BookStore;