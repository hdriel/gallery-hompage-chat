import { IMAGES } from '../../data/dummy-data';
import Image from '../../models/image';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FILTERED_IMAGES = 'FILTERED_IMAGES';

export const fetchImages = () => {
    return async dispatch => {
        let imageList = IMAGES; // todo: fetch from server
        imageList = imageList.map(image =>
            new Image({
                id: image.id,
                title: image.title,
                author: image.author,
                description: image.description,
                url: image.uri,
            })
        );


        dispatch({ type: FETCH_IMAGES, imageList });
        dispatch({ type: FILTERED_IMAGES, imageList });
    }
}

export const filterImagesBySearchValue = (value = '') => {
    return (dispatch, getState) => {
        const imageList = getState().image.imageList.filter(image => image.title.includes(value));

        return dispatch({
            type: FILTERED_IMAGES,
            imageList,
        })
    }
}
