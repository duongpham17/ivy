import './UploadImages.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alertActions';
import { storage } from './Firebase';

import Resizer from 'react-image-file-resizer';

import { BsImages } from 'react-icons/bs';
import { HiUpload } from 'react-icons/hi';

import {uploadImage} from '../../redux/actions/galleryActions';

export const UploadImges = ({uploadImage, el, setAlert}) => {

    //for image upload and delete
    const [uploading, setUploading] = useState(false);
    const [imageFile, setImageFile] = useState("");
    const [progress, setProgress] = useState(0);
    const random = Math.random().toString(36).substring(7);

    const resizeFile = (file) => new Promise(resolve => {

        if(file.type === "image/jpeg" || file.type === "image/png"){

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
        const blob = await fetch(resizeImage).then(r => r.blob())
        blob.name = e.target.files[0].name
        setImageFile(blob)
        setUploading(true)
    };

    const handleImageUpload = async (e) => {
        e.preventDefault()
        setUploading(false)

        const uploadTask = storage.ref(`/gallery/${random+imageFile.name}`).put(imageFile)
        uploadTask.on('state_changed', 
        (snapShot) => {
        const progress = Math.round(
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100
        )
        setProgress(progress)
        })

        try{
        await storage.ref(`/gallery/${random+imageFile.name}`).put(imageFile);
        const imageUrl = await storage.ref(`/gallery/${random+imageFile.name}`).getDownloadURL();
        await uploadImage(el._id, [...el.images, imageUrl])
        setImageFile("")
        setProgress(0)
        }catch(err){
            setUploading(false)
            setProgress(0)
            setAlert("Only .jpg .png .jpeg is accepted.", 'primary')
        }
    }

    const Upload = () => (
        <div className="upload-content">
            <form onSubmit={handleImageUpload}>
                <label htmlFor="myfile"><BsImages className="icon"/> Select an image</label>
                <input type="file" id="myfile" className="hidden" onChange={handleImageFileCompression}/>
                {uploading ? <button><HiUpload className="icon"/></button>: "" }
                <p>{imageFile.name}</p>
                <progress className="progress_bar" value={progress} max="100"/>
            </form>
        </div>
    )

    return (
        <div id="upload-images-container">
            <Upload />
        </div>
    )
}

const mapDispatchToProps = {
    uploadImage,
    setAlert
}

export default connect(null, mapDispatchToProps)(UploadImges)