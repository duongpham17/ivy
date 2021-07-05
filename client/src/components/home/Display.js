import './Display.scss';
import React from 'react';

export const Display = () => (
    <div id="display-container">
        <div className="message-content">
            <p>Welcome to Ivy's Nails
            <br/><br/>
            We specalise in nail artistry and unique styles, tailored to you. 
            <br/><br/>
            We would love to hear from you!
            <br/><br/>
            So, give us a call and book an appointment. <a href="tel:07936666789"><br/><br/> 07936 666 789</a>
            <br/><br/>
            Cash Only!
        
            </p>
        </div>
        <div className="image-content">
            <img src="https://firebasestorage.googleapis.com/v0/b/ivy-303dc.appspot.com/o/design%2Fmain-image.jpeg?alt=media&token=df808115-dc55-4245-b94f-c993e3f29e47" alt="hello" />
        </div>

    </div>
)


export default Display
