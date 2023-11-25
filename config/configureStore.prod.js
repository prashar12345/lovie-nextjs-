/*
 * @file: configureStore.prod.js
 * @description: Configure/creating redux store with thunk,reducer etc
 * @author: Mohit Kumar
 * */
import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from '../reducers';
import { createWrapper } from "next-redux-wrapper";

export default history => {
    const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
    const persistor = persistStore(store);
    return { persistor, store };
};
