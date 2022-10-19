import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    
}

ReactDOM.render(<App />, document.getElementById("app"))

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