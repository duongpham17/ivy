import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {loadUser} from '../redux/actions/authActions' 

export const Data = ({loadUser}) => {

    useEffect(() => {
        if(localStorage.getItem("loggedIn") === "jwt-exist") return loadUser();
    }, [loadUser])

    return <></>
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    loadUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Data)
