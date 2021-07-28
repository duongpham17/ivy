import {
    PRICE,
    CREATE_PRICE,
    DELETE_PRICE
} from './types';
import {setAlert} from './alertActions';
import Api from '../Api';
const config = { headers:{  "Content-Type" : "application/json" }  };

export const getPrice = () => async dispatch => {
    try{
        const res = await Api.get(`/prices`);
        dispatch({
            type: PRICE,
            payload: res.data.price
        })
    } catch(err) {
        console.log(err.response)
    }
}

export const createPrice = (type) => async dispatch => {
    try{
        const res = await Api.post(`/prices`, {type}, config);
        dispatch({
            type: CREATE_PRICE,
            payload: res.data.price,
        })
        dispatch(setAlert(`Price created`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}

export const updatePrice = (id, price) => async dispatch => {
    try{
        await Api.patch(`/prices/${id}`, {price}, config);
        dispatch(setAlert(`Price updated`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}

export const deletePrice = (id) => async dispatch => {
    try{
        await Api.delete(`/prices/${id}`);
        dispatch({
            type: DELETE_PRICE,
            id
        })
        dispatch(setAlert(`Price deleted`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}
