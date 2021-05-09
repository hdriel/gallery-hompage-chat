import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import imageReducer from './reducers/image';
import chatReducer from './reducers/chat';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['image'],
    blacklist: ['chat']
}

const rootReducer = combineReducers({
    // whitelist (Persist)
    image: imageReducer,

    // blacklist (Temporary)
    chat: chatReducer,
});

const store = createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(ReduxThunk)
);

export const persistor = persistStore(store);
export default store;
