import {
    NOTICE,
    CREATE_NOTICE,
    UPDATE_NOTICE,
    DELETE_NOTICE
} from './types';
import {setAlert} from './alertActions';
import Api from '../Api';
const config = { headers:{  "Content-Type" : "application/json" }  };

export const getNotice = () => async dispatch => {
    try{
        const res = await Api.get(`/notices`);
        dispatch({
            type: NOTICE,
            payload: res.data.notice
        })
    } catch(err) {
        console.log(err.response)
    }
}

export const createNotice = (message) => async dispatch => {
    try{
        const res = await Api.post(`/notices`, {message}, config);
        dispatch({
            type: CREATE_NOTICE,
            payload: res.data.notice,
        })
        dispatch(setAlert(`Notice submitted`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}

export const updateNotice = (index, id, message) => async dispatch => {
    try{
        const res = await Api.post(`/notices/${id}`, {message}, config);
        dispatch({
            type: UPDATE_NOTICE,
            payload: res.data.notice.message,
            index
        })
        dispatch(setAlert(`Notice updated`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}


export const deleteNotice = (id) => async dispatch => {
    try{
        await Api.delete(`/notices/${id}`);
        dispatch({
            type: DELETE_NOTICE,
            id
        })
        dispatch(setAlert(`Notice deleted`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}
