import './Information.scss';
import React from 'react';
import {Link} from 'react-router-dom';

export const Information = () => {
    const stuff = [
        {
            title: "Most Popular - Gel Pedicure £35",
            url: "https://firebasestorage.googleapis.com/v0/b/ivy-303dc.appspot.com/o/design%2F1.png?alt=media&token=95be28c1-3397-4f96-8ec1-38c3b5b66769",
            link: "price"
        },
        {
            title: "Nail Art & Design",
            url: "https://firebasestorage.googleapis.com/v0/b/ivy-303dc.appspot.com/o/design%2F3.png?alt=media&token=99177544-ba71-4db0-a4eb-17f14bb31f34",
            link: "gallery"
        },
    ]


    return (
        <div id="information-container">    
            {stuff.map((el, i) => 
            <div className="content" key={i}>
                <p>{el.title}</p>
                <Link to={`/${el.link}`} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}><img src={el.url} alt="nails" /></Link>
            </div>
            )}

            <div className="walkings">
                <p>Walkings always welcomed.</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/ivy-303dc.appspot.com/o/design%2F2.png?alt=media&token=8db17b1d-2127-4089-9f2c-45f6691e0798" alt="nails" />
            </div>
        </div>
    )
}

export default Information
