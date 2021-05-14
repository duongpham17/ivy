import './Gallery.scss';
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';

import {getGallery} from '../../redux/actions/galleryActions';

import { MdEdit } from 'react-icons/md';

import CreateGallery from './CreateGallery';
import EditGallery from './EditGallery';

export const Gallery = ({auth:{user}, gallery:{gallery, loading}, getGallery}) => {

    const [edit, setEdit] = useState(false);

    const [options, setOptions] = useState({
        type: "",
        _id: "",
        picker: "",
    });

    useEffect(() => {
        !gallery.length && getGallery();
        return
    }, [getGallery, gallery.length]);

    useEffect(() => {
        setOptions({
            type: gallery.map(el => el.type),
            _id: gallery.map(el => el._id),
            picker: !gallery.length ? "" : gallery[0].type
        }); 
    }, [gallery]);

    return (loading ? <p className="loading" /> : !gallery.length && user?.role === "admin"? <CreateGallery /> :
        <div id="gallery-container">
            {user?.role === "admin" && <button className={edit ? "edit-btn color" : "edit-btn" } onClick={() => setEdit(!edit)}><MdEdit className="icon"/> Upload Images</button>} <br/>

            {gallery.map(el => 
                <div key={el._id} className="map-content">
                    <EditGallery el={el} picker={options.picker} role={user?.role} edit={edit}/>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.authReducers,
    gallery: state.galleryReducers
})

const mapDispatchToProps = {
    getGallery,
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
