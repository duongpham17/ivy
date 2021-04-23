/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_USER,
    LOGIN,
    LOGOUT,
} from '../actions/types'

const initialState = {
    user: null,
    loggedOn: false,
}

export default function(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){    
        case LOAD_USER:
        case LOGIN:
            return {
                ...state,
                user: payload,
                loggedOn: true,
            }

        case LOGOUT: 
            return {
                initialState
            }

            default:
                return state;
        }
}