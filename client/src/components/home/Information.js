import './Information.scss';
import React from 'react';
import pedi from '../images/pedi.png';

export const Information = () => {
    return (
        <div id="information-container">
            <div className="pedicure-info">
                <p>Most Popular - Gel Pedicure £35</p>
                <img src={pedi} alt="information" />
            </div>
        </div>
    )
}

export default Information
