import './Gallery.scss';
import React from 'react';

export const Gallery = ({gallery}) => (
    <div className="gallery-container">
        {gallery[0].images.map((el, i) => 
            <img key={i} src={el} alt="gallery"/>
        )}
    </div>
)

export default Gallery
