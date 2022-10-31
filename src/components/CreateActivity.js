import React, { useState } from 'react';
import { createActivity as addActivity } from '../api';

const CreateActivity = ({token, fetchActivities, navigate}) => {
    const [initName, setName] = useState("");
    const [initDescription, setDescription] = useState("");

    async function handleSubmit() {

        const newActivity = {
            name: initName,
            description: initDescription
        }

        const results = await addActivity(token, newActivity);
        console.log({newActivity}, {results});
        fetchActivities();
        navigate('/activities');
    }

    return (
        <>
        <form onSubmit={(ev) => {
            ev.preventDefault();
            handleSubmit();
        }}>
            <h1>Create A New Activity</h1>

            <input 
                type='text'
                placeholder='Enter Activity Name'
                onChange={(event) => setName(event.target.value)}
            />
            <input 
                type='text'
                placeholder='Enter Description'
                onChange={(event) => setDescription(event.target.value)}
            />

            <button type='submit'>Create Activity</button>

        </form>
        </>
    )
}

export default CreateActivity;