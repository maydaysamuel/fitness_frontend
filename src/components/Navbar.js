import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/routines'>Routines</Link>
                <Link to='/activities'>Activities</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </header>
    )
}

export default Navbar;