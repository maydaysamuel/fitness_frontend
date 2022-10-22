import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
// import './style.css'
import {
    Navbar,
    Routines,
    Activities,
    Profile,
    Register,
    Login,
    Home
} from './components';

const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const navigate = useNavigate()
    
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/routines' element={<Routines />} />
                <Route path='/activities' element={<Activities />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById("app"))
const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

/*
User:
-POST /api/users/register
-POST /api/users/login
-GET /api/users/me
-GET /api/users/:username/routines

Activities:
-GET /api/activities
-POST /api/activities (*)
-PATCH /api/activities/:activityId (*)
-GET /api/activities/:activityId/routines

Routines:
-GET /api/routines
-POST /api/routines (*)
-PATCH /api/routines/:routineId (**)
-DELETE /api/routines/:routineId (**)
-POST /api/routines/:routineId/activities

Routine-activities:
-PATCH /api/routine_activities/:routineActivityId (**)
-DELETE /api/routine_activities/:routineActivityId (**)
*/