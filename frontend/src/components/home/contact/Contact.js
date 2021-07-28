import './Contact.scss';
import React from 'react';
import {GoLocation} from 'react-icons/go';
import {BiTimeFive, BiPhone} from 'react-icons/bi';

export const Contact = () => 
(
    <div className="contact-container">
        <h1>Visit us</h1> <br/>
        <p><GoLocation className="icon"/> Address</p>
        <button className="info" onClick={() => navigator.clipboard.writeText("Ivy's Nails, 15 The Broadway, Wickford SS11 7AD")}>Ivy's Nails, 15 The Broadway, Wickford SS11 7AD</button>

        <p className="header"><BiTimeFive className="icon"/> Opening Hours</p>
        <p className="info">
            Monday - Friday | 9am - 7pm <br/>
            Saturday | 9am - 6pm <br/>
            Sunday | CLOSED <br/>
        </p>
        <p className="header"><BiPhone className="icon"/> Phone</p>
        <a href="tel:07936666789">Give us a call - 07936 666 789</a>
    </div>  
)


export default Contact
