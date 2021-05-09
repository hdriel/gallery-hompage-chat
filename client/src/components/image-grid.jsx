import React from 'react';
import ImageCard from "../components/image-card";

const ImageGrid = props => {
    return (
        <div className='image-grid'>
            { props.images.map((image, k) => <ImageCard key={k} image={image} />) }
        </div>
    )
}

export default ImageGrid;
