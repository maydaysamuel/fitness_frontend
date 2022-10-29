import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = ({ setToken }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
            setToken(results.token);
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