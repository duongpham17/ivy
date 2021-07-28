import './index.scss';
import React from 'react';

import Notice from './notice';
import Display from './display';
import Contact from './contact';

export const Index = () => (
    <div className="home-container">
        <Display/>
        <Notice/>
        <Contact/>
    </div>
)


export default Index
