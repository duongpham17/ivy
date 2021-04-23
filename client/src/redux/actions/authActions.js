import {
    LOAD_USER,
    LOGIN,
    LOGOUT,
} from './types';
import {setAlert} from './alertActions';
import Api from '../Api';
const config = { headers:{  "Content-Type" : "application/json" }  };

//get users information to persist login when refreshing browser
export const loadUser = () => async dispatch => {
    try{
        const res = await Api.get(`/users`);
        dispatch({
            type: LOAD_USER,
            payload: res.data.user
        })
        console.log('Welcome to Wendy Nails :D');
    } catch(err) {
        console.log('Empty')
    }
}

//login
export const login = (formData) => async dispatch => {
    try{
        const res = await Api.post(`/users/login`, formData, config);
        dispatch({
            type: LOGIN,
            payload: res.data.user
        })
        localStorage.setItem("loggedIn", "jwt-exist")
    } catch(err){
        console.log(err.response)
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}

//logout
export const logout = () => async dispatch => {
    try {
        await Api.get(`/users/logout`)
        dispatch({
            type: LOGOUT
        })
        dispatch(setAlert('Logged out', 'success'))
        localStorage.removeItem("loggedIn")
    } catch (err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}
