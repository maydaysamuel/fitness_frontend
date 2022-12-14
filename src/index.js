import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './style.css'
import {
    Navbar,
    Routines,
    Activities,
    Profile,
    Register,
    Login,
    Home,
    CreateRoutine,
    CreateActivity
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
                token={token}
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
                    token={token}
                    />} 
                />
                <Route
                    path='/routines/create-routine'
                    element={<CreateRoutine
                        token={token}
                        fetchRoutines={fetchRoutines}
                        navigate={navigate}    
                    />}
                />
                <Route 
                    path='/activities' 
                    element={<Activities 
                    activities={activities}
                    token={token}
                    />} 
                />
                <Route 
                    path='/activities/create-activity'
                    element={<CreateActivity
                        token={token}
                        fetchActivities={fetchActivities}
                        navigate={navigate}
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
    <CssBaseline>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </CssBaseline>
);

/*
User:
-GET /api/users/me
-GET /api/users/:username/routines

Activities:
-POST /api/activities (*)
-PATCH /api/activities/:activityId (*)
-GET /api/activities/:activityId/routines

Routines:
-PATCH /api/routines/:routineId (**)
-DELETE /api/routines/:routineId (**)
-POST /api/routines/:routineId/activities

Routine-activities:
-PATCH /api/routine_activities/:routineActivityId (**)
-DELETE /api/routine_activities/:routineActivityId (**)
*/