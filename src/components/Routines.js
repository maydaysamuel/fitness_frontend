import React from "react";
import { Link } from 'react-router-dom';

const Routines = ({ routines, token }) => {
    //isPublic, name, goal, creatorName
    console.log(routines)

    return (
        <div>
            {
                token ? (
                    <>
                    <h1>Routines</h1>
                    <button>
                        <Link to='/routines/create-routine'>Create a New Routine</Link>
                    </button>
                    </>
                ) : (
                    <h1>Routines</h1>
                )
            }


            {
                routines.map((routine) => {
                    const {goal, creatorName, name, id} = routine;
                    return (
                        <div key={id}>
                        <h3>{name}</h3>
                        <p>Creator Name: {creatorName}</p>
                        <p>Goal: {goal}</p>
                        <button>
                            View Activities
                        </button>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Routines;