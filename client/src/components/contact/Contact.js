import './Contact.scss';
import React from 'react';
import {GoLocation} from 'react-icons/go';
import {BiTimeFive, BiPhone} from 'react-icons/bi';

import Map from './Map';

export const Contact = (props) => {

    return (
        <div id="contact-container">

            <div className="info-content">
                <p><GoLocation className="icon"/> Address</p>
                <button className="info" onClick={() => navigator.clipboard.writeText("Ivy's Nails, 15 The Broadway, Wickford SS11 7AD")}>Ivy's Nails, 15 The Broadway, Wickford SS11 7AD</button>

                <p className="header"><BiTimeFive className="icon"/> Opening Hours</p>
                <p className="info">
                    Monday - Friday | 9.30am - 7pm <br/>
                    Saturday | 9.30am - 6pm <br/>
                    Sunday | CLOSED <br/>
                </p>

                <p className="header"><BiPhone className="icon"/> Phone</p>
                <a href="tel:01375675532">Give us a call - 07936666789</a>
            </div>  

            <Map/>
        </div>
        
    )
}

export default Contact
