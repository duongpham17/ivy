/* eslint-disable import/no-anonymous-default-export */
import {
    PRICE,
    CREATE_PRICE,
    DELETE_PRICE,
} from '../actions/types'

const initialState = {
    price: [],
    loading: true,
}

export default function(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){    
        case PRICE:
            return {
            ...state,
            price: payload,
            loading: false
        }
        case CREATE_PRICE:
            return{
                ...state,
                price: [payload, ...state.price]
            }
        case DELETE_PRICE:
            return{
                ...state,
                price: state.price.filter(i => i._id !== action.id)
            }

            default:
                return state;
        }
}