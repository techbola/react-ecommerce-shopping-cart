import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMOSE__ || compose;

export default createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));