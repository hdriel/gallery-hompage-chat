import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Gallery from './Gallery';
import ImagePage from './ImagePage';

export const IMAGE_PAGE = imageId => `/gallery/${imageId}`;

const Routes = props => {
    return (
        <Router>
            <Switch>
                <Route exact path='/gallery'> <Gallery /> </Route>
                <Route exact path='/gallery/:imageId'> <ImagePage /> </Route>
                <Route exact path='/'> <Redirect to='/gallery' /> </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
