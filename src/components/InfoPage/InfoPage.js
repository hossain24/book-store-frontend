import React from 'react';
import './info-page.scss';
import { data } from './info-source';

const InfoPage = () => {
    return (
        <>
            <div className="InfoPage">
                {data.map(info => (
                    <div key={info.id} className="InfoSection">
                        <h3>{info.title}</h3>
                        <p>{info.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default InfoPage;
