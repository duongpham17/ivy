/* eslint-disable import/no-anonymous-default-export */
import {
    NOTICE,
    CREATE_NOTICE,
    DELETE_NOTICE,
    UPDATE_NOTICE,
} from '../actions/types'

const initialState = {
    notice: [],
    loading: true,
}

export default function(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){    
        case NOTICE:
            return {
            ...state,
            notice: payload
        }
        case CREATE_NOTICE:
            return{
                ...state,
                notice: [payload, ...state.notice]
            }
        case DELETE_NOTICE:
            return{
                ...state,
                notice: state.notice.filter(i => i._id !== action.id)
            }
        case UPDATE_NOTICE: 
            return{
                ...state,
                notice: state.notice[action.index].message = payload
            }

            default:
                return state;
        }
}