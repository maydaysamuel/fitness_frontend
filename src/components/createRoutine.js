//routine (name, goal, isPublic)
import React, { useState } from 'react';
import { createRoutine as addRoutine } from '../api';

const CreateRoutine = ({ token, fetchRoutines, navigate }) => {
    const [initName, setName] = useState("");
    const [initGoal, setGoal] = useState("");

    const newRoutine = {
        name: initName,
        goal: initGoal
    }

    async function handleSubmit() {
        

        const results = await addRoutine(token, newRoutine);
        console.log({ newRoutine }, { results });
        if (results.success) {
            fetchRoutines();
        } else {
            console.log('Error creating routine')
        }
        navigate('/routines');
    }

    return (
        <>
            <form onSubmit={(ev) => {
                ev.preventDefault();
                handleSubmit();
            }}>
                <h1 className='create-routine'>Create A New Routine</h1>

                <input
                    type='text'
                    placeholder='Enter Routine Name'
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type='text'
                    placeholder='Enter Goal'
                    onChange={(event) => setGoal(event.target.value)}
                />

                <button type='submit'>Create Routine</button>

            </form>
        </>
    )
}

export default CreateRoutine;