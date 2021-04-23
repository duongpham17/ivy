/* eslint-disable import/no-anonymous-default-export */
import {
    GALLERY,
    CREATE_GALLERY,
    DELETE_GALLERY,
    UPLOAD_IMAGE
} from '../actions/types'

const initialState = {
    gallery: [],
    loading: true,
}

export default function(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){    
        case GALLERY:
            return {
            ...state,
            gallery: payload,
            loading: false
        }
        case CREATE_GALLERY:
            return{
                ...state,
                gallery: [payload, ...state.gallery]
            }
        case DELETE_GALLERY:
            return{
                ...state,
                gallery: state.gallery.filter(i => i._id !== action.id)
            }
        case UPLOAD_IMAGE:
            return{
                ...state,
                gallery: state.gallery.map(el => el._id === action.id ? payload : el)
            }

            default:
                return state;
        }
}