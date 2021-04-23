import './Navbar.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../redux/actions/authActions'

export const Navbar = ({auth:{loggedOn}, logout}) => {

    const [at, setAt] = useState("");

    const links = ["home", "prices", "gallery", "services", "contact"]
    
    return (
        <nav id="nav-container">

            <nav className="navbar-1">
                <Link to='/' onClick={() => setAt("home")}><h1>Ivy's Nails</h1></Link>
                {loggedOn ? <Link to="/" onClick={() => logout()}>Logout</Link> : <Link to="/login">Login</Link>}
            </nav>

            <nav className="navbar-2">
                {links.map((el) => 
                    <Link key={el} to={`/${el === "home" ? "" : el}`} className={el === at ? "at" : ""} onClick={() => setAt(el)}>{el.charAt(0).toUpperCase() + el.slice(1)}</Link>
                )}
            </nav>

        </nav>
    )
}

const mapStateToProps = (state) => ({
    auth: state.authReducers
})

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
