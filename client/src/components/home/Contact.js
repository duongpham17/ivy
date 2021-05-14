import './Contact.scss';
import React from 'react';
import {GoLocation} from 'react-icons/go';
import {BiTimeFive, BiPhone} from 'react-icons/bi';

import Map from './Map';

export const Contact = (props) => {

    return (
        <div id="contact-container">

            <div className="info-content">
                <h2>Visit us</h2> <br/>
                <p><GoLocation className="icon"/> Address</p>
                <button className="info" onClick={() => navigator.clipboard.writeText("Ivy's Nails, 15 The Broadway, Wickford SS11 7AD")}>Ivy's Nails, 15 The Broadway, Wickford SS11 7AD</button>

                <p className="header"><BiTimeFive className="icon"/> Opening Hours</p>
                <table>
                    <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>| 9.30am - 7pm </td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>| 9.30am - 6pm </td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>| CLOSED  </td>
                    </tr>
                    </tbody>
                </table>
                <p className="header"><BiPhone className="icon"/> Phone</p>
                <a href="tel:07936666789">Give us a call - 07936666789</a>
            </div>  

            <div className="map-content">
                <Map/>
            </div>
        </div>
        
    )
}

export default Contact
