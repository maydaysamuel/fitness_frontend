import React from "react";

const Activities = ({ activities }) => {
    console.log(activities)

    return (
        <div>
            {
                activities.map((activity) => {
                    const {description, name, id} = activity;
                    return (
                        <div key={id}>
                        <h3>{name}</h3>
                        <p>Description: {description}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Activities;