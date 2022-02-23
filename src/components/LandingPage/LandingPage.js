import React from 'react';
import './landing-page.scss';


const LandingPage = () => {
    return (
        <>
            <div className="LandingPage">
                <div className="LeftPanel">
                    <div id="Circle">
                        <img src="./images/book3.png" alt='book' />
                    </div>
                </div>
                <div className="RightPanel">
                    <div id="Square">
                        <img src="./images/book1.png" alt='book' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
