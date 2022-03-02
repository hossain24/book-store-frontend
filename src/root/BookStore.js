import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import InfoPage from '../components/InfoPage/InfoPage';
import LandingPage from '../components/LandingPage/LandingPage';
import MobileNavigation from '../components/NavBar/MobileNavigation';
import NavBar from '../components/NavBar/NavBar';
import PublicPageTwo from '../components/PublicPage/PublicPageTwo';

const BookStore = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <MobileNavigation isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <LandingPage />
            <PublicPageTwo />
            <InfoPage />
            <Footer />
        </>
    );
}

export default BookStore;