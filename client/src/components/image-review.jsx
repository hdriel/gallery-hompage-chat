import React from 'react';
import ChatCard from "./chat-card";

const ImageReview = props => {
    const {
        title,
        author,
        imageUri,
        description,
        metadata,
        id: imageId
    } = props.image;

    return (
        <div className='image-review'>
            <div className='image-title'>
                <p>{title}</p>
                <span>By {author}</span>
            </div>
            <div className='image-review-data-container'>
                <div className='image-review-data-image'>
                    <img src={imageUri} alt={title}/>
                    <div className='image-description'>
                        <span>Description: {description} <br/><br/></span>
                        <span>Metadata: {JSON.stringify(metadata, null, 4)}</span>
                    </div>
                </div>
                <div className='image-review-data-chat'>
                    <ChatCard imageId={imageId} messages={props.messages}/>
                </div>
            </div>
        </div>
    )
}

export default ImageReview;
