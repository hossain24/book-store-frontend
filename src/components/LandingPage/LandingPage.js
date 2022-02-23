import React from 'react';
import './landing-page.scss';
import rightBook from '../../images/book1.png';
import leftBook from '../../images/book3.png';

const LandingPage = () => {
    return (
        <>
            <div className="LandingPage">
                <div className="LeftPanel">
                    <div id="Circle">
                        <img alt='' src={leftBook} />
                    </div>
                </div>
                <div className="RightPanel">
                    <div id="Square">
                        <img alt='' src={rightBook} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
