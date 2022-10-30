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

import { 
    getAllActivities,
    getRoutines
} from './api';


const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const navigate = useNavigate();

    console.log(token)

    function logout() {
        window.localStorage.removeItem('token')
        setToken('');
    }

    async function fetchRoutines() {
        const results = await getRoutines()
        setRoutines(results)
    }

    async function fetchActivities() {
        const results = await getAllActivities()
        setActivities(results)
    }

    useEffect(() => {
        fetchRoutines()
    }, [])

    useEffect(() => {
        fetchActivities()
    }, [])
    
    
    
    return (
        <div>
            <Navbar 
                logout={logout}
            />
            <Routes>
                <Route 
                    path='/' 
                    element={<Home 
                    />} 
                />
                <Route 
                    path='/routines' 
                    element={<Routines 
                    routines={routines} 
                    />} 
                />
                <Route 
                    path='/activities' 
                    element={<Activities 
                    activities={activities}
                    />} 
                />
                <Route 
                    path='/profile' 
                    element={<Profile 
                    />} 
                />
                <Route 
                    path='/register' 
                    element={<Register 
                    setToken={setToken}
                    token={token}
                    navigate={navigate}
                    />} 
                />
                <Route 
                    path='/login' 
                    element={<Login 
                    setToken={setToken}
                    navigate={navigate}
                    />} 
                />
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