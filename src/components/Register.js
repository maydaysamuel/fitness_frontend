import React, { useState } from "react";
import { registerUser } from "../api";

const Register = ({ setToken, navigate }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        console.log(results)
        if (results) {
            setToken(results.token);
            window.localStorage.setItem('token', results.token);
            navigate('/profile')
            console.log(results.message)
        } else {
            console.log(results.error.name.message)
        }
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }}>
            <input
                type='text'
                placeholder='Enter Username'
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type='password'
                placeholder='Enter Password'
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Register;