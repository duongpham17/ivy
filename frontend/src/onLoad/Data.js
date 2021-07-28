import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {loadUser} from '../redux/actions/authActions' 

export const Data = ({loadUser}) => {

    useEffect(() => {
        if(localStorage.getItem("loggedIn")) return loadUser();
    }, [loadUser])

    return <></>
}

const mapDispatchToProps = {
    loadUser
}

export default connect(null, mapDispatchToProps)(Data)
