import './Display.scss';
import React from 'react';
import main from '../images/main-image.jpeg';

export const Display = () => {
    return (
        <div id="display-container">
            <div className="message-content">
                <p>Welcome to Ivy's Nails<br/><br/>
                We specalise in nail artistry and unique styles, tailored to you. <br/><br/>
                We would love to hear from you!<br/><br/>
                So, give us a call and book an appointment. <a href="tel:01375675532"><br/><br/> 07936666789</a>
                </p>
            </div>
            <div className="image-content">
                <img src={main} alt="hello" />
            </div>

        </div>
    )
}

export default Display
