import React from "react";

const Routines = ({ routines }) => {
    //isPublic, name, goal, creatorName

    return (
        <div>
            {
                routines.map((routine) => {
                    const {goal, creatorName, name} = routine;
                    return (
                        <>
                        <h3>{name}</h3>
                        <p>Creator Name: {creatorName}</p>
                        <p>Goal: {goal}</p>
                        </>

                    )
                })
            }
        </div>
    )
}

export default Routines;