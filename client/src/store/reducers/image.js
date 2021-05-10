import { FETCH_IMAGES, FILTERED_IMAGES } from '../actions/image';

const initialState = {
    imageList: [],
    filteredImageList: [],
}


export default function imageReducer(state = initialState, action){
    switch (action.type){
        case FETCH_IMAGES:
            return {
                ...state,
                imageList: action.imageList,
            };

        case FILTERED_IMAGES:
            return {
                ...state,
                filteredImageList: action.imageList,
            };

        default:
            return state;
    }
}
