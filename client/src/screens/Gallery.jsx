import React, { useEffect } from 'react';
import ImageGrid from "../components/image-grid";
import SearchBar from "../components/search-bar";
import * as imageActions from '../store/actions/image';
import {useDispatch, useSelector} from 'react-redux';

const GalleryScreen = props => {
    const dispatch = useDispatch();
    const { images } = useSelector(state => ({
        images: state.image.filteredImageList
    }));

    useEffect(() => {
        dispatch(imageActions.fetchImages());
    }, [dispatch]);

    return (
        <div className='gallery-screen'>
            <SearchBar />
            <div className='center-it gallery-grid-container'>
                <ImageGrid images={images}/>
            </div>
        </div>
    )
}

export default GalleryScreen;
