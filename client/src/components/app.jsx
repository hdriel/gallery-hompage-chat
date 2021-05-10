import React, {useEffect} from 'react';
import Routes from '../screens';
import {Provider, useDispatch} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as chatActions from '../store/actions/chat';

import store, { persistor } from '../store/index';
import {closeSocket, getSocket} from "../utils";

const ResetUsername = props => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(chatActions.updateUsername('')) });
    return props.children;
}

function App() {
    useEffect(() => {
        getSocket();
        return () => closeSocket();
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ResetUsername>
                    <Routes />
                </ResetUsername>
            </PersistGate>
        </Provider>
    );
}

export default App;
