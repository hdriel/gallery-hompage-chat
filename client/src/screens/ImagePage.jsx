import React, { useEffect } from 'react';
import ImageReview from "../components/image-review";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EVENTS} from "../utils/consts";
import {getSocket} from "../utils";
import * as chatActions from "../store/actions/chat";

const ImagePage = props => {
    const { imageId } = useParams();
    const dispatch = useDispatch();

    const { selectedImage, messages } = useSelector(state => ({
        selectedImage: imageId && state.image.imageList.find(image => image.id === imageId),
        messages: state.chat.messageList.filter(message => message.imageId === imageId),
        chat: state.chat
    }));

    useEffect(() => {
        getSocket().on(EVENTS.SEND_MESSAGE, messageObj => {
            console.table(messageObj);
            dispatch(chatActions.addChatMessage(messageObj))
        });
    }, [dispatch, imageId]);

    return selectedImage
        ? <ImageReview image={selectedImage} messages={messages}/>
        : <div>Selected image not found, back to home</div>;
}

export default ImagePage;
