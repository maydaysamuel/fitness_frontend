const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api'


//USERS
export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('error registering user')
    }
}

export const userLogin = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('user not found')
    }
}

export const getUserDetails = async (token) => {
    try {
        const response = await fetch(`${baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('could not get users details')
    }
}

export const getAllActivities = async () => {
    try {
        const response = await fetch(`${baseURL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Could not get activities')
    }
}

export const createActivity = async (token, { name, description }) => {
    try {
        const response = await fetch(`${baseURL}/activities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                activity: {
                    name,
                    description
                }
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Error creating new activity')
    }
}

export const updateActivity = async ({ name, description }) => {
    try {
        const response = await fetch(`${baseURL}/activities/:activityId`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                activity: {
                    name,
                    description
                }
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Error updating activity')
    }
}

export const getAllRoutines = async () => {
    try {
        const response = await fetch(`${baseURL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;
    } catch(error) {
        console.log('Error getting all routines')
    }
}

export const createRoutine = async (token, {name, goal, isPublic}) => {
    try {
        const response = await featch(`${baseURL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
            routine: {
                name,
                goal,
                isPublic
            }
            })
        })
        const result = await response.json()
        return result;
    } catch (error) {
        console.log('Error creating routine')
    }
}

export const updateRoutine = async ({name, goal, isPublic}) => {
    try {
        const response = await fetch(`${baseURL}/routines/:routineId`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                routine: {
                    name,
                    goal,
                    isPublic
                }
            })
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log('Error updating routine')
    }
}

export const getUserRoutines = async () => {
    try{
        const response = await fetch(`${baseURL}/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;
    } catch(error) {
        console.log('error getting user routines')
    }
}



//ROUTINES
export const getRoutines = async () => {
    try {
        const response = await fetch(`${baseURL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;
    } catch(error) {
        console.log('error getting routines')
    }
}

