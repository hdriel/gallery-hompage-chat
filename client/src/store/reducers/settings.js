import { UPDATE_USERNAME } from '../actions/chat';

const initialState = {
   username: '',
}

export default function imageReducer(state = initialState, action){
    switch (action.type){
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.username
            };

        default:
            return state;
    }

}
