import './EditGallery.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';

import {storage} from './Firebase';

import {deleteImage, uploadImage} from '../../redux/actions/galleryActions';

import { AiOutlineUpload } from 'react-icons/ai';

import UploadImages from './UploadImages';

export const EditGallery = ({el, picker, role, edit, deleteImage, uploadImage}) => {

    const [loading, setLoading] = useState(false);
    const [save, setSave] = useState(false);

    const [position, setPosition] = useState({
        switching: false,
        url: "",
        index: ""
    })

    const onDelete = async (e, index, url) => {
        e.preventDefault();
        setLoading(true);
        el.images.splice(index, 1);
        await deleteImage(el._id, el.images);
        await storage.refFromURL(url).delete()
        setLoading(false)
    }

    const onSwitch = (e, url, index) => {
        e.preventDefault()

        if(!position.switching) return setPosition({...position, switching: true, url, index})
        
        if(index === position.index) return  setPosition({...position, switching: false, url: "", index: ""});

        el.images.splice(position.index, 1);
        el.images.splice(index, 0, position.url);

        setPosition({...position, switching: false, url: "", index: ""});
        setSave(true)
    }

    const onSave = (e) => {
        e.preventDefault();
        uploadImage(el._id, el.images);
        setSave(false)
    }

    return (el.type.toLowerCase() === picker.toLowerCase() && 
        <div id="edit-gallery-container">

            {role === "admin" && edit && <UploadImages el={el} /> }

            {save && <button className="save-btn" onClick={(e) => onSave(e)}>Save changes <br/><AiOutlineUpload className="icon"/></button> }

            {role === "admin" && edit && el.images.map((el, i) => 
                <div key={el+i} className="edit-content">
                    <img src={el} alt="gallery" className={position.switching && position.index === i ? "switching" : ""} onClick={(e) => onSwitch(e, el, i)}/>
                    {loading ? <button className="loading-btn" /> : <button onClick={(e) => onDelete(e, i, el)}>X</button>}
                </div>
            )}

            <div className="row">
            {!edit && el.images.map((el, i) => 
                <img key={el+i} src={el} alt="gallery" />
            )}
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    deleteImage,
    uploadImage
}

export default connect(null, mapDispatchToProps)(EditGallery)
