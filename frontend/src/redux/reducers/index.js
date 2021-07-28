import {combineReducers} from 'redux';
import alertReducers from './alertReducers';
import authReducers from './authReducers';
import noticeReducers from './noticeReducers';
import priceReducers from './priceReducers';
import galleryReducers from './galleryReducers';

export default combineReducers({
    alertReducers,
    authReducers,
    noticeReducers,
    priceReducers,
    galleryReducers
});
