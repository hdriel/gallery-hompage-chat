import React, { useEffect } from 'react';
import Routes from '../screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import socketIOClient from "socket.io-client";

import store, { persistor } from '../store/index';
import {ENDPOINT, EVENTS} from "../utils/consts";

function App() {
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        const userId = `User${Math.floor(Math.random() * 1000000)}`;
        socket.emit(EVENTS.CONNECTING, userId);

        return ( ) => { socket.emit(EVENTS.DISCONNECTING); }
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    );
}

export default App;
