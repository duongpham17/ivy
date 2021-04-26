import './Home.scss';
import React from 'react';

import Notice from './Notice';
import CreateNotice from './CreateNotice';
import Information from './Information';
import Contact from './Contact';
import Display from './Display';

export const Home = () => {
    return (
        <div id="home-container">
            <Display/>
            <CreateNotice/>
            <Notice/>
            <Information/>
            <Contact/>
        </div>
    )
}

export default Home
