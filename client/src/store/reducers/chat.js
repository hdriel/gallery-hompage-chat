import { UPDATE_FILTERED_MESSAGE_LIST, UPDATE_MESSAGE_LIST } from '../actions/chat';

const initialState = {
    messageList: [],
    filteredMessageList: [],
    selectedImageId: null,
}

export default function chatReducer(state = initialState, action){
    switch (action.type){
        case UPDATE_MESSAGE_LIST:
            return {
                ...state,
                messageList: action.messageList,
            };

        case UPDATE_FILTERED_MESSAGE_LIST:
            return {
                ...state,
                filteredMessageList: action.messageList,
                selectedImageId: action.imageId,
            };

        default:
            return state;
    }

}
