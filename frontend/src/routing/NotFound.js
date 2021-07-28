
import './Routing.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'

const NotFound = () => {
    return (
        <section className="route-not-found">
            <Link to='/'>Page doesn't exist, back to <AiFillHome className="icon"/></Link>
        </section>
    )
}
export default NotFound