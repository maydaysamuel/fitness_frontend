import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Routines = ({ routines, token }) => {
    //isPublic, name, goal, creatorName
    console.log(routines)

    const linkStyle = {
        fontFamily: 'Staatliches',
        fontSize: '1rem',
        textDecoration: 'none',
        color: 'white'
    };

    const buttonStyle = {
        backgroundColor: "#CCA43B",
        color: "#FFF",
        marginBottom: "1rem"
    }

    return (
        <div>
            {
                token ? (
                    <>
                    <h2 className='desc'>Routines</h2>
                    <Button style={buttonStyle} variant="contained" href='/routines/create-routine'>
            <Link to='/routines/create-routine' style={linkStyle}>Create a new Routine</Link>
            </Button>
                    </>
                ) : (
                    <h2 className='desc'>Routines</h2>
                )
            }


            {
                routines.map((routine) => {
                    const { goal, creatorName, name, id } = routine;
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