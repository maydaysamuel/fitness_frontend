import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ logout, token }) => {

    const linkStyle = {
        margin: '1.5rem',
        fontFamily: 'Staatliches',
        fontSize: '1.5rem',
        textDecoration: 'none',
        color: 'white'
    };

    return (
        <header>
            <nav>
                <Link to='/' style={linkStyle}>Home</Link>
                <Link to='/routines' style={linkStyle}>Routines</Link>
                <Link to='/activities' style={linkStyle}>Activities</Link>

                {
                    token ? (
                        <>
                            <Link to='/profile' style={linkStyle}>Profile</Link>
                            <Link to='/' style={linkStyle} onClick={() => logout()}>Logout</Link>
                        </>

                    ) : (
                        <>
                            <Link to='/register' style={linkStyle}>Register</Link>
                            <Link to='/login' style={linkStyle}>Login</Link>
                        </>
                    )

                }
            </nav>
        </header>
    )
}

export default Navbar;