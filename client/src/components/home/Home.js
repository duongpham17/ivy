import './Home.scss';
import React from 'react';
import { connect } from 'react-redux';

import Notice from './Notice';
import CreateNotice from './CreateNotice';

export const Home = (props) => {
    return (
        <div id="home-container">
            <CreateNotice/>
            <Notice/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
