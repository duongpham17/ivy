import './EditGallery.scss';
import React, {useState} from 'react';
import {connect} from 'react-redux';

import {storage} from './Firebase';

import {deleteImage, uploadImage} from 'redux/actions/galleryActions';

import { AiOutlineUpload, AiFillCloseCircle } from 'react-icons/ai';

import UploadImages from './UploadImages';

export const EditGallery = ({gallery, setEditing, editing, deleteImage, uploadImage}) => {

    const [save, setSave] = useState(false);

    const [position, setPosition] = useState({
        switching: false,
        url: "",
        index: ""
    })

    const onDelete = async (url, index) => {
        gallery[0].images.splice(index, 1);
        await deleteImage(gallery[0]._id, gallery[0].images);
        await storage.refFromURL(url).delete()
    }

    const onSwitch = (url, index) => {
        if(!position.switching) return setPosition({...position, switching: true, url, index})
        
        if(index === position.index) return  setPosition({...position, switching: false, url: "", index: ""});

        gallery[0].images.splice(position.index, 1);
        gallery[0].images.splice(index, 0, position.url);

        setPosition({...position, switching: false, url: "", index: ""});
        setSave(true)
    }

    const onSave = () => {
        uploadImage(gallery[0]._id, gallery[0].images);
        setSave(false)
    }

    return (
        <div className="edit-gallery-container">

            <div className="edit-btn">
                <button onClick={() => setEditing(!editing)}>{!editing ? "Edit Gallery" : "Close Editing"}</button>
                <br/><br/>
               {editing && <UploadImages gallery={gallery}/>}
                <br/><br/>
                {save && <button onClick={() => onSave()}>Save changes <br/> <AiOutlineUpload className="icon" /></button>}
            </div>

            {editing && 
                <div className="edit-images">
                    {gallery[0].images.map((el, i) => 
                    <div className="content" key={i}>
                        <button onClick={() => onDelete(el, i)}><AiFillCloseCircle/></button>
                        <img className={i === position.index ? "choosen" : "not-choosen"} src={el} alt="edit" onClick={() => onSwitch(el, i)} />
                    </div>
                    )}
                </div>
            }

        </div>
    )
}

const mapDispatchToProps = {
    deleteImage,
    uploadImage
}

export default connect(null, mapDispatchToProps)(EditGallery)
