import React, { useEffect } from 'react';
import ImageReview from "../components/image-review";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import socketIOClient from "socket.io-client";
import {ENDPOINT, EVENTS} from "../utils/consts";
import * as chatActions from "../store/actions/chat";

const ImagePage = props => {
    const { imageId } = useParams();
    const dispatch = useDispatch();

    const { selectedImage, messages } = useSelector(state => ({
        selectedImage: imageId && state.image.imageList.find(image => image.id === imageId),
        messages: state.chat.filteredMessageList || [],
    }));

    useEffect(() => {
        dispatch(chatActions.updateSelectedImageId(imageId));

        const socket = socketIOClient(ENDPOINT);
        socket.on(EVENTS.SEND_MESSAGE, (message) => {
            debugger
            dispatch(chatActions.addChatMessage(message));
        });
    }, [dispatch, imageId]);

    return selectedImage
        ? <ImageReview image={selectedImage} messages={messages}/>
        : <div>Selected image not found, back to home</div>;
}

export default ImagePage;
