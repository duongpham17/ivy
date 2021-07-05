import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';

import {getGallery} from 'redux/actions/galleryActions';

import Gallery from './Gallery';
import EditGallery from './EditGallery';

export const Index = ({auth:{user}, gallery:{gallery, loading}, getGallery}) => {

    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if(!gallery.length) getGallery();
    }, [getGallery, gallery.length])

    return ( loading ? <div className="loading" /> : 

        <div>   
            {user?.role === "admin" && <EditGallery gallery={gallery} setEditing={setEditing} editing={editing} /> }

           {!editing && <Gallery gallery={gallery}/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Index)


/*

return (loading ? <p className="loading" /> : !gallery.length && user?.role === "admin"? <CreateGallery /> :
        <div id="gallery-container">
            {user?.role === "admin" && <button className={edit ? "edit-btn color" : "edit-btn" } onClick={() => setEdit(!edit)}><MdEdit className="icon"/> Upload Images</button>} <br/>

            {gallery.map(el => 
                <div key={el._id} className="map-content">
                    <EditGallery el={el} picker={options.picker} edit={edit}/>
                </div>
            )}
        </div>
    )

*/