import './UploadImages.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { setAlert } from 'redux/actions/alertActions';
import { storage } from './Firebase';

import Resizer from 'react-image-file-resizer';

import { BsImages } from 'react-icons/bs';
import { HiUpload } from 'react-icons/hi';

import {uploadImage} from 'redux/actions/galleryActions';

export const UploadImges = ({uploadImage, gallery, setAlert}) => {

    //for image upload and delete
    const [uploading, setUploading] = useState(false);
    const [imageFile, setImageFile] = useState("");
    const random = Math.random().toString(36).substring(7);

    const resizeFile = (file) => new Promise(resolve => {

        if(file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png"){

            Resizer.imageFileResizer(file, 400, 400, 'JPEG', 100, 0,
            uri => {
            resolve(uri);
            },
            'base64'
            );

            return
        }

        setAlert("Image must be a .jpeg - .jpg - .png", "danger", 3000);
    });

    const handleImageFileCompression = async (e) => {
        if(!e.target.files[0]) return 
        const resizeImage = await resizeFile(e.target.files[0])
        const getImage = await fetch(resizeImage);
        const blob = await getImage.blob();
        blob.name = e.target.files[0].name;
        setImageFile(blob)
        setUploading(true)
    };

    const handleImageUpload = async (e) => {
        e.preventDefault()
        setUploading(false)

        try{
            await storage.ref(`/gallery/${random+imageFile.name}`).put(imageFile);
            const imageUrl = await storage.ref(`/gallery/${random+imageFile.name}`).getDownloadURL();
            gallery[0].images.push(imageUrl);
            await uploadImage(gallery[0]._id, gallery[0].images)
            setImageFile("")
        }catch(err){
            setUploading(false)
            setAlert("Only .jpg .png .jpeg is accepted.", 'primary')
        }
    }

    return (
        <form className="upload-images-container" onSubmit={handleImageUpload}>
            <label htmlFor="myfile"><BsImages className="icon"/> <span>Select an image</span></label>
            <input type="file" id="myfile" className="hidden" onChange={handleImageFileCompression}/>
            <br/>
            <p>{imageFile.name}</p>
            <br/>
            {uploading && <button><HiUpload className="icon"/></button>}
        </form>
    )
}

const mapDispatchToProps = {
    uploadImage,
    setAlert
}

export default connect(null, mapDispatchToProps)(UploadImges)