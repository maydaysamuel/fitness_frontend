import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ logout, token, token }) => {

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
                <Link to='/'>Home</Link>
                <Link to='/routines'>Routines</Link>
                <Link to='/activities'>Activities</Link>

                {
                    token ? (
                        <>
                            <Link to='/profile'>Profile</Link>
                            <Link to='/' onClick={() => logout()}>Logout</Link>
                        </>

                    ) : (
                        <>
                            <Link to='/register'>Register</Link>
                            <Link to='/login'>Login</Link>
                        </>
                    )

                }
            </nav>
        </header>
    )
}

export default Navbar;