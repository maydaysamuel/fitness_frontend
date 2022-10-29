const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api'


//USERS
export const registerUser = async (username, password) => {
    try {
        console.log(username, password)
        const response = await fetch(`${baseURL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    username,
                    password
            })
        })
        const result = await response.json();
        console.log(result)
        return result;
    } catch(error) {
        console.log('error registering user')
    }
}

export const userLogin = async(username, password) => {
    try{
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
    } catch(error) {
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
    } catch(error) {
        console.log('could not get users details')
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

