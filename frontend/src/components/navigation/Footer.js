import './Footer.scss'
import React from 'react';
import {IoIosArrowUp} from 'react-icons/io';
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';

export const Footer = () => {
    
    const backToTop = () => window.scrollTo({top: 0, behavior: "smooth"})

    return (
        <footer>
            <button className="up-btn" onClick={backToTop}><IoIosArrowUp /></button>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ivys.nails6789"><AiFillInstagram className="icon"/></a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ivysnails6789"><AiFillFacebook className="icon"/></a>
            <p>Ivy's Nails</p>
            <p>© ivysnail.co.uk. 2021. All rights reserved.</p>
        </footer>
    )
}

export default Footer
