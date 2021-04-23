import './Login.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import {login} from '../../redux/actions/authActions';

export const Login = ({auth:{loggedOn}, login}) => {

    const [check, setCheck] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const {username, password} = formData;

    const onChange = (e) => setFormData({...formData, [e.target.name] : e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        setCheck(true);
        await login(formData);
        setCheck(false);
    } 

    if(loggedOn){
        return <Redirect to="/" />
    }

    return (
        <div id="login-container">
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => onChange(e)} required minLength="3" />
                <input type="password" placeholder="Password"  name="password" value={password} onChange={(e) => onChange(e)} required minLength="8" />

                {username.length >= 3 && password.length >= 8 && <button className={check ? "loading-btn" : ""}>Login</button> }
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.authReducers
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
