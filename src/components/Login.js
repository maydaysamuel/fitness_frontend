import React, { useState } from "react";
import { userLogin } from '../api';

const Login = ({ setToken, navigate }) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const results = await userLogin(username, password);
        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem('token', results.data.token);
            navigate('/profile');
        } else {
            console.log(results.error.message);
        }
    }
    
    
    return (
        <>
        <div className='login'>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
                <input type='text' onChange={(event) => setUsername(event.target.value)}>Username</input>
                <input type='password' onChange={(event) => setPassword(event.target.value)}>Password</input>


            </form>

        </div></>
    )
}

export default Login;