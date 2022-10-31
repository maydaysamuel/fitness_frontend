import React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';

const Home = () => {
    return (
        <div className='home'>
            <h1 className='title'>Fitness Trackr</h1>
            <h2 className='home-desc'>Register to create your customized workout</h2>
            <h2 className='home-desc'>Already have an account? <a href='/login'>Login</a></h2>
        </div>
    )
}


export default Home;