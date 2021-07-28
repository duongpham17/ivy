import './index.scss';
import React from 'react';

import Notice from './Notice';
import CreateNotice from './CreateNotice';
import Information from './Information';
import Contact from './Contact';
import Display from './Display';

export const Index = () => (
    <div className="home-container">
        <Display/>
        <CreateNotice/>
        <Notice/>
        <Information/>
        <Contact/>
    </div>
)


export default Index
