export const UPDATE_MESSAGE_LIST = 'UPDATE_MESSAGE_LIST';
export const UPDATE_FILTERED_MESSAGE_LIST = 'UPDATE_FILTERED_MESSAGE_LIST';

export const addChatMessage = message => {
    return (dispatch, getState) => {
        const imageList = getState().chat.messageList;
        imageList.push(message);
        dispatch({ type: UPDATE_MESSAGE_LIST, imageList });
    }
}

export const updateSelectedImageId = imageId => {
    return (dispatch, getState) => {
        const imageList = getState().chat.messageList.filter(image => image.id === imageId);
        dispatch({
            type: UPDATE_FILTERED_MESSAGE_LIST,
            imageList,
            imageId,
        });
    }
}
