import './CreateGallery.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { AiOutlineUpload } from 'react-icons/ai';
import {createGallery} from '../../redux/actions/galleryActions';

export const CreateGallery = ({createGallery}) => {

    const [type, setType] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        createGallery(type);
        setType("");
    }

    return (
        <div id="create-gallery-container">
            <form onSubmit={(e) => onSubmit(e)}>
                <input placeholder="Enter Type E.g ombre, acrylic ..." value={type} onChange={(e) => setType(e.target.value)} />
                {type.length >= 3 && <button className="create-btn"><AiOutlineUpload/></button> }
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    createGallery
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGallery)
