import './Navbar.scss';
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from 'redux/actions/authActions';
import {useLocation} from 'react-router-dom';

export const Navbar = ({auth:{loggedOn}, logout}) => {

    const location = useLocation();

    const links = ["home", "price", "gallery", "services"]
    
    return (
        <nav id="nav-container">

            <nav className="navbar-1">
                <Link to='/'><h2>Ivy's Nails</h2></Link>
                {loggedOn ? <Link to="/" onClick={() => logout()}>Logout</Link> : <Link to="/login">Login</Link>}
            </nav>

            <nav className="navbar-2">
                {links.map((el) => 
                    <Link key={el} to={`/${el === "home" ? "" : el}`} className={`${location.pathname.includes(el) && "at"}`}>{el.charAt(0).toUpperCase() + el.slice(1)}</Link>
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
