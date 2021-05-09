import React from 'react';
import ChatCard from "./chat-card";

const ImageReview = props => {
    const {
        title,
        author,
        imageUri,
        description,
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
                    <img src={imageUri} alt={title} title={description}/>
                </div>
                <div className='image-review-data-chat'>
                    <ChatCard imageId={imageId} messages={props.messages}/>
                </div>
            </div>
        </div>
    )
}

export default ImageReview;
