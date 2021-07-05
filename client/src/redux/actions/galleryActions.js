import {
    GALLERY,
    CREATE_GALLERY,
    DELETE_GALLERY,
    UPLOAD_IMAGE
} from './types';
import {setAlert} from './alertActions';
import Api from '../Api';
const config = { headers:{  "Content-Type" : "application/json" }  };

export const getGallery = () => async dispatch => {
    try{
        const res = await Api.get(`/gallery`);
        dispatch({
            type: GALLERY,
            payload: res.data.gallery
        })
    } catch(err) {
        console.log(err.response)
    }
}

export const createGallery = (type) => async dispatch => {
    try{
        const res = await Api.post(`/gallery`, {type}, config);
        dispatch({
            type: CREATE_GALLERY,
            payload: res.data.gallery,
        })
        dispatch(setAlert(`Gallery created`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}

export const updateGallery = (id, gallery) => async dispatch => {
    try{
       await Api.patch(`/gallery/${id}`, {gallery}, config);
        dispatch(setAlert(`Gallery updated`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}

export const uploadImage = (id, images) => async dispatch => {
    try{
        const res = await Api.patch(`/gallery/upload/${id}`, {images}, config);
        dispatch({
            type: UPLOAD_IMAGE,
            payload: res.data.gallery,
            id
        })
        dispatch(setAlert(`Images uploaded`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'));

        console.log(err.response)
    }
}

export const deleteImage = (id, images) => async dispatch => {
    try{
        const res = await Api.patch(`/gallery/upload/${id}`, {images}, config);
        dispatch({
            type: UPLOAD_IMAGE,
            payload: res.data.gallery,
            id
        })
        dispatch(setAlert(`Deleted image`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}

export const deleteGallery = (id) => async dispatch => {
    try{
        await Api.delete(`/gallery/${id}`);
        dispatch({
            type: DELETE_GALLERY,
            id
        })
        dispatch(setAlert(`Gallery deleted`, 'success'))
    } catch(err) {
        dispatch(setAlert(`${err.response.data.message}`, 'danger'))
    }
}
