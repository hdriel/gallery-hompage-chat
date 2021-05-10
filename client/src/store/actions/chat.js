export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_MESSAGE_LIST = 'UPDATE_MESSAGE_LIST';

export const addChatMessage = message => {
    return (dispatch, getState) => {
        const messageList = getState().chat.messageList;
        messageList.push(message);
        dispatch({ type: UPDATE_MESSAGE_LIST, messageList });
    }
}

export const updateUsername = username => ({ type: UPDATE_USERNAME, username })
