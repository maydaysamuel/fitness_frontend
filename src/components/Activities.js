import React from "react";
import { Link } from 'react-router-dom';

const Activities = ({ activities, token }) => {
    console.log(activities)

    return (
        <div>
            {
                token ? (
                    <>
                        <h1>Activities</h1>
                        <button>
                            <Link to='/activities/create-activity'>Create a New Activity</Link>
                        </button>

                    </>
                ) : (
                    <h1>Activities</h1>
                )
            }

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