import axios from 'axios'

export const getUsers = () => async dispatch => {

    try {
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data
        })
    }
    catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload: error,
        })
    }

}