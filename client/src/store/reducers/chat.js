import { UPDATE_MESSAGE_LIST } from '../actions/chat';

const initialState = {
    messageList: [],
}

export default function chatReducer(state = initialState, action){
    switch (action.type){
        case UPDATE_MESSAGE_LIST:
            return {
                ...state,
                messageList: action.messageList,
            };

        default:
            return state;
    }
}
