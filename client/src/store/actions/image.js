import axios from 'axios';
import Image from '../../models/image';
import {GALLERY_IMAGE_API} from "../../utils/consts";


export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FILTERED_IMAGES = 'FILTERED_IMAGES';

export const fetchImages = () => {
    return async dispatch => {
        const { data } = await axios
        .get(GALLERY_IMAGE_API)
        .catch(err => {
            console.error(err);
            return { data: [] };
        });
        let imageList = data;

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
